const Header = () => {
  return (
    <>
      <header className='bg-dark-grey py-6 flex items-center justify-between w-full block px-6 fixed'>
        <div className='flex'>
          {/* <span className='h-38 w-38 block'>
            <Home />
          </span> */}
          <div>
            <span className='block' />
            <input placeholder='Search' />
          </div>
        </div>
        <div className='flex gap-2'>
          <div className='bg-light-grey rounded-full h-9 w-9'></div>
          <div className='bg-light-grey rounded-full h-9 w-9'></div>
          <div className='bg-light-grey rounded-full h-9 w-9'></div>
          <div className='bg-light-grey rounded-full h-9 w-9'></div>
        </div>
      </header>
    </>
  );
};

export default Header;
