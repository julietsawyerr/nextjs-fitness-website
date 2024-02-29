import Link from 'next/link'

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    // links: Array<{ name: string, href: string }>;
}

const Benefit = ({icon, title, description}: Props) => {
  return (
    <div>
        <Link href='/classes'>
            <div className="flex justify-center items-center mt-5 bg-gray-500 w- h-[100px]">
                {/* {icon} */}
            </div>
        </Link>

    </div>
  )
}

export default Benefit;