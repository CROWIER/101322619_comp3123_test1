//q1
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
function lowerCaseWords(array){
    let promise = new Promise(function (resolve, reject) {
    for (let i = 0; i<array.length; i++){
        if (typeof array[i] != 'string' ){
            array.splice(i, 1)
            i--
        }
        else {
            (array[i] = array[i].toLowerCase())
        }
    }
    if (array.length != 0) {
        resolve(array)
    }
    else {
        reject("array is empty")
    }
    })
    return promise
}
console.log(lowerCaseWords(mixedArray));


//q2
    const resolvedPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
        resolve()
    }, 500)
})

const rejectedPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('error: delayed exception');
    }, 500);
}).catch(function(e) {
    console.log(e);
});

//q3
const fs = require('fs')
const process = require('process');
const dir = './Logs'
if (!fs.existsSync(dir)) {
    fs.mkdir(dir, err => {
        if (err) {
            throw err
        }
    })
    process.chdir(dir)
    for (let i=0; i<10;  i++) {
    fs.writeFile(`log${i}.txt`, `Log file N${i+1}`, function (err) {
        if (err) throw err;
        console.log(`log${i}.txt`);
    });
    }
}
else {
    process.chdir(dir)
    for (let i=0; i<10;i++) {
    fs.unlink(`log${i}.txt`, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Delete Files...log${i}.txt`);
    }
    );}
    process.chdir('../')
    fs.rmdir(dir, (err) => {
        if (err) {
            return console.log("error occurred in deleting directory", err);
        }
        console.log("Directory deleted successfully");
    });
}