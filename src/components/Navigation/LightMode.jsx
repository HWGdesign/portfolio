import { Icon } from '../Icons/Icon';
const Mode = () => {
  return (
    <div class=' flex items-center justify-center'>
      <div class='  cursor-pointer h-[35px] w-[35px] rounded-full  mx-[7.5px]'>
        <div class='scale-75 text-white hover:scale-90 duration-200 cursor-pointer'>
          <Icon.LightModeEmpty />
        </div>
      </div>
    </div>
  );
};
export default Mode;
