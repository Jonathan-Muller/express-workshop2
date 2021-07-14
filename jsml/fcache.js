class FCache{
    constructor(){
        this._memory = [{name: 'bob', breed: "poodle"}, {name: "aa", breed: "ww"}];
    }

    add(item){
        this._memory.push(item);
    }

    fetch(){
        return this._memory;
    }
}

module.exports = {
    cache: new FCache()
}