import { Icon } from '../Icons/Icon';

const Services = () => {
  return (
    <section class='container mx-auto w-full'>
      <div class='py-2 m-5 flex font-semibold'>
        <h1>O2</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>SERVICES</h1>
      </div>

      <div class='flex justify-center items-center'>
        <div class='flex flex-wrap justify-center w-full md:w-4/5'>
          <div class=' md:w-1/2'>
            <div class='border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
              <div class=' bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
                <Icon.Web />
              </div>
              <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>Web Development</h2>
              <div class='h-[75px] flex items-center justify-center text-center'>
                <p class='text-grayMd'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
              </div>
              <span class='text-blue font-semibold flex justify-center py-1'>
                <a href='#'>Read more</a>
              </span>
            </div>
          </div>

          <div class=' md:w-1/2'>
            <div class='border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
              <div class=' bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
                <Icon.UiUx />
              </div>
              <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>Graphic design</h2>
              <div class='h-[75px] flex items-center justify-center text-center'>
                <p class='text-grayMd'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
              </div>
              <span class='text-blue font-semibold flex justify-center py-1'>
                <a href='#'>Read more</a>
              </span>
            </div>
          </div>

          <div class=' md:w-1/2'>
            <div class='border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
              <div class=' bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
                <Icon.Design />
              </div>
              <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>UX/UI design</h2>
              <div class='h-[75px] flex items-center justify-center text-center'>
                <p class='text-grayMd'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
              </div>
              <span class='text-blue font-semibold flex justify-center py-1'>
                <a href='#'>Read more</a>
              </span>
            </div>
          </div>

          <div class=' md:w-1/2'>
            <div class='border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
              <div class=' bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
                <Icon.PersonalProject />
              </div>
              <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>Specific Project</h2>
              <div class='h-[75px] flex items-center justify-center text-center'>
                <p class='text-grayMd'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, nam!</p>
              </div>
              <span class='text-blue font-semibold flex justify-center py-1'>
                <a href='#'>Read more</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
