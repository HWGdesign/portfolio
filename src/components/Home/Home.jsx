import { Icon } from '../Icons/Icon';

const Home = () => {
  return (
    <section class='w-full h-screen mx-auto container relative justify-center pt-[100px]'>
      <div class='py- m-5 flex font-semibold '>
        <h1>O1</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>HOME</h1>
      </div>

      <div class='absolute grid gap-5 left-1/2 right-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto'>
        <div>
          <div class='flex items-center justify-center text-3xl text-blue font-bold'>
            <h1>Hello there! 👋🏻</h1>
          </div>
        </div>

        <div class='flex items-center justify-center text-center p-5 font-semibold'>
          <p>
            I will transform your idea into reality.<br></br> <span class='text-blue'>Websites, UI Concepts, Creative designs.</span> It's time to bring your vision to life!
          </p>
        </div>

        <div class='grid gap-5'>
          <div class='flex items-center justify-center relative w-full'>
            <div class='absolute text-grayLt top-1/2 bottom-1/2 left-[40px] p-3'>
              <Icon.SquaresDecoration />
            </div>

            <div class='flex items-center justify-center bg-blue h-[50px] w-[200px] font-semibold text-base text-white relative '>
              Hire me
              <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
                <span class='w-4 text-white -rotate-90'>
                  <Icon.Arrow />
                </span>
              </div>
              <div class='w-[200px] h-[50px] border-2 border-blue absolute top-[5px] left-[5px]'></div>
            </div>
          </div>

          <div class='flex items-center justify-center'>
            <div class='flex items-center justify-center bg-white border-grayMd border-2 text-dark h-[50px] w-[200px] font-semibold text-base relative '>
              Portfolio
              <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
                <span class='w-4 text-dark -rotate-90'>
                  <Icon.Arrow />
                </span>
              </div>
              <div class='w-[200px] h-[50px] border-2 border-grayMd absolute top-[5px] left-[5px] -z-10'></div>
            </div>
          </div>
        </div>
      </div>

      <div class='flex justify-center items-center absolute mx-auto right-0 left-0 bottom-[100px]'>
        <div class='h-[20] w-[20px]'>
          <span class=' text-dark'>
            <Icon.Arrow />
          </span>
        </div>
      </div>
    </section>
  );
};
export default Home;
