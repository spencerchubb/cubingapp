type OnceFunction<Arg, Result> = (arg: Arg) => Result;

export function once<Arg, Result>(fn: OnceFunction<Arg, Result>): OnceFunction<Arg, Result> {
    let result: Result;
    return function () {
        // or true in case the function returns void
        result = result || fn.apply(this, arguments) || true;
        return result;
    };
}