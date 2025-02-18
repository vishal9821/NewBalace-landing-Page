import {star} from '../assets/icons'
const CustomerCard = ({name,imgurl,rating,feedback}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgurl} alt={`${name}'s picture`} className="rounded-full object-center h-[120px] w-[120px]" />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='flex flex-row justify-center items-center gap-2.5 mt-4'>
        <img src={star} className='object-contain w-[24px] h-[24px]'  />
        <p className='font-montserrat text-xl text-slate-gray'>({rating})</p>
      </div>
      <h3 className='font-palanquin text-3xl font-bold text-center mt-1'>{name}</h3>
    </div>
  )
}

export default CustomerCard
