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
            <div>{customer.name}</div>
            <div>{customer.rating}</div>
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
