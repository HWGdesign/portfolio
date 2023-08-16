const section = [
  { number: '01', title: 'HOME' },
  { number: '02', title: 'SERVICES' },
  { number: '03', title: 'PORTFOLIO' },
  { number: '04', title: 'CONTACT' },
];

const HomeSection = () => {
  return (
    <div class='text-dark dark:text-white py- m-5 flex font-semibold '>
      <h1>{section[0].number}</h1>
      <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
      <h1>{section[0].title}</h1>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div class='text-dark dark:text-white py- m-5 flex font-semibold '>
      <h1>{section[1].number}</h1>
      <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
      <h1>{section[1].title}</h1>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div class='text-dark dark:text-white py- m-5 flex font-semibold '>
      <h1>{section[2].number}</h1>
      <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
      <h1>{section[2].title}</h1>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div class='text-dark dark:text-white py- m-5 flex font-semibold '>
      <h1>{section[3].number}</h1>
      <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
      <h1>{section[3].title}</h1>
    </div>
  );
};

export { HomeSection, ServicesSection, PortfolioSection, ContactSection };
