"use strict";
function add(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
    if (typeof a === 'string' && isNaN(parseFloat(a))) {
        return "Không hợp lệ";
    }
    if (typeof b === 'string' && isNaN(parseFloat(b))) {
        return "Không hợp lệ";
    }
    const numB = parseFloat(b);
    if (numB === 0) {
        return "Không thể chia cho 0";
    }
    return parseFloat(a) / numB;
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
