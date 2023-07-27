import { Icon } from '../Icons/Icon';
import { ContactSection } from '../Sections/Section';

const Contact = () => {
  return (
    <section id='contact' class='text-dark container mx-auto pb-[50px]'>
      <ContactSection />
      <div class='container mx-auto pt-5'>
        <div class='flex flex-col text-center w-full'>
          <h1 class='flex items-center justify-center text-3xl sm:text-4xl text-blue font-bold pb-5'>Have a project in mind?</h1>
          <div className='pt-2 pb-4 px-5  text-ellipsis w-full  mx-auto'>
            <p class='font-semibold text-grayMd text-ellipsis'>Say hello, and let's work together to make your vision come true!</p>
          </div>
        </div>
        <div class='lg:w-4/5 w-full mx-auto'>
          <div class='relative flex sm:justify-around flex-wrap justify-center py-4'>
            <div class='absolute text-grayLt opacity-50 top-[30%] z-0 right-0'>
              <Icon.SquaresDecoration />
            </div>
            <div class='flex'>
              <div class='w-[50px] h-[50px] flex items-center justify-center'>
                <span className='w-5'>
                  <Icon.Message />
                </span>
              </div>
              <div class='flex items-center justify-start w-[200px] pl-[10px] z-10'>
                <p class='text-base font-semibold'>hwgpraca@gmail.com</p>
              </div>
            </div>

            <div class='flex'>
              <div class='w-[50px] h-[50px] flex items-center justify-center'>
                <span className='w-5'>
                  <Icon.Phone />
                </span>
              </div>
              <div class='flex items-center justify-start w-[200px] pl-[10px] z-10'>
                <p class='text-base font-semibold'>+48 503 938 637</p>
              </div>
            </div>
          </div>

          <div class='flex flex-wrap -m-2 mx-5'>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='relative'>
                <label for='name' class='leading-7 text-sm text-dark font-semibold'>
                  Name
                </label>
                <input
                  type='text'
                  class=' w-full bg-grayLt  bg-opacity-50 rounded-md focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></input>
              </div>
            </div>
            <div class='p-2 sm:w-1/2 w-full'>
              <div class='relative'>
                <label for='email' class='leading-7 text-sm text-dark font-semibold'>
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  class='w-full bg-grayLt  bg-opacity-50 rounded-md focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue text-base outline-none text-dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ></input>
              </div>
            </div>
            <div class='p-2 w-full'>
              <div class='relative'>
                <label for='message' class='leading-7 text-sm text-dark font-semibold'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  class='w-full bg-grayLt  bg-opacity-50 rounded-md focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue h-[200px] text-base outline-none text-dark py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                ></textarea>
              </div>
            </div>
            <div class='p-2 w-full'>
              <button class=' text-white bg-blue w-full justify-center items-center border-0 py-2 px-8 mb-[50px] focus:outline-none hover:bg-indigo-600 rounded-md text-lg font-semibold'>Submit</button>
            </div>
            <a href='#home'>
              <div class='group flex items-center gap-[20px] text-md font-semibold text-dark  px-2'>
                <div class='rotate-180 hover:scale-105 duration-200 hover:shadow-sm cursor-pointer flex items-center w-[40px] h-[40px] p-3 bg-white border-2 border-grayLt  rounded-full '>
                  <span class='w-full text-dark justify-center items-center flex'>
                    <Icon.Arrow />
                  </span>
                </div>
                BACK TO THE TOP
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
