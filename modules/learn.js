// file: modules/learn.js - created at 2014-12-08, 01:40
/**
 * Used to meta learn based on score.
 * @constructor Learn
 */
function Learn() {
  // values
  this.series = [];
  this.defaultScore = .5;
  // methods
  this.add = add;
  this.getSeries = getSeries;
  this.getNextOf = getNextOf;
  this.getOf = getOf;
  this.getPreviousOf = getPreviousOf;
  this.adapt = adapt;
}

/**
 * Method to add to series,
 * meta information and given score.
 * @method add
 * @param obj {Object} - meta information
 * @param score {Number} - score number
 * @return self {Learn} - self instance
 */
function add(obj, score) {
  var self = this;
  score = score || self.defaultScore;

  self.series.push({
    value: obj,
    _score: score
  });

  self.defaultScore += .5;

  return self;
}

/**
 * Get series inserted sorted by score and given value.
 * @method getSeries
 * @return self.series {Array} 
 */
function getSeries() {
  var self = this;

  function seriesSortHandler(a, b) {
    return a._score < b._score;
  }

  function seriesMapHandler(current) {
    return current.value;
  }

  return self
           .series
           .sort(seriesSortHandler)
           .map(seriesMapHandler);
}

/**
 * Get next position in series based on a number of score
 * @method getNextOf
 * @param n {Number} - an number
 * @return out {Object} or {Null}
 */
function getNextOf(n) {
  var self = this;
  var series = self.series;
  var SL = series.length;
  var out = null;

  function seriesSortHandler(a, b) {
    return a._score > b._score;
  }
  series = series.sort(seriesSortHandler);

  for (var i = 0; i < SL; i += 1) {
    var c = series[i];
    var ni = i + 1;
    var next = series[ni] || c; 

    if (c._score === n) {
      out = next.value;
      break;
    }
  }

  return out;
}

/**
 * Get actual position in series based on number of score
 * @method getOf
 * @param n {Number} - an number
 * @return out {Object} or {Null}
 */
function getOf(n) {
  var self = this;
  var series = self.series;
  var SL = series.length;
  var out = null;

  function seriesSortHandler(a, b) {
    return a._score > b._score;
  }
  series = series.sort(seriesSortHandler);

  for (var i = 0; i < SL; i += 1) {
    var c = series[i];    

    if (c._score === n) {
      out = c.value;
      break;
    }
  }

  return out;
}

/**
 * Get previous position in series based on a number
 * @method getPreviousOf
 * @param n {Number} - an number
 * @return out {Object} or {Null}
 */
function getPreviousOf(n) {
  var self = this;
  var series = self.series;
  var SL = series.length;
  var out = null;

  function seriesSortHandler(a, b) {
    return a._score > b._score;
  }
  series = series.sort(seriesSortHandler);

  for (var i = 0; i < SL; i += 1) {
    var c = series[i];
    var pi = i - 1;
    var previous = series[pi] || c; 

    if (c._score === n) {
      out = previous.value;
      break;
    }
  }

  return out;
}

/**
 * Adapt position position in serie based on params
 * @method adapt
 * @param currentScore {Number} - an number
 * @param flag {Boolean} or {Null} - an flag
 * @return out {Object} or {Null}
 */
function adapt(currentScore, flag) {
  var self = this;
  var out = null;

  if (flag) {
    out = self.getNextOf(currentScore);
  } else if (flag === null) {
    out = self.getOf(currentScore);
  } else {
    out = self.getPreviousOf(currentScore);
  }

  return out;
}

function learnHandler() {
  // start here with learn.js
  return new Learn();
}
learnHandler.Learn = Learn;

module.exports = exports = learnHandler;
