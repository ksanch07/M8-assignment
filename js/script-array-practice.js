//STEP 1
let favMovies = ['Gladiator', 'iRobot', 'Return of the King', 'Interstellar', 'Dodgeball']
console.log(favMovies[1]) //iRobot

//STEP 2
let movies = new Array(5)
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
console.log(movies[0]) //Gladiator

//STEP 3
let movies = new Array(5)
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
console.log(movies[0]) //Gladiator
movies.splice(2,0,'Harry Potter and the Goblet of Fire')
console.log(movies)
console.log(movies.length) //6

//STEP 4
let movies = []
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
movies.shift()
console.log(movies)

//STEP 5
let movies = []
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
movies[5] = 'Harry Potter and the Goblet of Fire'
movies[6] = 'Spaceballs'
for (let i in movies) {
    console.log(movies[i])
}

//STEP 6
let movies = []
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
movies[5] = 'Harry Potter and the Goblet of Fire'
movies[6] = 'Spaceballs'
for (let i of movies) {
    console.log(i)
}

//STEP 7
let movies = []
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
movies[5] = 'Harry Potter and the Goblet of Fire'
movies[6] = 'Spaceballs'
movies.sort()
for (let i of movies) {
    console.log(i)
} //unicode sorting for iRobot

//STEP 8
let movies = []
movies[0] = 'Gladiator'
movies[1] = 'iRobot'
movies[2] = 'Return of the King'
movies[3] = 'Interstellar'
movies[4] = 'Dodgeball'
movies[5] = 'Harry Potter and the Goblet of Fire'
movies[6] = 'Spaceballs'

console.log('Movies I like:\n'); 
for (let movie of movies) {
    console.log(movie);
}

console.log('\n'); 

let leastFavMovies = ['The Notebook', 'Twilight', 'Fifty Shades of Grey'];

console.log('Movies I regret watching:\n'); 
for (let movie of leastFavMovies) {
    console.log(movie);
}


//STEP 9


//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17