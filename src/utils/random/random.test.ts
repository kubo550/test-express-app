// TypeScript - Function Overloading
// https://www.tutorialsteacher.com/typescript/function-overloading

import { random } from "./";

describe('random', () => {

    test('should returns num from range 0 and 1', () => {
        const num = random();
        const res = 0 < num && num < 1;
        expect(res).toBe(true);
    })

    test('should be other number every time', () => {
        const numbers: number[] = [];
        for (let i = 0; i < 10; i++) {
            const num = random()
            expect(numbers.includes(num)).toBe(false)
            numbers.push(num)
        }
    })

    test('should returns random floating point number from 0 up to 3', () => {
        const randomNumber = random(3);
        const res = 0 < randomNumber && randomNumber < 3;
        expect(res).toBe(true);
    })


    test('should returns random floating point number from 100 up to 200', () => {
        const randomNumber = random(100, 200);
        const res = 100 < randomNumber && randomNumber < 200;
        expect(res).toBe(true);
    })


    test('should return random element from given array', () => {
        const names = ['adam', 'bartek', 'czesiek', 'damian'];
        const randomName = random(names);
        const res = names.includes(randomName)
        expect(res).toBe(true)
    });

    test('should return undefined when passing empty array', () => {
        const input = [] as any[]
        const randomElement = random(input);
        expect(randomElement).toBeUndefined()
    })


})
