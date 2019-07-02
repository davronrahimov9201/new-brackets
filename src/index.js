module.exports = function check(str, bracketsConfig) {
    var bCount = bracketsConfig.length;

    function checkBrackets(text) {
        for (var i=0;i<bCount;i++) {
            var brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            if(text.includes(brackets))
                return checkBrackets(text.split(brackets).join(''))
        }
        return text;
    }
    return checkBrackets(str).length === 0;
};
