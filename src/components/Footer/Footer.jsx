import { Icon } from '../Icons/Icon';

const Footer = () => {
  return (
    <footer class='py-10 w-full h-fit border-t-grayLt border-t-[1px] dark:border-grayMd grid grid-row-3 justify-center sm:grid-flow-col items-center sm:justify-around transition-all'>
      <div class='sm:flex sm:items-center'>
        <div class='cursor-pointer' href='#'>
          <span class='flex justify-center items-center'>
            <a href='#home' class=' w-10 p-2 rounded-full text-white bg-blue hover:scale-105 duration-200 hover:shadow-sm'>
              <Icon.Logo />
            </a>
          </span>
        </div>

        <div class='sm:pl-3 py-5 sm:py-0'>
          <p class='text-sm text-grayMd  sm:px-5 sm:border-l sm:border-grayLt sm:py-4 sm:m-3 font-semibold flex items-center justify-center'>© Copyright, HWG Design 2023</p>
        </div>
      </div>
      <div class='flex items-center justify-center'>
        <a class='hover:scale-105 duration-200 hover:shadow-sm mx-4 w-7 text-grayMd cursor-pointer' href='https://github.com/HWGdesign' target='blank'>
          <Icon.Github />
        </a>

        <a class=' hover:scale-105 duration-200 hover:shadow-sm mx-4 w-7 text-grayMd cursor-pointer' href='https://www.linkedin.com/in/jakubhewig' target='blank'>
          <Icon.LinkedIn />
        </a>
        <a class='hover:scale-105 duration-200 hover:shadow-sm mx-4 w-7 text-grayMd cursor-pointer' href='https://www.behance.net/jakubhewig' target='blank'>
          <Icon.Behance />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
