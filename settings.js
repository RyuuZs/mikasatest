
const chalk = require("chalk");
const fs = require("fs");

//########### BOT SETTING ###########//
global.owner = "6285189262321"
global.Nezubot = "6289653906415"
global.namaOwner = "Senna Ayase"
global.mode_public = true
global.linkChannel = "https://whatsapp.com/channel/0029Vb7RxOm6LwHgYNqiSA0v"
global.idChannel = "120363407411171451@newsletter"
global.linkGrup = "https://chat.whatsapp.com/FDIPHEfuuLHB7z60TeTcNh?mode=gi_t"
global.thumbnail = "https://files.catbox.moe/glslf5.jpg"
global.thumb = "https://files.catbox.moe/glslf5.jpg"
global.thumbrpg = "https://files.catbox.moe/glslf5.jpg"
//######### PAYMENT SETTING #########//
global.dana = "085189262321"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://img2.pixhost.to/images/5947/698165636_alip-1771768052401.jpg"

//####### PUSHKONTAK SETTING ########//
global.JedaPushkontak = 5000
global.JedaJpm = 5000

//########## PANEL SETTING ##########//
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://xskycode.zpr0.com"
global.apikey = "ptla_ylDEuf61TztFlhrbdjrFZ4M8EXugfaUyEOgxY8H" // Isi api ptla
global.capikey = "ptlc_NijertA3nxUPoQmbY4QPtLSajQ4Qgtjhd5tXql" // Isi api ptlc

global.rpg = {
    thumbnail: "https://files.catbox.moe/glslf5.jpg",
    sourceUrl: "https://whatsapp.com/channel/rpg",
    channelId: "120363367166512834@newsletter",
    channelName: "RPG Adventure"
};

global.job = {
    thumbnail: "https://files.catbox.moe/glslf5.jpg",
    sourceUrl: "https://whatsapp.com/channel/0029Vb1yiAU30LKNWGbJXl2r",
    channelId: "120363367166512834@newsletter",
    channelName: "Job Updates"
};

global.shop = {
    thumbnail: "https://files.catbox.moe/glslf5.jpg",
    sourceUrl: "https://whatsapp.com/channel/0029Vb1yiAU30LKNWGbJXl2r",
    channelId: "120363367166512834@newsletter",
    channelName: "Shop Updates"
};

//######### SUBDOMAIN SETTING ########//
global.subdomain = {
  "skypedia.qzz.io": {
    "zone": "59c189ec8c067f57269c8e057f832c74",
    "apitoken": "mZd-PC7t7PmAgjJQfFvukRStcoWDqjDvvLHAJzHF"
  }, 
  "pteroweb.my.id": {
    "zone": "714e0f2e54a90875426f8a689f782d0",
    "apitoken": "vOn3NN5HJut8laSwCjzY-gBO0cxeEdgSLH9WBEH"
  },
  "panelwebsite.biz.id": {
    "zone": "2d6aab40136299392d66eed4a7b1122",
    "apitoken": "CcavVSmQZcGSrTnOos-oXnawq4yf86TUhmQW29S"
  },
  "privatserver.my.id": {
    "zone": "699bb9eb65046a8863991daacb1968",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUhmW29S"
  },
  "serverku.biz.id": {
    "zone": "4e4feaba70b41ed78295d2dc090dd3a",
    "apitoken": "CcavVSmQ6ZcGSrTnOos-oXnawq4yf86TUmQW29S"
  },
  "vipserver.web.id": {
    "zone": "e305b750127749c9b80f41a9f4a3a53",
    "apitoken": "cpny6vwi620Tfq4vTF4KGjeJIXdCax3dZArCqnT"
  }, 
  "mypanelstore.web.id": {
    "zone": "c61c442d70392500611499caf816532",
    "apitoken": "uaw-48Yb5tPqhh5HdhNQSJ6dPAcauPL_qKkC-Oa"
  }
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})