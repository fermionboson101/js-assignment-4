function cache(func) {
    let memory = {};
    return (arg1, arg2) => {
        let key = '';
        if (typeof arg1 === 'object') {
            key += Object.keys(arg1);
        } else {
            key += arg1;
        }
        if (typeof arg2 === 'object') {
            key += Object.keys(arg2);
        } else {
            key += arg2;
        }
        if (!(key in memory)) {
            memory[key] = func(arg1, arg2);
        }
        console.log(memory);
        return memory[key];
    }
}