import {star} from '../assets/icons';
const PopularProductCards = ({imgURL , name , price , rating}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px] object-contain bg-card  bg-cover bg-center cursor-pointer' />
      <p className='flex justify-start items-center gap-2 mt-8 font-montserrat leading-normal text-slate-gray text-xl'><img src={star} alt="Star icon" className='inline-block' />({rating})</p>
      <h3 className='font-palanquin text-2xl leading-normal mt-2 font-semibold'>{name}</h3>
      <p className='text-red-600 font-montserrat leading-normal text-2xl mt-2 font-semibold'>{price}</p>
    </div>
  )
}

export default PopularProductCards
