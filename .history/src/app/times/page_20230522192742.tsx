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
        <form action="" className='flex flex-col mt-28'>
          <label htmlFor="">Selecione o país</label>
          <input type="text" className='bg-[#D5E2F1] px-3 py-1 rounded-lg w-[308px]'/>
          <label htmlFor="" className='mt-8'>Selecione a liga</label>
          <input type="text" className='bg-[#D5E2F1] px-3 py-1 rounded-lg w-[308px]'/>
          <label htmlFor="">Selecione a temporada</label>
          <input type="text" className='bg-[#D5E2F1] px-3 py-1 rounded-lg w-[308px]'/>
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