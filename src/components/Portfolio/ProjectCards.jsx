import { Icon } from '../Icons/Icon';
import Images from '../images/Images.jsx';

const cathegory = ['GRAPHIC DESIGN', 'WEB DEVELOPMENT', 'UI & UX'];

const project = [{ title: 'BARBER SHOP LOGO', snippet: 'I crafted these logos to evoke a sense of style and professionalism.' }];

const BarberShopLogoProject = () => {
  return (
    <div class='md:p-3 sm:p-8 p-5 md:w-1/3'>
      <div class='h-full border-2 border-grayLt border-opacity-60 rounded-lg overflow-hidden hover:scale-105 duration-200 hover:shadow-sm'>
        <div class='p-6'>
          <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>{cathegory[0]}</h2>
          <h1 class='text-lg font-semibold text-dark'>{project[0].title}</h1>
          <div class='flex items-center justify-center w-90 h-90'>
            <img class='h-full w-full object-cover' src={Images.barber} alt='barber' />
          </div>
          <h2 class='tracking-widest text-xs title-font font-medium text-grayMd mb-1'>MADE WITH:</h2>
          <div class='flex justify-start'>
            <span class='w-6 text-grayMd my-2 mr-3'>
              <Icon.Figma />
            </span>
            <span class='w-6 text-grayMd my-2 mr-3'>
              <Icon.Illustrator />
            </span>
          </div>
          <p class='leading-relaxed mb-1'>{project[0].snippet}</p>
          <a href='#' class='flex text-sm font-semibold text-blue pt-3'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export { BarberShopLogoProject };
