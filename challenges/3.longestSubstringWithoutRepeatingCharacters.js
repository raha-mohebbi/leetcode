var lengthOfLongestSubstring = function(s) {
    let window = [];
    let max = 0;

    for(let char of s) {

        while(window.includes(char)) {
            window.shift();
        }

        window.push(char);

        if(window.length > max) {
            max = window.length;
        }
    }

    return max;
};