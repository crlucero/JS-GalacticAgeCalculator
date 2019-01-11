export class Galactic {
    constructor(birthday, gender, continent) {
        this.birthday = new Date(birthday);
        this.continent = continent;
        this.gender = gender;
        this.exactAge = this.earthAge(this.birthday);
        this.age = Math.floor(this.exactAge);
        this.timeLeft = (this.earthLifeExpectancy - this.exactAge);
        this.lifeExpectance = this.earthLifeExpectancy();
    }

    //These functions determine age on each planet
    earthAge(birthday) {
        let today = new Date();
        let myAge = Math.abs(today - birthday);
        return myAge / 3.154e+10;
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
        let ageOnMars = this.exactAge / 1.88;
        return Math.floor(ageOnMars);
    }

    jupiterAge() {
        let ageOnJupiter = this.exactAge / 11.86;
        return Math.floor(ageOnJupiter);
    }

    mercuryTimeLeft() {
        let timeLeftMercury = this.timeLeft / 0.24;
        return timeLeftMercury;
    }

    venusTimeLeft() {
        let timeLeftVenus = this.timeLeft / 0.62;
        return timeLeftVenus;
    }

    marsTimeLeft() {
        let timeLeftMars = this.timeLeft / 1.88;
        return timeLeftMars;
    }

    jupiterTimeLeft() {
        let timeLeftJupiter = this.time / 11.86;
        return timeLeftJupiter;
    }

    // These functions determine how much life a person has left on Earth
    // based on their current age, gender and what continet they live on.
    // If 'male' is true use avg age of 78, else use avg age of 80. 
    earthLifeExpectancy() {
        switch(this.continent) {
            case "North America": 
                return this.gender === "male" ? 77 : 81;

            case "South America":
                return this.gender === "male" ? 73 : 79;

            case "Europe":
                return this.gender === "male" ? 75 : 82;

            case "Asia":
                return this.gender === "male" ? 71 : 74;

            case "Africa":
                return this.gender === "male" ? 61 : 64;

            case "Oceania":
                return this.gender === "male" ? 76 : 80;
        }
    }
}
