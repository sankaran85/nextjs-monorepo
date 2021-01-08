import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const [count, setCount] = useState('');

  function showtext(e) {
    console.log(e.target.value);
    e.target.value;
    setCount(e.target.value);
  }

  return (
    <div>
      <h3>Post #{router.query.id}</h3>
      <p>Lorem ipsum one poda {count}</p>
      <input type="text" onChange={showtext} />
      <Link href="/">
        <a>Back to blog dude</a>
      </Link>
    </div>
  )
}
