import { Galactic } from './../src/galactic.js';

describe ('Galactic', function() {
    let today = new Date();
    let myBirthday = today.setFullYear(today.getFullYear() - 24);
    let me = new Galactic(myBirthday, "male", "North America");

    it('should test my age on Earth', function() {
        expect(me.age).toEqual(24);
    });

    it('should test my age on Mercury', function() {
        expect(me.mercuryAge()).toEqual(100)
    })
})
