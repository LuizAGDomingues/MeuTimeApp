"use client"

import { api } from '@/lib/axios';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export default function Times() {
  // const { data, isLoading, error } = useQuery('countries', () => {
  //   return api.get('countries', {
  //     headers: {
  //       "x-rapidapi-host": API_HOST,
	// 	    "x-rapidapi-key": API_KEY
  //     }
  //   }).then((response) => response.data.response[0].name)
  // })


  return (
    <div className="w-full h-screen bg-[#223142] text-white px-7">
      <div className='flex flex-col items-center w-[308px]'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
      <div className='flex justify-between'>
        <form action="" className='flex flex-col mt-28'>
          <label htmlFor="">Selecione o país</label>
          <input type="text" className='bg-[#D5E2F1] px-3 py-1 rounded-lg w-[308px] mt-1 text-black' placeholder='Brazil'/>
          <select name="pais" id="pais">
            <option value=""></option>
            <option value="brasil"></option>
            <option value="eua">EUA</option>
          </select>
          <label htmlFor="" className='mt-6'>Selecione a liga</label>
          <input type="text" className='bg-[#D5E2F1] px-3 py-1 rounded-lg w-[308px] mt-1 text-black'placeholder='Brasileirão Série A'/>
          <label htmlFor="" className='mt-6'>Selecione a temporada</label>
          <input type="text" className='bg-[#D5E2F1] px-3 py-1 rounded-lg w-[308px] mt-1 text-black'placeholder='2023'/>
        </form>
        <div className='grid grid-cols-4 gap-24 mr-40'>
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