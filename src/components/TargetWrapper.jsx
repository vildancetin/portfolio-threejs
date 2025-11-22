// TargetWrapper.jsx
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TargetModel from './Target' 

const TargetWrapper = (props) => {
  const ref = useRef()

  useGSAP(() => {
    gsap.to(ref.current.position, {
      y: ref.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <group ref={ref} {...props}>
      <TargetModel />
    </group>
  )
}

export default TargetWrapper