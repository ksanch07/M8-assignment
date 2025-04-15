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

console.log('Movies I like:\n')
console.log('')
for (let movie of movies) {
    console.log(movie)
}

console.log('\n')

let leastFavMovies = ['The Notebook', 'Twilight', 'Fifty Shades of Grey']

console.log('Movies I regret watching:\n');
console.log('')
for (let movie of leastFavMovies) {
    console.log(movie);
}

//STEP 9
// see step 8 to save space
let allMovies = movies.concat(leastFavMovies)
console.log(allMovies.sort().reverse())

//STEP 10
//see step 8/9 to save space
console.log(allMovies[length-1])

//STEP 11
//see above for this and the rest where it says copy
console.log(allMovies[0])

//STEP 12
let updatedMovies = [...allMovies]; // copy the array
let disliked = ['The Notebook', 'Twilight', 'Fifty Shades of Grey'];
let replacements = ['Arrival', 'The Martian', 'The Prestige'];

disliked.forEach((badMovie, i) => {
    let index = updatedMovies.indexOf(badMovie)
    if (index !== -1) {
        updatedMovies[index] = replacements[i]
    }
});
console.log(updatedMovies)

//STEP 13
let rankedMovies = [
    ['Gladiator', 1],
    ['iRobot', 2],
    ['Return of the King', 3],
    ['Interstellar', 4],
    ['Dodgeball', 5]
];
let movieTitles = rankedMovies.filter(item => typeof item[0] === 'string').map(item => item[0])

console.log(movieTitles)

//STEP 14
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally']

let showEmployee = function(list) {
    console.log('Employees:\n')
    console.log('')
    for (let emp of list) {
        console.log(emp.toUpperCase())
    }
}

showEmployee(employees)

//STEP 15
function filterValues(arr) {
    return arr.filter(item => item !== false && item !== null && item !== 0 && item !== '')
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//test with 
console.log(getRandomItem(nums));

//STEP 16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// Test with
let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(getRandomItem(nums)); // Randomly returns one of the numbers


//STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr)
}
// test with
let numbers = [24, 67, 89, 150, 43, 3]
console.log(getLargestNumber(numbers))