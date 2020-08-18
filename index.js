function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let mySubString = string.substring(1, string.length)
        printString(mySubString)
    } else {
        return true
    }
}


function reverseString(string) {
    if (string.length > 0) {
        let lastChar = string.substring(string.length - 1, string.length)
        let mySubString = string.substring(0, string.length - 1)
        
        return lastChar + reverseString(mySubString)
    } else {
        return ""
    }
}


function reverseString(string) {
 
    if (string.length > 0) {
        let myString = string.substring(0, 1)
        return reverseString(string.substring(1, string.length)) + myString
    } 
    
    else {
        return ""
    }
}



function isPalindrome(string) {

    // solution with helper recursion
    // function reverseString(string) {
    //     if (string.length > 0) {
    //         let firstChar = string.substring(0,1)
    //         return reverseString(string.substring(1, string.length)) + firstChar

    //     } else {
    //         return ""
    //     }
    // }

    // let reversedString = reverseString(string) 
    // return string === reversedString ? true : false

    // solution with pure recursion
    let length = string.length

    if ( length < 2) {
        return true
    } else if (string[0] === string[length - 1]) {
        return isPalindrome(string.substring(1, length - 1))
    } else {
        return false
    }
}

function addUpTo(arr, index) {
    if (index === 0) return arr[0]
    return arr[index] + addUpTo(arr, index - 1)
}

function maxOf(arr) {
    if (arr.length === 1) return arr[0]
    return Math.max(arr[0], maxOf(arr.slice(1)))

}

function includesNumber(arr, num) {
    if (arr.length === 0) {
        return false
    } else {
        if (arr[0] === num) {
            return true
        } else {
            return includesNumber(arr.slice(1), num)
        }
    }
}