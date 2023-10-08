
const message = document.querySelector('#message');


const movieBtn = document.querySelector('#movie-btn');
const movieList = document.querySelector('#movie-list');
const inputField = document.querySelector('#addMovie');


function movieHandler (e) {
    e.preventDefault();
    const newMovie = inputField.value;
     if (newMovie.trim() !== '') {
        addMovie(newMovie);
        inputField.value = '';
    } 
}

function addMovie (e) {
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let deleteBtn = document.createElement('button')

    deleteBtn.textContent = "X";
    movieTitle.textContent = e
    movieTitle.addEventListener('click', crossOffMovie);

    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)
    
    const ulAppend = document.querySelector('ul')
    ulAppend.appendChild(movie)

    
    deleteBtn.addEventListener('click', deleteMovie)
    inputField.value=''
    message.textContent=''
}

function deleteMovie(e) {
    e.target.parentNode.remove();
    message.textContent = 'Movie Deleted!'
}

function crossOffMovie (e) {
    e.target.classList.toggle('checked')

    if(e.target.classList.contains('checked')) {
        message.textContent = 'Watched!'
} else{
    message.textContent = 'Movie added back!'
}
}


document.querySelector('form').addEventListener('submit', movieHandler);
 



/*
const inputField = document.querySelector('#addMovie');
const movieBtn = document.querySelector('#movie-btn');
const movieList = document.querySelector('#movie-list');

 function movieHandler(e) {
    e.preventDefault(); // Prevent form submission and page refresh
    const newMovie = inputField.value;
    if (newMovie.trim() !== '') {
        addNewMovie(newMovie);
        inputField.value = '';
    }
}

function addNewMovie(newMovie) {
    const newList = document.createElement('li');
    newList.textContent = newMovie;
    movieList.appendChild(newList);
    deleteMovie();
}

 function deleteMovie() {
    const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        movieList.appendChild(deleteBtn);
}

function deleteMovie(mov) {
    mov.target.parentNode.remove();
} 

document.querySelector('form').addEventListener('submit', movieHandler);
document.querySelector('button').addEventListener('click', deleteMovie); */