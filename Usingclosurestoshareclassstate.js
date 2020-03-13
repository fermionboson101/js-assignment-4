// Let's make a Cat constructor!
function Cat(name, weight) {

    if (name == undefined || weight == undefined) {
        throw new Error();
    }
    Cat.count = ++Cat.count || 1;
    Cat.weightSum = Cat.weightSum + weight || weight;
    Object.defineProperty(this, 'weight', {
        get: function() {
            return weight;
        },
        set: function(value) {
            Cat.weightSum -= weight;
            Cat.weightSum += value;
            weight = value;
        }
    });

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });

    //Cat.averageWeight = function(){return Cat.weightSum/Cat.count};
}
Object.defineProperty(Cat, 'averageWeight', { value: function() { return Cat.weightSum / Cat.count } });