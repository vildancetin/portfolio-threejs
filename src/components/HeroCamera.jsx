import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

const HeroCamera = ({children,isMobile}) => {
    const groupRef=useRef()
    //state.camera -> access to camera
    //state.pointer -> access to mouse pointer
    //delta -> time difference between frames
    useFrame((state,delta)=>{
      easing.damp3(state.camera.position,[0,0,20],0.25,delta)
   // const rotY = Math.max(Math.min(state.pointer.x/8, 0.4), -0.4)
const rotX = Math.max(Math.min(state.pointer.y/6, 0.35), -0.35)
      if(!isMobile){
      easing.dampE(groupRef.current.rotation,
        [
rotX,
          0,
          0
        ]
        ,0.25,delta)
      }
    })
  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>{children}</group>
  )
}

export default HeroCamera