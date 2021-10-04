// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках
const fs = require('fs');
const path = require('path');

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

const manOlder = path.join(__dirname,  'manOlder20');
const manYounger = path.join(__dirname,  'manYounger20');
const womanOlder = path.join(__dirname,  'womanOlder20');
const womanYounger = path.join(__dirname,  'womanYounger20');

fs.mkdir(manOlder, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.mkdir(manYounger, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.mkdir(womanOlder, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

fs.mkdir(womanYounger, {recursive: true}, (err) => {
    if (err) {
        console.log(err);
        return;
    }
});

for (const user of users) {
    if (user.age > 20 && user.gender === "male") {
        fs.writeFile(path.join(__dirname, 'manOlder20', `${user.name}.txt`), `${user.name}, ${user.age}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }
    if (user.age < 20 && user.gender === "male") {
        fs.writeFile(path.join(__dirname, 'manYounger20', `${user.name}.txt`), `${user.name}, ${user.age}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }
    if (user.age > 20 && user.gender === "female") {
        fs.writeFile(path.join(__dirname, 'womanOlder20', `${user.name}.txt`), `${user.name},  ${user.age}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }

    if (user.age < 20 && user.gender === "female") {
        fs.writeFile(path.join(__dirname, 'womanYounger20', `${user.name}.txt`), `${user.name},  ${user.age}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }
}
