
let myArr = [1,2,4,5]

const forEachScratch = (theArray, callback) => {
    for(let i = 0; i < theArray.length; i++){
    let element = theArray[i]
    callback(element, i, theArray)
 }
 
}
//I don't understand why the console log doesn't print what I want...
console.log(forEachScratch(myArr, num => num + 2))

const filterScratch = (theArray, callback) => {
    let filteredArray = []
    for(let i = 0; i < theArray.length; i++){
        let resultArr = callback(theArray[i], i, theArray)
        if(resultArr){
            filteredArray.push(theArray[i])
        }
    }
    return filteredArray
}

console.log(filterScratch(myArr, num => num < 4))

const findIndexScratch = (theArray, callback) => {
   
    for(let i = 0; i < theArray.length; i++){
        let result = callback(theArray[i], i, theArray)
        if(result){
            return theArray[i]
        } else {
            return -1
        }
    }
}
console.log(findIndexScratch(myArr, num => num > 5))

const findScratch = (theArray, callback) => {
    for(let i = 0 ; i < theArray.length; i++){
        let result = callback(theArray[i], i, theArray)
        if(result){
            return theArray[i]
        } else {
            return undefined
        }
    }
}
console.log(findScratch(myArr, num => num < 5))
