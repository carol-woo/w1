const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂  Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`😔  Assertion Failed: ${actual} !===  ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
  let stringWithoutSpaces = string.replace(/\s/g, '');
  for (const item of stringWithoutSpaces) {
    if ([item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

assertEqual(countLetters('oh wow look this is cool').o, 6);
