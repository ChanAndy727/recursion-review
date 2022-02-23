// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //if undefined
  if (typeof obj === 'undefined') {
    return undefined;
  } else if (typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return obj;
  } else if (Array.isArray(obj)) {
    return '[' + _(obj).map(stringifyJSON).join(',') + ']';
  }
};

// btw could u give me the clone link to ur fork of recursion-review please?
// could paste it here while the liveShare is active
// or DM in Slack (: