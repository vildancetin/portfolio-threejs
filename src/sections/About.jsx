import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx'
const About = () => {
    //copy the email
    const [hasCopied,setHasCopied]=useState(false)

    const handleCopy=()=>{
        navigator.clipboard.writeText('adrian@jsmastery.pro')
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }
  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 '>
                <div className='grid-container'>
                    <img src="/assets/grid7.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi,I'm Vildan</p>
                        <p className='grid-subtext'>Hi, I’m Vildan, a FullStack Developer passionate about creating visually appealing and user-friendly web applications. I enjoy working on both the frontend and backend, building features that are functional, efficient, and modern.
</p>
                  <div className='flex justify-between'>
                    <a
                    href="/cv/fullstack-cv.pdf"
                    download="Vildan-CV.pdf"
                    className="bg-black-300 px-3 py-2 rounded-md text-white text-sm inline-block active:scale-95 mt-6 hover:bg-pink-100/20 transition-all hover:text-black-200"
                    >
                      Download cv
                    </a>
                     <a
                    href="#footer"
                    className="bg-black-300 px-3 py-2 rounded-md text-white text-sm inline-block active:scale-95 mt-6 hover:bg-pink-100/20 transition-all hover:text-black-200"
                    >
                      Social accounts
                    </a>
                    </div>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:col-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid5.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I work primarily with the MERN stack, using technologies like React, Node.js, Nest.js, TailwindCSS, Docker, and Microservices. I’m also experienced in modern JavaScript and enjoy using these tools to build scalable, maintainable applications.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-2'>
                 <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        backgroundImageOpacity={0.5}
                        atmosphereColor="rgba(100,150,255,0.6)"
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
/*                         labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]} */
                    
                        />
                </div>
                 <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Istanbul,Türkiye and open to remote work worldwide.</p>
               <a href='#contact' className='w-fit'>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
               </a>
            </div>
                </div>
            </div>
              <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid6.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
               I love solving problems through code and creating projects that make an impact. I have worked on projects like an e-commerce backend, StockApp, and even a mobile app developed during university. I constantly challenge myself to learn new technologies and improve my skills, whether it’s modern JavaScript, React, Node.js, Nest.js, TailwindCSS, or microservices architecture.

              </p>
            </div>
          </div>
        </div>
                <div className="xl:col-span-1 ">
          <div className="grid-container">
            <img
              src="assets/hub-4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">vcetin1356@gmailcom</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default About