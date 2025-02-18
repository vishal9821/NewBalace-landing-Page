const ServiceCard = ({label,imgURL,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-red-600 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} className="object-contain" />
      </div>
      <h3 className="font-palanquin font-bold text-3xl leading-normal mt-5">{label}</h3>
      <p className="font-montserrat leading-normal text-slate-gray mt-3 break-words text-lg">{subtext}</p>
    </div>
  )
}

export default ServiceCard


