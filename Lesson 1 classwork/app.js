// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках


const fs = require('fs');
const path = require('path');

const mkdirPathManOlder = path.join(__dirname, 'manOlder20');
const mkdirPathManYounger = path.join(__dirname, 'manYounger20');
const mkdirPathWomanOlder = path.join(__dirname, 'womanOlder20');
const mkdirPathWomanYounger = path.join(__dirname, 'womanYounger20');

fs.mkdir(mkdirPathManOlder, {recursive: true}, (err) => {
    console.log(err);
});

fs.mkdir(mkdirPathManYounger, {recursive: true}, (err) => {
    console.log(err);
});

fs.mkdir(mkdirPathWomanOlder, {recursive: true}, (err) => {
    console.log(err);
});

fs.mkdir(mkdirPathWomanYounger, {recursive: true}, (err) => {
    console.log(err);
});

const users = [
    { name: 'olya', gender: 'female', age: 18 },
    { name: 'vova', gender: 'male', age: 20 },
    { name: 'katia', gender: 'female', age: 21 },
    { name: 'roman', gender: 'male', age: 15 },
    { name: 'max', gender: 'male', age: 60 },
    { name: 'mariana', gender: 'female', age: 19 },
    { name: 'vira', gender: 'female', age: 22 },
    { name: 'nazar', gender: 'male', age: 23 },
    { name: 'ira', gender: 'female', age: 32 },
    { name: 'dima', gender: 'male', age: 17 }
];


users.forEach(user => {
    if (user.gender === 'male' && user.age > 20) {
        fs.writeFile(path.join(__dirname, 'manOlder20', `${user.name}.txt`),
            JSON.stringify(user), err => {
                console.log(err);
            });
    }
    else if (user.gender === 'male' && user.age < 20) {
        fs.writeFile(path.join(__dirname, 'manYounger20', `${user.name}.txt`),
            JSON.stringify(user), err => {
                console.log(err);
            });
    }
    else if (user.gender === 'female' && user.age > 20) {
        fs.writeFile(path.join(__dirname, 'womanOlder20', `${user.name}.txt`),
            JSON.stringify(user), err => {
                console.log(err);
            });
    }
    else if (user.gender === 'female' && user.age < 20) {
        fs.writeFile(path.join(__dirname, 'womanYounger20', `${user.name}.txt`),
            JSON.stringify(user), err => {
                console.log(err);
            });
    };
});