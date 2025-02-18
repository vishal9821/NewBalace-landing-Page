import {special} from "../assets/images"
import Button from "../components/button"
import {arrowRight} from "../assets/icons"

const Special = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse max-container gap-10">
       <div className="flex-1">
        <img src={special} alt="spcial offer image" width={773} height={687} className="object-contain w-full" />
       </div>
       <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg"><span className="text-red-600">special </span>
        offer
        </h2>
            <p className="mt-4 lg:max-w-lg info-text">
              Embark on a shopping journey that redefines your experience with unbeatable deals.From 
              premier selection to incredible savings. We unparalleled value that sets us apart.</p>
              <p className="mt-6 lg:max-w-lg info-text">
                Nevigate a realm of possibilities designed to fullfil your unique desires, surpassing the
                loftiest expectations. Your journey with us is nothing short of exceptional.
              </p>
            <div className="mt-11 flex justify-wrap items-center gap-6">
            <Button text={"Shop Now"} imgURL={arrowRight}/>
            <Button text={"Learn More"} />
            </div>
      </div>
    </section>
  )
}

export default Special
