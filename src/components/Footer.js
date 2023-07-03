import Github from './svg/Footer/Github';
import Linkedin from './svg/Footer/Linkedin';
import Behance from './svg/Footer/Behance';

function Footer() {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <a classNameName='flex title-font font-medium items-center md:justify-start justify-center text-gray-900' href='#'>
          <span className='ml-3 text-black text-xl font-bold'>HWG Design</span>
        </a>
        <p className='text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>Feel free to contact me</p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a className='ml-3 text-gray-600' href='#'>
            {/* github svg */}
            <Github />
          </a>
          <a className='ml-3 text-gray-600' href='#'>
            {/* linkedin svg */}
            <Linkedin />
          </a>
          <a className='ml-3 text-gray-600' href='#'>
            {/* behance svg */}
            <Behance />
          </a>
        </span>
      </div>
    </footer>
  );
}
export default Footer;
