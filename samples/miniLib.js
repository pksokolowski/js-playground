(function (global) {

    const Lib = function(prop){
        return new Lib.init(prop);
    }

    Lib.prototype = {};

    Lib.init = function(prop){
        const self = this;
        self.prop = prop || 'default prop value';
        
    }

    Lib.init.prototype = Lib.prototype;
    global.Lib = global.L$ = Lib;

}(this));