import { HomeSection } from '../Sections/Section.jsx';
import { Icon } from '../Icons/Icon';
import Images from '../images/Images.jsx';

const Home = () => {
  return (
    <section id='home' class='w-full h-screen mx-auto container relative justify-center pt-[110px]'>
      <HomeSection />
      {/* <div class='lg:w-1/2 h-full bg-blue'>4eg4</div> */}

      <div class=' absolute hidden lg:flex right-0 top-1/5 cursor-pointer'>
        <img class='w-full h-full scale-75 duration-200' src={Images.blob} alt='barber' />
      </div>

      <div class='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-4/5'>
        <div class='hidden float-right lg:flex lg:w-1/2'></div>
        <div class='flex gap-[15px] lg:items-start justify-center items-center flex-col w-full lg:w-1/2'>
          <div>
            <div class='flex items-center justify-center text-3xl sm:text-4xl text-blue font-bold'>
              <h1>Hello friend! 👋🏻</h1>
            </div>
          </div>

          <div class='flex items-center justify-center lg:text-start text-center sm:text-lg text-md text- p-5 lg:pl-0 font-semibold  tracking-wide'>
            <p>
              Great that you dropped by! <br></br>
              <span class='text-blue font-bold'>Websites, Graphic designs, UI & UX. </span>
              <br />
              It's time to bring your vision to life!
            </p>
          </div>

          <div class='grid gap-[15px] lg:grid-flow-col justify-center'>
            <div class='flex items-center justify-center relative w-full'>
              <div class='absolute opacity-50 text-grayLt top-1/2 bottom-1/2 left-[40px] p-3'>
                <Icon.SquaresDecoration />
              </div>

              <a href='#contact'>
                <div class='hover:shadow-sm rounded-md  hover:scale-105 cursor-pointer duration-200 flex items-center justify-center bg-blue h-[50px] w-[200px] font-semibold text-base text-white relative '>
                  Hire me
                  <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
                    <span class='w-3 text-white -rotate-90'>
                      <Icon.Arrow />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <a href='#portfolio'>
              <div class='flex items-center justify-center'>
                <div class='hover:shadow-sm rounded-md  hover:scale-105 cursor-pointer duration-200 flex items-center justify-center bg-white border-grayMd border-2 text-dark h-[50px] w-[200px] font-semibold text-base relative z-10 '>
                  Portfolio
                  <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
                    <span class='w-3 text-dark -rotate-90'>
                      <Icon.Arrow />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class='group flex lg:justify-start justify-center items-center absolute mx-auto right-0 left-0 bottom-[7.5%]'></div>
          <div class='absolute lg:-bottom-[100%] sm:-bottom-[52.5%] -bottom-[50%] animate-bounce'>
            <a href='#services'>
              <div class='hover:scale-105 duration-200 hover:shadow-sm cursor-pointer flex justify-center items-center w-[40px] h-[40px] p-3 bg-white border-2 border-grayLt rounded-full '>
                <span class='w-full text-dark justify-center items-center flex'>
                  <Icon.Arrow />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
