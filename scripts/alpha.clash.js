   // function play(){
    //step: 1 hide the home screen. to hide the screen add hidden class to the home section
   // const homeSection = document.getElementById('home-screen');
  //  homeSection.classList.add('hidden');
    //console.log(homeSection.classList)
    //show the play ground
   // const PalayGround = document.getElementById('play-ground');
   // PalafyGround.classList.remove('hidden');
//}
function continueGame(){
    //step1: generate a ulphabet
    const alphabet = getARandomAlphabet(); 
    console.log('your random alphabet',alphabet);
    //set randomly generated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color

    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}