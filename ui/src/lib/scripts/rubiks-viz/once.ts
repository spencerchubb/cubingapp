type OnceFunction<Arg, Result> = (arg: Arg) => Result;

export function once<Arg, Result>(fn: OnceFunction<Arg, Result>): OnceFunction<Arg, Result> {
    let result: Result;
    return function () {
        result = result || fn.apply(this, arguments);
        return result;
    };
}