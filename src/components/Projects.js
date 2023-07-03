import Github from './svg/Projects/Github';
import OpenWindow from './svg/Projects/OpenWindow';
function Projects() {
  return (
    <section className='text-gray-600 body-font'>
      <div className='p-4 md:w-1/3'>
        <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
          <div className='p-6'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>PROJECT 1</h2>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>PROJECT NAME</h1>
            <p className='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className='flex items-center flex-wrap'>
              <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' href='#'>
                Learn More
                <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </a>
              <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                {/* github */}
                <Github />
              </span>
              <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                <OpenWindow />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4 md:w-1/3'>
        <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
          <div className='p-6'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>PROJECT 2</h2>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>PROJECT NAME</h1>
            <p className='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className='flex items-center flex-wrap'>
              <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' href='#'>
                Learn More
                <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </a>
              <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                {/* github */}
                <Github />
              </span>
              <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                <OpenWindow />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='p-4 md:w-1/3'>
        <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
          <div className='p-6'>
            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>PROJECT 2</h2>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>PROJECT NAME</h1>
            <p className='leading-relaxed mb-3'>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className='flex items-center flex-wrap'>
              <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' href='#'>
                Learn More
                <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </a>
              <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                {/* github */}
                <Github />
              </span>
              <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                <OpenWindow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
