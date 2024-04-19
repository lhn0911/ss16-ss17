
enum WeekDays {
    MONDAY = "Monday",
    TUESDAY = "Tuesday",
    WEDNESDAY = "Wednesday",
    THURSDAY = "Thursday",
    FRIDAY = "Friday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

function printEnumValues<T>(enumObject: T): void {
    Object.values(enumObject).forEach(value => console.log(value));
}

printEnumValues(WeekDays);
