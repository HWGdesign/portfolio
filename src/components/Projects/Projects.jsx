import Images from '../images/Images.jsx';
import { Icon } from '../Icons/Icon';

const Projects = () => {
  return (
    <section>
      <div class='py-2 m-5 flex font-semibold'>
        <h1>O3</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>PORTFOLIO</h1>
      </div>

      <div class='container sm:p-1 mx-auto'>
        <div class='flex flex-wrap'>
          {/* app */}
          <div class='p-5 md:p-5 sm:p-1 sm:w-1/3 '>
            <div class='h-full border-2 border-grayMd border-opacity-60 rounded-lg overflow-hidden'>
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
                <p class='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
                  Learn More
                  <div class='mb-1 mx-2 w-4 -rotate-90'>
                    <span>
                      <Icon.Arrow />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class='p-5 md:p-5 sm:p-1 sm:w-1/3 '>
            <div class='h-full border-2 border-grayMd border-opacity-60 rounded-lg overflow-hidden'>
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
                <p class='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
                  Learn More
                  <div class='mb-1 mx-2 w-4 -rotate-90'>
                    <span>
                      <Icon.Arrow />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class='p-5 md:p-5 sm:p-1 sm:w-1/3 '>
            <div class='h-full border-2 border-grayMd border-opacity-60 rounded-lg overflow-hidden'>
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
                <p class='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
                  Learn More
                  <div class='mb-1 mx-2 w-4 -rotate-90'>
                    <span>
                      <Icon.Arrow />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
