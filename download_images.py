#!/usr/bin/env python3
"""
Download all images from a list of URLs.

Usage:
    python download_images.py

Optional:
    - Edit IMAGE_URLS below
    - Change OUTPUT_DIR if needed
"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse, unquote

import requests

# Put your image URLs here
IMAGE_URLS = [
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Yellow+Fleck.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Red.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Orange.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Purple.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Light+Blue.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Light+Green.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Light+Grey.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Grey+Fleck.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Dark+Blue.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Earth+Yellow.jpg",
    "https://cdn.website-editor.net/e0bec181c81a4ba8a441643d576db816/dms3rep/multi/Dark+Green.jpg",
]

OUTPUT_DIR = Path("downloaded_images")
TIMEOUT = 30
CHUNK_SIZE = 8192


def sanitize_filename(name: str) -> str:
    """Make a filename safe for most filesystems."""
    name = unquote(name)
    name = name.replace("+", "_")
    name = re.sub(r"[<>:\"/\\\\|?*\x00-\x1f]", "_", name)
    name = re.sub(r"\s+", "_", name).strip("._")
    return name or "image"


def filename_from_url(url: str, index: int) -> str:
    """Build a reasonable filename from a URL."""
    parsed = urlparse(url)
    raw_name = os.path.basename(parsed.path)
    safe_name = sanitize_filename(raw_name)

    if "." not in safe_name:
        safe_name = f"{safe_name}.jpg"

    return f"{index:02d}_{safe_name}"


def unique_path(path: Path) -> Path:
    """Avoid overwriting files by adding a counter if needed."""
    if not path.exists():
        return path

    stem = path.stem
    suffix = path.suffix
    counter = 1

    while True:
        candidate = path.with_name(f"{stem}_{counter}{suffix}")
        if not candidate.exists():
            return candidate
        counter += 1


def download_file(session: requests.Session, url: str, destination: Path) -> bool:
    """Download one file to disk."""
    try:
        with session.get(url, stream=True, timeout=TIMEOUT) as response:
            response.raise_for_status()

            content_type = response.headers.get("Content-Type", "")
            if not content_type.startswith("image/"):
                print(f"[WARN] Skipping non-image URL: {url} ({content_type})")
                return False

            with open(destination, "wb") as f:
                for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                    if chunk:
                        f.write(chunk)

        print(f"[OK] {destination.name}")
        return True

    except requests.RequestException as exc:
        print(f"[ERROR] Failed to download {url}\n        {exc}")
        return False


def download_all(urls: Iterable[str], output_dir: Path) -> None:
    """Download all URLs into the output directory."""
    output_dir.mkdir(parents=True, exist_ok=True)

    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; ImageDownloader/1.0)"
    }

    success_count = 0
    fail_count = 0

    with requests.Session() as session:
        session.headers.update(headers)

        for index, url in enumerate(urls, start=1):
            filename = filename_from_url(url, index)
            destination = unique_path(output_dir / filename)

            if download_file(session, url, destination):
                success_count += 1
            else:
                fail_count += 1

    print("\nDone.")
    print(f"Downloaded: {success_count}")
    print(f"Failed:     {fail_count}")
    print(f"Folder:     {output_dir.resolve()}")


if __name__ == "__main__":
    try:
        download_all(IMAGE_URLS, OUTPUT_DIR)
    except KeyboardInterrupt:
        print("\nInterrupted by user.")
        sys.exit(1)