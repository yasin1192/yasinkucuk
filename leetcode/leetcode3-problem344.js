var reverseString = function(s) {
    var str;
    if(s.length === 0) return;
    for(let i = 0; i < parseInt(s.length/2); i++) {
        str= s[i];
        s[i] = s[s.length -1 -i];
        s[s.length -1 -i] = str;
    }
};
