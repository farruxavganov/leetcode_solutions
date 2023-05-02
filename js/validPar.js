/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    let stack = [];
    for (let c of s){
        if (map.hasOwnProperty(c)){
            if (stack.length > 0 && stack[stack.length - 1] == map[c]){
                stack.pop();
                continue;
            }
            return false;
        }
        stack.push(c);
    }

    return stack.length == 0;
};
