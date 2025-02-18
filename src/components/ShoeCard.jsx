const ShoeCard = ({imgURL,changeimageUrl,bigimageurl}) => {
    const handleclick = ()=>{
        if(bigimageurl !== imgURL.bigShoe){
            
          changeimageUrl(imgURL.bigShoe);
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigimageurl===imgURL.bigShoe?'border-red-600':'border-transparent'} cursor-pointer
    max-sm:flex-1`
    } onClick={handleclick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoe-collections" width={127} height={103} className="object-contain" />
      </div>
    </div>
  )
}

export default ShoeCard
