function play(){
    const homeSection = document.getElementById('home-screen')
    homeSection.classList.add('hidden');
    //console.log(homeSection.classList)
    const playgroundSection = document.getElementById('play-ground')
    //console.log(playgroundSection.classList)
    playgroundSection.classList.remove('hidden')
}