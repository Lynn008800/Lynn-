// ===== 情绪数据 =====
const EMOTIONS = [
  { id: 'happy',    name: '开心', emoji: '\u{1F60A}', color: '#FFD93D', desc: '心里暖暖的、轻轻的，想笑、想和别人分享。' },
  { id: 'sad',      name: '难过', emoji: '\u{1F622}', color: '#6C9BCF', desc: '心里重重的，像有一块石头压着。不想说话，不想动。' },
  { id: 'angry',    name: '生气', emoji: '\u{1F620}', color: '#FF6B6B', desc: '像火山要爆发了！脸发烫、心跳很快、想喊出来。' },
  { id: 'scared',   name: '害怕', emoji: '\u{1F628}', color: '#A66CFF', desc: '心怦怦跳、想躲起来、想找个人陪。' },
  { id: 'nervous',  name: '紧张', emoji: '\u{1F630}', color: '#FF9F43', desc: '肚子怪怪的、脑子里一片空白。和害怕不同\u2014\u2014紧张是因为\u201c等会儿要发生的事\u201d。' },
  { id: 'anxious',  name: '焦虑', emoji: '\u{1F61F}', color: '#8395A7', desc: '脑子里一直在想\u201c万一\u2026\u2026怎么办\u201d，停不下来。' },
  { id: 'wronged',  name: '委屈', emoji: '\u{1F61E}', color: '#4A69BD', desc: '心皱皱的，像被揉过的纸。明明不是你的错，却被批评了。' },
  { id: 'embarrass',name: '尴尬', emoji: '\u{1F605}', color: '#FF8FAB', desc: '\u201c好丢脸\u2026\u2026地缝在哪里？\u201d 脸上发烫、想消失。' },
  { id: 'jealous',  name: '嫉妒', emoji: '\u{1F612}', color: '#78E08F', desc: '心里酸酸的，像吃了柠檬。别人有的你没有。' },
  { id: 'disappoint',name: '失望', emoji: '\u{1F615}', color: '#B0B0B0', desc: '\u201c唉\u2026\u2026\u201d 期待了很久的事没有发生。' },
  { id: 'bored',    name: '无聊', emoji: '\u{1F610}', color: '#D4A574', desc: '\u201c好没意思\u2026\u2026\u201d 时间过得好慢，不知道做什么。' }
];
const EMOTION_MAP = {};
EMOTIONS.forEach(e => { EMOTION_MAP[e.id] = e; });
const COPING = {
  happy: ['把开心的事记下来\u2014\u2014以后看到还会开心','和身边的人分享，开心会加倍','想想是什么让你开心，下次可以再去做'],
  sad: ['找一个安全的地方，允许自己哭一会儿\u2014\u2014哭不是软弱','找一个你信任的人说出你的感受','做一件让你觉得舒服的事：听音乐、抱抱玩偶、画画','告诉自己：难过会过去的，我不需要一直坚强'],
  angry: ['先做5次深呼吸：吸4秒\u2192停2秒\u2192呼6秒\u2014\u2014这是你的\u201c暂停按钮\u201d','暂时离开那个让你生气的地方，走一走','用笔把生气的事写下来/画出来，然后把纸撕掉','等冷静下来，再想想要不要和那个人说清楚'],
  scared: ['告诉自己：\u201c害怕是在保护我，它想让我小心一点\u201d','打开灯/找个信任的人陪你一会儿','想一个让你有安全感的东西放在身边','深呼吸，告诉自己：我在这里，我现在很安全'],
  nervous: ['深呼吸：吸4秒\u2192停2秒\u2192呼6秒，做3次','用力握拳再松开，重复几次，让身体放松','告诉自己\u201c别人也会紧张，紧张不代表我做不好\u201d','把注意力从\u201c别人怎么看我\u201d转到\u201c我要做什么\u201d'],
  anxious: ['把担心的事写下来\u2014\u2014写出来就不那么可怕了','问自己：这件事\u201c真的\u201d会发生吗？有多大可能？','做一件现在能做的事，把注意力拉回当下','告诉信任的人你在担心什么\u2014\u2014说出来就轻松一半'],
  wronged: ['先让自己冷静下来，深呼吸','找一个信任的人，把整件事从头到尾说出来','等情绪平复后，试着和那个人说\u201c我想和你解释一下\u201d','如果说不出来，可以写一张纸条给对方'],
  embarrass: ['深呼吸，告诉自己：\u201c每个人都会出丑，不只有我\u201d','想象如果是朋友发生这件事，你会觉得他很丢脸吗？\u2014\u2014其实不会','转移注意力，想想接下来要做什么','过几天你就会发现：别人早就不记得了'],
  jealous: ['承认\u201c我有点嫉妒\u201d\u2014\u2014承认自己的感受很正常','问自己：我是\u201c想要他拥有的东西\u201d，还是\u201c觉得不公平\u201d？','把注意力放回自己身上：我有什么？我擅长什么？','可以试试向那个人学习，或为自己定一个小目标'],
  disappoint: ['允许自己失望\u2014\u2014期待落空本来就会难过','问自己：这件事真的有那么重要吗？','看看还有没有别的可能\u2014\u2014有时候\u201c没得到A\u201d会带来\u201c遇到了B\u201d','抱抱自己，吃点好吃的'],
  bored: ['无聊其实是个信号\u2014\u2014它在告诉你\u201c可以去找点有意思的事了\u201d','从\u201c最不讨厌\u201d的事里选一件来做','试试\u201c无聊挑战\u201d：用5分钟做一件平时不会做的小事','给自己找一个小任务：\u201c在下节课前，我要做完\u2026\u2026\u201d']
};
const QUESTIONS = [
  {text:'今天你感觉怎么样？选一个最像你的',options:[
    {text:'开心，想笑，想找人玩',scores:{happy:3,bored:-1}},
    {text:'没什么特别的感觉，就正常',scores:{bored:1,happy:1}},
    {text:'不太舒服，说不上来哪里怪怪的',scores:{anxious:1,sad:1,wronged:1}},
    {text:'糟透了，今天很不好',scores:{sad:2,angry:2,anxious:1}}
  ]},
  {text:'你现在的身体是什么感觉？',options:[
    {text:'很放松，身体软软的',scores:{happy:2,bored:1}},
    {text:'心跳很快，或者手心出汗',scores:{nervous:2,scared:2,anxious:1}},
    {text:'胃/肚子有点不舒服，或者吃不下东西',scores:{anxious:2,nervous:2,scared:1}},
    {text:'身体很紧，肩膀/脖子感觉僵僵的',scores:{angry:2,nervous:1,anxious:1}},
    {text:'没什么特别的感觉',scores:{happy:1,bored:1}}
  ]},
  {text:'今天在学校/上课的时候感觉怎么样？',options:[
    {text:'挺好的，很顺利',scores:{happy:2,bored:-1}},
    {text:'一般般，就是平常那样',scores:{bored:1}},
    {text:'有点烦，不想上课',scores:{bored:2,angry:1}},
    {text:'很紧张，怕被提问/考试',scores:{nervous:3,anxious:1}},
    {text:'发生了不开心的事',scores:{sad:2,angry:1,wronged:1}}
  ]},
  {text:'课间/休息的时候你在做什么？',options:[
    {text:'和朋友一起玩/聊天，很开心',scores:{happy:2}},
    {text:'一个人待着，不想和别人说话',scores:{sad:2,bored:1}},
    {text:'做自己喜欢的事（看书/画画/听歌）',scores:{happy:2,bored:-1}},
    {text:'没什么特别的事，就发呆',scores:{bored:2,sad:1}},
    {text:'发生了冲突/不愉快的事',scores:{angry:2,wronged:2,sad:1}}
  ]},
  {text:'今天有人让你开心吗？',options:[
    {text:'有，朋友/家人/老师做了让我开心的事',scores:{happy:3}},
    {text:'没有特别的事，但也没有不开心',scores:{bored:1}},
    {text:'有人让我不开心了（批评/吵架/误会）',scores:{sad:2,angry:1,wronged:2}},
    {text:'感觉被忽略了，没有人注意到我',scores:{sad:2,jealous:1,wronged:1}}
  ]},
  {text:'如果想到明天，你是什么感觉？',options:[
    {text:'期待，明天有想做的事/想见的人',scores:{happy:3,anxious:-1}},
    {text:'没什么特别的感觉',scores:{bored:1}},
    {text:'有点担心，不知道明天会发生什么',scores:{anxious:2,nervous:1}},
    {text:'不想去学校/不想面对明天',scores:{anxious:2,scared:1,sad:1}}
  ]},
  {text:'今天发生过让你觉得不公平的事吗？',options:[
    {text:'没有，今天挺公平的',scores:{happy:1}},
    {text:'有一点小事，但还好',scores:{}},
    {text:'有，我觉得被冤枉了/被区别对待了',scores:{wronged:3,angry:2,sad:1}},
    {text:'有，别人得到了我想要的东西',scores:{jealous:3,disappoint:2,angry:1}}
  ]},
  {text:'你现在的精力怎么样？',options:[
    {text:'精力很足，想动来动去',scores:{happy:2,angry:1}},
    {text:'刚刚好，能做想做的事',scores:{happy:1}},
    {text:'有点累，想休息',scores:{sad:1,bored:1}},
    {text:'非常累，什么都不想做',scores:{sad:2,anxious:1,bored:1}}
  ]},
  {text:'最近有没有什么一直担心的事？',options:[
    {text:'没有，我没什么好担心的',scores:{happy:1}},
    {text:'有一点，但不太影响我',scores:{anxious:1}},
    {text:'有，我有时候会想起它，心里不太舒服',scores:{anxious:2,scared:1,sad:1}},
    {text:'有，我经常想这件事，睡不好/吃不好',scores:{anxious:3,scared:2,sad:1}}
  ]},
  {text:'如果有人问你\u201c你怎么了？\u201d，你想怎么回答？',options:[
    {text:'\u201c我很好啊！\u201d',scores:{happy:2}},
    {text:'\u201c还好吧\u2026\u2026\u201d',scores:{bored:1}},
    {text:'\u201c有点烦，但不想说\u201d',scores:{angry:1,sad:1,anxious:1}},
    {text:'\u201c我不知道怎么说\u201d',scores:{sad:1,anxious:1,wronged:1}},
    {text:'\u201c我想说出来\u201d',scores:{sad:1,anxious:1}}
  ]},
  {text:'今天的你，像哪种天气？',options:[
    {text:'大晴天 \u2600\uFE0F',scores:{happy:3}},
    {text:'多云 \uD83C\uDF24\uFE0F',scores:{happy:1,bored:1}},
    {text:'阴天 \u2601\uFE0F',scores:{sad:1,bored:2}},
    {text:'下雨天 \uD83C\uDF27\uFE0F',scores:{sad:2,disappoint:1}},
    {text:'暴风雨 \u26C8\uFE0F',scores:{angry:3,anxious:1}}
  ]},
  {text:'你现在最需要的是什么？（选一个最贴近的）',options:[
    {text:'想和朋友/家人聊聊天',scores:{sad:1,anxious:1,happy:1}},
    {text:'想一个人待会儿',scores:{sad:1,angry:1}},
    {text:'想做点好玩的事让自己开心起来',scores:{bored:2,sad:-1}},
    {text:'想睡一觉，休息一下',scores:{sad:1,anxious:1,bored:1}},
    {text:'想让别人抱抱我',scores:{sad:2,scared:1,anxious:1}},
    {text:'想让那个让我不开心的人知道我的感受',scores:{angry:2,wronged:2,jealous:1}}
  ]}
];
const SCENARIOS = [
  {title:'考试前睡不着',situation:'明天要数学考试了，你翻来覆去睡不着，心跳很快，脑子里一直在想：\u201c完了完了，考不好怎么办\u2026\u2026\u201d',options:[{text:'继续躺着想考试的事，越想越睡不着'},{text:'起来喝杯水，做几个深呼吸，然后想一件开心的事'},{text:'拿手机玩一会儿，等困了再睡'}],feedbacks:['这样想下去只会越来越紧张哦。试试做点别的事，让脑子休息一下。','太棒了！深呼吸可以让身体放松下来，想开心的事能让大脑从\u201c紧张模式\u201d切换到\u201c安全模式\u201d。今晚可以试试这个方法。','手机屏幕的光会让大脑更清醒，反而更难睡着哦。如果实在睡不着，可以闭着眼睛听一段轻柔的音乐。'],note:'考试前紧张是很正常的，说明你在乎这场考试。但记住：睡好了才能考好，所以先照顾好自己。'},
  {title:'同桌碰倒你的水杯',situation:'课间同桌拿书时不小心碰倒了你的水杯，水洒了一桌子，你的作业本也湿了。他没有道歉，直接走开了。',options:[{text:'很生气，追上去推他一下或骂他一句'},{text:'先擦干桌子，然后平静地跟他说：\u201c你碰倒我的水杯了，下次小心一点哦。\u201d'},{text:'算了，自己默默擦干，但心里很不舒服'}],feedbacks:['生气很正常，但他可能没注意到水洒了，也可能是太着急了。先叫住他，告诉他发生了什么。','这个处理方式很好！既没有压抑情绪，也没有过度反应。清楚地表达发生了什么，同时给对方一个台阶。','默默承受虽然避免了冲突，但你的委屈并不会消失。下次可以试着说出来，不说出来别人可能永远不知道。'],note:''},
  {title:'被老师当众批评',situation:'上课时你和同桌悄悄说了一句话，老师看到后当着全班同学批评了你。但其实你只是在借橡皮。',options:[{text:'当场站起来解释：\u201c老师，我只是借橡皮！\u201d'},{text:'觉得很委屈，眼睛红了，但什么都没说'},{text:'先照做，下课后等老师气消了，去办公室跟老师解释清楚'}],feedbacks:['想解释很正常，但老师当时的情绪也在头上，当堂顶嘴可能会让事情更复杂。可以先照做，下课后再私下找老师说明情况。','你的委屈是真的。但什么都不说，老师可能永远不知道真相。等情绪平复后去找老师聊一聊。','这是一个既成熟又能解决问题的做法！你给了老师台阶下，也给自己留了表达的机会。'],note:''},
  {title:'摔倒被同学笑',situation:'课间你在走廊跑的时候不小心摔了一跤，膝盖有点痛。旁边几个同学看到了，笑了起来。',options:[{text:'生气地喊：\u201c笑什么笑！有什么好笑的！\u201d'},{text:'忍住痛站起来，拍拍衣服，假装没事走开，但心里很难受'},{text:'站起来对他们说\u201c摔得挺疼的，别笑了\u201d，然后去医务室或教室休息'}],feedbacks:['摔倒本来就尴尬，还被笑就更难受了。但有些同学可能不是恶意的，只是看到突然摔倒觉得好笑。先站起来看看膝盖有没有受伤。','装作没事也是一种应对方式。但如果你真的很在意，可以直接说一句\u201c别笑了，摔得挺疼的\u201d，让他们知道你的感受。','这个回应很好！既表达了自己的感受，又没有升级冲突。如果那几个人是善意的，他们会停下来。'],note:''},
  {title:'爸妈吵架',situation:'晚上你在房间里写作业，听到爸爸妈妈在外面很大声地吵架。你心里很害怕，不知道该做什么。',options:[{text:'冲出去喊：\u201c别吵了！\u201d'},{text:'关上门，戴上耳机听音乐，告诉自己：这是大人的事，不是我的错'},{text:'等他们吵完了，去找其中一个人说\u201c你们吵架的时候我很害怕\u201d'}],feedbacks:['你的心情完全可以理解。但大人的情绪有时候需要他们自己消化，你冲出去可能会让情况更紧张。','这是一个很好的自我保护方法。记住：爸妈吵架不是你的错，不是因为你做错了什么。给自己找一个安全的空间。','这是一个很有勇气的做法。让爸妈知道他们的争吵影响到你了，他们可能会更注意。说不出口的话，也可以写张纸条。'],note:''},
  {title:'好朋友突然不和你玩了',situation:'你最好的朋友最近突然不和你玩了，ta和别人走在一起，看到你也不打招呼。你不知道自己做错了什么。',options:[{text:'也不理ta了，心里很生气：\u201c哼，不理就不理，谁稀罕！\u201d'},{text:'主动找ta，私下问：\u201c最近你是不是不太开心？我感觉你好像不太想和我玩了。\u201d'},{text:'很难过，但一个人忍着，假装没事'}],feedbacks:['用生气保护自己是很自然的反应，但这样可能就真的失去这个朋友了。试着主动问一下。','这是一个很有勇气也很有情商的做法！你没有指责对方，给了对方解释的机会。即使结果不是想要的，你也努力过。','难过是可以理解的，但一直忍着会很辛苦。可以试试找另一个朋友聊聊，或者给原来的朋友写一封信。'],note:''},
  {title:'别人得奖了，你没有',situation:'比赛结果公布了，你同桌得了奖，老师表扬了ta。你也努力了，但你没有得奖。',options:[{text:'真心祝福同桌，但自己偷偷难过'},{text:'觉得很不公平：\u201c凭什么ta可以我不行？老师是不是偏心了？\u201d'},{text:'表面上说\u201c没关系\u201d，但心里很不舒服，开始不想理同桌了'}],feedbacks:['能够祝福别人是一种善良，自己难过也很正常。两个感受可以同时存在。一次没得奖不等于你不够好。','感到不公平很正常\u2014\u2014你确实努力了。但先别急着下结论，可以看看ta做得好的地方，有没有可以学习的方向。','这种感受其实很常见。可以试着把注意力从\u201cta有什么\u201d转到\u201c我有什么\u201d，问自己：下次可以怎么做？'],note:''}
];
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0,0);
}
function goHome() { showPage('page-home'); }
function goToScenarios() { renderScenarioList(); showPage('page-scenarios'); }
function goToDiary() { renderDiary(); showPage('page-diary'); }
let currentQ = 0;
let scores = {};
let userAnswers = [];
function goToQuestionnaire() {
  currentQ = 0; scores = {}; userAnswers = [];
  EMOTIONS.forEach(e => scores[e.id] = 0);
  showPage('page-questionnaire');
  renderQuestion();
}
function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const container = document.getElementById('questionContainer');
  const progress = ((currentQ+1)/QUESTIONS.length)*100;
  document.getElementById('progressFill').style.width = progress+'%';
  let html = '<div class="q-number">第 '+(currentQ+1)+' / '+QUESTIONS.length+' 题</div>';
  html += '<div class="q-text">'+q.text+'</div>';
  html += '<div class="q-options">';
  q.options.forEach((opt,idx)=>{
    const sel = userAnswers[currentQ]===idx?'selected':'';
    html += '<div class="q-option '+sel+'" onclick="selectOption('+idx+')">'+opt.text+'</div>';
  });
  html += '</div><div class="q-nav">';
  if(currentQ>0) html += '<button class="btn btn-outline btn-small" onclick="prevQuestion()">上一题</button>';
  else html += '<div></div>';
  if(userAnswers[currentQ]!==undefined){
    if(currentQ<QUESTIONS.length-1) html += '<button class="btn btn-primary btn-small" onclick="nextQuestion()">下一题 \u2192</button>';
    else html += '<button class="btn btn-primary btn-small" onclick="finishQuestionnaire()">查看结果 \u2192</button>';
  }
  html += '</div>';
  container.innerHTML = html;
}
function selectOption(idx) { userAnswers[currentQ]=idx; renderQuestion(); }
function prevQuestion() { if(currentQ>0){currentQ--;renderQuestion();} }
function nextQuestion() { if(currentQ<QUESTIONS.length-1){currentQ++;renderQuestion();} }
function finishQuestionnaire() {
  EMOTIONS.forEach(e => scores[e.id]=0);
  userAnswers.forEach((ansIdx,qIdx)=>{
    if(ansIdx!==undefined){
      const optScores = QUESTIONS[qIdx].options[ansIdx].scores;
      for(let em in optScores) scores[em] = (scores[em]||0)+optScores[em];
    }
  });
  let sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
  let topEmotion = sorted[0][0];
  let topScore = sorted[0][1];
  let hasClearEmotion = topScore > 1;
  let needsWarning = (scores.anxious>4||scores.scared>3||scores.sad>4);
  showResults(topEmotion,hasClearEmotion,needsWarning,sorted.filter(s=>s[1]>0));
}
function showResults(topEmotionId,hasClearEmotion,needsWarning,allEmotions){
  showPage('page-results');
  const container = document.getElementById('resultsContent');
  let html = '';
  if(hasClearEmotion&&topEmotionId){
    const em = EMOTION_MAP[topEmotionId];
    html += '<div class="results-banner"><div class="results-emoji">'+em.emoji+'</div><div class="results-emotion-name" style="color:'+em.color+'">'+em.name+'</div><div class="results-emotion-desc">'+em.desc+'</div></div>';
    html += '<div class="results-card"><div class="results-card-title">\uD83D\uDCA1 你可以试试这样做</div><ul>';
    (COPING[topEmotionId]||[]).forEach(function(item){html+='<li>\uD83C\uDF1F '+item+'</li>';});
    html += '</ul></div>';
  } else {
    html += '<div class="results-banner"><div class="results-emoji">\uD83E\uDDD8</div><div class="results-emotion-name" style="color:#8395A7">整体还不错</div><div class="results-emotion-desc">今天的你整体感觉还可以，没有特别强烈的情绪波动。继续享受平静的一天吧！</div></div>';
  }
  html += '<div class="results-general">不管今天的心情是什么颜色，都很正常。<br>每一种情绪都在告诉你一些事情\u2014\u2014<br>开心告诉你\u201c这个很好\u201d<br>难过告诉你\u201c你需要安慰\u201d<br>生气告诉你\u201c这不对劲\u201d<br>害怕告诉你\u201c要小心\u201d\u2026\u2026<br><br>重要的是：你愿意来看看自己的心情，这已经是很棒的一步了 \uD83D\uDCAA</div>';
  if(needsWarning){
    html += '<div class="warning-banner"><strong>温馨提示：</strong><br>如果你连续很多天都觉得很不好，或者你的心情影响到了吃饭、睡觉、学习，<br>可以找学校的心理老师聊一聊，或者告诉爸爸妈妈。<br>这不是\u201c有问题\u201d，而是你在照顾自己，就像感冒了要看医生一样正常。</div>';
  }
  html += '<div class="results-actions"><button class="btn btn-primary btn-block" onclick="goToScenarios()">\uD83C\uDFAF 去做个情景练习</button><button class="btn btn-outline btn-block" onclick="goToDiary()">\uD83D\uDCD4 写写情绪日记</button><button class="btn btn-outline btn-block" onclick="goToQuestionnaire()">\uD83D\uDD04 再测一次</button></div>';
  container.innerHTML = html;
}
function renderScenarioList(){
  const container = document.getElementById('scenariosList');
  let html = '';
  SCENARIOS.forEach(function(s,idx){
    html += '<div class="scenario-card" onclick="openScenario('+idx+')">';
    html += '<div class="scenario-card-number">情景 '+(idx+1)+'</div>';
    html += '<div class="scenario-card-title">'+s.title+'</div>';
    html += '<div class="scenario-card-preview">'+s.situation.substring(0,40)+'\u2026\u2026</div></div>';
  });
  container.innerHTML = html;
}
let currentScenario = -1;
let selectedScenarioOption = -1;
function openScenario(idx){
  currentScenario=idx; selectedScenarioOption=-1;
  showPage('page-scenario-detail');
  document.getElementById('scenarioDetailTitle').textContent = SCENARIOS[idx].title;
  renderScenarioDetail();
}
function renderScenarioDetail(){
  const s = SCENARIOS[currentScenario];
  const container = document.getElementById('scenarioDetailContent');
  let html = '<div class="scenario-situation"><div class="scenario-situation-label">\uD83D\uDCD6 情景 '+(currentScenario+1)+'</div><div class="scenario-situation-text">'+s.situation+'</div></div>';
  html += '<div style="font-size:15px;font-weight:600;margin-bottom:10px;">你会怎么做？</div><div class="scenario-options">';
  s.options.forEach(function(opt,idx){
    const sel = selectedScenarioOption===idx?'selected':'';
    html += '<div class="scenario-option '+sel+'" onclick="selectScenarioOption('+idx+')">'+String.fromCharCode(65+idx)+'. '+opt.text+'</div>';
  });
  html += '</div>';
  if(selectedScenarioOption>=0&&s.feedbacks[selectedScenarioOption]){
    html += '<div class="scenario-feedback"><div class="scenario-feedback-label">\uD83D\uDCAC 给你的反馈</div><div class="scenario-feedback-text">'+s.feedbacks[selectedScenarioOption]+'</div></div>';
    if(s.note) html += '<div class="scenario-note">\uD83D\uDCA1 '+s.note+'</div>';
  }
  container.innerHTML = html;
}
function selectScenarioOption(idx){ selectedScenarioOption=idx; renderScenarioDetail(); }
let diaryScore = 0;
let diaryMood = '';
function renderDiary(){
  showPage('page-diary');
  const container = document.getElementById('diaryContent');
  const today = new Date().toLocaleDateString('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'});
  const savedEntries = getDiaryEntries();
  let html = '<div class="diary-intro">\uD83D\uDCD4 写日记是了解自己心情的好方法。<br>不用写很多字，写一写今天发生了什么、你的感觉是什么就好。</div>';
  html += '<div class="diary-form" id="diaryForm">';
  html += '<div class="diary-field"><div class="diary-label">\uD83D\uDCC5 日期</div><div class="diary-date">'+today+'</div></div>';
  html += '<div class="diary-field"><div class="diary-label">\u2460 今天的心情指数（1=很不好，10=非常好）</div><div class="diary-score" id="diaryScore">';
  for(let i=1;i<=10;i++) html += '<div class="score-btn" onclick="setDiaryScore('+i+')">'+i+'</div>';
  html += '</div></div>';
  html += '<div class="diary-field"><div class="diary-label">\u2461 今天最主要的情绪</div><div class="diary-mood-selector" id="diaryMood">';
  EMOTIONS.forEach(function(e){html+='<button class="mood-btn" onclick="setDiaryMood(\''+e.id+'\')" title="'+e.name+'">'+e.emoji+'</button>';});
  html += '</div></div>';
  html += '<div class="diary-field"><div class="diary-label">\u2462 今天发生了什么事？（一句话就好）</div><textarea class="diary-textarea" id="diaryWhat" placeholder="比如：今天考试了\u2026\u2026"></textarea></div>';
  html += '<div class="diary-field"><div class="diary-label">\u2463 我的感觉是\u2026\u2026</div><textarea class="diary-textarea" id="diaryFeel" placeholder="比如：有点紧张，怕考不好\u2026\u2026"></textarea></div>';
  html += '<div class="diary-field"><div class="diary-label">\u2464 我做了什么让自己好受一点？</div><textarea class="diary-textarea" id="diaryDo" placeholder="比如：深呼吸了三次，然后告诉自己尽力就好"></textarea></div>';
  html += '<div class="diary-field"><div class="diary-label">\u2465 明天我想尝试的一件小事</div><textarea class="diary-textarea" id="diaryPlan" placeholder="比如：明天课间去操场走走"></textarea></div>';
  html += '<button class="btn btn-primary btn-block" onclick="saveDiary()">\uD83D\uDCE5 保存日记</button></div>';
  html += '<div class="diary-saved"><div style="font-size:16px;font-weight:700;margin-bottom:12px;">\uD83D\uDCDA 我的日记本</div>';
  if(savedEntries.length===0){
    html += '<div class="empty-state">还没有写过日记，开始写第一篇吧 \u270D\uFE0F</div>';
  } else {
    var reversed = savedEntries.slice().reverse();
    reversed.forEach(function(entry,idx){
      const em = EMOTION_MAP[entry.mood];
      html += '<div class="diary-entry"><div class="diary-entry-date">\uD83D\uDCC5 '+entry.date+'</div>';
      html += '<div class="diary-entry-mood">心情指数：'+entry.score+'/10 '+(em?em.emoji:'')+'</div>';
      if(entry.what) html += '<div class="diary-entry-text">'+entry.what+'</div>';
      if(entry.feel) html += '<div class="diary-entry-text">感觉：'+entry.feel+'</div>';
      html += '<button class="diary-delete-btn" onclick="deleteDiaryEntry('+(savedEntries.length-1-idx)+')">删除这条</button></div>';
    });
  }
  html += '</div>';
  container.innerHTML = html;
}
function setDiaryScore(val){
  diaryScore=val;
  document.querySelectorAll('.score-btn').forEach(function(b){b.classList.toggle('selected',parseInt(b.textContent)===val);});
}
function setDiaryMood(id){
  diaryMood=id;
  document.querySelectorAll('.mood-btn').forEach(function(b){b.classList.toggle('selected',b.getAttribute('onclick').indexOf(id)>-1);});
}
function saveDiary(){
  const what = document.getElementById('diaryWhat').value.trim();
  const feel = document.getElementById('diaryFeel').value.trim();
  const doText = document.getElementById('diaryDo').value.trim();
  const plan = document.getElementById('diaryPlan').value.trim();
  if(!diaryScore){alert('请选择心情指数');return;}
  if(!diaryMood){alert('请选择今天的情绪');return;}
  const entry = {date:new Date().toLocaleDateString('zh-CN',{year:'numeric',month:'long',day:'numeric',weekday:'long'}),score:diaryScore,mood:diaryMood,what:what,feel:feel,do:doText,plan:plan};
  const entries = getDiaryEntries();
  entries.push(entry);
  localStorage.setItem('moodDiaryEntries',JSON.stringify(entries));
  diaryScore=0; diaryMood='';
  renderDiary();
}
function getDiaryEntries(){ try{return JSON.parse(localStorage.getItem('moodDiaryEntries'))||[];}catch(e){return [];} }
function deleteDiaryEntry(idx){ const entries=getDiaryEntries(); entries.splice(idx,1); localStorage.setItem('moodDiaryEntries',JSON.stringify(entries)); renderDiary(); }
