function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    return parseFloat(a as string) + parseFloat(b as string);
}

function subtract(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    return parseFloat(a as string) - parseFloat(b as string);
}

function multiply(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    return parseFloat(a as string) * parseFloat(b as string);
}

function divide(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    const numB = parseFloat(b as string);
    if (numB === 0) {
        return "Không thể chia cho 0";
    }
    return parseFloat(a as string) / numB;
}

console.log("Cộng:", add(5, 10)); 
console.log("Cộng:", add("5", "10")); 
console.log("Cộng:", add("abc", "10"));

console.log("Trừ:", subtract(10, 5));
console.log("Trừ:", subtract("10", "5")); 
console.log("Trừ:", subtract("abc", "5")); 

console.log("Nhân:", multiply(2, 3));
console.log("Nhân:", multiply("2", "3")); 
console.log("Nhân:", multiply("abc", "3"));

console.log("Chia:", divide(10, 2)); 
console.log("Chia:", divide("10", "2")); 
console.log("Chia:", divide("abc", "2")); 
console.log("Chia:", divide(10, 0)); 
