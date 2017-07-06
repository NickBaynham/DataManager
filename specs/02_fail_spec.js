/**
 * Created by nbaynham on 7/6/17.
 */
describe('02_fail_spec.ts', function () {
    it('should fail', function () {
        var undefinedValue;
        expect(undefinedValue).toBeUndefined();
        expect(true).toBe(false);
    });
});
