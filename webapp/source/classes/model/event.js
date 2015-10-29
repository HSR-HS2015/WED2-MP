/**
 * Created by silvan on 29/10/15.
 */

define([], function(){
    var Event = function(name, description, targetGroup, location, times, maximalAmoutOfGuests) {
        this.name = name;
        this.description = description;
        this.targetGroup = targetGroup;
        this.location = location;
        this.times = times;
        this.maximalAmoutOfGuests = maximalAmoutOfGuests;

        Object.defineProperty(this, 'begin', {
            get: function() {
                return this.times.begin;
            },
            set: function(begin) {
                this.times.begin = begin;
            }
        });

        Object.defineProperty(this, 'end', {
            get: function() {
                return this.times.end;
            },
            set: function(end) {
                this.times.end = end;
            }
        });
    };
    return event;
});