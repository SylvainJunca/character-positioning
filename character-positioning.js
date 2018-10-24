function positionLetters(string) {
    var newString = string.replace(/\s+/g, ''); //removes the spaces. 
    var position = {};
    for(let i =0; i < newString.length; i++) { //For loop to iterate each character an know which one to analyse
      position[newString[i]] = []; 
    }
    for(let j = 0; j < newString.length; j++) {
        console.log('s--' + newString[j] + '--s');
      position[newString[j]].push(j);
    }
    return position;
  }
  
  console.log(positionLetters('salut les amis'));