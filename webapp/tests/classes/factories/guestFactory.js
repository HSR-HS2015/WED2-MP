define(['app/model/guest'], function(Guest) {
    'use strict';

    var GuestFactory = {
        createGuest: function(identifier) {
            return new Guest(
                'Desi',
                'salad and drinks',
                'im excited',
                false,
                identifier
            );
        }
    };

    return GuestFactory;
})