// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {
      return name.toLowerCase();
  });
}
function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];
    return {firstName: firstName, lastName: lastName};
  });
}
function attributesToPhrase(drivers) {
  returns drivers.map(function (name) {
    return `${name} is from ${hometown}`;
  });
}
