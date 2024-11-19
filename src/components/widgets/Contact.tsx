
import Footer from "../layout/Footer"
import Button from "../shared/Button"
import Socialicons from "../shared/Socialicons"
import Wrapper from "../shared/Wrapper"
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (

    <>
      <section>
        <Wrapper>
          <div>
            <h2 className="pt-32 md:pt-96 flex justify-center text-2xl sm:text-3xl font-extrabold text-purple-600">CONTACT ME</h2>
          </div>

          <div>
            <h3 className="flex justify-center text-4xl md:text-6xl font-serif pt-6 md:pt-12 pb-4 text-slate-300 underline">Get in touch</h3>
          </div>

          {/* Contact info */}


          <div className="flex justify-center space-x-2 md:space-x-12 text-slate-400 text-xs md:text-base md:font-medium">
            <div className="flex">
              <LuPhone className=" size-4 md:size-6" color="white" /> &nbsp; +92 3082744982
            </div>
            <div className="flex">
              <MdOutlineMail className=" size-4 md:size-6" color="white" /> &nbsp; sebastian.official14@gmail.com
            </div>
          </div>


          {/* Contact form */}

          <div className="flex justify-center items-center pt-2 pb-4">

            <form className="pt-8 pb-4 w-[250px] md:w-[500px]">

              <div className="flex flex-col gap-5">

                <input type="text" placeholder="First name" className="p-2 w-full rounded-md" required />

                <input type="text" placeholder="Last name" className="p-2 rounded-md" required />

                <input type="email" placeholder="Email" className="p-2 rounded-md" required />

                <textarea placeholder="Message" className="p-2 rounded-md" required></textarea>

              </div>

            </form>

          </div>


          {/* Send Message Button */}

          <div className="flex justify-center">

            <Button text={"Send Message"} />

          </div>

          <br />
          <br />

          {/* Social icons Link */}

          <div className="flex justify-center pt-3 md:pt-6 pb-4">
            <Socialicons />
          </div>

        </Wrapper>
      </section>

      <Footer />


    </>
  )
}

export default Contact




