const customDetails = [
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'Cancelled',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'Pending',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
];

const RecentOrder = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-3 overflow-hidden '>
      <h2 className='text-white text-2xl font-bold'>Recent Orders</h2>
      <div className='overflow-x-auto'>
        <table className='w-full table-auto mt-4 w-screen md:w-full'>
          <thead className='text-white'>
            <tr className='flex justify-between border-b border-b-slate-300 pb-2'>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customDetails.map((customer) => (
              <tr
                className='border-b border-b-slate-300 py-4 flex justify-between capitalize'
                key={customer.name}
              >
                <td>{customer.name}</td>
                <td>{customer.order_number}</td>
                <td>{customer.amount}</td>
                <td
                  className={
                    customer.status === 'delivered'
                      ? 'text-green bg-light-green px-3 rounded-full'
                      : 'text-red bg-light-red px-3 rounded-full'
                  }
                >
                  {customer.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentOrder;
