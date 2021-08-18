/**
 * Function to convert hex CSS color to rgb color string
 * Supports longhand, shorthand and alpha channel hex color.
 * 
 * @param {string} #000000 longhand hex, #000 shorthand hex, #00000000 hex with alpha channel
 * @return {string} rgb(255, 255, 255) if longhand or shorthand, rgba(255, 255, 255, 1) if hex with alpha channel
 **/


const hexToRGB = (hex: string) => {

  //Check the hex string is formatted correctly
  if(!hex || hex === undefined || hex === null) {
    throw new Error("hex string is required");
  }

  //Check the hex string is formatted correctly
  //Todo: Simplify this if statement
  if((hex.length >= 9 && hex.length <= 4 && hex.length === 8 || hex.length === 5 || hex.length === 6 ) || hex.slice(0, 1) !== '#') {
    throw new Error("hex string not formatted correctly");
  }
  
  var regex = new RegExp('^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$', 'i');

  //Use switch to check what hex type is specified;
  //Todo: Simplify this switch statement
  switch (hex.length) {
    //if shorthand
    case 4:
      //Setup regex test for shorthand
      regex = new RegExp('^#?([a-f\\d])([a-f\\d])([a-f\\d])$', 'i');
      break;
    //if alpha channel
    case 9:
      regex = RegExp('^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\d]{2})$', 'i');
      break;
    //else default hex code
    default:
      break;
  }

  //Execute the regex
  const result = regex.exec(hex);

  //break down the regex result to an object
  //Todo: Refactor to make more readable
  const rgb = {
    r: parseInt(result[1].length === 1 ? result[1]+result[1] : result[1
    ], 16), 
    g: parseInt(result[2].length === 1 ? result[2]+result[2] : result[2], 16),
    b: parseInt(result[3].length === 1 ? result[3]+result[3] : result[3], 16),
    a: result.length === 5 ? (parseInt(result[4], 16) / 255).toFixed(4).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
    : null
  }

  //Create a string from the rgb object
  const  string = `rgb${rgb.a ? 'a' : ''}(${rgb.r}, ${rgb.g}, ${rgb.b}${rgb.a ? ', '+rgb.a : ''})` 
  
  return string;
}

export default hexToRGB;