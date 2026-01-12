// import Image from "next/image";
import Title from "../components/title/title";
import Experiences from "../components/experiences/experiences";
import Terminal from "../components/terminal/terminal";
import Contact from "../components/contact/contact";

export default function Home() {
  return (
    <div>
      <section id="terminal-section" className="section-default flex flex-col gap-8 items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col gap-4 w-full lg:w-auto items-center lg:items-start">
          <div className="w-full flex justify-center lg:justify-start pl-1">
             <Title />
          </div>
          
          {/* Left Column */}
          <div className="flex flex-col lg:flex-row gap-8 w-full lg:w-fit items-stretch justify-center">
            <div className="w-full lg:w-[30vw] h-[50vh] lg:h-[64vh]">
              <Terminal />        
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-[30vw] flex flex-col gap-8 h-auto lg:h-[64vh]">
              <div className="h-[40vh] lg:h-[65%]">
                <Experiences />
              </div>
              <div className="h-[22vh] lg:flex-1 min-h-0">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
