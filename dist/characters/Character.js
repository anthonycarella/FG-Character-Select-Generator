var Character = (function () {
    function Character(name, age, fightingStyle) {
        this.name = name;
        this.age = age;
        this.fightingStyle = fightingStyle;
    }
    Character.prototype.getName = function () { return this.name; };
    Character.prototype.setName = function (name) { this.name = name; };
    Character.prototype.getAge = function () { return this.age; };
    Character.prototype.setAge = function (age) { this.age = age; };
    Character.prototype.getFightingStyle = function () { return this.fightingStyle; };
    Character.prototype.setFightingStyle = function (fightingStyle) { this.fightingStyle = fightingStyle; };
    return Character;
}());
//# sourceMappingURL=Character.js.map