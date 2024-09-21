let randomizer = function (number) {
  let value = "";
  switch (number) {
    case 0:
      value = "A certain victory";
      break;
    case 1:
      value = "not so certain victory";
      break;
    case 2:
      value = "an uneasy victory";
      break;
    default:
      value = "Your fate is unclear, ô chosen undead";
      break;
  }

  return value;
};

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomizer(randomBetween(0, 3)));
