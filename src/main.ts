// 1st Phase
class Developer {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {}

  public getAge() {
    return `Welcome. Btw, I'm ${this.age}`;
  }
}

const developer = new Developer("Chase", "Rock", 24);
console.log(developer.getAge());

class WebDev extends Developer {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I know ${this.lang}`;
  }
}

const webDev = new WebDev("Super Pc", "David", "Spotify", 24);
console.log(webDev.getLang());

// 2nd Phase
interface Muscian {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Muscian {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}.`;
  }
}

const artist = new Guitarist("Gross", "guitar");
console.log(artist.play("plays"));

// 3rd Phase
class Team {
  static count: number = 0;

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Team.count;
  }
}

const memberA = new Team("Janes");
const memberB = new Team("Jonson");

console.log(memberA.id);
console.log(memberB.id);
console.log("no. of instances: " + Team.count);

// 4th Phase
class Project {
  private sources: string[];

  constructor() {
    this.sources = [];
  }

  public get data(): string[] {
    return this.sources;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((val) => typeof val === "string")) {
      this.sources = value;
      return;
    } else {
      throw new Error("Param is not in an array of strings");
    }
  }
}

const projA = new Project();
projA.data = ["Kyaw Kyaw", "Aung Aung"];
console.log(projA.data);
projA.data = [...projA.data, "Min Min"];
console.log(projA.data);
