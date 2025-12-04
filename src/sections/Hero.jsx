import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Cube from '../components/Cube.jsx'
import Ring from '../components/Ring.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'
import TargetWrapper from '../components/TargetWrapper.jsx'
import Desk from '../components/Desk.jsx'
import Laptop from '../components/Macbook.jsx'
import Developer from '../components/Developer.jsx'
import SpotifyIcon from '../components/SpotifyIcon.jsx'
const Hero = () => {
  // We dont need anymore leva.
/*   const x = useControls("HackerRoom",{
    positionX: {value:2.5, min:-10, max:10},
    positionY: {value:2.5 ,min:-10, max:10},
    positionZ: {value:2.5, min:-10, max:10},
    rotationX: {value:0, min:-10, max:10},
    rotationY: {value:0, min:-10, max:10},
    rotationZ: {value:0, min:-10, max:10},
    scale: {value:1, min:0.1, max:10}
  }) */
  // You can change the 3d object size according to device screen size
  const isSmall=useMediaQuery({maxWidth:440})
  const isMobile = useMediaQuery({maxWidth:768})
  const isTablet= useMediaQuery({minWidth:768,maxWidth:1024})
  // It will return proper sizes according to device
  const sizes=calculateSizes(isSmall,isMobile,isTablet)
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm-text-3xl text-2xl font-medium text-white text-center font-generalsans'> Hi, I am Vildan <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Designing & Building Products</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
          <Leva/>
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader/>}>

                <PerspectiveCamera makeDefault position={[0,0,20]}></PerspectiveCamera>
                <ambientLight intensity={2}/> // everything light
                <directionalLight position={[10,10,6]} intensity={0.5}/> // one direction light
                <HeroCamera isMobile={isMobile}>

{/*                 <HackerRoom 
/*                scale={0.07} 
                position={[0,0,0]} 
                rotation={[0,280,0]} 
                //When use leva controls, comment these values out
                */
/*                 position={[x.positionX, x.positionY, x.positionZ]}
                rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                cale={[x.scale, x.scale, x.scale]} */
                // These values selected by leva
/*                 position={[2,-8,2]}
                rotation={[0,Math.PI,0]}
                scale={isMobile ? 0.07 : 0.1} */
/*                 position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0,Math.PI,0]}
                /> */} */
{/*                 <Desk   
                 position={[-80, -35, -100]}
                 rotation={[Math.PI / 12, Math.PI/4, 0]}
                 scale={sizes.deskScale}
                /> */}
                <Developer animationName='greeting' position={sizes.developerPosition} scale={sizes.developerScale}  rotation={[0,-Math.PI/4,0]} />
                </HeroCamera>
                <group>
               <TargetWrapper position={sizes.macbookPosition} scale={sizes.macbookScale}/> 
                  <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactScale}/>
{/*                   <Laptop position={sizes.macbookPosition} scale={sizes.macbookScale}/> */}
{/*                   <Cube position={sizes.cubePosition} /> */}
<SpotifyIcon position={sizes.spotifyPosition} scale={sizes.spotifyScale}/>
                  <Ring position={sizes.ringPosition} scale={sizes.ringScale}/>
                </group>

                
                </Suspense>
            </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
          <a href='#about' className='w-fit'>
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
    </section>
  )
}

export default Hero