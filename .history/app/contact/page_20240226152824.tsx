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
          <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE.
        </h1>
        <p className="my-5">
        Have a question, feedback, or just want to say hello? We d love to hear from you! Please feel free to reach out using the contact details below or fill out the contact form.
        </p>
      </div>
    </section>
  )
}

export default Contact