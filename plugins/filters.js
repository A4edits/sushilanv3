const fs = require('fs') 
const Abu = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Abu.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Abu.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918281440156@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./bgms/uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('bgms/uploads/Bgm.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted : message.data, ptt: true})
        }
        
const array = ['Ajayan','aj cutzz','aj fx','Kbfc','blasters','mention','nanban','mute','Ajfx','insta','Friends','ajayan','alive','kaztro','Aloo','yt','grouplink','link','ambada','update','Lo','Remove','messi','removebg','avastha','Guys','Srg','img','bad boy','bgm','Hey','Kooi','bot noobe','bot','breakup','bro','business','chat','com','cristiano','gm','gn','ʙᴏʏ ғʀɪᴇɴᴅ','ɢɪʀʟ ғʀɪᴇɴᴅ','good','group','hacker','hello','help','hi','home','indo','kollam','kollamo','kooi','lalettan','line','love me','love','mm','modesh','muthe','myr','nanban','nanbans','neymer','njr','noorin','noorin shereef','of','off','owner','photo','pm','potte','remove','report','ronaldo','school','Hy','bey','Kaztroser','Kunne','Single','seen','sex','singel','spam','sticker','umma','welcome','wine','you','neymar','Adi','Aliya','Aliyo','Alone','Ano','Araa','Area','Arulle','Ayin','Baa','Bad','Bey','Bgmi','Bhasi','Black','Blaze boss','Blind','Block','Bomb','Bot sed','Bot','Breakup','By','Call','Chunks uyir','Chunk','Chunks','Cr7 back','Cr7','Cristiano','Da','Daa','Darshana','Dj','Do','E bull jet','Eda','Editing','Ee','Eee','Ellam poyi','Exam','fans','From','Full','Girl','Good morning','Good night','Ha','Hacker','Hai','Help','Hi','Hii','Hum','Humm','I love you','I','Idd','Indo','Kaliyannam','Kanjavu','Kannan','Kaztro','Kgf','Kill','Kiss','Kozhi','Kundan','Kutta','Kuttu','Line undo','Loo','Love vendada','Love you bot','Love you molu','Love','Mamma','Mine','Mm','Mood of','Mood','Myr','Myre','Nadakko','Nanban uyir','Nanban','Nanbans','Nb','Nee','Neymar','Njan ano','Njan eilla','Njan ind','Njan killadi alle','Njan nannayi','Njan poyi','Njan seen ane','Njan verum','Njr','No g','list','myre','uyire','menu','No','Noorin shereef','Noorin','Of','Name','Ohh','Oii','Ok','On','Onam','Onn','Oo','Op','Ozhivaki','Paavam','Pavam','Pinne','Poda','Podimon','Polayat','Poli','Pova','Power','Powli','Pro','Pubg','Remix','Romantic','Ronaldo','Sara','Sed life','Set','Sex','Singel','Sir','Smile','Sorry','Supper','Thayoli','Theap','Theri','Tq','Umb','Umbi','Uyir','Va','Vaa','Vadaa','Vid','Welcome','Xxx','Free fire','free fire','call','6','Sed','Pm','Messi','Bgm','Aysheri','Hlo','darshana','git','Sad','Christmas','christmas','ban','bye','Aa','Hello','Akhil','alive','Aliya','Aliyo','alone','Althaf','Ameer','ano','ara','Ardra','ayilla','ayn','aysheri','Ayyo','baby','Back','bad boy','Bad','bgm','Bhasi','bie','big fan','Blackzue','Boss','bot','Bot','broken','brokenlove','Bye','care','Chathi','chatho','Chathy','Chetta','Chiri','Chunk','chunke','chunks','comedy','cr7','Cr7','Cristiano','Cry','da','Dai','DD','die','Dora','Eda','ee','ekk','Ellarum ede','ennitt','enth','Entha cheyya','entha','Enthada','evde','Fan','fd','Feel aayi','Fek','ff','free','fresh','Frnd','Fsq','Gd mng','gd n8','Gd ngt','gdmng','gdngt','good bye','group','grp','Ha','hate','Haters','Hbd','Hbday','He','Hello','Hi','Hlo','Hloo','Hoi','Hy','i am back','ijathi','jd','kadhal','kali','Kanapi','Kanaran','Kanjan','Kanjav','kar98','Kemam','kenzo','Kenzoo','kerivaa','Kevin','Kgf','killadi','king','kiss','Kk','Koi','kozhi','Kukku','kundan','Kundan','Kunju','kunna','Kurup','Kutty','La be','Lala','left','Legend','Leopucha','life','line','Lo','Loo','Love tune','love u','Love','lover','Loveu','Lub u','lucifer','machan','Mad','Malang','mindalle','mindathe','Mohanlal','Mood','moodesh','moonji','Music pranthan','music','Muth','muthe','my area','My god','My love','mybos','mylove','myr','myre','Nalla kutty','Nallakutti','nallath','Name entha','Name','nanban','Nanbiye','Nanni','neymar','Neymer','Nirthada','nirthada','Nirtheda','Nishal','njan','Njn vera','njn','Njr','noob','Oh no','Oh','ok bei','Ok bye','ok da','ok','Ok','oombi','oompi','over','Paat','paatt','Paavam','padicho','pani','Panni','parayatte','patti','perfect ok','Pever','pewer','photo','Pikachu','Pinnallah','Place','Poda','Podai','Poli','polika','Pooda','poora','Poote','Pora','Potta','Potte','Power varate','power','Poweresh','Poyeda','Pranayam','Psycho','Ramos','rascal','rashmika','rasool','return','Rose','sad','Sad','Sahva','saji','Sayip','scene','Sed aayi','sed bgm','Sed tune','sed','Senior','Serious','set aano','Set','Seth po','Singapenne','single','sis','sketched','Smile','sneham','Soldier','song','sorry','Sry','Subscribe','Suhail','sulthan','Super','T','Tentacion','Thalapathy','thall','thamasha','Thantha','thayoli','theri','thot','thottu','thug','Thyr','Town','Track maat','trance','Uff','Umbi','umma','uyir','Va','Vaa','vada','Vava','Veeran','venda','verithanam','Vidhi','Wait','waiting','welcome','why','wow','Yaar','Z aayi','2','aara','Aarulle','adi','adima','Adipoli','breakup','Chunks','Clg','dance','Di','don','Ee','enjoy','Fen','Gd','Hacker','help','I love you','Kali','Kenzo','Kk gaming','KL LUTTAP 007','Kl luttapi 007','kozhi','lair','love','Men','Mm','myr','Myre','Nanbaa','nanban','Nirth','Njan vannu','Njan','No love','paatt','Penn','Pinnalla','poda','Pooda','prandh','putt','Rashmika','Rashu fans','Rashu','Ringtone','rip','Sarassu','Sarasu','Sed','Set aaka','Sfi','shibil','Single','sopnam','Tholvi','Uyr','Waiting','wcm','Vibe','Ali','Sajju','Ahraf','Aliya','Fanan','I like you','I love','King','Lakshmi','Mood','Mumbai','Mygirl','Ndhra nee','Nee etha','Ooi','Shazin','Shaz','a4edits','tagall','Shahid','Sapri','Saeeda','Rabi','Mazi','Khaiz','Fathima','Famu','Dilu','Devereyolizz','Ajju','Afeeza','🤬','Akash','Chuyi','Firdous','Hello','Ishaq','Khaiz','Mohammad','Rabi','Rohit','Sabari','Shazin','Thahir','Mohit','Sushilaa','Poda','Pachu','owner','Sbs','Cj','ali']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./bgms/uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918281440156@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./bgms/Kaztroserv2/Hi.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('bgms/Kaztroserv2/owner.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.MWOL, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['Sed','Hi','2','6','alive','Bot','Cr7','Da','Daa','Football','gif','git','group','Ha','Haa','Hello','help','Hm','Ho','invite','kooi','list','Love','Mm','Oo','owner','pm','Poda','Song','sticker','Video','love','bot','Hai','Hlo','Ok','Ajfx','ajfx','Ajayan','ajayan','Hey','update now']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./bgms/Kaztroserv2/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.MWOL, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('logo.jpg')}}}});

}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Abu.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918281440156@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./bgms/Kaztroser/Hi.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Hi','ayyo','bad','bgm','Bomb','bey','Christmas','come','Cr7','dj','dq','Eee','eilla','exam','gm','gn','help','Hii','Hlo','Kaztro','kick','kille','menu','morning','mute','no','nokk','Noorin','oh','Ok','oo','pm','poda','podi','powli','poyi','Pro','sad','Sed','Share','unmute']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./bgms/Kaztroser/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
Abu.addCommand({on: 'text', fromMe: false,onlyGroup: true}, (async (message, match) => {

    if(Config.THERI_KICK){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
        var us = await checkUsAdmin(message)
        var im = await checkImAdmin(message)
        if (!im) return;
        if (us) return;
await message.client.sendMessage(message.jid,Lang.KICK, MessageType.text, {quoted: message.data });  
await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
 Abu.addCommand({on: 'text', fromMe: false, onlyPm: true}, (async (message, match) => {

    if(Config.PLKS){
const array = afnp 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){          
await message.client.sendMessage(message.jid,Lang.KICK2, MessageType.text, {quoted: message.data });               
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
