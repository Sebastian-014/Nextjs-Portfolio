
import { FC } from "react"

{/* Button */ }

const Button: FC<{ text: string }> = ({ text }) => {
  return (

    <button className="bg-purple-800 px-1 py-2 font-medium md:px-4 md:py-3 text-white md:font-semibold rounded-full shadow-lg hover:bg-purple-700">{text} </button>

  )
}

export default Button