import Button from "../components/button"
const Subscibe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-center">
        Sign Up for
        <span className="text-red-600"> Updates </span>& NewsLetters.
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
      <input type="text" placeholder="Subscribe@newbalance.com" className="input"/>
       <div className="flex max-sm:justify-center items-center max-sm:w-full">
         <Button text={'Subscribe'}/>
       </div>
      </div>
    </section>
  )
}

export default Subscibe
