import { useEffect } from "react";

interface TeamShieldsProps {
  contry: string;
  leagueId: string;
  season: string
}

function TeamsShields(props: TeamShieldsProps) {

  useEffect(() => {

  }[props])

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