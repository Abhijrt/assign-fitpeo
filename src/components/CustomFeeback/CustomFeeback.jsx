import Avatar from '../../asset/user.jpg';

const CustomFeeback = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-4'>
      <h2 className='text-white text-xl font-bold'>Customer's Feedback</h2>
      <div className='feedback-container max-h-80 overflow-y-scroll overflow-hidden overscroll-none mt-4'>
        {customFeeback.map((customer) => (
          <div
            className='border-b pb-4 mt-4 first:mt-0 border-b-grey last:border-none'
            key={customer.name}
          >
            <div className='flex items-center'>
              <img
                className='h-9 w-9 mr-2 rounded-full'
                src={Avatar}
                alt={customer.name}
              />
              {customer.name}
            </div>
            <div className='my-2 flex gap-1'>
              {Array(5)
                .fill()
                .map((item, index) => (
                  <svg
                    className='w-5 h-5'
                    fill={customer.rating > index ? 'yellow' : 'white'}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
                  </svg>
                ))}
            </div>
            <div className='text-grey'>{customer.feedback}</div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .feedback-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default CustomFeeback;

const customFeeback = [
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Dianne Russell',
    rating: 5,
    feedback: 'I can not give any feedback',
  },
  {
    name: 'Devon Lane',
    rating: 3,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 2,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
  {
    name: 'Jenny Wilson',
    rating: 4,
    feedback:
      'We Enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service',
  },
];
