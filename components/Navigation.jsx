import React from 'react';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <ul className='menuTop'>
        <li>
        <Link className='menuLink' href="/">Home</Link>
        </li>
        <li>
        <Link className='menuLink' href="/about">About</Link>
        </li>
        <li>
        <Link className='menuLink' href="/services">Services</Link>
        </li>
    </ul>
  )
}
