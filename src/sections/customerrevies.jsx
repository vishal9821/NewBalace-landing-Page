import {reviews} from '../constants';
import CustomerCard from '../components/CustomerCard';

const Customerreviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center font-palanquin font-bold text-4xl'>What Our 
        <span className='text-red-600'> Customer </span>
        say ?
      </h3>
      <p className='info-text text-center max-w-lg m-auto mt-4'>
         Hear genuine stories from our satisfied customers about their exceptional experience with us.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col'>
      { reviews.map((review)=>(
        <CustomerCard key={review.customerName} name={review.customerName} imgurl={review.imgURL} rating={review.rating} feedback={review.feedback}/>
      ))}
      </div>
    </section>
  )
}

export default Customerreviews
