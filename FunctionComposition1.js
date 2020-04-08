function compose(...args) {
    return function(val) {
        if (args.length == 0) {
            return val;
        }
        val = args[args.length - 1](val);
        for (let i = args.length - 2; i >= 0; i--) {
            val = args[i](val);
        }
        return val;
    };
}