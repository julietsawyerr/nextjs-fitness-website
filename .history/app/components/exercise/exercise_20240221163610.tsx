import { MotionDiv } from '@/app/ui/motion'
import { ExerciseType } from "@/app/ui/types"
import Image from 'next/image'

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity:1, scale:1}
}

const Exercise = ({workout, equipment, description, img, video}: ExerciseType) => {
  return (
    <MotionDiv 
    className='bg-white w-[350px] mt-5 rounded-2 border-2 border-gray-100'
    variants={childVariant}
    >
      {/* Images */}
      <div className="md:w-[350px] h-[300px] border-2 border-gray-500">
        <Image  src={`/exercise-gif/${img}`} alt={workout} width={350} height={350} objectFit="cover"/>
      </div>

  {/* description */}
  <div className="px-5 py-16 text-center">

  </div>
    </MotionDiv>


  
  )
}

export default Exercise;