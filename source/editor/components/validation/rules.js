var React = require('react');
var ReactDOM = require('react-dom');

export const required = value => (value ? undefined : 'Required');
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const maxValue = max => value =>
  value && value > max ? `Must be at smaller than ${max}` : undefined;
export const maxValue6 = maxValue(6);
