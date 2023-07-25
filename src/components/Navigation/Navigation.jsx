import { Icon } from '../Icons/Icon';

const Navigaiton = () => {
  return (
    <header class='bg-white h-[100px] fixed w-full z-10 border-b border-grayLt flex items-center justify-between px-[50px]'>
      <div class='w-[100px] h-full flex items-center'>
        <span class='w-[50px] text-blue'>
          <Icon.Logo />
        </span>
      </div>

      <div class='hidden lg:block flex justify-center items-center'>
        <ul class='flex gap-10  font-medium justify-center'>
          <li>
            <div class='group  grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue  text-grayMd'>01</span>
              <div class='text-base '>
                <a href='#'>HOME</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>02</span>
              <div class='text-base '>
                <a href='#'>SERVICES</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>03</span>
              <div class='text-base '>
                <a href='#'>PORTFOLIO</a>
              </div>
            </div>
          </li>

          <li>
            <div class='group grid grid-row  text-sm font-semibold text-dark hover:text-blue hover:font-semibold w-[100px] '>
              <span class='group-hover:text-blue text-grayMd'>04</span>
              <div class='text-base '>
                <a href='#'>CONTACT</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class='w-fit'>
        <div class='flex items-center justify-center bg-white border border-grayLt px-3 py-2 gap-4 rounded-full'>
          <span class='w-[20px] text-grayLt m-[2px] cursor-pointer'>
            <Icon.DarkModeEmpty />
          </span>
          <span class='w-[20px] text-blue m-[2px] cursor-pointer'>
            <Icon.LightModeFull />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navigaiton;
