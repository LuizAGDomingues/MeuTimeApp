import React from 'react'
import { useRouter } from 'next/router';

function page() {
  const router = useRouter();
  const { league, seasonYear, team } = router.query;

  useEffect(() => {
    // Verificar se as informações estão presentes
    if (!info1 || !info2 || !info3) {
      // Redirecionar para outra página ou exibir uma mensagem de erro
      router.push('/pagina-de-erro');
    }
  }, [info1, info2, info3]);

  return (
    <div>page</div>
  )
}

export default page