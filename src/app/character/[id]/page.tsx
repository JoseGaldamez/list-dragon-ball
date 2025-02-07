import React from 'react';
import { Header } from '@/components/Header';
import { getCharacterById } from '@/services/characters';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';


interface CharacterPageProps {
    params: Promise<{ id: string }>
}


export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]
}

export async function generateMetadata({ params }: CharacterPageProps): Promise<Metadata> {
    const { id } = await params;
    const character = await getCharacterById(id);
    return {
        title: character.name
    }
}



export default async function CharacterPage({ params }: CharacterPageProps) {

    const { id } = await params;

    const character = await getCharacterById(id);

    if (character.id === undefined) {
        notFound();
    }


    return (
        <div>
            <Header />
            <section className='max-w-3xl mx-auto p-5 flex'>
                <div>
                    <Image className='h-60 object-contain mx-auto min-w-72' src={character.image} alt={character.name} width={500} height={500} />
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>{character.name} <small className='font-thin text-sm'>{character.race}</small> </h1>
                    <p>
                        {character.description}
                    </p>
                </div>



            </section>
            <hr />
            <div className='text-center'>
                <Link className='border-blue-400 text-blue-400 p-5 rounded' href={"/"} >Volver al Inicio</Link>
            </div>
        </div>
    );


}

