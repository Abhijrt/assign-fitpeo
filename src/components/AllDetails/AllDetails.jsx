const allDetails = [
  {
    name: 'Total Orders',
    count: 75,
    countIncrease: 3,
    countDecrease: 0,
  },
  {
    name: 'Total Delivered',
    count: 70,
    countIncrease: 0,
    countDecrease: 3,
  },
  {
    name: 'Total Cancelled',
    count: 5,
    countIncrease: 3,
    countDecrease: 0,
  },
  {
    name: 'Total Revenue',
    count: '$12K',
    countIncrease: 0,
    countDecrease: 3,
  },
];

const AllDetails = () => {
  return (
    <section className='flex gap-4 mt-4 flex-wrap'>
      {allDetails.map((item) => (
        <div className='bg-dark-grey rounded-lg p-3 flex-1 min-w-40'>
          <div className=''>
            <span />
          </div>
          <span>{item.name}</span>
          <div className='flex justify-between mt-3 items-center'>
            <span className='text-2xl font-bold'>{item.count}</span>
            <span className={item.countIncrease ? 'text-green' : 'text-red'}>
              {item.countIncrease || item.countDecrease}%
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllDetails;
