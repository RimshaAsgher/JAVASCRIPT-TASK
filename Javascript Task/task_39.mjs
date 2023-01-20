// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city,country) {
    let message = `"${city}, ${country}"`;
    return message;
}

let CityN1 = city_country("Karachi","Pakistan");
console.log(CityN1);
let CityN2 = city_country("Istanbul","Turkey");
console.log(CityN2);
let CityN3 = city_country("Riyadh","Saudia Arabia");
console.log(CityN3);