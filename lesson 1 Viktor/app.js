// const builder = require('./helper/user-builder');
//
// let user = builder.createUser('Roman', 32);
//
// console.log(user);

const fs = require('fs');

//
// console.log(__dirname);
// fs.readFile(`${__dirname}/files/test.txt`, ((err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//
//     // console.log(data);
//     console.log(data.toString());
// }));

// fs.writeFile(`${__dirname}/files/write.txt`, 'Hello World', (err)=>{
//     console.log(err);
// });



// console.log(__dirname);
// console.log(__filename);

const path = require('path');
// const appendFilePath = path.join(__dirname, 'files', 'append.txt');
const appendFilePath = path.join(__dirname, 'files', 'write.txt');
const mkdirPath = path.join(__dirname, 'files', 'user', '22', 'photos');
// const newFilePath = path.join(__dirname, 'files', 'user', '22', 'photos', 'newFile.txt');
const newFilePath = path.join(mkdirPath, 'newFile.txt');
console.log(appendFilePath);

// fs.appendFile(`${__dirname}/files/append.txt`, 'Hello World', (err)=>{
//     console.log(err);
// });

fs.appendFile(appendFilePath, 'Hello World \n', (err)=>{
    console.log(err);
});

// fs.mkdir(mkdirPath,{recursive:true}, (e)=>{
//     console.log(e);
// })

// fs.unlink(appendFilePath, err => {
//     console.log(err);
// })

fs.rename(
    appendFilePath,
    // path.join(mkdirPath, 'newFile.txt'),
    newFilePath,

    err => {
        console.log(err);
    }
    )

fs.stat(newFilePath, ((err, stats) => {

    if (err) {
        return;
    }
    console.log(stats);
}))

fs.readdir(mkdirPath, (err, data)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(data);

    data.forEach(fileName=>{
        fs.stat(path.join(mkdirPath, fileName), ((err1, stats) =>{
            if (err) {
                console.log(err);
                return
            }
            console.log(stats);
            console.log(stats.isFile());
        }))
    })
})