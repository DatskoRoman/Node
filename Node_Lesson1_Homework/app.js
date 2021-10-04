
const fs = require('fs');
const path = require('path');

const pathBoys = path.join(__dirname, 'boys');
const pathGirls = path.join(__dirname, 'girls');

const sort = (gender, folder, newFolder) => {
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(folder, file), (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                let gender1 = JSON.parse(data.toString()).gender;

                if (gender1 === gender) {
                    fs.rename(path.join(folder, file), path.join(newFolder, file), (err) => {
                        console.log(err);
                    });
                }
            });
        });
    });
}

sort('male', pathBoys, pathGirls);
sort("female", pathBoys, pathGirls);