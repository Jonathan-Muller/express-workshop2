class FCache{
    constructor(){
        this._memory = [{name: 'bob', breed: "poodle"}, {name: "aa", breed: "ww"}];
    }

    add(items){
        this._memory = this._memory.concat(items);
    }

    fetch(){
        return this._memory;
    }
}

module.exports = {
    cache: new FCache()
}