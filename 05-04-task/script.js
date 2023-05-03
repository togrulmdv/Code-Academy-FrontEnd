function findDuplicates(array) {
    let duplicates = [];
    let seen = [];

    for (let i = 1; i < array.length; i++) {
        if (seen.includes(array[i])) {
            duplicates.push(array[i]);
        } else {
            seen.push(array[i]);
        }
    }

    return duplicates;

}

function findHighestValue(array) {
    let highestValue = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > highestValue) {
            highestValue = array[i];
        }
    }

    return highestValue;

}

function doubleValue(array) {
    let doubledArray = []

    for (i = 0; i < array.length; i++) {
        array[i] = array[i] * 2
        doubledArray.push(array[i])
    }

    return doubledArray;

}

console.log(findDuplicates([1, 2, 3, 4, 5, 5, 6, 6]));
console.log(findHighestValue([100, 2, 3, 50, 4, 5, 6, 2006]));
console.log(doubleValue([2, 3, 4, 5, 6]));