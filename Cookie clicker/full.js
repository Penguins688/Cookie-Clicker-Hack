var upgrader = setInterval(function() {
    try {
        for (let i = 0; i < Game.ObjectsById.length; i++) {
            Game.gainLumps(100000000)
            Game.ObjectsById[i].levelUp()
        }
    } catch (err) {
        console.log("upgrader");
        clearInterval(upgrader);
    }
}, 1);

var autoclicker = setInterval(function() {
    try {
        Game.lastClick -= 1000;
        document.getElementById('bigCookie').click();
    } catch (err) {
        console.log("stopping autoclicker");
        clearInterval(autoclicker);
    }
}, 1);

var goldenCookie = setInterval(function() {
    try {
        var newShimmer=new Game.shimmer("golden");
    } catch (err) {
        console.log("Stopping Golden Cookie");
        clearInterval(goldenCookie);
    }
}, 1);