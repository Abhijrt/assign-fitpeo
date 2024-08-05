const allMenus = [
  {
    name: 'Goals',
    icons: (
      <svg
        fill='#EE6925'
        className='h-5 w-5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z' />
      </svg>
    ),
    className: 'bg-goal',
  },
  {
    name: 'Popular Dishes',
    icons: (
      <svg
        className='h-5 w-5'
        fill='#5B7AD6'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 384 512'
      >
        <path d='M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z' />
      </svg>
    ),
    className: 'bg-dishes',
  },
  {
    name: 'Menus',
    icons: (
      <svg
        className='h-5 w-5'
        fill='#2499CB'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
      </svg>
    ),
    className: 'bg-menus',
  },
];

const Menu = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-3 flex flex-col gap-4'>
      {allMenus.map((item) => (
        <div key={item.name} className='flex items-center justify-between'>
          <div className='flex items-center '>
            <div
              className={` h-9 w-9 rounded-full block mr-3 flex items-center justify-center ${item.className}`}
            >
              {item.icons}
            </div>
            <span>{item.name}</span>
          </div>
          <div className='h-5 w-5 block bg-light-grey rounded-full flex items-center justify-center'>
            <svg
              fill='white'
              className='h-3 w-3'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
            </svg>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
