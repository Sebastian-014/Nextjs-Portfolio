
import Linkedinicon from "/public/linkedin-icon.jpg"
import Githubicon from "/public/github-icon.jpg"
import Link from "next/link"
import Image from "next/image"

{/* Social icons Link */ }


const Socialicons = () => {
  return (
    <>
      <div className="flex space-x-10">

        <Link href="https://linkedin.com/in/sebastian-safdar-43b437319" target="blank">
          <Image src={Linkedinicon} alt="linkedin-icon" className=" rounded-full h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] cursor-pointer" />
        </Link>

        <Link href="https://github.com/Sebastian-014" target="blank">
          <Image src={Githubicon} alt="github-icon" className=" rounded-full h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] cursor-pointer" />
        </Link>

      </div>

    </>
  )
}

export default Socialicons