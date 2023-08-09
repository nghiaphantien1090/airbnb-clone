'use client'
import Image from 'next/image'
import LoginModal from './components/Modal/LoginModal'
import Navbar from './components/Navbar/Navbar'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data} = useSession()
  console.log('log data in wishlist page: ',data)
  return (
    <main className=''>
              <LoginModal/>
              <Navbar />
    </main>
  )
}
