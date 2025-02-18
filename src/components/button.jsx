
const Button = ({imgURL ,text }) => {
  return (
    <button className={`flex flex-row gap-2 justify-center items-center bg-red-600 text-white  border-red-600 py-4 px-7  rounded-full
    text-lg leading-none font-montserrat transition ease-in-out duration-700 hover:bg-red-800 hover:scale-110 active:scale-90
    hover:drop-shadow-2xl`}>
        {text}
        {imgURL&&<img src={imgURL} alt="button icon" />}
    </button>
  )
}

export default Button;
