import Button from "../components/button"
import {superNB} from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">we provide you <span className="text-red-600">super </span>
        <span className="text-red-600">
            Quality </span> Shoes.
        </h2>
            <p className="mt-4 lg:max-w-lg info-text">
              Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing
              you with unmatched quality, innovation, and a touch of elegance.</p>
              <p className="mt-6 lg:max-w-lg info-text">
                Our dedication to detail and excellence ensures your satisfaction.
              </p>
            <div className="mt-11">
            <Button text={"View details"}/>
            </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={superNB} alt="super-shoe by NB" width={570} height={522} className="object-contain bg-center bg-cover bg-card cursor-pointer" />
      </div>
      
    </section>
  )
}

export default SuperQuality
