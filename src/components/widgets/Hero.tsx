
import Wrapper from "../shared/Wrapper"
import Herophoto from "/public/profile.jpg"
import Linkedinicon from "/public/linkedin-icon.jpg"
import Githubicon from "/public/github-icon.jpg"
import Link from "next/link"
import Image from "next/image"


const Hero = () => {
  return (

    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row justify-between">

          {/* Hero section text */}

          <div className="pt-20 md:pt-32 ml-10">

            <h2 className="text-2xl sm:text-3xl pb-8 pt-32 font-bold text-white">Hello, I&apos;m </h2>
            <h2 className="text-5xl sm:text-6xl font-bold text-purple-600">Sebastian Safdar</h2>

            <p className="text-sm md:text-base text-gray-300 pt-4 pb-6">Front-end Developer specialized in building fast,responsive <br /> and modern websites with Next.js & React. </p>

            {/* Social icons Link */}

            <div className="flex">
              <Link href="https://linkedin.com/in/sebastian-safdar-43b437319" target="blank">
                <Image src={Linkedinicon} alt="Linkedin icon" className=" rounded-full h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] cursor-pointer mr-10" />
              </Link>

              <Link href="https://github.com/Sebastian-014" target="blank">
                <Image src={Githubicon} alt="Github icon" className=" rounded-full h-[20px] w-[20px]  sm:h-[30px] sm:w-[30px] cursor-pointer" />
              </Link>
            </div>


          </div>

          {/* Hero section Image */}

          <div className="rounded-full">

            <Image src={Herophoto} alt="Profile" className="border border-purple-800 shadow-purple-700 shadow-md border-solid hover:cursor-pointer ml-12 md:mr-28 h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] rounded-full mt-20 md:mt-48" />

          </div>

        </div>
      </Wrapper>

    </section>
  )
}

export default Hero