module.exports = {
    'Before' : function (browser) {
        browser
            .fullscreenWindow()
    },
    'testForClass' : function (browser) {
        browser
            .url("http://localhost:3000")
            .assert.title("HearthStone")
            .click("link text","PlayerClass")
            .assert.title("PlayerClass")
            .moveToElement("css selector","#Rogue",0,0)
            .pause(200)
            .mouseButtonClick(0)
            .assert.title("Rogue")
            .url("http://localhost:3000/api/v1/class")
            .moveToElement("css selector","#Warrior",0,0)
            .mouseButtonClick(0)
            .assert.title("Warrior")
            .pause(200)
    },
    'testForRarity' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("link text", "Rarity")
            .assert.title("Rarity")
            .click("img[alt=Free]")
            .assert.title("Free")
            .url("http://localhost:3000/api/v1/rarity")
            .pause(200)
            .click("img[alt=Common]")
            .assert.title("Common")
            .pause(200)
    },
    'testForSingleCard':function (browser) {
        browser
            .moveToElement("css selector","#Wisp",0,0)
            .pause(200)
            .mouseButtonClick(0)
            .pause(200)
    },
    'testForCardback' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("link text", "Card Back")
            .assert.title("CardBacks")
            .pause(200)
    },
    'testForSingleCardBack':function (browser) {
        browser
            .moveToElement("css selector","#Classic",0,0)
            .pause(200)
            .mouseButtonClick(0)
            .pause(500)
    },
    'testForNavbar' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("link text", "Contact")
            .assert.title("Contact")
            .pause(200)
    },
    'testForFilter' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("link text","PlayerClass")
            .assert.title("PlayerClass")
            .moveToElement("css selector","#Rogue",0,0)
            .pause(200)
            .mouseButtonClick(0)
            .assert.title("Rogue")
            .click("link text","7")
            .pause(200)
            .click("link text","7")
            .pause(500)
    },
    'After' : function (browser) {
        browser
            .end();
    }
};