enum Season {
  Fall = "Fall", Winter = "Winter", Spring = "Spring", Summer = "Summer"
}

function whichMonths(season: string) {
  let monthsInSeason: string;
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
