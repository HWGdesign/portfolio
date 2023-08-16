import { Icon } from '../Icons/Icon';
import DarkMode from './DarkMode';
import HamburgerMenu from './HamburgerMenu';
import LightMode from './LightMode';

const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <header class='dark:bg-dark dark:border-grayMd bg-white h-[100px] w-full z-10 border-b border-grayLt flex items-center justify-between px-[3.5%] sm:px-[7.5%] transition-all'>
      <a href='#home'>
        <div class='hover:scale-105 duration-200 cursor-pointer w-[100px] h-[100px] flex items-center justify-center text-blue dark:text-white'>
          <span class='w-[60px] '>
            <Icon.Logo />
          </span>
        </div>
      </a>

      <div class='hidden lg:block justify-center items-center '>
        <ul class='flex gap-10  font-medium justify-center'>
          <li>
            <div class='group hover:scale-105 duration-200 grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue  text-grayMd'>01</span>
              <div class='text-base '>
                <a href='#home'>HOME</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group hover:scale-105 duration-200 grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>02</span>
              <div class='text-base '>
                <a href='#services'>SERVICES</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group hover:scale-105 duration-200 grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>03</span>
              <div class='text-base '>
                <a href='#portfolio'>PORTFOLIO</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group hover:scale-105 duration-200 grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>04</span>
              <div class='text-base '>
                <a href='#contact'>CONTACT</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class='flex items-center gap-[20px]'>
        <div onClick={() => setDarkMode(!darkMode)}>{darkMode ? <LightMode /> : <DarkMode />}</div>
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Navigation;
