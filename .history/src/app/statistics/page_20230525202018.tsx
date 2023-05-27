import React from 'react'
import { useRouter } from 'next/router';

function page() {
  const router = useRouter();
  const { info1, info2, info3 } = router.query;
  
  return (
    <div>page</div>
  )
}

export default page