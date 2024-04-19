"use strict";
function mergeObjects(obj1, obj2) {
    let merged = {};
    for (let key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            merged[key] = obj1[key];
        }
    }
    for (let key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            merged[key] = obj2[key];
        }
    }
    return merged;
}
let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};
const object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
    },
    e: {
        f: 9,
    },
    g: 10,
};
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
