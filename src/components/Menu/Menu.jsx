const allMenus = [
  {
    name: 'Goals',
  },
  {
    name: 'Popular Dishes',
  },
  {
    name: 'Menus',
  },
];

const Menu = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-3 flex flex-col gap-4'>
      {allMenus.map((item) => (
        <div key={item.name} className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='h-9 w-9 rounded-full block bg-white mr-3'>
              <span />
            </div>
            <span>{item.name}</span>
          </div>
          <div className='h-5 w-5 block bg-white rounded-full'>
            <span />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;
