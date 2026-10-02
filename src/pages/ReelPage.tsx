import { AdvancedVideo } from "@cloudinary/react";
import "../App.css"
import { cld } from "../content/image-cloud";

function ReelPage() {

  return (
    <>
      <section id="center" className="">
        
        <h1 className="
        text-4xl
        text-center
        mb-3
        ">
          Demo Reel
        </h1>

        <div className="flex justify-center mb-10">
          {/* <h1 className="mt-10 text-6xl">[UNDER CONSTRUCTION]</h1> */}
          {/* <video width="1120" height="960" controls autoPlay src="projects/Final Animation.mp4">
          Your browser does not support the video tag.
          </video> */}
          <AdvancedVideo cldVid={cld.video("2026_Demo_Reel")} 
            controls={true} autoPlay={true} playsInline={true} 
            className="
                md:h-160
            "/>
        </div>


      </section>
    </>
  )
}

export default ReelPage;
