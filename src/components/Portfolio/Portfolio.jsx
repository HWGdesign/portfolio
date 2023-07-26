import { PortfolioSection } from '../Sections/Section.jsx';
import { BarberShopLogoProject } from './ProjectCards.jsx';

const Portfolio = () => {
  return (
    <section id='portfolio' class='mx-auto container'>
      <PortfolioSection />
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
