function checkSeason(month) {
  const seasons = {
    Autumn: ["September", "October", "November"],
    Winter: ["December", "January", "February"],
    Spring: ["March", "April", "May"],
    Summer: ["June", "July", "August"],
  };
  const keys = Object.keys(seasons);
  for (let i = 0; i < keys.length; i++) {
    const months = seasons[keys[i]];
    if (months.includes(month)) {
      return keys[i];
    }
  }

  return month + " is not a month";
}
