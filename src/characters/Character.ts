interface ICharacter {
    name: string;
    age: number;
    fightingStyle: string;

    getName(): string;
    setName(name: string): void;
    getAge(): number;
    setAge(age: number): void;
    getFightingStyle(): string;
    setFightingStyle(fightingStyle: string): void;

}

class Character implements ICharacter {
    name: string;
    age: number;
    fightingStyle: string;

    constructor(name: string, age: number, fightingStyle: string) {
        this.name = name;
        this.age = age;
        this.fightingStyle = fightingStyle;
    }

    public getName(): string { return this.name; }
    public setName(name: string): void { this.name = name; }
    public getAge(): number { return this.age; }
    public setAge(age: number): void { this.age = age; }
    public getFightingStyle(): string { return this.fightingStyle; }
    public setFightingStyle(fightingStyle: string): void { this.fightingStyle = fightingStyle }
}