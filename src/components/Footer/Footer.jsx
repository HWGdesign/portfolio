import { Icon } from '../Icons/Icon';

const Footer = () => {
  return (
    <footer className='p-5 border-t-grayLt border-t-[1px] bg-white grid grid-row-3 justify-center sm:grid-flow-col sm:items-center sm:justify-around h-32 absolute bottom-0 right-0 left-0'>
      <div className='sm:flex sm:items-center sm:pl-5 '>
        <div className='cursor-pointer' href='#'>
          <span className='flex justify-center items-center'>
            <a className=' w-10 p-2 rounded-full text-white bg-blue'>
              <Icon.Logo />
            </a>
          </span>
        </div>

        <div className='sm:pl-3 sm:py-0 py-1'>
          <p className='text-sm text-grayMd  sm:px-5 sm:border-l sm:rounded sm:border-grayLt sm:py-4 sm:m-3 mt-3 mb-5 font-semibold flex items-center justify-center'>© Copyright, HWG Design 2023</p>
        </div>
      </div>

      <div className='flex justify-center sm:pr-5 sm:pb-0 pb-5'>
        <a className=' mx-3 w-6 text-grayMd cursor-pointer' href='https://github.com/HWGdesign' target='blank'>
          <Icon.Github />
        </a>

        <a className='mx-3 w-6 text-grayMd cursor-pointer' href='https://www.linkedin.com/in/jakubhewig' target='blank'>
          <Icon.LinkedIn />
        </a>
        <a className='mx-3 w-6 text-grayMd cursor-pointer' href='https://www.behance.net/jakubhewig' target='blank'>
          <Icon.Behance />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
