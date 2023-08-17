import { Icon } from '../Icons/Icon';
import Images from '../images/Images.jsx';

const Form = () => {
  return (
    <form class='flex flex-wrap -m-2 mx-5'>
      <div class='py-[5px] sm:w-1/2 sm:pr-1 lg:pr-2 w-full'>
        <div class='relative'>
          <label for='name' class='text-sm text-dark dark:text-grayMd font-semibold'>
            Name
          </label>
          <input type='text' id='name' class=' w-full bg-white dark:bg-dark border-grayLt border-2 rounded-md   text-base  text-dark dark:text-white py-[5px] px-3 leading-8 transition-colors duration-200 ease-in-out'></input>
        </div>
      </div>
      <div class='py-[5px] sm:w-1/2 sm:pl-1 lg:pl-2 w-full'>
        <div class='relative'>
          <label for='email' class='text-sm text-dark dark:text-grayMd font-semibold'>
            Email
          </label>
          <input type='text' id='email' name='email' class='w-full bg-white dark:bg-dark border-grayLt border-2  rounded-md  text-base  text-dark dark:text-white py-[5px] px-3 leading-8 transition-colors duration-200 ease-in-out'></input>
        </div>
      </div>
      <div class='py-[5px] w-full'>
        <div class='relative'>
          <label for='message' class='text-sm text-dark dark:text-grayMd font-semibold'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            class='w-full bg-white dark:bg-dark border-grayLt border-2  rounded-md h-[200px] text-base  text-dark dark:text-white py-[5px] px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
          ></textarea>
        </div>
      </div>
      <div class='pb-[5px] pt-[15px] w-full'>
        <button class=' text-white bg-blue w-full justify-center items-center border-0 py-2 px-8 mb-[50px] hover:bg-indigo-600 rounded-md text-lg font-semibold'>Submit</button>
      </div>

      <a href='#home'>
        <div class='group flex items-center gap-[20px] text-md font-semibold text-dark dark:text-grayMd px-2 relative'>
          <div class='hover:scale-105 duration-200 hover:shadow-sm cursor-pointer flex justify-center items-center w-[40px] h-[40px] p-3 rotate-180 bg-white  dark:bg-dark text-dark dark:text-grayMd border-2 border-grayLt rounded-full '>
            <span class='w-full text-dark dark:text-white justify-center items-center flex'>
              <Icon.Arrow />
            </span>
          </div>
          BACK TO THE TOP
        </div>
      </a>
      <div class='absolute right-0 -bottom-[1.5%] dark:opacity-25 scale-[20%] z-0 select-none'>
        <img class='w-full h-full' src={Images.squaresLine} alt='barber' />
      </div>
    </form>
  );
};
export default Form;
