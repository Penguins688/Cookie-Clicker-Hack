var goldenCookie = setInterval(function() {
    try {
        document.getElementById('grimoireLumpRefill').click()
        document.getElementById('grimoireLumpRefill').click()
        document.getElementById("grimoireSpell1").click()
    } catch (err) {
        console.log("Stopping Golden Cookie");
        clearInterval(goldenCookie);
    }
}, 1);