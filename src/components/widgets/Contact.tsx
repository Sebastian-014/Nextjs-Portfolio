
import Button from "../shared/Button"
import Socialicons from "../shared/Socialicons"
import Wrapper from "../shared/Wrapper"


const Contact = () => {
  return (

    <>
      <section>
        <Wrapper>
          <div>
            <h2 className="pt-32 md:pt-96 flex justify-center text-2xl sm:text-3xl font-extrabold text-purple-600">CONTACT ME</h2>
          </div>

          <div>
            <h3 className="flex justify-center text-3xl md:text-5xl font-serif pt-6 md:pt-12 pb-4 text-slate-300 underline">Get in touch</h3>
          </div>

          {/* Contact info */}

          <div className="flex justify-center text-slate-400 text-sm ml-10 md:text-lg sm:space-x-4">
            <p>+92-3082744982 | sebastian.official14@gmail.com</p>
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

          <div className="flex justify-center pb-6">
            <Socialicons />
          </div>


        </Wrapper>
      </section>


    </>
  )
}

export default Contact




