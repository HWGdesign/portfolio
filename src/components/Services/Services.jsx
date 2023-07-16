import { Icon } from '../Icons/Icon';

const Services = () => {
  return (
    <section class='text-gray-600 body-font'>
      <div class='container p-4 mx-auto'>
        <div class='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
          <h1 class='sm:text-3xl text-2xl font-medium title-font mb-2 text-dark'>Services</h1>
          <p class='lg:w-1/2 w-full leading-relaxed text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!.</p>
        </div>
        <div class='flex flex-wrap -m-4'>
          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-light p-6 rounded-lg relative'>
              <div class=' bg-blue text-white p-2 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 absolute top-[-20px] right-[48%]'>
                <Icon.Web />
              </div>
              <h2 class='text-xl text-dark font-bold title-font mb-2 py-1 flex justify-center'>Website design</h2>
              <p class='text-gray-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
            </div>
          </div>

          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-light p-6 rounded-lg relative'>
              <div class=' bg-blue text-white p-2 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 absolute top-[-20px] right-[48%]'>
                <Icon.Web />
              </div>
              <h2 class='text-xl text-dark font-bold title-font mb-2 py-1 flex justify-center'>Website design</h2>
              <p class='text-gray-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
            </div>
          </div>

          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-light p-6 rounded-lg relative'>
              <div class=' bg-blue text-white p-2 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 absolute top-[-20px] right-[48%]'>
                <Icon.Web />
              </div>
              <h2 class='text-xl text-dark font-bold title-font mb-2 py-1 flex justify-center'>Website design</h2>
              <p class='text-gray-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
            </div>
          </div>

          <div class='xl:w-1/3 md:w-1/2 p-4'>
            <div class='border border-gray-light p-6 rounded-lg relative'>
              <div class=' bg-blue text-white p-2 w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 absolute top-[-20px] right-[48%]'>
                <Icon.Web />
              </div>
              <h2 class='text-xl text-dark font-bold title-font mb-2 py-1 flex justify-center'>Website design</h2>
              <p class='text-gray-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
