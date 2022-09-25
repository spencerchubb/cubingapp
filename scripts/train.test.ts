import { expect, test } from '@jest/globals';
import { demoteAlg, promoteAlg, series } from './train';

function repeat(n: number, func: Function) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

test('Series produces correct values', () => {
    expect(series(0)).toBe(2);
    expect(series(1)).toBe(5);
    expect(series(2)).toBe(9);
    expect(series(3)).toBe(14);
    expect(series(4)).toBe(20);
});

test('Promotion and demotion', () => {
    let algs = [
        { alg: "a", score: 0 },
        { alg: "b", score: 0 },
        { alg: "c", score: 0 },
        { alg: "d", score: 0 },
        { alg: "e", score: 0 },
        { alg: "f", score: 0 },
        { alg: "g", score: 0 },
        { alg: "h", score: 0 },
        { alg: "i", score: 0 },
        { alg: "j", score: 0 },
        { alg: "k", score: 0 },
        { alg: "l", score: 0 },
        { alg: "m", score: 0 },
        { alg: "n", score: 0 },
        { alg: "o", score: 0 },
        { alg: "p", score: 0 },
        { alg: "q", score: 0 },
        { alg: "r", score: 0 },
        { alg: "s", score: 0 },
        { alg: "t", score: 0 },
        { alg: "u", score: 0 },
        { alg: "v", score: 0 },
        { alg: "w", score: 0 },
        { alg: "x", score: 0 },
        { alg: "y", score: 0 },
        { alg: "z", score: 0 },
    ];

    demoteAlg(algs);
    expect(algs[0].alg).toBe("b");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("c");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("a");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("d");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("e");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("f");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("b");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("c");
    promoteAlg(algs);
    expect(algs[0].alg).toBe("a");
});

test('Promoting to the last quarter', () => {
    let algs = [
        { alg: "a", score: 3 },
        { alg: "b", score: 0 },
        { alg: "c", score: 0 },
        { alg: "d", score: 0 },
        { alg: "e", score: 0 },
        { alg: "f", score: 0 },
        { alg: "g", score: 0 },
        { alg: "h", score: 0 },
        { alg: "i", score: 0 },
        { alg: "j", score: 0 },
        { alg: "k", score: 0 },
        { alg: "l", score: 0 },
        { alg: "m", score: 0 },
        { alg: "n", score: 0 },
        { alg: "o", score: 0 },
        { alg: "p", score: 0 },
        { alg: "q", score: 0 },
        { alg: "r", score: 0 },
        { alg: "s", score: 0 },
        { alg: "t", score: 0 },
        { alg: "u", score: 0 },
        { alg: "v", score: 0 },
        { alg: "w", score: 0 },
        { alg: "x", score: 0 },
        { alg: "y", score: 0 },
        { alg: "z", score: 0 },
    ];

    promoteAlg(algs);
    let lastQuarter = algs.slice(Math.ceil(algs.length * 3 / 4));
    expect(lastQuarter).toContainEqual({ alg: "a", score: 4 });
});