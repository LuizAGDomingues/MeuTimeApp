"use client"

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query';
import { api } from '@/lib/axios';

function page() {
  const searchParams = useSearchParams();
  const league = searchParams.get('league');
  const seasonYear = searchParams.get('seasonYear');
  const team = searchParams.get('team');
  const [ players, setPlayers ] = useState<{}[]>()
  
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

  // useEffect(() => {
  //   // Verificar se as informações estão presentes
  //   if (!league || !seasonYear || !team) {
  //     // Redirecionar para outra página ou exibir uma mensagem de erro
  //     router.push('/');
  //   }
  // }, [league, seasonYear, team]);

  const { data: timeStatisticsData, isLoading: timeStatisticsLoading, error: timeStatisticsError } = useQuery('timeStatistics', () => {
    return api.get('teams/statistics', {
      headers: {
        "x-rapidapi-host": API_HOST,
		    "x-rapidapi-key": API_KEY
      }, 
      params: {
        league: league,
        season: seasonYear,
        team: team
      }
    }).then((response) => response.data.response)
  })

  useEffect(() => {
    api.get('players/squads', {
      headers: {
        "x-rapidapi-host": API_HOST,
		    "x-rapidapi-key": API_KEY
      },
      params: {
        team: team
      }
    }).then((response) => setPlayers(response.data.response[0].players))
  }, [])

  if(timeStatisticsLoading || players === undefined) {
    console.log(timeStatisticsData, players)
    return <section className='statisticpage w-full h-screen flex items-center justify-center px-7 pb-20 text-white'>Carregando...</section>
  }

  return (
    <section className='statisticpage w-full h-screen px-7 pb-20 text-white overflow-auto '>
      <div className='flex flex-col items-center w-[308px]'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>

      <div className='flex justify-between'>

        <div className='flex flex-col items-start w-[308px]'>
          <div className='flex items-center gap-2 mt-20'>
            <Image src={timeStatisticsData.team.logo} alt={'logo do time'} width={56} height={56} />
            <span className='font-semibold'>{timeStatisticsData.team.name}</span>
          </div>
          <span className='mt-8 ml-24 mb-8'>{timeStatisticsData.lineups[0].formation}</span>

          <table>
            <thead>
              <tr>
                <th></th>
                <th className="text-center pl-5">Casa</th>
                <th className="text-center pl-2">Fora</th>
                <th className="text-center pl-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jogos</td>
                <td className="pl-8">{timeStatisticsData.fixtures.played.home}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.played.away}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.played.total}</td>
              </tr>
              <tr>
                <td>Vitórias</td>
                <td className="pl-8">{timeStatisticsData.fixtures.wins.home}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.wins.away}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.wins.total}</td>
              </tr>
              <tr>
                <td>Empates</td>
                <td className="pl-8">{timeStatisticsData.fixtures.draws.home}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.draws.away}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.draws.total}</td>
              </tr>
              <tr>
                <td>Derrotas</td>
                <td className="pl-8">{timeStatisticsData.fixtures.loses.home}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.loses.away}</td>
                <td className="pl-3">{timeStatisticsData.fixtures.loses.total}</td>
              </tr>

              <tr>
                <td className='font-bold pt-3'>GOLS</td>
              </tr>
              <tr>
                <td>Feitos</td>
                <td className="pl-8">{timeStatisticsData.goals.for.total.home}</td>
                <td className="pl-3">{timeStatisticsData.goals.for.total.away}</td>
                <td className="pl-3">{timeStatisticsData.goals.for.total.total}</td>
              </tr>
              <tr>
                <td>Sofridos</td>
                <td className="pl-8">{timeStatisticsData.goals.against.total.home}</td>
                <td className="pl-3">{timeStatisticsData.goals.against.total.away}</td>
                <td className="pl-3">{timeStatisticsData.goals.against.total.total}</td>
              </tr>

              <tr>
                <td className='font-bold pt-3'>Média de Gols</td>
              </tr>
              <tr>
                <td>Feitos</td>
                <td className="pl-8">{timeStatisticsData.goals.for.average.home}</td>
                <td className="pl-3">{timeStatisticsData.goals.for.average.away}</td>
                <td className="pl-3">{timeStatisticsData.goals.for.average.total}</td>
              </tr>
              <tr>
                <td>Sofridos</td>
                <td className="pl-8">{timeStatisticsData.goals.against.average.home}</td>
                <td className="pl-3">{timeStatisticsData.goals.against.average.away}</td>
                <td className="pl-3">{timeStatisticsData.goals.against.average.total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='grid grid-cols-10 gap-4 ml-[13rem]'>
          {players.map((player: any) => {
            return (
              <div key={player.id} className='flex flex-col items-center gap-3'>
                <Image src={player.photo} alt="" width={88} height={88}/>
                <span>{player.name}</span>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default page