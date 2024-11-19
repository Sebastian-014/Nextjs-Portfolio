
import Wrapper from "../shared/Wrapper"
import Htmllogo from "/public/html-logo.png"
import Csslogo from "/public/css-logo.png"
import Javascriptlogo from "/public/javascript-logo.png"
import Typescriptlogo from "/public/typescript-logo.jpg"
import Tailwindlogo from "/public/tailwind-logo.jpg"
import Nextjslogo from "/public/nextjs-logo.jpg"
import Reactlogo from "/public/react-logo.jpg"
import Gitlogo from "/public/git-logo.png"
import Image from "next/image"


const Skills = () => {
  return (
    <>

      <section>
        <Wrapper>

          <div>
            <h2 className="pt-20 md:pt-96 flex justify-center text-3xl sm:text-4xl font-extrabold text-purple-600">SKILLS</h2>
          </div>

          {/* Skills-Logo Images */}

          <div className="flex flex-col md:flex-row md:space-x-8 ml-20 md:ml-6 justify-center pt-10 md:pt-20 gap-4">

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-200 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Htmllogo} alt="html-logo" className="h-[140px] w-[130px]" />
            </div>

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Csslogo} alt="CSS-logo" className="h-[150px] w-[150px]" />
            </div>

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Javascriptlogo} alt="javascript-logo" className="h-[170px] w-[180px]" />
            </div>

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Typescriptlogo} alt="typescript-logo" className="h-[130px] w-[130px]" />
            </div>

          </div>

          <br />
          <br />

          <div className="flex flex-col md:flex-row md:space-x-8 ml-20 md:ml-6 justify-center gap-4">

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Tailwindlogo} alt="tailwindCSS logo" className="h-[140px] w-[140px]" />
            </div>

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Nextjslogo} alt="Next.js logo" className="h-[140px] w-[140px]" />
            </div>


            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Reactlogo} alt="React logo" className="h-[150px] w-[140px]" />
            </div>

            <div className="flex justify-center items-center border border-zinc-500 rounded-md w-60 h-44 hover: cursor-pointer hover:scale-110 transition duration-300 hover:shadow-2xl hover:shadow-slate-600">
              <Image src={Gitlogo} alt="git logo" className="h-[150px] w-[150px]" />
            </div>

          </div>

        </Wrapper>

      </section>
    </>
  )
}

export default Skills