import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query';
import { api } from '@/lib/axios';

function page() {
  const router = useRouter();
  const { league, seasonYear, team } = router.query;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

  useEffect(() => {
    // Verificar se as informações estão presentes
    if (!league || !seasonYear || !team) {
      // Redirecionar para outra página ou exibir uma mensagem de erro
      router.push('/');
    }
  }, [league, seasonYear, team]);

  const { data: timeStatisticsData, isLoading: timeStatisticsLoading, error: timeStatisticsError } = useQuery('timeStatistics', () => {
    return api.get('teams', {
      headers: {
        "x-rapidapi-host": API_HOST,
		    "x-rapidapi-key": API_KEY
      }, params: {
        
      }
    }).then((response) => response.data)
  })

  const { data: timeSquadData, isLoading: timeSquadLoading, error: timeSquadError } = useQuery('timeSquad', () => {
    return api.get('countries', {
      headers: {
        "x-rapidapi-host": API_HOST,
		    "x-rapidapi-key": API_KEY
      }
    }).then((response) => response.data)
  })

  return (
    <section className='statisticpage w-full h-screen'>
      <div className='flex flex-col items-center w-[308px]'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>

    </section>
  )
}

export default page