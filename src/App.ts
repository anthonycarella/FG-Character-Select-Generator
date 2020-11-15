import { CharacterCreation } from './screens/CharacterCreation';

class App {
    constructor() {
        console.debug('App constructor initiated.');
    }

    main(): void {
        console.debug('Running main function...');
    }

    addCharacterToSelectScreen(): void {
        let name = (<HTMLInputElement>document.getElementById('fg-character-name')).value;
        let age = parseInt((<HTMLInputElement>document.getElementById('fg-character-age')).value);
        let fightingStyle = (<HTMLInputElement>document.getElementById('fg-character-fighting-style')).value;
        let characterCreation = new CharacterCreation();
        let character = characterCreation.createCharacter(name, age, fightingStyle);
        let addCharacterToSelectScreen = characterCreation.addCharacterToSelectScreen();

        characterCreation.characters.forEach(character => {
            let characterContainer = document.createElement('div');
            let characterName = document.createElement('p');
            let characterNameText = document.createTextNode('Name: ' + character.getName());
            characterName.appendChild(characterNameText);
            let characterAge = document.createElement('p');
            let characterAgeText = document.createTextNode('Age: ' + character.getAge());
            characterAge.appendChild(characterAgeText);
            let characterFightingStyle = document.createElement('p');
            let characterFightingStyleText = document.createTextNode('FightingStyle: ' + character.getFightingStyle());
            characterFightingStyle.appendChild(characterFightingStyleText);
            characterContainer.appendChild(characterName);
            characterContainer.appendChild(characterAge);
            characterContainer.appendChild(characterFightingStyle);
            document.getElementById('character-select-container').appendChild(characterContainer);
        });
    }
}

let createCharacterButton = document.getElementById('create-character-button');
createCharacterButton.addEventListener('click', function() {
    new App().addCharacterToSelectScreen();
});