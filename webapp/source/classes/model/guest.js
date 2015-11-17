define(['app/services/uuidService'], function(UUIDService) {
    'use strict';

    var Guest = function(name, contribution, comment, canceled, id) {
        this.id = id || UUIDService.getRandomUuid();
        this.name = name;
        this.contribution = contribution;
        this.comment = comment;
        this.canceled = canceled || false;
    }

    Guest.createFromDTO = function(guestDTO) {
        var guest = new Guest(
        guestDTO.id,
        guestDTO.name,
        guestDTO.contribution,
        guestDTO.comment,
        guestDTO.canceled
        );
    }
}
