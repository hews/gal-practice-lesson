'use strict'

const expect  = require('chai').expect;
const fixes   = require('./sorcery');

// 1.  value -> string
// 2.  string -> string
// 3.  object -> object
// 4.  string -> object
// 5.  object -> JSON
// 6.  object + value -> object (value only)
// 7.  array -> value
// 8.  array -> array
// 9.  array of objects -> object
// 10. object + object -> merged objects if merge:true
