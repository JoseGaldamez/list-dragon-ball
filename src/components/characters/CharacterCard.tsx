import { Character } from '@/model/character.model';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CharacterCardProps {
    character: Character
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <div className='flex flex-col p-3 border border-gray-200 rounded text-center'>
            <Link href={`/character/${character.id}`}>
                <Image
                    className='h-60 object-contain mx-auto'
                    src={character.image}
                    alt={character.name}
                    width={500}
                    height={500} />
                <h3>
                    {character.name}
                </h3>
            </Link>
        </div>
    );
}
