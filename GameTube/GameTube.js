let _Debug = 0;

Object.defineProperty(window, 'Debug', {
    get: function() {
        if (_Debug === 0) {
            alert("You've Been Trolled");
            _Debug = 0;
        }
        return _Debug;
    },
    set: function(value) {
        _Debug = value;
    }
});

let _Report = 0;

Object.defineProperty(window, 'Report', {
    get: function() {
        if (_Report === 0) {
           location.href = '/Users/roguy/Documents/GameHub/Report.html';
            _Report = 0;
        }
        return _Report;
    },
    set: function(value) {
        _Report = value;
    }
});
