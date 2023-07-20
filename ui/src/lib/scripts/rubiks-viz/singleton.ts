/**
 * Example:
 * 
 * let single = singleton<number>();  
 * function foo() => 1+2+3;  
 * single(foo); // returns 6  
 * single(foo); // returns 6 without calling foo again
 * @returns {T}
 */
export function singleton<T>() {
    let instance: T;
    return (constructor: () => T) => {
        if (!instance) {
            instance = constructor();
        }
        return instance;
    };
}

export function once<T>(fn: Function): Function {
    let result: T;
    return function () {
        result = result || fn.apply(this, arguments);
        return result;
    };
}