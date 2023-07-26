import { WebDevelopmentServices, GraphicDesignServices, UXUIServices, SpecificProjectServices } from './Service';
import { ServicesSection } from '../Sections/Section';

const Services = () => {
  return (
    <section id='services' class='container mx-auto w-full'>
      <ServicesSection />
      <div class='flex justify-center items-center'>
        <div class='flex flex-wrap justify-center w-full lg:w-4/5'>
          <WebDevelopmentServices />
          <GraphicDesignServices />
          <UXUIServices />
          <SpecificProjectServices />
        </div>
      </div>
    </section>
  );
};
export default Services;
