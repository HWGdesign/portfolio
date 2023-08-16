import { Icon } from '../Icons/Icon';
import { ContactSection } from '../Sections/Section';
import Images from '../images/Images.jsx';
import Form from './Form.jsx';
const Contact = () => {
  return (
    <section id='contact' class='text-dark container mx-auto pb-[50px] relative transition-all'>
      <ContactSection />
      <div class='container mx-auto pt-5'>
        <div class='flex flex-col text-center w-full'>
          <h1 class='flex items-center justify-center text-3xl sm:text-4xl text-blue font-bold pb-5'>Have a project in mind?</h1>
          <div className='pt-2 pb-4 px-5  text-ellipsis w-full  mx-auto'>
            <p class='font-semibold text-grayMd text-ellipsis'>Say hello, and let's work together to make your vision come true!</p>
          </div>
        </div>
        <div class='lg:w-4/5 w-full mx-auto text-dark dark:text-white'>
          <div class='flex sm:justify-around flex-wrap justify-center py-4'>
            <div class='flex'>
              <div class='w-[50px] h-[50px] flex items-center justify-center'>
                <span className='w-5'>
                  <Icon.Message />
                </span>
              </div>
              <div class='flex items-center justify-start w-[200px] pl-[10px] z-10'>
                <p class='text-base font-semibold'>hwgpraca@gmail.com</p>
              </div>
            </div>

            <div class='flex'>
              <div class='w-[50px] h-[50px] flex items-center justify-center'>
                <span className='w-5'>
                  <Icon.Phone />
                </span>
              </div>
              <div class='flex items-center justify-start w-[200px] pl-[10px] z-10'>
                <p class='text-base font-semibold'>+48 503 938 637</p>
              </div>
            </div>

            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
