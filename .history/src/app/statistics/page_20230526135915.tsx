import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query';
import { api } from '@/lib/axios';

function page() {
  // const router = useRouter();
  // const { league, seasonYear, team } = router.query;
  // const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  // const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

  // useEffect(() => {
  //   // Verificar se as informações estão presentes
  //   if (!league || !seasonYear || !team) {
  //     // Redirecionar para outra página ou exibir uma mensagem de erro
  //     router.push('/');
  //   }
  // }, [league, seasonYear, team]);

  // const { data: timeStatisticsData, isLoading: timeStatisticsLoading, error: timeStatisticsError } = useQuery('timeStatistics', () => {
  //   return api.get('teams', {
  //     headers: {
  //       "x-rapidapi-host": API_HOST,
	// 	    "x-rapidapi-key": API_KEY
  //     }, params: {
  //       league: league,
  //       season: seasonYear,
  //       team: team
  //     }
  //   }).then((response) => response.data.response)
  // })

  // const { data: timeSquadData, isLoading: timeSquadLoading, error: timeSquadError } = useQuery('timeSquad', () => {
  //   return api.get('players/squads', {
  //     headers: {
  //       "x-rapidapi-host": API_HOST,
	// 	    "x-rapidapi-key": API_KEY
  //     },
  //     params: {
  //       team: team
  //     }
  //   }).then((response) => response.data.response)
  // })

  return (
    <section className='statisticpage w-full h-screen px-7 pb-20 text-white'>
      <div className='flex flex-col items-center w-[308px]'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>

      <div className='flex justify-between'>

        <div className='flex flex-col items-start w-[308px]'>
          <div className='flex items-center gap-2 mt-20'>
            <div className='w-14 h-14 bg-black'></div>
            <span className='font-semibold'>Manchester</span>
          </div>
          <span className='mt-8 ml-24 mb-8'>4-2-3-1</span>

          <table>
            <thead>
              <tr>
                <th>Casa</th>
                <th>Casa</th>
                <th>Fora</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Jogos</th>
                <th>11</th>
                <th>10</th>
                <th>21</th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='grid grid-cols-10 gap-4 mr-[13.5rem] mt-16'>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
          <div className='w-[88px] h-[122px] bg-black'></div>
        </div>
      </div>

    </section>
  )
}

export default page