const fs = require('fs');
const html = fs.readFileSync('data.txt', 'utf8');

const blocks = html.split('Samples Of ');
const results = {};

for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const typeMatch = block.match(/^(Aggregates|Mixes|Rubber)/);
    if (!typeMatch) continue;
    const type = typeMatch[1];
    
    const items = [];
    const itemRegex = /<img[^>]*data-src="([^"\?]+)(?:[^"]*)"[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/g;
    let match;
    while ((match = itemRegex.exec(block)) !== null) {
        items.push({
            name: match[2].trim(),
            image: match[1].trim()
        });
    }
    results[type] = items;
}

console.log(JSON.stringify(results, null, 2));
fs.writeFileSync('parsed_data.json', JSON.stringify(results, null, 2));
