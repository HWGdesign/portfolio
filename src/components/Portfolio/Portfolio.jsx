import Images from '../images/Images.jsx';
import { Icon } from '../Icons/Icon.jsx';

const Portfolio = () => {
  return (
    <section id='portfolio' class='mx-auto container'>
      <div class='py-2 m-5 flex font-semibold'>
        <h1>O3</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>PORTFOLIO</h1>
      </div>

      <div class='flex justify-center items-center'>
        <div class='flex flex-wrap justify-center w-full md:w-4/5'>
          <div class='flex flex-wrap'>
            {/* app */}
            <div class='md:p-3 sm:p-8 p-5 md:w-1/3 '>
              <div class='h-full border-2 border-grayLt border-opacity-60 rounded-lg overflow-hidden hover:scale-105 duration-200 hover:shadow-sm'>
                <div class='p-6'>
                  <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>GRAPHIC DESIGN</h2>
                  <h1 class='text-lg font-semibold text-dark'>BARBER SHOP LOGO</h1>
                  <div class='flex items-center justify-center w-90 h-90'>
                    <img class='h-full w-full object-cover' src={Images.barber} alt='barber' />
                  </div>
                  <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>MADE WITH:</h2>
                  <div class='flex justify-start'>
                    <span class='w-6 text-grayMd my-2 mr-3'>
                      <Icon.Figma />
                    </span>
                    <span class='w-6 text-grayMd my-2 mr-3'>
                      <Icon.Illustrator />
                    </span>
                  </div>
                  <p class='leading-relaxed mb-1'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div class='md:p-3 sm:p-8 p-5 md:w-1/3 '>
              <div class='h-full border-2 border-grayLt border-opacity-60 rounded-lg overflow-hidden hover:scale-105 duration-200 hover:shadow-sm'>
                <div class='p-6'>
                  <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>GRAPHIC DESIGN</h2>
                  <h1 class='text-lg font-semibold text-dark'>BARBER SHOP LOGO</h1>
                  <div class='flex items-center justify-center w-90 h-90'>
                    <img class='h-full w-full object-cover' src={Images.barber} alt='barber' />
                  </div>
                  <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>MADE WITH:</h2>
                  <div class='flex justify-start'>
                    <span class='w-6 text-grayMd my-2 mr-3'>
                      <Icon.Figma />
                    </span>
                    <span class='w-6 text-grayMd my-2 mr-3'>
                      <Icon.Illustrator />
                    </span>
                  </div>
                  <p class='leading-relaxed mb-1'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div class='md:p-3 sm:p-8 p-5 md:w-1/3 '>
              <div class='h-full border-2 border-grayLt border-opacity-60 rounded-lg overflow-hidden hover:scale-105 duration-200 hover:shadow-sm'>
                <div class='p-6'>
                  <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>GRAPHIC DESIGN</h2>
                  <h1 class='text-lg font-semibold text-dark'>BARBER SHOP LOGO</h1>
                  <div class='flex items-center justify-center w-90 h-90'>
                    <img class='h-full w-full object-cover' src={Images.barber} alt='barber' />
                  </div>
                  <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>MADE WITH:</h2>
                  <div class='flex justify-start'>
                    <span class='w-6 text-grayMd my-2 mr-3'>
                      <Icon.Figma />
                    </span>
                    <span class='w-6 text-grayMd my-2 mr-3'>
                      <Icon.Illustrator />
                    </span>
                  </div>
                  <p class='leading-relaxed mb-1'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div class='flex justify-center items-center text-sm font-semibold text-grayMd py-5 hover:text-blue cursor-pointer hover:scale-105 duration-200'>See all</div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
