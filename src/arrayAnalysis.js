const average = arr => (arr.reduce((a, b) => a + b, 0)) / arr.length;

const min = arr => Math.min(...arr);

const max = arr => Math.max(...arr);

const len = arr => arr.length;

const analyze = (arr) => {
  let results = {};
  if (arr.length === 0) {
    results = {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    };
  } else {
    results = {
      average: average(arr),
      min: min(arr),
      max: max(arr),
      length: len(arr),
    };
  }
  return results;
};

module.exports = analyze;
