import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

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

  return (
    <section className='statisticpage w-full h-screen'>

    </section>
  )
}

export default page