import ServicePageTemplate, {
  resinServiceV2,
} from "@/components/ServicePageTemplate";
import { ResinShowcase } from "@/components/sections/ResinShowcase";

const ResinWork = () => (
  <ServicePageTemplate service={resinServiceV2}>
    <ResinShowcase />
  </ServicePageTemplate>
);

export default ResinWork;
