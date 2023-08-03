import { WebDevelopmentServices, GraphicDesignServices, UXUIServices, SpecificProjectServices } from './Service';
import { ServicesSection } from '../Sections/Section';
import Images from '../images/Images.jsx';

const Services = () => {
  return (
    <section id='services' class='container mx-auto w-full relative transition-all'>
      <div class='absolute right-0 -top-[50px] opacity-30 scale-50 select-none'>
        <img class='w-full h-full' src={Images.triangle2} alt='barber' />
      </div>

      <div class='absolute left-0 -bottom-[15px] opacity-50 scale-75 select-none'>
        <img class='w-full h-full' src={Images.triangles} alt='barber' />
      </div>

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
