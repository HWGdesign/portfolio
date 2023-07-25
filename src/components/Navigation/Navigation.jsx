import { Icon } from '../Icons/Icon';
import DarkModeSwitch from './DarkModeSwitch';

const Navigaiton = () => {
  return (
    <header class='bg-white h-[100px] fixed w-full z-10 border-b border-grayLt flex items-center justify-between px-[3.5%] sm:px-[7.5%]'>
      <div class='hover:scale-105 duration-200 hover:shadow-sm cursor-pointer w-[100px] h-[100px] flex items-center justify-center'>
        <span class='w-[50px] text-blue'>
          <Icon.Logo />
        </span>
      </div>

      <div class='hidden lg:block justify-center items-center '>
        <ul class='flex gap-10  font-medium justify-center'>
          <li>
            <div class='group hover:scale-105 duration-200 hover:shadow-sm grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue  text-grayMd'>01</span>
              <div class='text-base '>
                <a href='#'>HOME</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group hover:scale-105 duration-200 hover:shadow-sm grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>02</span>
              <div class='text-base '>
                <a href='#'>SERVICES</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group hover:scale-105 duration-200 hover:shadow-sm grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>03</span>
              <div class='text-base '>
                <a href='#'>PORTFOLIO</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group hover:scale-105 duration-200 hover:shadow-sm grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>04</span>
              <div class='text-base '>
                <a href='#'>CONTACT</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class='flex gap-[10px]'>
        <DarkModeSwitch />
        <div class='flex justify-center items-center h-[50px] w-[50px] lg:hidden l'>
          <span className='w-6'>
            <Icon.Hamburger />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navigaiton;
