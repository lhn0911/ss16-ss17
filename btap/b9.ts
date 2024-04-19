function flattenArray<T>(arr: (T | T[])[]): T[] {
    const flattened: T[] = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flattened.push(...flattenArray(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
