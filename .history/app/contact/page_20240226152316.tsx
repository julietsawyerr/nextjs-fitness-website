import { useForm } from 'react-hook-form';
import { MotionDiv } from '../ui/motion';
import Image from  'next/image';


type Props = {}

const Contact = (props: Props) => {
  return (
    <section 
     className='mx-auto w-5/6 pt-24 pb-32'
    >
      <div className="md:3/5">
        <h1>
          <span className='text-primary-500'>JOIN NOW</span>
        </h1>
      </div>
    </section>
  )
}

export default Contact