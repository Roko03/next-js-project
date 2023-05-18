import Image from 'next/image';
import logo from '../../public/logo.svg'

export default function Header(){
    return (
        <header>
            <div className='container'>
                <Image src={logo} alt="Logo"/>
            </div>
        </header>
    )
}