/**
 * Function to convert rgb CSS color to hex color string
 * Supports longhand, shorthand and alpha channel hex color.
 * 
 * @param {string} rgb(255, 255, 255) or rgba(255, 255, 255, 1) longhand hex, #000 shorthand hex, #00000000 hex with alpha channel
 * @return {string} rgb(255, 255, 255) if longhand or shorthand, rgba(255, 255, 255, 1) if hex with alpha channel
 **/

const rgbToHex = (rgb: string) => {
  const result = /^([a-z]{3,4})?\((\d+)\, ?(\d+)\, ?(\d+)\,? ?([1|0]?\.?[0-9]+?)?\)/i.exec(rgb)

  if (!rgb) {
    throw new Error("string is required");
  }

  if(!result) {
    throw new Error("string is not a rgb or rgba color");
  }

  const rgbObj = [
    result[2],
    result[3],
    result[4],
    result[5] ? result[5] : null
  ]

  const hex = rgbObj.map((x, i) => {
    var parsed;
    if (x) {
      if (i === 3) {
        parsed = Math.ceil(parseFloat(x)*255).toString(16).padStart(2, '0').toUpperCase();
      } else {
        parsed = parseInt(x).toString(16).padStart(2, '0').toUpperCase();
      }
    }
    console.log(i,);
    return parsed;
  }).join('');

  console.log('Hex result', hex);

  const hexString = '#'+hex;
  // const hex = `#${result[2].toString(16)}${result[3].toString(16)}${result[4].toString(16)}`

  return hexString;
} 

export default rgbToHex;