import { debounce } from './helper';

describe("utilities/helper", () => {
    it("expect delay to call fn", done => {
        const someFn = jest.fn();
        const mockFn = debounce(someFn, 0);

        mockFn();
        mockFn();
        mockFn();
        mockFn();
        mockFn();
        mockFn();
        mockFn();

        setTimeout(() => {
            expect(someFn).toHaveBeenCalledTimes(1);
            done();
        }, 100)
    })
})
