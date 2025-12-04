// TargetWrapper.jsx
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Target from './Target'
import Laptop from './Macbook'

const TargetWrapper = (props) => {
  const ref = useRef()

  useGSAP(() => {
    gsap.to(ref.current.position, {
      z: ref.current.position.z + 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <group ref={ref} {...props}>
      <Laptop />
    </group>
  )
}

export default TargetWrapper