const Profit = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-4 flex justify-between'>
      <div className='flex flex-col justify-between'>
        <span>Net Profit</span>
        <span className='text-4xl font-bold'>$ 6759.25</span>
        <span className='text-green'>3%</span>
      </div>
      <div className='flex flex-col items-center'>
        <div className='loader flex flex-col h-24 w-24 rounded-full items-center justify-center border-12 border-light-blue border-s-purple rounded-r-full'>
          <span className='text-2xl font-bold'>70%</span>
          <span className='text-8 text-center'>
            Goal <br /> Completed
          </span>
        </div>
        <span className='text-8 mt-2'>
          *The Value here has been rounded off.
        </span>
      </div>
    </section>
  );
};

export default Profit;
