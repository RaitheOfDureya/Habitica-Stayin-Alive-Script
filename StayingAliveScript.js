/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/* Stayin' Alive:                                                                                                                                */
/*                                                                                                                                               */
/* This script will try to keep you alive by any means possible, either by using healer skills or buying health potions.                         */
/* If you are not a healer or you don't have enough mana to cast healer skills it will try to buy a health potion for you.                       */
/*                                                                                                                                               */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/*                           Please update below the necessary information so the script can run smoothly                                        */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const habiticaUserId   = 'Paste-Here-Your-Habitica-User-ID';
const habiticaAPIToken = 'Paste-Here-Your-Habitica-API-Token';

var healthTrigger = 50;       // Used to monitor your health: if it falls below this number, the script is activated. Change it to your liking.
var tryBlessingFirst = false; // If you are a healer and would like to try "Blessing" first instead of "Healing Light", change this to true

/* --------------------------------------------------------------------------------------------------------------------------------------------- */
/*                           Do not edit code below this line (or do edit if you want to try your own ideas)                                     */
/* --------------------------------------------------------------------------------------------------------------------------------------------- */
const blessingManaCost = 25;       // Mana Points cost per use of this skill
const healingLightManaCost = 15;   // Mana Points cost per use of this skill
const healthPotionGoldCost = 25;   // Gold Points cost to buy a Health Potion

const headers = {
  'x-api-user': habiticaUserId,
  'x-api-key': habiticaAPIToken,
};

function StayingAlive() {
  var response = JSON.parse(UrlFetchApp.fetch('https://habitica.com/api/v3/user', { method: 'get', headers }));
  var myStats = response.data.stats;

  // Activates script if health is less than the healthTrigger
  if (myStats.hp < healthTrigger) {
    // Checks if the user is a healer AND if they have the minimum mana required to use a healer skill
    if (myStats.class == "healer" && myStats.mp >= healingLightManaCost) {
      // Checks if user would like to try "Blessing" first AND if they have enough mana for it
      if (tryBlessingFirst && myStats.mp >= blessingManaCost) {
        // Casts "Blessing"
        UrlFetchApp.fetch('https://habitica.com/api/v3/user/class/cast/healAll', { method: 'post', headers });
      }
      // User has chosen to cast "Healing Light" OR they don't have enough mana for "Blessing"
      else {
        // Casts "Healing Light"
        UrlFetchApp.fetch('https://habitica.com/api/v3/user/class/cast/heal', { method: 'post', headers });
      }
    }
    // User is not a healer OR do not have enough mana to use a healer skill                                                                     
    else if (myStats.gp >= healthPotionGoldCost) { // Checks if user has enough gold to buy a health potion
      // Buys a "Health Potion"
      UrlFetchApp.fetch('https://habitica.com/api/v3/user/buy-health-potion', { method: 'post', headers });
    }
  }
}
