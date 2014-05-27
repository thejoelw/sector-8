goog.require('sector8.login');

goog.provide('sector8.game');

sector8.game = function(core)
{
    var el;

    var login = new sector8.login(core);

    var render = function()
    {
        el = goog.dom.createDom('div', {'class': 'game'});
        goog.dom.append(el, login.render());

        return el;

        /*
        Right column:
            Timeline navigation
            Resign / Offer draw
            Moves
            Orders
            Stats
                Territory
                Sectors
            Stats graph
            Chat

            players connect, then agree on game

        */
    };

    this.render = goog.functions.cacheReturnValue(render);
};
