import {useState} from "react"
import Button from "../components/button"
import {arrowRight} from "../assets/icons"
import {statistics,shoes} from "../constants"
import {Nbshoes1} from "../assets/images"
import ShoeCard from "../components/shoeCard"

const Hero = () => {
  const [bigshoeimage,setbigshoeimage] = useState(Nbshoes1)
  return (
      <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddinf-x pt-28">
            <p className="text-xl font-montserrat text-red-600">Our Best Collections</p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
              <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
              <br />
              <span className="text-red-600 inline-block mt-3">NB </span> Shoes.
            </h1>
            <p className="font-montserrat text-lg text-slate-gray mt-6 mb-14 leading-8 sm:max-w-sm">Discover Stylish <span className="text-red-600">NB</span> Arrivals, Quality , Comfort , Innovative Design for your Active Lifestyle.</p>
            <Button text={"Shop Now "} imgURL={arrowRight}/>
            <div className="flex justify-start items-start flex-wrap mt-20  w-full gap-16">
              {statistics.map((stats)=>(
                <div key={stats.label}>
                    <p className="font-palanquin text-4xl font-bold">{stats.value}</p>
                    <p className="text-slate-gray leading-7 font-montserrat">{stats.label}</p>
                </div>
              ))}
            </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero 
        bg-cover bg-center">
          <img src={bigshoeimage} alt="NB shoes" className="object-contain relative z-10" width={"680px"} height={"500px"}/>
          <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe,index)=>(
              <div key={index}>
                <ShoeCard imgURL={shoe} changeimageUrl={(x)=>
                  setbigshoeimage(x)
                } bigimageurl={bigshoeimage}/>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Hero;
