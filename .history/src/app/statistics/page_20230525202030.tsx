import React from 'react'
import { useRouter } from 'next/router';

function page() {
  const router = useRouter();
  const { league, seasonYear, info3 } = router.query;

  return (
    <div>page</div>
  )
}

export default page