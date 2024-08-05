import Avatar from '../../asset/user.jpg';

const RecentOrder = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-3 overflow-hidden '>
      <h2 className='text-white text-2xl font-bold'>Recent Orders</h2>
      <div className='overflow-x-auto'>
        <table className='w-full table-auto mt-4 w-screen md:w-full'>
          <thead className='text-white'>
            <tr className='flex justify-between border-b border-solid border-b-grey pb-2'>
              <th className='min-w-60'>Customer</th>
              <th className='min-w-40'>Order No.</th>
              <th className='min-w-40'>Amount</th>
              <th className='min-w-40'>Status</th>
            </tr>
          </thead>
          <tbody>
            {customDetails.map((customer) => (
              <tr
                className='border-b border-solid border-b-grey py-4 flex justify-between capitalize items-center'
                key={customer.name}
              >
                <td className='flex items-center min-w-60'>
                  <img
                    className='h-9 w-9 mr-2 rounded-full'
                    src={Avatar}
                    alt={customer.name}
                  />
                  {customer.name}
                </td>
                <td className='min-w-40'>{customer.order_number}</td>
                <td className='min-w-40'>{customer.amount}</td>
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

const customDetails = [
  {
    name: 'Wade Warren',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Dianna Russell',
    order_number: 15478256,
    amount: 124.0,
    status: 'Cancelled',
  },
  {
    name: 'Devon Lane',
    order_number: 15478256,
    amount: 124.0,
    status: 'Pending',
  },
  {
    name: 'Anu Bhatio',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Roman Range',
    order_number: 15478256,
    amount: 124.0,
    status: 'cancelled',
  },
  {
    name: 'King Jon',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Donald Trump',
    order_number: 15478256,
    amount: 124.0,
    status: 'delivered',
  },
  {
    name: 'Waren Baffee',
    order_number: 15478256,
    amount: 124.0,
    status: 'pending',
  },
];
