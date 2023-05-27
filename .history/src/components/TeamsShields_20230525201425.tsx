import { api } from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

interface TeamShieldsProps {
  country: string;
  leagueId: string;
  season: string
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

const handleClick = ({ leagueId, season }: TeamShieldsProps) => {
  const router = useRouter();
  const league = leagueId;
  const seasonId = season;
  const team = 'valor3';

  const query = `?info1=${league}&info2=${season}&info3=${team}`;
  router.push(`/outra-pagina${query}`);
};

function TeamsShields(props: TeamShieldsProps) {
  const [teams, setTeams] = useState<{}[]>()

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
          <button onClick={() => handleClick(props)} key={team.team.id} className="flex flex-col items-center justify-between gap-5">
            <Image src={team.team.logo} alt="" width={200} height={200}/>
            <span>{team.team.name}</span>
          </button>
        )
      })}
    </div>
  )
}

export default TeamsShields