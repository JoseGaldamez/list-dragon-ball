import { Character, CharactersModel } from "@/model/character.model";

const API_URL = "https://dragonball-api.com/api/characters";

export const getCharacters = async () => {
    const response = await fetch(API_URL);
    const data: CharactersModel = await response.json();
    return data;
};

export const getCharacterById = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        cache: "force-cache",
    });
    const data: Character = await response.json();
    return data;
};
