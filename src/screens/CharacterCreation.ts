export interface ICharacterCreation {
    character: Character;
    characters: Array<ICharacter>;

    createCharacter(name: string, age: number, fightingStyle: string): Character;
    addCharacterToSelectScreen(): void;
    getCharacters(): Array<ICharacter>;
}

export class CharacterCreation implements ICharacterCreation {
    character: Character;
    characters: Array<Character>;

    constructor() {
        // CharacterCreation Constructor
    }

    createCharacter(name: string, age: number, fightingStyle: string): Character {
        let character = new Character(name, age, fightingStyle);
        return character;
    }

    addCharacterToSelectScreen(): void {
        this.characters.push(this.character);
    }

    getCharacters(): Array<ICharacter> {
        return  this.characters;
    }
}