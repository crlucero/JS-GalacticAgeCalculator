import { Galactic } from './../src/galactic.js';

describe ('Galactic', function() {
    // Object of my age for testing purposes
    let today = new Date();
    let myBirthday = today.setFullYear(today.getFullYear() - 24);
    let me = new Galactic(myBirthday, "male", "North America");


    it('should test my age on Earth', function() {
        expect(me.age).toEqual(24);
    });

    it('should test my age on Mercury', function() {
        expect(me.mercuryAge()).toEqual(100)
    });

    it('should test my age on Venus', function() {
        expect(me.venusAge()).toEqual(38);
    });

    it('should test my age on Mars', function() {
        expect(me.marsAge()).toEqual(12);
    });

    it('should test my age on Jupiter', function() {
        expect(me.jupiterAge()).toEqual(2)
    });

    it('should convert how many years user has left to live on other Mercury', function() {
        expect(me.mercuryTimeLeft(220))
    });

    it('should convert how many years user has left to live on Venus', function() {
        expect(me.venusTimeLeft(85))
    });

    it('should expect convert how many years a user has left to live on Mars', function() {
        expect(me.marsTimeLeft(28))
    });

    it('should convert how many years a user has left to live on Jupiter', function() {
        expect(me.jupiterTimeLeft(4))
    });


    let secondToday = new Date();
    let oldBirthday = secondToday.setFullYear(secondToday.getFullYear() - 100);
    let shouldBeDead = new Galactic(oldBirthday, "female", "Oceania");

    it('should return the number of years a person has lived after their life expectancy on Earth', function() {
        expect(Math.ceil(shouldBeDead.timeLeft)).toEqual(-20);
    });
    


});
