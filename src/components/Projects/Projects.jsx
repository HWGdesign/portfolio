import { Icon } from '../Icons/Icon';

const Projects = () => {
  return (
    <section>
      <div class='py-2 m-5 flex font-semibold'>
        <h1>O3</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>PORTFOLIO</h1>
      </div>

      <div class='mx-auto pb-5'>
        <div class='flex flex-wrap'>
          {/* end */}

          <div class='flex flex-wrap justify-center py-5'>
            <div class='xl:w-1/4 md:w-1/2'>
              <div class='border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
                <h2 class='tracking-widest text-xs title-font font-medium text-grayLt mb-1'>GRAPHIC DESIGN</h2>
                <h1 class='title-font text-lg font-medium text-dark mb-3'>Barbershop logo</h1>
                <p class='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                <div class='flex items-center flex-wrap '>
                  <a class='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                    Learn More
                    <svg class='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                  <span class='text-grayMd mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                    <span class=' text-grayMd inline-flex items-center leading-none text-sm w-5'>
                      <Icon.Github />
                    </span>
                  </span>
                  <span class=' text-grayMd inline-flex items-center leading-none text-sm w-5'>
                    <Icon.OpenNewWindow />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='flex text-center justify-center text-grayLt text-sm font-medium hover:text-grayMd hover:cursor-pointer'>See more</div>
      </div>
    </section>
  );
};

export default Projects;
