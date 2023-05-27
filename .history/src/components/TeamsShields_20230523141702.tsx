import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

interface TeamShieldsProps {
  contry: string;
  leagueId: string;
  season: string
}

function TeamsShields(props: TeamShieldsProps) {
  const [teams, setTeams] = useState<{}[]>()

  useEffect(() => {
    if(props.contry != '' && props.leagueId != '' && props.season != '') {
      api.get('', {}).then(res => {setTeams(res.data); console.log(teams)})

    }
  }, [props])

  return (
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
  )
}

export default TeamsShields