# Habitica Stayin' Alive Script

Are you tired of running out of health?   
Would you like to have bought a health potion earlier?   
Do you wish you had remembered to use that healer skill?   
Would you like to help your party stay alive even when you're not online?   

**Don't despair!** Using the **[Stayin' Alive Script](https://github.com/RaitheOfDureya/Habitica-Stayin-Alive-Script/blob/main/StayingAliveScript.js)** you can forget about these worries and focus on your tasks!

This script will try to keep you alive by any means possible, either by using healer skills or buying health potions.  
If you are not a healer or you don't have enough mana to cast healer skills it will try to buy a health potion for you.

![](https://media.giphy.com/media/kAPGlutydiHNiqhXmB/giphy.gif)
[Bee Gees - Stayin' Alive](https://www.youtube.com/watch?v=I_izvAbhExY)  
> *Whether you're a brother or whether you're a mother*  
> *You're stayin' alive, stayin' alive*  
> *Feel the city breakin' and everybody shakin'*  
> *And we're stayin' alive, stayin' alive*  
> *Ah, ha, ha, ha, stayin' alive, stayin' alive*  
> *Ah, ha, ha, ha, stayin' alive*  

## Setup Instructions
The script was developed using [Google Apps Script](https://en.wikipedia.org/wiki/Google_Apps_Script) and can be configured to run on a timed basis. In order for you to use this script you need to have a Google account.

1. Go to [script.google.com](https://script.google.com/). If this is your first script, this will automatically create a new Google script for you and open an editor for it. Otherwise, edit an existing project by clicking the pencil icon next to it, or create another.

2. Paste [this code snippet](https://raw.githubusercontent.com/RaitheOfDureya/Habitica-Stayin-Alive-Script/main/StayingAliveScript.js) into the editor, replacing the spaces marked ```Paste-Here-Your-Habitica-User-ID``` and ```Paste-Here-Your-Habitica-API-Token``` with [Habitica User ID and API Token](https://habitica.fandom.com/wiki/API_Options) (leave the quotes). These can be found under the API tab in your Habitica settings.

3. (Optional) For a more tailored experience you can optionally update the ```healthTrigger``` and ```tryBlessingFirst``` variables.
    - ```healthTrigger``` is used to monitor your health: if it falls below a certain threshold, the script is activated. Change its value to your liking.
    - ```tryBlessingFirst``` if you are a healer and would like to try "[Blessing](https://habitica.fandom.com/wiki/Healer#Blessing)" first instead of "[Healing Light](https://habitica.fandom.com/wiki/Healer#Healing_Light)", set this variable to ```true```.

3. Under Edit, select current project's triggers. Then add a time based trigger that runs `StayingAlive` and select the interval of your preference. *When scheduling the scripts, try to not schedule them to run more than hourly. Be nice to Habitica servers!* 

4. Save and you're done!

P.S.: *If you are still not sure how to configure it, the excellent [easy step-by-step setup guide with pictures](https://habitica.fandom.com/wiki/Event-Driven_(Webhook)_Scripts_Setup_Guide#Part_1._Set_Up_External_Script) written by [@EugeneG](https://habitica.com/profile/01daa187-ff5e-46aa-ac3f-d4c529a8c012) may help.*

## Credits and Acknowledgments

- The setup instructions were adapted from the [Google Apps Script](https://habitica.fandom.com/wiki/Google_Apps_Script) page
- [Staying Alive GIF](https://dribbble.com/shots/8790634-Staying-Alive) by [Grit](https://dribbble.com/truegrit)

## License
Copyright (c) 2021 RaitheOfDureya

Licensed under the MIT License.
