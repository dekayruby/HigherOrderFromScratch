
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
        let element = theArray[i]
        let resultArr = callback(element, i, theArray)
        if(resultArr){
            filteredArray.push(element)
        }
    }
    return filteredArray
}

console.log(filterScratch(myArr, num => num < 4))

const findIndexScratch = (theArray, callback) => {
   
    for(let i = 0; i < theArray.length; i++){
        let element = theArray[i]
        let result = callback(element, i, theArray)
        if(result){
            return element
        } else {
            return -1
        }
    }
}
console.log(findIndexScratch(myArr, num => num > 5))

const findScratch = (theArray, callback) => {
    for(let i = 0 ; i < theArray.length; i++){
        let element = theArray[i]
        let result = callback(element, i, theArray)
        if(result){
            return element
        } 
    }
}
console.log(findScratch(myArr, num => num > 5))
