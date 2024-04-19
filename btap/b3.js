"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays["MONDAY"] = "Monday";
    WeekDays["TUESDAY"] = "Tuesday";
    WeekDays["WEDNESDAY"] = "Wednesday";
    WeekDays["THURSDAY"] = "Thursday";
    WeekDays["FRIDAY"] = "Friday";
    WeekDays["SATURDAY"] = "Saturday";
    WeekDays["SUNDAY"] = "Sunday";
})(WeekDays || (WeekDays = {}));
function printEnumValues(enumObject) {
    Object.values(enumObject).forEach(value => console.log(value));
}
printEnumValues(WeekDays);
