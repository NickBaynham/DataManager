/**
 * Created by nbaynham on 7/6/17.
 */
describe('01_SimpleJasmineTests.ts', () => {
    it ('should allow access to a test data file', () => {
        let filePath = "data/example_01.test";
        let DataManager = require('../src/DataManager');
        let dataManager = new DataManager();
        dataManager.get(filePath);
        dataManager.getLines.forEach((line) => {
            console.log(line);
        })
    })
});