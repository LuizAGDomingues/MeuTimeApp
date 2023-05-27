import logo from '../../assets/logo.png'
import Image from 'next/image'

export default function Times() {
  return (
    <div className="w-full h-screen bg-[#223142] text-white">
      <div className='flex flex-col ml-7'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
    </div>
  )
}