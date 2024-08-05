const Profit = () => {
  return (
    <section className='bg-dark-grey rounded-lg p-4 flex justify-between'>
      <div className='flex flex-col justify-between'>
        <span>Net Profit</span>
        <span className='text-4xl font-bold'>$ 6759.25</span>
        <span className='text-green flex items-center'>
          <svg
            className={`h-3 w-3 mr-1 -rotate-90`}
            fill='green'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z' />
          </svg>
          3%
        </span>
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
