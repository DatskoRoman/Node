console.log(__dirname);
console.log(__filename);

const createUser = (name,age) => {
  return{
      name,
      age,
      greeting: () => {console.log(`Hello, my name ${name}`)
         }
    }
}

function dropDataBase() {
    console.log('DATABASE IS DROPPED')
}

dropDataBase();

module.exports = {
    createUser
}