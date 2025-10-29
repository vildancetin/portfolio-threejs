import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
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
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
          <Leva/>
            <Canvas classNamew-full h-full>
                <Suspense fallback={<CanvasLoader/>}>

                <PerspectiveCamera makeDefault position={[0,0,20]}></PerspectiveCamera>
                <HackerRoom 
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
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0,Math.PI,0]}

                />
                <ambientLight intensity={1}/>
                <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero