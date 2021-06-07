const ambiguousCoordinates = require("../ambiguousCoordinates");
//USING CHAI
const expect = require('chai').expect;
const assert = require('chai').assert;
//MOCHA'S OWN ASSERT 
// var assert = require('assert');


describe('ambiguousCoordinates', function() {
    it('should return array', function() {
        let returnVal = ambiguousCoordinates("(23)");
        assert.strictEqual(typeof returnVal, typeof []);
    });
    it('returns all possible coordinates from given input string with two digits', function() {
        assert.deepStrictEqual(ambiguousCoordinates("(23)"), ["(2, 3)"])
    });
    it('return all possible values including decimal coordinates from the given input string with three digits', function() {
        assert.deepStrictEqual(ambiguousCoordinates("(123)"), ["(1, 2.3)", "(1, 23)", "(1.2, 3)", "(12, 3)",])
    });
    it('return all possible values including decimal coordinates from the given input string with four digits', function() {
        expect(ambiguousCoordinates("(1234)")).to.include.members(["(1, 2.34)", "(1, 23.4)", "(1, 234)", "(1.2, 3.4)", "(1.2, 34)", "(12, 34)", "(1.23, 4)", "(12.3, 4)", "(123, 4)"])
    });
    it('includes no redundent "0" cooridnate possibilites', function() {
        expect(ambiguousCoordinates("(304)")).to.include.members(["(30, 4)", "(3, 0.4)"])
        expect(ambiguousCoordinates("(304)").length).to.equal(2)
    })
    it('includes no redundent "0" cooridnate possibilites', function() {
        expect(ambiguousCoordinates("(3004)")).to.include.members(["(300, 4)", "(3, 0.04)"])
        expect(ambiguousCoordinates("(3004)").length).to.equal(2)
    })
    it('includes no redundent "0" cooridnate possibilites', function() {
        expect(ambiguousCoordinates("(0034)")).to.include.members(["(0.03, 4)"])
        expect(ambiguousCoordinates("(0034)").length).to.equal(1)
    })
})