/**
 * Created by nbaynham on 7/6/17.
 */
describe('01_SimpleJasmineTests.ts', function () {
    it('should allow access to a test data file', function () {
        var filePath = "data/example_01.test";
        var DataManager = require('../src/DataManager');
        var dataManager = new DataManager();
        dataManager.get(filePath);
        dataManager.getLines.forEach(function (line) {
            console.log(line);
        });
    });
});
