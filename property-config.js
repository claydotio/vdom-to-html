/**
 * Attribute types.
 */

var types = {
  BOOLEAN: 1,
  OVERLOADED_BOOLEAN: 2
};

/**
 * Properties to attributes mapping.
 *
 * The ones not here are simply converted to lower case.
 */

var attributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

/**
 * Exports.
 */

module.exports = {
  attributeTypes: types,
  attributeNames: attributeNames
};
