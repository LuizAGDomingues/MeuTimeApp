import logo from '../../assets/logo.png'
import Image from 'next/image'

export default function Times() {
  return (
    <div className="w-full h-screen bg-[#223142] text-white px-7">
      <div className='flex flex-col items-center w-[308px]'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
      <div className='flex justify-between'>
        <form action="" className='flex flex-col items-center'>
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
        </form>
        <div className='grid grid-cols-4 gap-24'>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
          <div className='w-[227px] h-[253px] bg-black'></div>
        </div>
      </div>
    </div>
  )
}