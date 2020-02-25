module.exports = {
    'Before' : function (browser) {
        browser
            .fullscreenWindow()
    },
    'testForClass' : function (browser) {
        browser
            .url("http://localhost:3000")
            .assert.title("HearthStone")
            .click("#nav-class")
            .assert.title("PlayerClass")
            .url("http://localhost:3000/api/v1/class/Warrior?pageNum=1")
            .assert.title("Warrior")
            .url("http://localhost:3000/api/v1/class")
            .url("http://localhost:3000/api/v1/class/Mage?pageNum=1")
            .assert.title("Mage")
            .pause(200)
    },
    'testForRarity' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("css selector","#rarity")
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
            .click("img[alt=Wisp]")
            .pause(200)
    },
    'testForCardback' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("css selector","#cardback")
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
            .click("css selector", "#nav-contact")
            .assert.title("Contact")
            .click("css selector", "#nav-class")
            .assert.title("PlayerClass")
            .click("css selector", "#nav-rarity")
            .assert.title("Rarity")
            .click("css selector", "#nav-cardback")
            .assert.title("CardBacks")
            .click("css selector", "#nav-home")
            .assert.title("HearthStone")
            .pause(200)
    },
    'testForFilter' : function (browser) {
        browser
            .url("http://localhost:3000")
            .click("css selector","#playerclass")
            .assert.title("PlayerClass")
            .url("http://localhost:3000/api/v1/class/Rogue?pageNum=1")
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