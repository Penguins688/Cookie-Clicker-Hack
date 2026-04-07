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
