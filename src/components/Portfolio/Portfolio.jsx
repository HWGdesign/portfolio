import { PortfolioSection } from '../Sections/Section.jsx';
import { BarberShopLogoProject } from './ProjectCards.jsx';
import Images from '../images/Images.jsx';

const Portfolio = () => {
  return (
    <section id='portfolio' class='mx-auto container relative'>
      <PortfolioSection />

      <div class='absolute right-0 -top-[50px] opacity-50 scale-50 z-0'>
        <img class='w-full h-full' src={Images.circle2} alt='barber' />
      </div>

      <div class='absolute left-0 -bottom-[35px] scale-50'>
        <img class='w-full h-full' src={Images.circleEmpty} alt='barber' />
      </div>

      <div class='flex justify-center items-center'>
        <div class='flex flex-wrap justify-center w-full lg:w-4/5'>
          <div class='flex flex-wrap justify-around'>
            {/* app */}
            <BarberShopLogoProject />
            <BarberShopLogoProject />
            <BarberShopLogoProject />
          </div>
          {/* <div class='flex justify-center items-center text-sm font-semibold text-grayMd py-5 hover:text-blue cursor-pointer hover:scale-105 duration-200'>See all</div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
