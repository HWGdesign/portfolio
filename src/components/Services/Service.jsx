import { Icon } from '../Icons/Icon';

const service = [
  {
    title: 'Web Development',
    snippet: 'Functional and stunning websites that stand out in the digital realm.',
  },
  {
    title: 'Graphic design',
    snippet: 'Transforming ideas into captivating visuals with a creative touch',
  },
  {
    title: 'UX/UI Design',
    snippet: 'Enhancing user experiences through intuitive and elegant interfaces.',
  },
  {
    title: 'Specific Project',
    snippet: `Tailor-made solutions designed specifically for your individual needs.`,
  },
];

const WebDevelopmentServices = () => {
  return (
    <div class=' md:w-1/2'>
      <div class='hover:scale-105 duration-200 hover:shadow-sm border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
        <div class='  bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
          <Icon.Web />
        </div>
        <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>{service[0].title}</h2>
        <div class='h-[80px] flex items-center justify-center text-center'>
          <p class='text-grayMd'>{service[0].snippet}</p>
        </div>
        <span class='text-blue font-semibold flex justify-center py-1'>
          <a href='#'>Read more</a>
        </span>
      </div>
    </div>
  );
};

const GraphicDesignServices = () => {
  return (
    <div class=' md:w-1/2'>
      <div class='hover:scale-105 duration-200 hover:shadow-sm border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
        <div class='  bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
          <Icon.Web />
        </div>
        <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>{service[1].title}</h2>
        <div class='h-[80px] flex items-center justify-center text-center'>
          <p class='text-grayMd'>{service[1].snippet}</p>
        </div>
        <span class='text-blue font-semibold flex justify-center py-1'>
          <a href='#'>Read more</a>
        </span>
      </div>
    </div>
  );
};

const UXUIServices = () => {
  return (
    <div class=' md:w-1/2'>
      <div class='hover:scale-105 duration-200 hover:shadow-sm border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
        <div class='  bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
          <Icon.Web />
        </div>
        <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>{service[2].title}</h2>
        <div class='h-[80px] flex items-center justify-center text-center'>
          <p class='text-grayMd'>{service[2].snippet}</p>
        </div>
        <span class='text-blue font-semibold flex justify-center py-1'>
          <a href='#'>Read more</a>
        </span>
      </div>
    </div>
  );
};

const SpecificProjectServices = () => {
  return (
    <div class=' md:w-1/2'>
      <div class='hover:scale-105 duration-200 hover:shadow-sm border border-grayLt p-5 m-5 rounded-lg relative h-auto w-auto'>
        <div class='  bg-blue text-white p-2 w-10 h-10 rounded-full absolute top-[-30px] left-0 right-0 m-auto'>
          <Icon.Web />
        </div>
        <h2 class='text-xl text-dark font-bold title-font py-1 flex justify-center'>{service[3].title}</h2>
        <div class='h-[80px] flex items-center justify-center text-center'>
          <p class='text-grayMd'>{service[3].snippet}</p>
        </div>
        <span class='text-blue font-semibold flex justify-center py-1'>
          <a href='#'>Read more</a>
        </span>
      </div>
    </div>
  );
};

export { WebDevelopmentServices, GraphicDesignServices, UXUIServices, SpecificProjectServices };
