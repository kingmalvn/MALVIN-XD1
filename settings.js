const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VORWxHK1NnWnQ5NFNLNStQVnNMejdXaERHa3VZdDN4SUVjK0xLc2tWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjg3U0dwN3AzY0lBS2liUHlBTDhuK1FLWk11akRuMDczV1RLOTJ0c09FST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTnVpdms5MGJwV25GQ3N2NDZ3YUxoVkpTbWVjUFhmUmlFUi9WQlREbW1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZ1d0SDI5Q3pEQUFBUFF0TVg4NzdUUElZejc2MFhJQ3pCYmVOZWdWQUVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHN1dUQ0xRc3BEY3diK1NUcEZyOTA1RVlYS0krWlJiblZiR2RzdFJSMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inpzakx3ZjhJMktHSXlxa0s0ZG5iNnVoMElmUGJ5OUltZTVKY3AwSVlKQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0EvT3VjcC9oSEZRcXVEdXB4NGVxelo3SlJLS0J3SVBvTGJadVVBdHBXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEp4Z1FkMk5zc2tqODYwNjFpSDBoVENXU0NJdUNLcVJBVW1MS09mWk5Eaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing3K1BJakZ3RHlIa0JlZVFUN01wbitSbGNpQ1d5aXhQNCthVEdCM0FnNHNGVmFKNnlwQ2JJWTNhZ1NERGxDanNLRWNnM0p6NmhWUUFMamZ0RnJ0ZWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJpWVI2TC9sRzJ4bmFCdGVOVzVTam5QZmdhS3Mwa1l3VXNISWZRWWRRL1BnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJYnIyblBWUVNIR1pPOTJESmo2cWRnIiwicGhvbmVJZCI6IjMzNGExMjBkLTZjOGMtNDE2NC1iZjUwLWI2MTU0ZmExNDJkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWRHFKSm05dldubTgvMnZCVkpmcko4Y2RNbDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmFSdlNzcEFCbGp4aVBZVmRsdnpUZCtLeEFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVRVkMxVDJaIiwibWUiOnsiaWQiOiIyNTQ3MTYyMjY0NjU6MzFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ29ybmVsaXVzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMYmc0WndHRVBHNXBMNEdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXcDdZU1laSFV1Vy9FQWtvcGo4cFpWTzBOZFQrOFBqYmNwNm9ENnJSU1ZZPSIsImFjY291bnRTaWduYXR1cmUiOiJ5UFlUMmVUNytYcnVESmxxWGY4ci9KOTlIZ0ZlTk16U3hMTVMwV3lHakdJcjBzdHV2UEgxVVptV01xb24xdlVkalVTT202L3YzN2NIcERnU05vWmZEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY3VOdm5xRWpIUUZDdE1RdjlvN1Y0TDk2RTZzS3J2YVpBUFZBYWhoamFha29uWHNZUTRwZ0owRmNVckxubEN3TEFQdHhsVk9rSkFJcVUrMTRBWGlHalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTYyMjY0NjU6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnFlMkVtR1IxTGx2eEFKS0tZL0tXVlR0RFhVL3ZENDIzS2VxQStxMFVsVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTIzMzQwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBN2UifQ==",
// add your Session Id ,session id starts with MALVIN-XD~

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot

BOT_NAME: process.env.BOT_NAME || "✦ᴍᴀʟᴠɪɴ xᴅ v2✦",
// add bot name here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react   

STICKER_NAME: process.env.STICKER_NAME || "✦MALVIN-XD✦",
// type sticker pack name  

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263714757857",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "✦ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀✦",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ✦ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ✦*",
// add bot owner name    

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bddvfr.jpg",
// add img for alive msg

MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/gld2vo.jpg",
// dont change menu image

LIVE_MSG: process.env.LIVE_MSG || "> ✦ᴍᴀʟᴠɪɴ xᴅ✦ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ v2✦ ғʀᴏᴍ ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/kingmalvn/MALVIN-XD",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto react on status (still testing)

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴍᴀʟᴠɪɴ xᴅ v2🚀🔥✦*",
// set the auto reply massage on status reply    

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 

OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
// make it true for fake recoding 

FAKE_TYPING: process.env.FAKE_TYPING || "false",
// make it true for fake typing

READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

DEV: process.env.DEV || "263714757857",
//replace with your whatsapp number       
 
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 

CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
// make it true for current status 
};
