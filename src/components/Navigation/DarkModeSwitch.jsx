import { Icon } from '../Icons/Icon';
const DarkModeSwitch = () => {
  return (
    <div class='w-fit flex items-center justify-center'>
      <div class='flex items-center justify-center bg-white border border-grayLt px-3 py-2 gap-4 rounded-full'>
        <span class='w-[20px] text-grayLt m-[2px] cursor-pointer'>
          <Icon.DarkModeEmpty />
        </span>
        <span class='w-[20px] text-blue m-[2px] cursor-pointer'>
          <Icon.LightModeFull />
        </span>
      </div>
    </div>
  );
};
export default DarkModeSwitch;
