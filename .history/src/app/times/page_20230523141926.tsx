"use client"

import { api } from '@/lib/axios';
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react';
import TeamsShields from '@/components/TeamsShields';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export default function Times() {
  const [pais, setPais] = useState('')
  const [league, setLeague] = useState('')
  const [season, setSeason] = useState('')
  const [leagueList, setLeagueList] = useState<{}[]>()
  const [seasonList, setSeasonList] = useState<{}[]>()

  const { data: countriesData, isLoading: countriesLoading, error: countriesError } = useQuery('countries', () => {
    return api.get('countries', {
      headers: {
        "x-rapidapi-host": API_HOST,
		    "x-rapidapi-key": API_KEY
      }
    }).then((response) => response.data)
  })

  useEffect(() => {
    if(pais != '') {
      api.get('leagues', {
        params: {
          search: pais
        },
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY
        }
      }).then(res => {
        setLeagueList(res.data.response)
      })
    }
  }, [pais])

  useEffect(() => {
    leagueList?.map((leagues: any) => {
      if(leagues.league.id === league) {
        setSeasonList(leagues.seasons)
      }
    })
  }, [league])

  return (
    <div className="w-full h-screen bg-[#223142] text-white px-7">
      <div className='flex flex-col items-center w-[308px]'>
        <Image src={logo} alt='Logo exemplo'/>
        <span className='text-white font-bold text-center'>Meu Time<br/>Descubra tudo sobre seu clube favorito</span>
      </div>
      <div className='flex justify-between'>
        <form action="" className='flex flex-col mt-28'>

          <label htmlFor="">Selecione o país</label>
          <select name="pais" id="pais" onChange={e => setPais(e.target.value)} className='bg-[#D5E2F1] px-3 py-2 rounded-lg w-[308px] mt-1 text-black'>
            <option value=""></option>
            { countriesLoading ? <option value="">Carregando...</option> : 
            countriesData.response.map((paises: { code: string; name: string }) => {
              return (
                <option value={paises.name} key={paises.name}>{paises.name}</option>
              )
            })}
          </select>

          <label htmlFor="" className='mt-6'>Selecione a liga</label>
          <select name="league" id="league" onChange={e => setLeague(e.target.value)} className='bg-[#D5E2F1] px-3 py-2 rounded-lg w-[308px] mt-1 text-black'>
            <option value=""></option>
            {leagueList?.map((liga: any) => {
              return (
                <option value={liga.league.id} key={liga.league.id}>{liga.league.name}</option>
              )
            })}
          </select>

          <label htmlFor="" className='mt-6'>Selecione a temporada</label>
          <select name="season" id="season" onChange={e => setSeason(e.target.value)} className='bg-[#D5E2F1] px-3 py-2 rounded-lg w-[308px] mt-1 text-black'>
            <option value=""></option>
            {seasonList?.map((seasons: any) => {
              return (
                <option value={seasons.year} key={seasons.year}>{seasons.year}</option>
              )
            })}
          </select>

        </form>
        
        <TeamsShields country='' leagueId='' season={} />
      </div>
    </div>
  )
}