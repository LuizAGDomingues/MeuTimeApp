import { api } from "@/lib/axios";
import Image from "next/image";
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
      }).then(res => {setTeams(res.data)})
    }
  }, [props])

  return (
    <div className='grid grid-cols-4 gap-24 mr-40'>
      <div className="flex flex-col items-center gap-5">
        <Image src={} alt="" width={200} height={200}/>
        <span></span>
      </div>
    </div>
  )
}

export default TeamsShields