import { Icon } from '../Icons/Icon';
const PortfolioButton = () => {
  return (
    <a href='#portfolio'>
      <div class='flex items-center justify-center'>
        <div class='hover:shadow-sm rounded-md  hover:scale-105 cursor-pointer duration-200 flex items-center justify-center bg-white dark:bg-dark border-grayMd border-2 text-dark dark:text-white h-[50px] w-[200px] font-semibold text-base relative z-10 '>
          Portfolio
          <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
            <span class='w-3 -rotate-90'>
              <Icon.Arrow />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioButton;
