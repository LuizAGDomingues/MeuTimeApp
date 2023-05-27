"use client"

import { api } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TeamShieldsProps {
  country: string;
  leagueId: string;
  season: string
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

function TeamsShields(props: TeamShieldsProps) {
  const [teams, setTeams] = useState<{}[]>()

  const handleClick = ({leagueId, season}: TeamShieldsProps, teamId: string) => {
    const league = leagueId;
    const seasonYear = season;
    const team = teamId;

  };

  useEffect(() => {
    if(props.country != '' && props.leagueId != '' && props.season != '') {
      api.get('teams', {
        params: {
          league: props.leagueId,
          season: props.season,
          country: props.country
        },
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY
        }
      }).then(res => {setTeams(res.data.response)})
    }
  }, [props])

  return (
    <div className='grid grid-cols-4 gap-24 mr-40'>
      {teams?.map((team: any) => {
        return (
          <Link href={`/statistics?info1=${league}&info2=${seasonYear}&team=${team.team.id}`} onClick={() => handleClick(props, team.team.id)} key={team.team.id} className="flex flex-col items-center justify-between gap-5">
            <Image src={team.team.logo} alt="" width={200} height={200}/>
            <span>{team.team.name}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default TeamsShields