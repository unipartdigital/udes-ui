/**
 * Gets rid of the missing requestAnimationFrame polyfill warning.
 *
 * @link https://reactjs.org/docs/javascript-environment-requirements.html
 * @copyright 2004-present Facebook. All Rights Reserved.
 */
// eslint-disable-next-line no-undef
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
