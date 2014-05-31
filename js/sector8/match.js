goog.provide('sector8.match');





sector8.match = function()
{
    if (!this instanceof sector8.match)
    {
        throw new Error('A sector8.match must be created with the new keyword');
    }

    var props = {
        'match_id': 0,
        'name': '',
        'players': Array,
        'map_id': 0,
        'turn_type': 0,
        'timer_type': 0,
        'spectators': true,
        'moves': Uint32Array,
        'stakes': 1.0,
        'start_date': Date,
        'end_date': Date
    };

    util.make_getters_setters(this, props);

    this.get_id = this.get_match_id;
};

