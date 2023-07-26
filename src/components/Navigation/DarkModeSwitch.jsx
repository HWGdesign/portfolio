import { Icon } from '../Icons/Icon';
const DarkModeSwitch = () => {
  return (
    <div class='w-fit flex items-center justify-center'>
      <div class='flex items-center justify-between bg-white border border-grayLt rounded-full w-[80px] h-[40px]'>
        <div class=' cursor-pointer h-[25px] w-[25px] rounded-full bg-blue mx-[7.5px]'>
          <div class='scale-75 text-white hover:scale-90 duration-200 hover:shadow-sm cursor-pointer'>
            <Icon.LightModeFull />
          </div>
        </div>
        <div class=' cursor-pointer h-[25px] w-[25px] rounded-full bg-white mx-[7.5px]'>
          <div class='scale-75 text-grayLt hover:scale-90 duration-200 hover:shadow-sm cursor-pointer'>
            <Icon.DarkModeEmpty />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DarkModeSwitch;
