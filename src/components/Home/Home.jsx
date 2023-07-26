import { Icon } from '../Icons/Icon';

const Home = () => {
  return (
    <section id='home' class='w-full h-screen mx-auto container relative justify-center pt-[110px]'>
      <div class='py- m-5 flex font-semibold '>
        <h1>O1</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>HOME</h1>
      </div>
      <div class='absolute grid gap-5 left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto'>
        <div>
          <div class='flex items-center justify-center text-3xl sm:text-4xl text-blue font-bold'>
            <h1>Hello friend! 👋🏻</h1>
          </div>
        </div>

        <div class='flex items-center justify-center text-center sm:text-lg text-md text- p-5 font-semibold  tracking-wide'>
          <p>
            Great that you dropped by! <br></br>
            <span class='text-blue font-bold'>Websites, Graphic designs, UI & UX. </span>
            <br />
            It's time to bring your vision to life!
          </p>
        </div>

        <div class='grid gap-5'>
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
      </div>
      <div class='group flex justify-center items-center absolute mx-auto right-0 left-0 bottom-[7.5%]'>
        <a href='#services'>
          <div class='hover:scale-105 duration-200 hover:shadow-sm cursor-pointer flex justify-center items-center w-[50px] h-[50px] p-4 bg-white border-2 border-grayLt rounded-full '>
            <span class='w-full text-dark justify-center items-center flex'>
              <Icon.Arrow />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};
export default Home;
