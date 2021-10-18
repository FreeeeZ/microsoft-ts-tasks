"use strict";
var Season;
(function (Season) {
    Season["Fall"] = "Fall";
    Season["Winter"] = "Winter";
    Season["Spring"] = "Spring";
    Season["Summer"] = "Summer";
})(Season || (Season = {}));
function whichMonths(season) {
    let monthsInSeason;
    switch (season) {
        case "Fall":
            monthsInSeason = "September to November";
            break;
        case "Winter":
            monthsInSeason = "December to February";
            break;
        case "Spring":
            monthsInSeason = "March to May";
            break;
        case "Summer":
            monthsInSeason = "June to August";
    }
    // @ts-ignore
    return monthsInSeason;
}
console.log(whichMonths(Season.Summer));
