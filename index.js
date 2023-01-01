const myStr = 'london is the capital of great britain its political economic and cultural centre';

function findLongestWord(str) {
    let newStr = '';
    if (typeof str === 'string') {
        newStr = str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
        return newStr;
    } else {
        console.log('Not a string');
        console.log(newStr);
    }
}

console.log(findLongestWord(myStr));