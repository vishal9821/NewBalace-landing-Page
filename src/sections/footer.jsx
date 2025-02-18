import { HeaderLogo } from "../assets/images"
import {socialMedia, footerLinks}  from '../constants'
import {copyrightSign} from '../assets/icons'

const Footer = () => {
  var date = new Date().getFullYear()
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start justify-center gap-5">
          <a href="/">
            <img src={HeaderLogo} alt="New Balance Logo" className="object-contain" width={150} height={46}/>
          </a>
          <p className="text-base font-montserrat text-white-400 leading-7 cursor-pointer mt-6 sm:max-w-sm capitalize">Get shoes ready for the new term at your nearest NewBalance store. Find your perfect size in store.Get Rewards.</p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((item)=>(
              <div key={item.alt} className="bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-red-600">
                <img src={item.src} alt={item.alt} width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
           {footerLinks.map((link)=>(
             <div key={link}>
                <h4 className="text-white font-montserrat leading-normal font-medium mb-6 text-2xl">{link.title}</h4>
                <ul>
                  {link.links.map((item)=>(
                    <li key={item.name} className="mt-3 font-montserrat leading-normal text-white-400 text-base cursor-pointer
                    hover:text-slate-gray">
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
             </div>
           ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center cursor-pointer gap-2 font-montserrat">
        <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
        <p>{date} CopyRight. All Rights Reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions. (Vishal Aagwani).</p>
      </div>
    </footer>
  )
}

export default Footer
