
 function add(a, b) {
    return a + b;
}

 function subtract(a, b) {
    return a - b;
}

 function multiply(a, b) {
    return a * b;
}

 function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}


const sort = (arr) =>{
    let n = arr.length
    let swapped
    
    for (let i = 0; i < n - 1; i++){
        swapped = false
        
        for (let j = 0; j < n -1; j++){
            if (arr[j] >  arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
                swapped = true;
            }
        }
        if (!swapped) break
    }
    return arr;
  
  }

  function toLowerCaseList(strings) {
    if (!Array.isArray(strings)) {
        throw new Error("Input must be an array of strings.");
    }
    return strings.map(str => {
        if (typeof str !== "string") {
            throw new Error("All elements in the array must be strings.");
        }
        return str.toLowerCase();
    });
}

function convertNamesToLengths(names) {
    if (!Array.isArray(names)) {
        throw new Error("Input must be an array of names.");
    }
    return names.map(name => {
        if (typeof name !== "string") {
            throw new Error(`Invalid name: "${name}" is not a string.`);
        }
        return { name, length: name.length };
    });
}

function sortByLength(namesWithLengths) {
    if (!Array.isArray(namesWithLengths)) {
        throw new Error("Input must be an array of objects with name and length.");
    }
    return namesWithLengths.sort((a, b) => a.length - b.length);
}


function sortAlphabetically(names) {
    if (!Array.isArray(names)) {
        throw new Error("Input must be an array of names.");
    }
    return [...names].sort((a, b) => a.localeCompare(b));
}


function processStudentNames(names) {
    const namesWithLengths = convertNamesToLengths(names);
    const sortedByLength = sortByLength(namesWithLengths);
    const sortedAlphabetically = sortAlphabetically(names);

    return {
        sortedByLength: sortedByLength.map(item => item.name),
        sortedAlphabetically
    };
}



module.exports = {
    add,
    subtract,
    multiply,
    divide,
    sort,
    toLowerCaseList,
    sortByLength,
    convertNamesToLengths,
    processStudentNames,
    sortAlphabetically


};
