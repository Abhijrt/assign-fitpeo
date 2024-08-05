const Sidebar = () => {
  return (
    <aside className='hidden md:block bg-dark-grey px-6 max-w-20 h-full fixed top-20 pt-4 flex flex-col justify-between pb-28'>
      <div className='flex flex-col gap-2'>
        <span className='block bg-red w-9 h-9' />
        <span className='block bg-red w-9 h-9' />
        <span className='block bg-red w-9 h-9' />
        <span className='block bg-red w-9 h-9' />
      </div>
      <span className='block bg-red w-9 h-9' />
    </aside>
  );
};

export default Sidebar;
