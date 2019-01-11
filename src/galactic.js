export class Galactic {
    constructor(birthday) {
        this.birthday = new Date(birthday);
        this.home = home;
        this.gender = gender;
        this.exactAge = this.earthAge(this.birthday);
        this.age = Math.floor(this.exactAge)
    }

    //These functions determine age on each planet
    earthAge(birthday) {
        let today = new Date();
        let myAge = (today - birthday);
        return myAge;
    }

    mercuryAge() {
        let ageOnMercury = this.exactAge / 0.24;
        return Math.floor(ageOnMercury);
    }

    venusAge() {
        let ageOnVenus = this.exactAge / .62;
        return Math.floor(ageOnVenus);
    }

    marsAge() {
        let ageOnMars = this.exactAge * 1.88;
        return Math.floor(ageOnMars);
    }

    jupiterAge() {
        let ageOnJupiter = this.exactAge * 11.86;
        return Math.floor(ageOnJupiter);
    }
}
