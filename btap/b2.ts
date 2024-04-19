function ktra<T>(arr: T[], index1: number, index2: number): T[] {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.error('Invalid index');
        return arr;
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(ktra(numbers, 1, 3));


let strings: string[] = ['a', 'b', 'c'];
console.log(ktra(strings, 0, 2));

console.log(ktra(numbers, -1, 6));
