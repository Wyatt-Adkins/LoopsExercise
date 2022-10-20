// 1

for (i = 1; i < 8; i++){
    console.log(i);
}

// 2
for (i = 5; i <= 25; i += 4) {
    console.log(i);
}

// 3a
const wizards = [`Harry Potter`, `Hermoine Granger`,`Ron Weasley`];

// 3b 
for (chain of wizard){
    console.log(chain);
}

// 4a
let harryPotterMovies = 0
// 4b
// and
// 4c
while (harryPotterMovies <= 7){
    console.log(harryPotterMovies);
    number++;
}

console.log (harryPotterMovies);

// BONUS

// 5a
const hogwartsHouses = [
'Gryffindor',
'Hufflepuff',
'Ravenclaw',
'Slytherin'
];

// 5b
for (houses of hogwartsHouses ) {
    for (letter of houses){
        console.log (letter)
    }
};

// 6a
const quote = [
    'yer',
    'a',
    'wizzard',
    'harry',
]

// 6b
let quoteline = ' ';
for (i=0;i<quote.length; i++){
    quoteline = quoteline+ quote[i] + '  ';
}
console.log(quoteline);

// 7
for (i=1; i<= 25; i++){
    if (i%3 === 0 && i % 5 ===0 ){
        console.log('expecto patronum');
    } else if (i%3 === 0){
        console.log['expecto'];
    }else if (i%5===0){
        console.log['patronum'];
    } else {
        console.log(i);
    }
    
}