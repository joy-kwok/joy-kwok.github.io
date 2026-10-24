import { AdvancedImage } from "@cloudinary/react"
import "../App.css"
import { cld } from "../content/image-cloud"
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners"
import { solid } from "@cloudinary/url-gen/actions/border";



function AboutMePage() {

  return (
    <>
      <section id="center" className="mb-2">


        {/* bg-[#cce3de] */}
        <div className="
        mb-10
        pt-2
        pl-10
        pr-10
        
        flex
        justify-center
        flex-wrap
        lg:flex-nowrap

        ">
            
          <div className="
          w-120
          mb-4
          ">
            <AdvancedImage cldImg={ cld.image('JoyHeadshot').roundCorners(byRadius(300, 300)) } />
          </div>

          <div className="
          w-full
          content-center
          lg:pl-10
          ">

            <p className="text-xl">
              I am a current student at DePaul University pursuing a Bachelor of Fine Arts in Animation with a concentration in Motion Graphics. I am passionate about creativity and learning how I can bring my ideas to life through visual storytelling and design! In my free time, I enjoy taking photos, drawing comics, playing the guitar, and crocheting.
            </p>
            
            <br/>
          </div>

        </div>

        <div className="">
          <h1 className="text-4xl text-center mb-3">
            Resume
          </h1>
          
          <div className="flex justify-center">
            <AdvancedImage cldImg={ cld.image('Joy_Kwok_Resume').border(solid(2, "black")) } />
          </div>

        </div>

      </section>
    </>
  )
}

export default AboutMePage
