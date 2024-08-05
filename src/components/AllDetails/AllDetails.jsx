const allDetails = [
  {
    name: 'Total Orders',
    count: 75,
    countIncrease: 3,
    countDecrease: 0,
    icon: 'basket',
    className: 'bg-basket',
  },
  {
    name: 'Total Delivered',
    count: 70,
    countIncrease: 0,
    countDecrease: 3,
    icon: 'bag',
    className: 'bg-bag',
  },
  {
    name: 'Total Cancelled',
    count: 5,
    countIncrease: 3,
    countDecrease: 0,
    icon: 'cancel',
    className: 'bg-cancel',
  },
  {
    name: 'Total Revenue',
    count: '$12K',
    countIncrease: 0,
    countDecrease: 3,
    icon: 'amount',
    className: 'bg-amount',
  },
];

const AllIcons = (type) => {
  switch (type) {
    case 'basket':
      return (
        <svg
          className='h-7 w-7'
          fill='#3B63FB'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
        >
          <path d='M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
        </svg>
      );
    case 'bag':
      return (
        <svg
          className='h-7 w-7'
          fill='#00C98D'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path d='M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z' />
        </svg>
      );

    case 'amount':
      return (
        <svg
          className='h-7 w-7'
          fill='#EE419B'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 576 512'
        >
          <path d='M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z' />
        </svg>
      );

    default:
      return (
        <svg
          className='h-7 w-7'
          fill='#F25E5E'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 640 512'
        >
          <path d='M0 32C0 14.3 14.3 0 32 0L48 0c44.2 0 80 35.8 80 80l0 288c0 8.8 7.2 16 16 16l464 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-66.7 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16l-197.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-5.6 1-11 2.7-16L144 448c-44.2 0-80-35.8-80-80L64 80c0-8.8-7.2-16-16-16L32 64C14.3 64 0 49.7 0 32zM432 96l0-40c0-4.4-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8l0 40 96 0zM288 96l0-40c0-30.9 25.1-56 56-56l80 0c30.9 0 56 25.1 56 56l0 40 0 224-192 0 0-224zM512 320l0-224 16 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-16 0zM240 96l16 0 0 224-16 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48z' />
        </svg>
      );
  }
};

const AllDetails = () => {
  return (
    <section className='flex gap-4 mt-4 flex-wrap'>
      {allDetails.map((item) => (
        <div className='bg-dark-grey rounded-lg p-3 flex-1 min-w-40'>
          <div
            className={`h-9 w-9 rounded-lg p-1 mb-2 flex items-center ${item.className}`}
          >
            {AllIcons(item.icon)}
          </div>
          <span>{item.name}</span>
          <div className='flex justify-between mt-3 items-center'>
            <span className='text-2xl font-bold'>{item.count}</span>
            <span
              className={`flex items-center text-8 ${
                item.countIncrease ? 'text-green' : 'text-red'
              }`}
            >
              <svg
                className={`h-2 w-2 mr-1 ${
                  item.countIncrease ? '-rotate-90' : 'rotate-90'
                }`}
                fill={item.countIncrease ? 'green' : 'red'}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
              >
                <path d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z' />
              </svg>
              {item.countIncrease || item.countDecrease}%
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllDetails;
