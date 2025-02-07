import React from 'react'
import { Header } from '@/components/Header'
import Link from 'next/link'

export default function NotFound() {

    return (
        <>
            <Header />
            <h1 className='font-bold text-xl text-center m-5'>Personaje no encontrado</h1>
            <hr />
            <div className='text-center'>
                <Link className='border-blue-400 text-blue-400 p-5 rounded' href={"/"} >Volver al Inicio</Link>
            </div>
        </>
    )
}
