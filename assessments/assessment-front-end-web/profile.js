console.log('hello')

const favoriteColor = document.getElementById('color')
const favoritePlace = document.getElementById('place')
const favoriteRitual = document.getElementById('ritual')
const favoritesButton = document.getElementById('favorites')
const favoritesList = document.getElementById('favoritesList')
const favoritesDiv = document.querySelector('.dropdown')


const colorFunct = () => {
    alert('Imperial Blue')
}
const placeFunct = () => {
    alert('Home')
}
const ritualFunct = () => {
    alert('Black Illusion Ritual - RELINQUISHED!')
}




favoriteColor.addEventListener('click', colorFunct)
favoritePlace.addEventListener('click', placeFunct)
favoriteRitual.addEventListener('click', ritualFunct)

favoritesDiv.addEventListener('mouseenter', function(){
    favoritesButton.style.backgroundColor='rgb(178, 201, 34)'
    favoritesButton.style.color='black'
    favoritesList.style.display='block'
});

favoritesDiv.addEventListener('mouseleave', function(){
    favoritesList.style.display='none'
    favoritesButton.style.color='inherit'
    favoritesButton.style.backgroundColor='rgb(24, 24, 35)'
});


favoritesList.addEventListener('mouseleave', function() {
    favoritesList.style.display = 'none';
    favoritesButton.style.color='inherit'
    favoritesButton.style.backgroundColor='rgb(24, 24, 35)'
});


/*
favoritesButton.addEventListener('mousemove', function(event){
    const rect = favoritesButton.getBoundingClientRect();
    const { top, right, bottom, left} = rect;
    const {clientX, clientY} =event
    if(clientX<left||clientX<right||clientY<top || clientY > bottom) {
        favoritesList.style.display='block'
    } else {
        favoritesList.style.display='none'
    }
});
*/