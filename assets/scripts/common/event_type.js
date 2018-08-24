const common = require('_init');

(function (common){
    var EventType = {
        // 大类在前，用_分割

        MSG_DDZ_ENTER_TABLE: "MSG_DDZ_ENTER_TABLE",
        MSG_DDZ_CREATE_ROOM: "MSG_DDZ_CREATE_ROOM",
        MSG_DDZ_DEAL_POKER: "MSG_DDZ_DEAL_POKER",
        MSG_DDZ_CHU_PAI: "MSG_DDZ_CHU_PAI",
        MSG_DDZ_YOUR_TURN: "MSG_DDZ_YOUR_TURN",
        MSG_DDZ_START_GAME: "MSG_DDZ_START_GAME",

    };

    common.EventType = EventType;

})(common);

