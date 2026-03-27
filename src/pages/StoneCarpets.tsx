import ServicePageTemplate, {
  stoneCarpetsServiceV2,
} from "@/components/ServicePageTemplate";
import { StoneCarpetsShowcase } from "@/components/sections/StoneCarpetsShowcase";

const StoneCarpets = () => (
  <ServicePageTemplate service={stoneCarpetsServiceV2}>
    <StoneCarpetsShowcase />
  </ServicePageTemplate>
);

export default StoneCarpets;
