import money from "../images/money.png";
import store from "../images/store.png";
import star from "../images/star.svg";
import phone2 from "../images/phone2.png";
import phone3 from "../images/phone3.png";
import third from "../images/third.png";
const Center = () => {
  return (
    <main className='text-gray-900 my-12 sm:mt-32'>
      <div id='feature'>
        <h1 className='text-3xl md:text-5xl font-bold text-center my-5 capitalize'>
          App Features
        </h1>
        <div className='grid sm:grid-cols-3 gap-8'>
          <div className='shadow-sm p-4'>
            <img
              className='bg-purple-200 p-2 rounded-xl w-12'
              src={star}
              alt='money'
            />
            <h5 className='font-bold text-xl md:text-2xl my-3'>
              Create Wishlist
            </h5>
            <p className='text-sm md:text-base font-normal'>
              An intuitive gift-sharing app made for users to get what they love
              and desire by simply wishing for it. Made for gifters and wishers!
            </p>
          </div>
          <div className='shadow-sm p-4'>
            <img
              className='bg-yellow-200 p-2 rounded-xl w-12'
              src={store}
              alt='money'
            />
            <h5 className='font-bold text-xl md:text-2xl my-3'>Gift Boxing</h5>
            <p className='text-sm md:text-base font-normal'>
              An intuitive gift-sharing app made for users to get what they love
              and desire by simply wishing for it. Made for gifters and wishers!
            </p>
          </div>
          <div className='shadow-sm p-4'>
            <img
              className='bg-blue-200 p-2 rounded-xl w-12'
              src={money}
              alt='money'
            />
            <h5 className='font-bold text-xl md:text-2xl my-3'>
              Request money{" "}
            </h5>
            <p className='text-sm md:text-base font-normal'>
              An intuitive gift-sharing app made for users to get what they love
              and desire by simply wishing for it. Made for gifters and wishers!
            </p>
          </div>
        </div>
      </div>
      <div className='my-10 mt-16'>
        <h1 className='text-3xl md:text-5xl font-bold text-center my-5 capitalize'>
          How it works
        </h1>
        <div className='grid sm:grid-cols-2 items-center justify-center gap-8 mb-10'>
          <div>
            <h5 className='font-bold text-2xl sm:text-3xl my-3 capitalize'>
              Make a wishlist
            </h5>
            <p className='text-sm md:text-base font-normal'>
              Start making your wish by either selecting items from our wish
              store or start creating your own custom item easily and get it
              ready for sharing.
            </p>
          </div>
          <div className=''>
            <img src={phone2} alt='' />
          </div>
        </div>
        <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 items-center justify-center gap-8 mb-10'>
          <div className='-mt-5 sm:mt-0'>
            <img src={phone3} alt='' />
          </div>
          <div>
            <h5 className='font-bold text-2xl sm:text-3xl my-3 capitalize'>
              Share a wishlist
            </h5>
            <p className='text-sm md:text-base font-normal'>
              Start making your wish by either selecting items from our wish
              store or start creating your own custom item easily and get it
              ready for sharing.
            </p>
          </div>
        </div>
        <div className='sm:grid sm:grid-cols-2 items-center justify-center gap-8 mb-10'>
          <div>
            <h5 className='font-bold text-2xl sm:text-3xl my-3 capitalize'>
              Get it Granted
            </h5>
            <p className='text-sm md:text-base font-normal'>
              Start making your wish by either selecting items from our wish
              store or start creating your own custom item easily and get it
              ready for sharing.
            </p>
          </div>
          <div className='mt-5'>
            <img src={third} alt='' />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Center;
