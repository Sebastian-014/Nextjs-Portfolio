
import Wrapper from "../shared/Wrapper"
import Photo from "/public/about-photo.jpg"
import Linkedinicon from "/public/linkedin-icon.jpg"
import Githubicon from "/public/github-icon.jpg"
import Link from "next/link"
import Image from "next/image"



const About = () => {
  return (
    <>
      <section>
        <Wrapper>

          <div>
            <h2 className="pt-24 md:pt-96 text-2xl sm:text-3xl  font-extrabold text-purple-600 ml-10">ABOUT ME</h2>
          </div>

          <div className="flex ml-10 flex-col md:flex-row justify-between">

            {/* About section text */}

            <div className=" text-sm md:text-base max-w-lg pt-10 mr-4 text-gray-300 tracking-wide word-spacing-wide">

              <p> <b>Hi,&nbsp; I&apos;m Sebastian</b> from Karachi-Pakistan, a Passionate and innovative web developer  with a strong foundation in Front-end Development,
                I&apos;ve crafted responsive,  user-centric interfaces that delight and inspire.
              </p>

              <p className="pt-4"> I embarked on my IT journey in <b>2024,</b> and I&apos;m thrilled to be part of an industry that&apos;s  constantly evolving. With <b>AI</b> reshaping our world daily,
                I&apos;m driven to stay ahead of the  curve and leverage technology to create innovative solutions that make a lasting impact.</p>

              <h4 className=" text-md sm:text-xl font-bold text-indigo-50 pt-10 pb-2">The Turning Point :</h4>

              <p className="pb-5">As a former Pre-Medical Student, I discovered my true passion lay in crafting innovative  digital experiences. Today, I&apos;m a driven Front-end developer with
                <b> expertise in:</b></p>

              <b><ul className="space-y-1">
                <li>- HTML | CSS</li>
                <li>- Javascript</li>
                <li>- Typescript</li>
                <li>- Tailwind CSS</li>
                <li>- Next.js</li>
                <li>- React.js</li>
              </ul></b>

              <h4 className=" text-md sm:text-xl font-bold text-indigo-50 pt-10 pb-2">Current Obsessions :</h4>

              <p className="pb-2"><b>- Next.js</b> is my current focus, but my curiosity extends far beyond<b> :</b></p>
              <p>I&apos;m expanding my skill set to include <b>&apos;Artificial intelligence&apos;,</b> and I&apos;m excited to  apply  my knowledge to build intelligent, scalable, and efficient web applications.</p>

              <div className="flex pt-10">
                <h4 className="text-slate-300 text-sm md:text-base"><b>for more, see me on :</b></h4>

                {/* Social icons Link*/}

                <div className="flex ml-3 md:ml-6 gap-x-5 md:gap-x-10">
                  <Link href="https://linkedin.com/in/sebastian-safdar-43b437319" target="blank">
                    <Image src={Linkedinicon} alt="Linkedin icon" className=" rounded-full h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] cursor-pointer" />
                  </Link>

                  <Link href="https://github.com/Sebastian-014" target="blank">
                    <Image src={Githubicon} alt="Github icon" className=" rounded-full h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] cursor-pointer" />
                  </Link>
                </div>

              </div>
            </div>

            {/* About section Image */}

            <div className="pt-20 md:pt-44">

              <Image src={Photo} alt="Photo" className="rounded-md mr-28 hover:cursor-pointer h-[250px] w-[300px] md:h-[350px] md:w-[400px]" />

            </div>

          </div>

        </Wrapper>
      </section>
    </>
  )
}

export default About