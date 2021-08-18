import {hexToRGB} from "../index";


//Test red longhand conversion
test('should convert red hex to rgb', () => {
  expect(hexToRGB('#FF0000')).toMatch('rgb(255, 0, 0)');
})

//Test red shorthand conversion
test('should convert shorthand red hex to rgb', () => {
  expect(hexToRGB('#F00')).toMatch('rgb(255, 0, 0)');
});

//Test red alpha conversion
test('should convert alpha red from hex to rgb', () => {
  expect(hexToRGB('#FF0000FF')).toMatch('rgba(255, 0, 0, 1)');
});

//Test error thrown when it is not a hex color value or
test('should throw error, formatted incorrectly', () => {
  expect(() => hexToRGB('#FF00')).toThrow('hex string not formatted correctly');
})

//Test error thrown when it is not a valid hex color
test('should throw error, formatted incorrectly', () => {
  expect(() => hexToRGB('#FF000')).toThrow('hex string not formatted correctly');
})

//Test error thrown when no value is specified
test('should throw error, hex string is required', () => {
  expect(() => hexToRGB()).toThrow('hex string is required');
})

