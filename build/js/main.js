"use strict";
// 1st Phase
class Developer {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Welcome. Btw, I'm ${this.age}`;
    }
}
const developer = new Developer("Chase", "Rock", 24);
console.log(developer.getAge());
class WebDev extends Developer {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I know ${this.lang}`;
    }
}
const webDev = new WebDev("Super Pc", "David", "Spotify", 24);
console.log(webDev.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const artist = new Guitarist("Gross", "guitar");
console.log(artist.play("plays"));
// 3rd Phase
class Team {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Team.count;
    }
}
Team.count = 0;
const memberA = new Team("Janes");
const memberB = new Team("Jonson");
console.log(memberA.id);
console.log(memberB.id);
console.log("no. of instances: " + Team.count);
// 4th Phase
class Project {
    constructor() {
        this.sources = [];
    }
    get data() {
        return this.sources;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((val) => typeof val === "string")) {
            this.sources = value;
            return;
        }
        else {
            throw new Error("Param is not in an array of strings");
        }
    }
}
const projA = new Project();
projA.data = ["Kyaw Kyaw", "Aung Aung"];
console.log(projA.data);
projA.data = [...projA.data, "Min Min"];
console.log(projA.data);
