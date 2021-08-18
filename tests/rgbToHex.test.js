import {rgbToHex} from '../index';

test('should convert rba string to hex string', () => {
  expect(rgbToHex('rgb(255, 0, 0)', false)).toMatch('#FF0000')
})

test('should convert rgba string to hex string', () => {
  expect(rgbToHex('rgba(255, 0, 0, 1)', false)).toMatch('#FF0000FF');
})

test('should convert rgba string to hex string', () => {
  expect(rgbToHex('rgba(255, 0, 0, 0.12)', false)).toMatch('#FF00001F');
})

//Test error thrown when no value is specified
test('should throw error, hex string is required', () => {
  expect(() => rgbToHex('#FF000')).toThrow('string is not a rgb or rgba color');
})

//Test error thrown when no value is specified
test('should throw error, hex string is required', () => {
  expect(() => rgbToHex()).toThrow('string is required');
})

