import { Icon } from '../Icons/Icon';
const HireMeButton = () => {
  return (
    <a href='#contact'>
      <div class='flex items-center justify-center relative w-full'>
        <div class='hover:shadow-sm rounded-md  hover:scale-105 cursor-pointer duration-200 flex items-center justify-center bg-blue h-[50px] w-[200px] font-semibold text-base text-white relative '>
          Hire me
          <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
            <span class='w-3 text-white dark:text-white -rotate-90'>
              <Icon.Arrow />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default HireMeButton;
