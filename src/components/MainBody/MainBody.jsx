import AllDetails from '../AllDetails/AllDetails';
import CustomFeeback from '../CustomFeeback/CustomFeeback';
import Menu from '../Menu/Menu';
import Profit from '../Profit/Profit';
import RecentOrder from '../RecentOrder/RecentOrder';

const MainBody = () => {
  return (
    <div className='pt-28 md:pl-24 pl-7 pb-6'>
      <h1 className='text-white text-xl font-bold'>Dashboard</h1>
      <section className='overflow-hidden md:flex gap-7 text-white pr-7'>
        <div className='md:w-2/3 flex flex-col gap-4'>
          <AllDetails />
          <RecentOrder />
        </div>
        <div className='md:w-1/3 mt-4 flex flex-col gap-4'>
          <Profit />
          <Menu />
          <CustomFeeback />
        </div>
      </section>
    </div>
  );
};

export default MainBody;
