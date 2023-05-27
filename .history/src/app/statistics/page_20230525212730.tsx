import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import logo from '../../assets/logo.png'
import Image from 'next/image'

function page() {
  const router = useRouter();
  const { league, seasonYear, team } = router.query;

  useEffect(() => {
    // Verificar se as informações estão presentes
    if (!league || !seasonYear || !team) {
      // Redirecionar para outra página ou exibir uma mensagem de erro
      router.push('/');
    }
  }, [league, seasonYear, team]);

  const { data: countriesData, isLoading: countriesLoading, error: countriesError } = useQuery('countries', () => {
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