
/*
 * GET home page.
 */

exports.index = function(req, res){
    var userCookies = null;
    var Browser = require("zombie");
    var assert = require("assert");

    // Load the page from localhost
    browser = new Browser();
    browser.visit("https://socialclub.rockstargames.com/profile/signin", function () {
        if(browser.success){
          // Fill email, password and submit form
          browser.
            fill("#login-field", req.body.login).
            fill("#password-field", req.body.password).
            fill("input[type=password].required", req.body.password).
            clickLink("#submitBtn", function() {
                // Form submitted, new page loaded.
                if(browser.success){
                    userCookies = browser.saveCookies();
                    browser.visit("http://socialclub.rockstargames.com/games/gtav/career/overviewAjax?character=Michael&nickname=&slot=Freemode&gamerHandle=&gamerTag=&category=general", function () {
                        var userInfo = {};
                        userInfo.rankSrc = browser.html(".rankHex");
                        userInfo.rank = browser.text(".rankHex h3");
                        // userInfo.rankTitle = browser.text(".rankHex p");
                        // userInfo.RP = browser.text(".rankXP h3").replace(" RP", "");
                        // userInfo.nextLevelRP = browser.text(".rankBar h4:first-child").split("s")[1].split(" / ")[1];
                        // userInfo.playTime = browser.text(".rankBar h4:first-child").replace("Play Time: ", "").split("s")[0].replace("h ", ":").replace("m ", ":");
                        // userInfo.cash = parseInt(browser.text("#cash-value").replace("$", "").replace(",", ""));
                        // userInfo.bank = parseInt(browser.text("#bank-value").replace("$", "").replace(",", ""));
                        // userInfo.totalMoney = userInfo.cash + userInfo.bank;
                        // userInfo.crew = {};
                        // userInfo.crew.name = browser.text(".crewCard .left h3 a");
                        // userInfo.crew.tag = browser.text(".crewTag span");
                        // userInfo.crew.color = browser.evaluate("document.getElementsByClassName('crewColor')[0].style.backgroundColor");
                        // userInfo.crew.avatar = browser.evaluate("document.getElementsByClassName('avatar')[0].src");
                        res.send(userInfo);
                        // userInfo.cashStats = {};
                        // var cashValues = browser.evaluate("document.getElementsByClassName('cash-val')");
                        // for (var i = 0; i < cashValues.length; i++) {
                        //     var value = cashValues[i];
                        //     userInfo.cashStats[value.getAttribute("data-name")] = {};
                        //     userInfo.cashStats[value.getAttribute("data-name")].amount = parseInt(value.getAttribute("data-cash").replace("$", "").replace("k", "000"));
                        //     userInfo.cashStats[value.getAttribute("data-name")].percent = value.getAttribute("data-pct");
                        // }
                        // userInfo.cashEarned = parseInt(browser.text("#cashEarned p").replace("$", "").replace(",", ""));
                        // userInfo.cashSpent = parseInt(browser.text("#cashSpent p").replace("$", "").replace(",", ""));

                        // userInfo.skills = {};
                        // var skills = browser.evaluate("document.getElementsByClassName('Freemode')[1].getElementsByTagName('li')");
                        // for (var i = 0; i < skills.length; i++) {
                        //     var skill = skills[i];
                        //     var skillName = skill.getElementsByTagName("h5")[0].innerHTML;
                        //     var bars = skill.getElementsByTagName("div");
                        //     var total = 0;
                        //     var count = 0;
                        //     for (var l = 0; l < bars.length; l++) {
                        //         var temp = parseInt(bars[l].getElementsByTagName("span")[0].innerHTML.replace("%"));
                        //         if(!isNaN(temp)){
                        //             console.log(temp);
                        //             total += temp;
                        //             count ++;
                        //         }
                        //     }
                        //     if(count == 0){
                        //         total = 0;
                        //     }else{
                        //         total = total / count;
                        //     }
                        //     userInfo.skills[skillName] = Math.round(total)+"%";
                        // }

                        // userInfo.criminalStats = {};
                        // var criminalStats = browser.evaluate("document.getElementsByClassName('span4col')[0].getElementsByTagName('li')");
                        // for (var i = 0; i < criminalStats.length; i++) {
                        //     var skill = criminalStats[i];
                        //     if(skill.getElementsByTagName("h5")[0].innerHTML == "Time Wanted"){
                        //         skill.getElementsByTagName("p")[0].innerHTML = skill.getElementsByTagName("p")[0].innerHTML.replace("s", "").replace("h ", ":").replace("m ", ":");
                        //     }
                        //     userInfo.criminalStats[skill.getElementsByTagName("h5")[0].innerHTML] = skill.getElementsByTagName("p")[0].innerHTML;
                        // }

                        // var criminalStats = browser.evaluate("document.getElementsByClassName('span4col')[1].getElementsByTagName('li')");
                        // for (var i = 0; i < criminalStats.length; i++) {
                        //     var skill = criminalStats[i];
                        //     userInfo.criminalStats[skill.getElementsByTagName("h5")[0].innerHTML] = skill.getElementsByTagName("p")[0].innerHTML;
                        // }

                        // userInfo.favoriteWeapon = browser.text("#faveWeaponWrapper .imageHolder h4");
                        // userInfo.weaponStats = {};
                        // var weaponStats = browser.evaluate("document.getElementsByClassName('textSection')[0].getElementsByTagName('li')");
                        // for (var i = 0; i < weaponStats.length; i++) {
                        //     var stat = weaponStats[i];
                        //     userInfo.weaponStats[stat.getElementsByTagName("h5")[0].innerHTML] = stat.getElementsByTagName("p")[0].innerHTML;
                        // }

                        // userInfo.awards = {};
                        // var awards = browser.evaluate("document.getElementsByClassName('gridRow')[1].getElementsByTagName('li')");
                        // for (var i = 0; i < awards.length; i++) {
                        //     var award = awards[i];
                        //     if(award.getAttribute("data-type") == "award"){
                        //         userInfo.awards[award.getAttribute("data-awardtxt")] = {};
                        //         userInfo.awards[award.getAttribute("data-awardtxt")]["oneTime"] = award.getAttribute("data-onetime");
                        //         userInfo.awards[award.getAttribute("data-awardtxt")]["awardType"] = award.getAttribute("data-award");
                        //         userInfo.awards[award.getAttribute("data-awardtxt")]["image"] = award.getElementsByTagName("img")[0].src;
                        //     }
                        // }


                        // res.send(JSON.stringify(userInfo));
                    });
                }else{
                     res.send("Try Again");
                }
            });
        }else{
             res.send("Try Again");
        }
    });
};