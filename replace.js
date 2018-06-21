let replaceX = function(inputStr, combinations) {
    //exit if no more inputStr
    if (inputStr.length === 0)
        //join each array inside to make a complete replaced string
        return combinations.map(item => item.join(''))

    //push 1s and 0s into place
    if (inputStr[0] == '0' || inputStr[0] == '1')
        combinations.map(item => item.push(inputStr[0]))

    //replace wildcard with both 0 and 1, making a duplicate
    if (inputStr[0] == 'X') {
        var len = combinations.length;
        for (var i = 0; i < len; i++) {
          var temp = combinations[i].slice(0);
          combinations.push(temp);
        }
        //half get 0s, half get 1s
        combinations.map(function(item, index) {
            if(index < (combinations.length/2)) {
                item.push('0')
            }
            else {
                item.push('1')
            }
        })
    }

    //recurse!
    return replaceX(inputStr.substring(1), combinations)
}

//init
let init = function() {
    let inputStrToReplace = process.argv[2]
    let combinations = replaceX(inputStrToReplace, [[]])
    return combinations
}

module.exports = replaceX

//for running from CLI
if(process.argv[2]) {
    console.log(init())
}
