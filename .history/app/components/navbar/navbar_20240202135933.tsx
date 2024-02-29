// import { Bar3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import Link from 'next/link'
type Props = {}



const Navbar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return (
    <nav>
      <div 
        className={`${flexBetween} fixed z-30 top-0 w-full py-6 bg-red-300 border-2 border-gray-500`}
      >
          <div className={`${flexBetween} mx-auto w-5/6 border border-sky-400`}>
            <div className={`${flexBetween} 
            w-full gap-16`}>
                <Image src='/assets/logo.png' alt='Evogym-logo' width={113} height={24} />

                {/* Right side */}
                <div className={`${flexBetween} w-full`}>
                  <div >
                    <ul className={`${flexBetween} gap-8 text-sm `}>
                    <li >
                    <Link href='/'
                    >Home</Link>
                    </li>

                    <li>
                    <Link href='/benefits'
                    >Benefits</Link>
                    </li>

                    <li>
                    <Link href='/classes'
                    >Our Classes</Link>
                    </li>

                    <li>
                    <Link href='/contact'
                    >Contact us</Link>
                    </li>  
                    </ul>
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                      <p>Sign In</p>
                      <button>Become a Member</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar;