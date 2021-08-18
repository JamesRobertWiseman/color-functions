import {hexToRGB} from '../index';

//Test hex to rgb conversion
test('should convert hex to rgb', () => {
  expect(hexToRGB('#FF0000')).toMatch('rgb(255, 0, 0)');
})

