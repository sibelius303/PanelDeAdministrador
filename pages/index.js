import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const route = useRouter()
  return (
    <div className='fondoHome h-screen w-screen flex justify-center items-center'>
      <div className='flex flex-col gap-10'>
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center">¡Bienvenido!</h1>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => { route.push("/PanelAdministrador") }}>Panel de control</button>
      </div>
    </div>
  )
}
