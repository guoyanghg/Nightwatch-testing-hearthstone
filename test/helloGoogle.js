module.exports = {
    'testforclass' : function (browser) {
        browser
            .fullscreenWindow()
            .url("http://localhost:3000")
            .assert.title("HearthStone")
            .click("link text", "PlayerClass")
            .assert.title("PlayerClass")
            .moveToElement("css selector","#Rogue",0,0)
            .pause(200)
            .mouseButtonClick(0)
            .assert.title("Rogue")
            .pause(2000)
    },
    'testforrarity' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("link text", "Rarity")
            .assert.title("Rarity")
            .click("img[alt=Free]")
            .assert.title("Free")
            .pause(3000)
    },
    'After' : function (browser) {
        browser
            .end();
    }
};