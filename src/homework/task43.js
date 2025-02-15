const userBornYear = prompt("What year were you born?");

if (userBornYear === null) {
  alert("Sorry, you didn't want to enter your birth year.");
} else if (isNaN(userBornYear) || userBornYear > new Date().getFullYear()) {
  alert("Please enter a valid year.");
} else {
  const userHomeTown = prompt("Where do you live?");
  if (userHomeTown === null) {
    alert("Sorry, you didn't want to enter your city.");
  } else {
    const favoriteSport = prompt("What is your favorite sport?");
    if (favoriteSport === null) {
      alert("Sorry, you didn't want to enter your favorite sport.");
    } else {
      const userAge = new Date().getFullYear() - userBornYear;

      const champions = {
        Football: "Lionel Messi",
        Basketball: "LeBron James",
        Tennis: "Roger Federer",
      };

      let message = `You are ${userAge} years old`;

      if (userHomeTown === "Kyiv") {
        message += " and you live in the capital of Ukraine";
      } else if (userHomeTown === "Washington") {
        message += " and you live in the capital of the USA";
      } else if (userHomeTown === "London") {
        message += " and you live in the capital of the UK";
      } else {
        message += ` and you live in ${userHomeTown}`;
      }

      if (champions[favoriteSport]) {
        message += `. Cool! Do you want to become ${champions[favoriteSport]}?`;
      } else {
        message += `. That's a great sport!`;
      }

      alert(message);
    }
  }
}
