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