System.register([], function (exports_1, context_1) {
    "use strict";
    var CharacterCreation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CharacterCreation = (function () {
                function CharacterCreation() {
                }
                CharacterCreation.prototype.createCharacter = function (name, age, fightingStyle) {
                    var character = new Character(name, age, fightingStyle);
                    return character;
                };
                CharacterCreation.prototype.addCharacterToSelectScreen = function () {
                    this.characters.push(this.character);
                };
                CharacterCreation.prototype.getCharacters = function () {
                    return this.characters;
                };
                return CharacterCreation;
            }());
            exports_1("CharacterCreation", CharacterCreation);
        }
    };
});
//# sourceMappingURL=CharacterCreation.js.map