function add(a) {
    var res = function(b) {
        return add(a + b);
    };
    res.toString = function() {
        return a;
    }
    return res;
}