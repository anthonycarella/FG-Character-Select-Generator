System.register(["./screens/CharacterCreation"], function (exports_1, context_1) {
    "use strict";
    var CharacterCreation_1, App, createCharacterButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CharacterCreation_1_1) {
                CharacterCreation_1 = CharacterCreation_1_1;
            }
        ],
        execute: function () {
            App = (function () {
                function App() {
                    console.debug('App constructor initiated.');
                }
                App.prototype.main = function () {
                    console.debug('Running main function...');
                };
                App.prototype.addCharacterToSelectScreen = function () {
                    var name = document.getElementById('fg-character-name').value;
                    var age = parseInt(document.getElementById('fg-character-age').value);
                    var fightingStyle = document.getElementById('fg-character-fighting-style').value;
                    var characterCreation = new CharacterCreation_1.CharacterCreation();
                    var character = characterCreation.createCharacter(name, age, fightingStyle);
                    var addCharacterToSelectScreen = characterCreation.addCharacterToSelectScreen();
                    characterCreation.characters.forEach(function (character) {
                        var characterContainer = document.createElement('div');
                        var characterName = document.createElement('p');
                        var characterNameText = document.createTextNode('Name: ' + character.getName());
                        characterName.appendChild(characterNameText);
                        var characterAge = document.createElement('p');
                        var characterAgeText = document.createTextNode('Age: ' + character.getAge());
                        characterAge.appendChild(characterAgeText);
                        var characterFightingStyle = document.createElement('p');
                        var characterFightingStyleText = document.createTextNode('FightingStyle: ' + character.getFightingStyle());
                        characterFightingStyle.appendChild(characterFightingStyleText);
                        characterContainer.appendChild(characterName);
                        characterContainer.appendChild(characterAge);
                        characterContainer.appendChild(characterFightingStyle);
                        document.getElementById('character-select-container').appendChild(characterContainer);
                    });
                };
                return App;
            }());
            createCharacterButton = document.getElementById('create-character-button');
            createCharacterButton.addEventListener('click', function () {
                new App().addCharacterToSelectScreen();
            });
        }
    };
});
//# sourceMappingURL=App.js.map