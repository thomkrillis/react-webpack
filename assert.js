'use strict'

module.exports = function(pass, description) {
  if (pass === true) {
    console.log('%c✔︎ ok', 'color: green', description);
  }
  else {
    console.assert(pass, description);
  }
};
