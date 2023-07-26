import { Icon } from '../Icons/Icon';

const ToggleMenu = () => {
  console.log('clicked!');
};

const HamburgerMenu = () => {
  return (
    <div class='flex hover:scale-105 duration-200 cursor-pointer justify-center items-center h-[50px] w-[50px] lg:hidden l' onClick={ToggleMenu}>
      <span className='w-[30px]'>
        <Icon.Hamburger />
      </span>
    </div>
  );
};
export default HamburgerMenu;
