// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) { return driver.toLowerCase();});
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(driver) { return Object.assign({}, driver, { firstName: driver.split(' '), lastName: driver.split(' ');});
  return newDrivers;
}
