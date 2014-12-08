// file: modules/learn.js - created at 2014-12-08, 01:40
function Learn() {
  // values
  this.series = [];
  // methods
  this.add = add;
  this.getSeries = getSeries;
  this.getNextOf = getNextOf;
  this.getOf = getOf;
  this.getPreviousOf = getPreviousOf;
}

function add(obj, score) {
  var self = this;
  score = score || .5;

  self.series.push({
    value: obj,
    _score: score
  });

  return self;
}

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

function learnHandler() {
  // start here with learn.js
  return new Learn();
}
learnHandler.Learn = Learn;

module.exports = exports = learnHandler;
