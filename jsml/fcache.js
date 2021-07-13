class FCache{
    constructor(){
        this._memory = [{name: 'bob', breed: "poodle"}];
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