'use strict';
const missions=[
  {
    "title": "The town gate",
    "icon": "👋",
    "desc": "Say hello and start your first conversation.",
    "xy": [
      37,
      46
    ],
    "letter": [
      "न",
      "na",
      [
        "ma",
        "ka"
      ],
      "The first letter in नमस्ते. न is pronounced na."
    ],
    "words": [
      [
        "नमस्ते।",
        "Namaste.",
        "Hello.",
        "Hello.",
        "A greeting you can use throughout the day."
      ],
      [
        "मेरा नाम एलेक्स है।",
        "Mera naam Alex hai.",
        "My name is Alex.",
        "My name is Alex.",
        "Replace Alex with your own name in Mera naam … hai."
      ],
      [
        "आप कैसी हैं?",
        "Aap kaisi hain?",
        "How are you?",
        "How are you?",
        "Use kaisi hain for one woman; kaise hain for a man or a group."
      ],
      [
        "मैं ठीक हूँ।",
        "Main theek hoon.",
        "I am fine.",
        "I am fine.",
        "Main means I; theek means okay or fine."
      ]
    ]
  },
  {
    "title": "The chai stall",
    "icon": "☕",
    "desc": "Order a warm cup of chai, in your own words.",
    "xy": [
      13,
      64
    ],
    "letter": [
      "च",
      "cha",
      [
        "na",
        "pa"
      ],
      "The first letter in चाय (chaay / tea)."
    ],
    "words": [
      [
        "एक चाय दीजिए।",
        "Ek chaay dijiye.",
        "One chai, please.",
        "One chai, please.",
        "Ek means one. Dijiye is a polite way to say please give."
      ],
      [
        "कम चीनी, कृपया।",
        "Kam cheeni, kripya.",
        "Less sugar, please.",
        "Less sugar, please.",
        "Kam means less; cheeni means sugar. Add this to your order."
      ],
      [
        "मुझे पानी चाहिए।",
        "Mujhe paani chaahiye.",
        "I would like some water.",
        "I would like some water.",
        "Mujhe … chaahiye means I would like … ."
      ],
      [
        "धन्यवाद।",
        "Dhanyavaad.",
        "Thank you.",
        "Thank you.",
        "A polite thank-you. The English phrase thank you is also common in everyday speech."
      ]
    ]
  },
  {
    "title": "The lively market",
    "icon": "🥭",
    "desc": "Ask a price and find something you like.",
    "xy": [
      22,
      85
    ],
    "letter": [
      "प",
      "pa",
      [
        "cha",
        "ma"
      ],
      "प is pa, as in पानी (paani / water)."
    ],
    "words": [
      [
        "यह कितने का है?",
        "Yeh kitne ka hai?",
        "How much is this?",
        "How much is this?",
        "Use this form for a single masculine item."
      ],
      [
        "यह बहुत महँगा है।",
        "Yeh bahut mahanga hai.",
        "This is very expensive.",
        "This is very expensive.",
        "Bahut means very. This sentence refers to a masculine item."
      ],
      [
        "थोड़ा कम कीजिए।",
        "Thoda kam kijiye.",
        "Please lower the price a little.",
        "Please lower the price a little.",
        "Use this in a market or another setting where bargaining is appropriate."
      ],
      [
        "मुझे यह चाहिए।",
        "Mujhe yeh chaahiye.",
        "I would like this.",
        "I would like this.",
        "The same Mujhe … chaahiye pattern you used to ask for water."
      ]
    ]
  },
  {
    "title": "A taxi to your hotel",
    "icon": "🚕",
    "key": "taxi-v2",
    "direct": true,
    "distractorsLocal": true,
    "desc": "Find your hotel, chat with your driver and arrange a morning pickup.",
    "xy": [
      87,
      56
    ],
    "letter": [
      "म",
      "ma",
      [
        "na",
        "pa"
      ],
      "The first letter in मैं (main / I)."
    ],
    "words": [
      [
        "मुझे इस होटल जाना है।",
        "Mujhe is hotel jaana hai.",
        "I would like to go to this hotel.",
        "I would like to go to this hotel.",
        "Show the driver the hotel name or address. Is hotel means this hotel."
      ],
      [
        "यहाँ से होटल कितनी दूर है?",
        "Yahaan se hotel kitni door hai?",
        "How far is the hotel from here?",
        "How far is the hotel from here?",
        "Kitni door asks how far away something is."
      ],
      [
        "होटल पहुँचने में कितने मिनट लगेंगे?",
        "Hotel pahunchne mein kitne minute lagenge?",
        "How many minutes will it take to reach the hotel?",
        "How many minutes will it take to reach the hotel?",
        "Kitne minute asks how many minutes. Compare it with kitni door, which asks about distance."
      ],
      [
        "आप कहाँ के हैं?",
        "Aap kahaan ke hain?",
        "Where are you from?",
        "Where are you from?",
        "A polite way to ask a male driver where he is from."
      ],
      [
        "मैं हिंदी सीख रहा हूँ।",
        "Main Hindi seekh raha hoon.",
        "I am learning Hindi.",
        "I am learning Hindi.",
        "For a male speaker. A female speaker says Main Hindi seekh rahi hoon. Seekh means learn."
      ],
      [
        "इस सड़क पर सीधे जाइए।",
        "Is sadak par seedhe jaaiye.",
        "Please go straight along this road.",
        "Please go straight along this road.",
        "Sadak means road; seedhe means straight. Jaaiye is a polite request."
      ],
      [
        "कृपया सावधानी से गाड़ी चलाइए।",
        "Kripya saavdhaani se gaadi chalaaiye.",
        "Please drive carefully.",
        "Please drive carefully.",
        "Saavdhaani se means carefully. Gaadi chalaaiye means drive the car."
      ],
      [
        "कल सुबह आठ बजे मुझे लेने आइए।",
        "Kal subah aath baje mujhe lene aaiye.",
        "Please pick me up tomorrow morning at eight.",
        "Please pick me up tomorrow morning at eight.",
        "Kal subah means tomorrow morning; aath baje means at eight. Mujhe lene aaiye means come to pick me up."
      ]
    ]
  },
  {
    "title": "Making a friend",
    "icon": "🤝",
    "desc": "Keep a conversation going with a few useful phrases.",
    "xy": [
      62,
      66
    ],
    "letter": [
      "ह",
      "ha",
      [
        "ma",
        "cha"
      ],
      "ह is ha. It also appears in है (hai / is)."
    ],
    "words": [
      [
        "मुझे हिंदी थोड़ी आती है।",
        "Mujhe Hindi thodi aati hai.",
        "I know a little Hindi.",
        "I know a little Hindi.",
        "Thodi means a little. This lets the other person know your level."
      ],
      [
        "धीरे बोलिए।",
        "Dheere boliye.",
        "Please speak slowly.",
        "Please speak slowly.",
        "Dheere means slowly. Boliye is a polite request to speak."
      ],
      [
        "फिर से कहिए।",
        "Phir se kahiye.",
        "Please say it again.",
        "Please say it again.",
        "Phir se means again. Useful when you do not catch something."
      ],
      [
        "इसका क्या मतलब है?",
        "Iska kya matlab hai?",
        "What does this mean?",
        "What does this mean?",
        "Matlab means meaning. Ask about an expression you do not know."
      ]
    ]
  },
  {
    "title": "The restaurant",
    "icon": "🍛",
    "desc": "Order a meal and take a break from exploring.",
    "xy": [
      22,
      37
    ],
    "letter": [
      "क",
      "ka",
      [
        "pa",
        "ha"
      ],
      "The first letter in कम (kam / less)."
    ],
    "words": [
      [
        "मेन्यू दीजिए।",
        "Menu dijiye.",
        "The menu, please.",
        "The menu, please.",
        "Dijiye is the same polite request you used at the chai stall."
      ],
      [
        "बिना मिर्च के बनाइए।",
        "Bina mirch ke banaaiye.",
        "Please make it without chilli.",
        "Please make it without chilli.",
        "Bina … ke means without … . This asks for no chilli, not for all spices to be removed."
      ],
      [
        "खाना बहुत अच्छा है।",
        "Khaana bahut achchha hai.",
        "The food is very good.",
        "The food is very good.",
        "Khaana means food; bahut achchha means very good."
      ],
      [
        "बिल दीजिए।",
        "Bill dijiye.",
        "The bill, please.",
        "The bill, please.",
        "Add dijiye to the English loanword bill."
      ]
    ]
  },
  {
    "title": "An office meeting",
    "icon": "🏢",
    "key": "office-v1",
    "direct": true,
    "distractorsLocal": true,
    "desc": "Share a product update, apologize for a Defect and discuss a Support Contract.",
    "xy": [
      87,
      26
    ],
    "letter": [
      "आ",
      "aa",
      [
        "a",
        "i"
      ],
      "आ is a long aa, as in आज (aaj / today)."
    ],
    "words": [
      [
        "आज मैं आपको हमारे प्रोडक्ट की ताज़ा जानकारी देने आया हूँ।",
        "Aaj main aapko hamaare product ki taaza jaankaari dene aaya hoon.",
        "I have come today to share the latest information about our product.",
        "I have come today to share the latest information about our product.",
        "Taaza jaankaari means the latest information. Male speakers say aaya hoon; female speakers say aayi hoon. Product is an English loanword."
      ],
      [
        "इस बार Defect की वजह से आपको बहुत परेशानी हुई। इसके लिए मैं माफ़ी चाहता हूँ।",
        "Is baar Defect ki vajah se aapko bahut pareshaani hui. Iske liye main maafi chaahta hoon.",
        "The Defect caused you a great deal of trouble this time. I apologize for that.",
        "The Defect caused you a great deal of trouble this time. I apologize for that.",
        "Ki vajah se means because of. Male speakers apologize with maafi chaahta hoon; female speakers use maafi chaahti hoon. Defect stays in English."
      ],
      [
        "मैं आपसे Support Contract की शर्तों के बारे में बात करना चाहता हूँ।",
        "Main aapse Support Contract ki sharton ke baare mein baat karna chaahta hoon.",
        "I would like to discuss the terms of the Support Contract with you.",
        "I would like to discuss the terms of the Support Contract with you.",
        "Ke baare mein means about; sharton refers to contract terms. Female speakers use chaahti hoon. Support Contract stays in English."
      ]
    ]
  }
];
const scenes=[
  [
    "Aasha · Your town guide",
    [
      [
        "नमस्ते!",
        "Namaste!",
        "Hello!",
        "Greet her back and start the conversation.",
        "आपका नाम क्या है? · Aapka naam kya hai?"
      ],
      [
        "आपका नाम क्या है?",
        "Aapka naam kya hai?",
        "What is your name?",
        "Introduce yourself. For this practice, your name is Alex.",
        "एलेक्स जी, स्वागत है! · Alex ji, svaagat hai!"
      ],
      [
        "मेरा नाम आशा है।",
        "Mera naam Aasha hai.",
        "My name is Aasha.",
        "Now ask how she is doing. You are speaking to one woman.",
        "मैं ठीक हूँ। · Main theek hoon."
      ],
      [
        "आप कैसे हैं?",
        "Aap kaise hain?",
        "How are you?",
        "Tell her you are doing well too.",
        "बहुत अच्छा! · Bahut achchha!"
      ]
    ]
  ],
  [
    "Ravi · Chai seller",
    [
      [
        "आप क्या लेंगे?",
        "Aap kya lenge?",
        "What would you like?",
        "Order a cup of chai.",
        "ज़रूर! · Zaroor!"
      ],
      [
        "कितनी चीनी डालूँ?",
        "Kitni cheeni daaloon?",
        "How much sugar should I add?",
        "Ask for less sugar.",
        "ठीक है। · Theek hai."
      ],
      [
        "और कुछ चाहिए?",
        "Aur kuchh chaahiye?",
        "Would you like anything else?",
        "You are thirsty. Ask for water too.",
        "यह लीजिए। · Yeh lijiye."
      ],
      [
        "यह आपकी चाय है।",
        "Yeh aapki chaay hai.",
        "Here is your chai.",
        "Accept your chai and thank the seller.",
        "फिर आइए! · Phir aaiye!"
      ]
    ]
  ],
  [
    "Arjun · Market stall owner",
    [
      [
        "यह आम बहुत अच्छा है।",
        "Yeh aam bahut achchha hai.",
        "This mango is very good.",
        "Ask the price of the mango.",
        "पाँच सौ रुपये। · Paanch sau rupaye."
      ],
      [
        "पाँच सौ रुपये।",
        "Paanch sau rupaye.",
        "Five hundred rupees.",
        "Explain that the price is high.",
        "यह अच्छा आम है। · Yeh achchha aam hai."
      ],
      [
        "यह अच्छा आम है।",
        "Yeh achchha aam hai.",
        "It is a good mango.",
        "Politely ask for a lower price.",
        "अच्छा, चार सौ रुपये। · Achchha, chaar sau rupaye."
      ],
      [
        "आपको कौन सा चाहिए?",
        "Aapko kaun sa chaahiye?",
        "Which one would you like?",
        "Point to the item you want and choose it.",
        "ठीक है! · Theek hai!"
      ]
    ]
  ],
  [
    "Raj · Taxi driver",
    [
      [
        "नमस्ते! आपको कहाँ जाना है?",
        "Namaste! Aapko kahaan jaana hai?",
        "Hello! Where would you like to go?",
        "Show your hotel address and tell the driver where you want to go.",
        "ज़रूर, बैठिए। · Zaroor, baithiye."
      ],
      [
        "मैं इस होटल को जानता हूँ।",
        "Main is hotel ko jaanta hoon.",
        "I know this hotel.",
        "Ask how far the hotel is from here.",
        "लगभग दस किलोमीटर। · Lagbhag das kilometer."
      ],
      [
        "आज थोड़ा ट्रैफिक है।",
        "Aaj thoda traffic hai.",
        "There is a little traffic today.",
        "Find out how long it will take, in minutes.",
        "लगभग बीस मिनट लगेंगे। · Lagbhag bees minute lagenge."
      ],
      [
        "मैं यहाँ कई साल से टैक्सी चला रहा हूँ।",
        "Main yahaan kai saal se taxi chala raha hoon.",
        "I have been driving a taxi here for many years.",
        "Make conversation by asking where the driver is from.",
        "मैं जयपुर का हूँ। · Main Jaipur ka hoon."
      ],
      [
        "आपकी हिंदी अच्छी है!",
        "Aapki Hindi achchhi hai!",
        "Your Hindi is good!",
        "You received a compliment. Explain that you are learning Hindi.",
        "बहुत अच्छा! · Bahut achchha!"
      ],
      [
        "अब कहाँ जाऊँ?",
        "Ab kahaan jaaoon?",
        "Which way should I go now?",
        "Check the map and ask the driver to keep going straight along this road.",
        "ठीक है, सीधे चलता हूँ। · Theek hai, seedhe chalta hoon."
      ],
      [
        "आपको जल्दी है?",
        "Aapko jaldi hai?",
        "Are you in a hurry?",
        "Ask the driver to prioritize careful, safe driving.",
        "ज़रूर, मैं ध्यान रखूँगा। · Zaroor, main dhyaan rakhoonga."
      ],
      [
        "क्या कल भी टैक्सी चाहिए?",
        "Kya kal bhi taxi chaahiye?",
        "Do you need a taxi tomorrow too?",
        "Arrange a pickup for tomorrow morning at 8.",
        "ठीक है, कल सुबह आठ बजे यहीं आऊँगा। · Theek hai, kal subah aath baje yaheen aaoonga."
      ]
    ]
  ],
  [
    "Neha · A new friend",
    [
      [
        "क्या आपको हिंदी आती है?",
        "Kya aapko Hindi aati hai?",
        "Do you know Hindi?",
        "Explain that you know just a little Hindi.",
        "बहुत अच्छा! · Bahut achchha!"
      ],
      [
        "मैं जल्दी में हूँ।",
        "Main jaldi mein hoon.",
        "I am in a hurry.",
        "The other person is speaking quickly. Ask them to slow down.",
        "ठीक है। · Theek hai."
      ],
      [
        "कल मिलते हैं।",
        "Kal milte hain.",
        "See you tomorrow.",
        "You did not catch that. Ask them to repeat it.",
        "कल मिलते हैं। · Kal milte hain."
      ],
      [
        "फिर मिलेंगे!",
        "Phir milenge!",
        "See you again!",
        "You do not know this expression. Ask what it means.",
        "See you again!"
      ]
    ]
  ],
  [
    "Priya · Restaurant server",
    [
      [
        "आप क्या खाना चाहेंगे?",
        "Aap kya khaana chaahenge?",
        "What would you like to eat?",
        "Ask for the menu before deciding what to order.",
        "यह लीजिए। · Yeh lijiye."
      ],
      [
        "तीखा चलेगा?",
        "Teekha chalega?",
        "Is spicy food okay?",
        "Ask for your food to be made without chilli.",
        "ज़रूर। · Zaroor."
      ],
      [
        "खाना कैसा है?",
        "Khaana kaisa hai?",
        "How is the food?",
        "Compliment the food.",
        "धन्यवाद! · Dhanyavaad!"
      ],
      [
        "और कुछ चाहिए?",
        "Aur kuchh chaahiye?",
        "Would you like anything else?",
        "You have finished eating. Ask for the bill.",
        "ज़रूर। · Zaroor."
      ]
    ]
  ],
  [
    "Amit · Customer IT lead",
    [
      [
        "नमस्ते! आज आप किसलिए आए हैं?",
        "Namaste! Aaj aap kisliye aaye hain?",
        "Hello! What brings you here today?",
        "You are visiting to share the latest product information. Explain the purpose of your visit.",
        "ज़रूर, बताइए। · Zaroor, bataaiye."
      ],
      [
        "इस Defect से हमारा काम रुक गया।",
        "Is Defect se hamaara kaam ruk gaya.",
        "This Defect brought our work to a halt.",
        "The customer describes the impact of a Defect. Acknowledge the trouble and apologize.",
        "आपकी बात समझ में आई। · Aapki baat samajh mein aayi."
      ],
      [
        "अब हम किस विषय पर बात करें?",
        "Ab hum kis vishay par baat karein?",
        "What topic shall we discuss next?",
        "Move to the next topic: the terms of the Support Contract.",
        "जी, Support Contract के बारे में बताइए। · Ji, Support Contract ke baare mein bataaiye."
      ]
    ]
  ]
];
const $=s=>document.querySelector(s),key='hindi-quest-web-v1';let memoryOnly=false,state={done:[],xp:0,days:[],daily:{},earned:{}};
try{const v=JSON.parse(localStorage.getItem(key));if(v&&Array.isArray(v.done)&&Array.isArray(v.days)){state={...state,...v};state.done=state.done.filter(n=>Number.isInteger(n)&&n>=0&&n<missions.length);state.xp=Number.isFinite(v.xp)?v.xp:0;state.daily=v.daily&&typeof v.daily==='object'?v.daily:{}}}catch{memoryOnly=true}
if(!state.earned||typeof state.earned!=='object')state.earned={};
// Keep existing XP and other completed scenes; the replacement taxi lesson is new.
if(state.taxiEdition!==2){state.done=state.done.filter(i=>i!==3);state.taxiEdition=2;}
function day(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{memoryOnly=true}render();if(typeof renderVocabulary==='function')renderVocabulary()}
function streak(){let n=0,d=new Date();if(!state.days.includes(day()))d.setDate(d.getDate()-1);for(let i=0;i<3660;i++){const s=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;if(!state.days.includes(s))break;n++;d.setDate(d.getDate()-1)}return n}
function practice(){let d=day();if(!state.days.includes(d))state.days.push(d);state.daily[d]=Math.min(5,(state.daily[d]||0)+1)}
function unlocked(i){return Number.isInteger(i)&&i>=0&&i<missions.length}
function nextMission(){return missions.findIndex((_,i)=>!state.done.includes(i))}
function render(){const next=nextMission(),i=next<0?0:next,m=missions[i];$('#xp').textContent=`✦ ${state.xp} XP`;$('#streak').textContent=`🔥 ${streak()} days`;$('#completed').textContent=`${state.done.length} / ${missions.length} complete`;$('#questIcon').textContent=next<0?'🏆':m.icon;$('#nextTitle').textContent=next<0?'Town adventure complete!':m.title;$('#nextDesc').textContent=next<0?'Explore the town again with your new phrases, or keep practising with a daily review.':m.desc;$('#nextMeta').textContent=`${m.words.length} exchanges + 1 letter · Earn XP for correct answers`;$('#start').textContent=next<0?'Explore again →':'Start this quest →';$('#start').onclick=()=>start(i);$('#dailyText').textContent=`Today: ${state.daily[day()]||0} / 5 practice questions`;$('#dailyProgress').value=state.daily[day()]||0;$('#saveNote').textContent=memoryOnly?'Storage is unavailable. Your progress will last only for this session.':'Progress is saved only on this device.';$('#markers').innerHTML=missions.map((m,j)=>`<button class="pin ${state.done.includes(j)?'done':!unlocked(j)?'locked':j===next?'current':''}" style="left:${m.xy[0]}%;top:${m.xy[1]}%" data-mission="${j}" aria-label="${m.title}${unlocked(j)?'':': complete the previous quest to unlock'}" ${unlocked(j)?'':'disabled'}>${state.done.includes(j)?'✓':unlocked(j)?j+1:'⌑'}${j===next?`<small>${m.title}</small>`:''}</button>`).join('');$('#missionList').innerHTML=missions.map((m,j)=>`<button class="mission ${j===next?'active':''}" data-mission="${j}" ${unlocked(j)?'':'disabled'}><span>${m.icon}</span><strong>${m.title}</strong><small>${state.done.includes(j)?'✓ Complete · Play again':unlocked(j)?'Ready to play':'Locked'}</small></button>`).join('');document.querySelectorAll('[data-mission]').forEach(b=>b.onclick=()=>start(+b.dataset.mission))}
let run=null,toastTimer;function toast(t){$('#toast').textContent=t;$('#toast').style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').style.display='none',4500)}
function close(){stopHindiSpeech();$('#game').close();run=null}$('#game').addEventListener('cancel',()=>{stopHindiSpeech();run=null});
function shell(title,body){stopHindiSpeech();$('#gameContent').innerHTML=`<div class="dialogtop"><p>${title}</p><button class="close" aria-label="Close and return">×</button></div>${body}`;$('.close').onclick=close;if(!$('#game').open)$('#game').showModal();$('#game').scrollTop=0;wireAudio()}
function audioHTML(h){return `<div class="audio"><button data-say="${h}" data-rate=".85">▶ Listen</button><button data-say="${h}" data-rate=".6">▶ Slower</button></div><p class="audioStatus" data-audio-status role="status"></p>`}
function wireAudio(){document.querySelectorAll('[data-say]').forEach(b=>b.onclick=()=>speak(b.dataset.say,+b.dataset.rate))}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function makeQuestion(i,j){const word=missions[i].words[j];const alternatives=missions[i].distractorsLocal?missions[i].words.filter(w=>w!==word):missions.slice(0,6).flatMap((m,mi)=>m.words.filter((_,wi)=>mi!==i && mi!==3 && !(i===1&&j===3&&mi===5&&wi===2)));return {id:`${missions[i].key||i}-${j}`,mission:i,word,scene:scenes[i][1][j],speaker:scenes[i][0],choices:shuffle([word,...shuffle(alternatives).slice(0,2)]),letter:false}}
function start(i){if(!Number.isInteger(i)||!missions[i]||!unlocked(i))return false;const l=missions[i].letter;run={i,q:0,first:0,missed:[],review:false,gained:0,questions:missions[i].words.map((_,j)=>makeQuestion(i,j))};run.questions.push({id:`${missions[i].key||i}-letter`,letter:true,symbol:l[0],correct:l[1],choices:shuffle([l[1],...l[2]]),tip:l[3]});question();return true}
function question(){const q=run.questions[run.q];run.answered=false;run.attempts=0;run.hint=false;const n=run.questions.length;shell(`${run.review?'☀ Daily conversation practice':missions[run.i].icon+' '+missions[run.i].title} · ${run.q+1} / ${n}`,`<progress max="${n}" value="${run.q}"></progress><div class="scoreline"><span>This round: +${run.gained} XP</span><span>First try +10 · With a hint +5 · Retry +3</span></div>${q.letter?`<h2>Can you read this letter?</h2><div class="phrase hindi" lang="hi">${q.symbol}</div>`:`<p class="speaker">${q.speaker}</p><div class="npcbubble"><div class="hindi" lang="hi">${q.scene[0]}</div><div class="roman">${q.scene[1]}</div>${audioHTML(q.scene[0])}</div><p class="scene">${q.scene[3]}</p><button id="hint" class="textbtn">Show the English meaning (up to +5 XP)</button><div id="hintText" class="hintText"></div><h2 class="replyTitle">How would you reply?</h2>`}<div class="answers">${q.choices.map((c,j)=>`<button class="answer" data-answer="${j}">${q.letter?c:`${c[1]}<small lang="hi">${c[0]}</small>`}</button>`).join('')}</div><div id="feedback" aria-live="polite"></div>`);if(!q.letter)$('#hint').onclick=()=>{if(run.answered)return;run.hint=true;$('#hintText').textContent=q.scene[2];$('#hint').disabled=true};document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(+b.dataset.answer,b))}
function answer(j,b){if(run.answered)return;const q=run.questions[run.q],ok=q.letter?q.choices[j]===q.correct:q.choices[j]===q.word;run.attempts++;if(!ok){b.classList.add('wrong');b.disabled=true;$('#feedback').innerHTML='<div class="feedback retry">Try another reply that fits your goal. An uncompleted question earns +3 XP when you get it right.</div>';return}run.answered=true;b.classList.add('correct');document.querySelectorAll('[data-answer]').forEach(x=>x.disabled=true);if(!q.letter)$('#hint').disabled=true;if(run.attempts===1)run.first++;else if(!q.letter)run.missed.push(q.word);const rewardKey=run.review?`review-${day()}-${q.id}`:`roleplay-${q.id}`;const gain=state.earned[rewardKey]?0:run.attempts>1?3:run.hint?5:10;state.earned[rewardKey]=true;state.xp+=gain;run.gained+=gain;practice();save();$('#feedback').innerHTML=`<div class="feedback"><strong>✓ ${q.letter?'Correct!':'You kept the conversation going!'} ${gain?'+'+gain+' XP':'Already earned · +0 XP'}</strong>${q.letter?`<p>${q.tip}</p>`:`<p class="npcReaction">${q.scene[4]}</p><details><summary>Show the meaning and explanation</summary><div class="explanation"><p>They said: ${q.scene[2]}</p><div class="roman">${q.word[1]}</div><p>${q.word[2]}</p><p>${q.word[4]}</p>${audioHTML(q.word[0])}</div></details>`}</div><button class="primary full" id="nextq">${run.q===run.questions.length-1?'See your results →':'Keep talking →'}</button>`;wireAudio();$('#nextq').onclick=()=>{run.q++;if(run.q<run.questions.length)question();else finish()}}
function finish(){if(!run.review&&!state.done.includes(run.i))state.done.push(run.i);save();const next=nextMission(),missed=run.missed;shell('QUEST COMPLETE',`<div class="finish"><div class="medal">${run.review?'🌟':'🏅'}</div><p class="eyebrow">SHABAASH! · WELL DONE</p><h2>${run.review?'Daily conversation complete!':missions[run.i].title+' — complete!'}</h2><p>Correct on the first try: ${run.first} / ${run.questions.length}<br>You moved the conversation forward, one reply at a time.</p><span class="xpbadge">This round: +${run.gained} XP</span><p class="tip">Each quest question awards points the first time you solve it.<br>In daily review, each exchange earns points once per day.</p>${missed.length?`<details><summary>Review phrases you retried</summary><p class="tip">${missed.map(w=>w[1]).join('<br>')}</p></details>`:''}<button class="primary full" id="finishNext">${!run.review&&next>=0?'Next stop →':'Back to town →'}</button><button class="outline" id="finishNotebook">Open your phrasebook</button></div>`);$('#finishNext').onclick=()=>{if(!run.review&&next>=0)start(next);else close()};$('#finishNotebook').onclick=notebook}
function review(){const pool=missions.flatMap((m,i)=>state.done.includes(i)?m.words.map((_,j)=>makeQuestion(i,j)):[]);if(pool.length===0){toast('Start with a conversation at the town gate.');start(0);return}const questions=shuffle(pool).slice(0,5);run={review:true,q:0,first:0,missed:[],gained:0,questions};question()}
function notebook(){run=null;const learned=missions.filter((_,i)=>state.done.includes(i));shell('▤ Phrasebook',`<h2>${learned.reduce((n,m)=>n+m.words.length,0)} phrases from your journey.</h2><p class="tip">Revisit and listen to phrases from completed quests.</p>${learned.length?learned.map(m=>`<h3>${m.icon} ${m.title}</h3>${m.words.map(w=>`<div class="wordrow"><div class="hindi" lang="hi">${w[0]}</div><div class="roman">${w[1]}</div><div class="meaning">${w[2]}</div>${audioHTML(w[0])}</div>`).join('')}`).join(''):'<div class="phrase">Your phrasebook is waiting.<br>Collect your first four phrases at the town gate.</div>'}<button id="backMap" class="primary full">Back to town</button>`);$('#backMap').onclick=close}
$('#taxiStart').onclick=()=>start(3);$('#officeStart').onclick=()=>start(6);$('#notebook').onclick=notebook;$('#review').onclick=review;render();
