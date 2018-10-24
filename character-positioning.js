function positionLetters(string) {
    var newString = string.replace(/\s+/g, ''); //removes the spaces. 
    var position = {};
    for(let i =0; i < newString.length; i++) { //For loop to iterate each character an know which one to analyse
      position[newString[i]] = []; 
    }
    return position;
  }
  
  console.log(positionLetters('salut les amis'));