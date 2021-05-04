const letterCombinations = require("../letterCombinations");

var assert = require('assert');
describe('letterCombinations', function() {
    it('should return [] when the value is an empty string', function() {
        assert.deepStrictEqual(letterCombinations(""), []);
    });
    it('should return correct values for the single digits string', function() {
        assert.deepStrictEqual(letterCombinations("2"), ["a", "b", "c"])
        assert.deepStrictEqual(letterCombinations("3"), ["d", "e", "f"])
    })
    it('should return correct values for double digits string', function() {
        assert.deepStrictEqual(letterCombinations("23"), ["ad","ae","af","bd","be","bf","cd","ce","cf"])
    })
    it('should return correct values for three digits string', function(){
        assert.deepStrictEqual(letterCombinations("342"), ["dga", "dgb", "dgc", "dha", "dhb", "dhc", "dia", "dib", "dic", "ega", "egb", "egc", "eha", "ehb", "ehc", "eia", "eib", "eic", "fga", "fgb", "fgc", "fha", "fhb", "fhc", "fia", "fib", "fic"])
    })
    it('should return correct values for four digits string', function(){
        assert.deepStrictEqual(letterCombinations("3423"), [
        "dgad", "dgae", "dgaf",
        "dgbd", "dgbe", "dgbf",
        "dgcd", "dgce", "dgcf",
        "dhad", "dhae", "dhaf",
        "dhbd", "dhbe", "dhbf",
        "dhcd", "dhce", "dhcf", 
        "diad", "diae", "diaf",
        "dibd", "dibe", "dibf",
        "dicd", "dice", "dicf",
        "egad", "egae", "egaf",
        "egbd", "egbe", "egbf",
        "egcd", "egce", "egcf",
        "ehad", "ehae", "ehaf",
        "ehbd", "ehbe", "ehbf",
        "ehcd", "ehce", "ehcf",
        "eiad", "eiae", "eiaf",
        "eibd", "eibe", "eibf",
        "eicd", "eice", "eicf",
        "fgad", "fgae", "fgaf",
        "fgbd", "fgbe", "fgbf",
        "fgcd", "fgce", "fgcf",
        "fhad", "fhae", "fhaf",
        "fhbd", "fhbe", "fhbf",
        "fhcd", "fhce", "fhcf",
        "fiad", "fiae", "fiaf",
        "fibd", "fibe", "fibf",
        "ficd", "fice", "ficf"])
    })
});