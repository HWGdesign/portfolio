import { Icon } from '../Icons/Icon';

const Home = () => {
  return (
    <section class=' w-full h-screen mx-auto container'>
      <div class='py- m-5 flex font-semibold '>
        <h1>O1</h1>
        <div class='h=[5px] bg-grayMd w-[2px] mx-5 rounded-full'></div>
        <h1>HOME</h1>
      </div>
      <div class='flex items-center justify-center pb-4'>
        <div class='flex items-center justify-center bg-blue h-[50px] w-[200px] font-medium text-base text-white relative '>
          Hire me
          <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
            <span class='w-4 text-white -rotate-90'>
              <Icon.Arrow />
            </span>
          </div>
          <div class='w-[200px] h-[50px] border-2 border-blue absolute top-[5px] left-[5px]'></div>
        </div>
      </div>

      <div class='flex items-center justify-center pt-4'>
        <div class='flex items-center justify-center bg-white border-grayMd border-2 text-dark h-[50px] w-[200px] font-medium text-base relative z-10 '>
          Hire me
          <div class='absolute h-[50] w-[50px] flex justify-center items-center right-0 top-0 bottom-0'>
            <span class='w-4 text-white -rotate-90'>
              <Icon.Arrow />
            </span>
          </div>
          <div class='w-[200px] h-[50px] border-2 border-grayMd absolute top-[5px] left-[5px] z-0'></div>
        </div>
      </div>
    </section>
  );
};
export default Home;
