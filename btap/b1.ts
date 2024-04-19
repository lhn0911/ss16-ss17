function chek<T>(arg: T): T {
    return arg;
}

let stringValue: string = chek("Hello");
let numberValue: number = chek(123);
let booleanValue: boolean = chek(true);
let arrayValue: number[] = chek([1, 2, 3]);
