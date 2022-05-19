// Code your solution here
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, x) {
  let lengthOfName = x.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === x;
  });
}

function matchName (list, name) {
  return list.filter( driver => driver.name.toLowerCase() === name.toLowerCase()
  );
}




