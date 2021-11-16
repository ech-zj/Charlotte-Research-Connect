
/* json2.js minified from https://github.com/douglascrockford/JSON-js */

if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);rx_dangerous.lastIndex=0;if(rx_dangerous.test(text)){text=text.replace(rx_dangerous,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(rx_one.test(text.replace(rx_two,'@').replace(rx_three,']').replace(rx_four,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());






/* http://alexcorvi.github.io/anchorme.js/ */

!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):e.anchorme=a()}(this,function(){"use strict";function e(e){return e&&e.__esModule?e.default:e}function a(e,a){return a={exports:{}},e(a,a.exports),a.exports}var n=a(function(e,a){function n(e){return e||(e={attributes:[],ips:!0,emails:!0,urls:!0,files:!0,truncate:1/0,defaultProtocol:"http://",list:!1}),"object"!=typeof e.attributes&&(e.attributes=[]),"boolean"!=typeof e.ips&&(e.ips=!0),"boolean"!=typeof e.emails&&(e.emails=!0),"boolean"!=typeof e.urls&&(e.urls=!0),"boolean"!=typeof e.files&&(e.files=!0),"boolean"!=typeof e.list&&(e.list=!1),"string"!=typeof e.defaultProtocol&&"function"!=typeof e.defaultProtocol&&(e.defaultProtocol="http://"),"number"==typeof e.truncate||"object"==typeof e.truncate&&null!==e.truncate||(e.truncate=1/0),e}function t(e){return!isNaN(Number(e))&&!(Number(e)>65535)}Object.defineProperty(a,"__esModule",{value:!0}),a.defaultOptions=n,a.isPort=t}),t=a(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.tlds=["com","org","net","uk","gov","edu","io","cc","co","aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","ac","academy","accenture","accountant","accountants","aco","active","actor","ad","adac","ads","adult","ae","aeg","aero","aetna","af","afamilycompany","afl","africa","ag","agakhan","agency","ai","aig","aigo","airbus","airforce","airtel","akdn","al","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","am","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","ao","aol","apartments","app","apple","aq","aquarelle","ar","aramco","archi","army","arpa","art","arte","as","asda","asia","associates","at","athleta","attorney","au","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aw","aws","ax","axa","az","azure","ba","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bb","bbc","bbt","bbva","bcg","bcn","bd","be","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bf","bg","bh","bharti","bi","bible","bid","bike","bing","bingo","bio","biz","bj","black","blackfriday","blanco","blockbuster","blog","bloomberg","blue","bm","bms","bmw","bn","bnl","bnpparibas","bo","boats","boehringer","bofa","bom","bond","boo","book","booking","boots","bosch","bostik","boston","bot","boutique","box","br","bradesco","bridgestone","broadway","broker","brother","brussels","bs","bt","budapest","bugatti","build","builders","business","buy","buzz","bv","bw","by","bz","bzh","ca","cab","cafe","cal","call","calvinklein","cam","camera","camp","cancerresearch","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","cartier","casa","case","caseih","cash","casino","cat","catering","catholic","cba","cbn","cbre","cbs","cd","ceb","center","ceo","cern","cf","cfa","cfd","cg","ch","chanel","channel","chase","chat","cheap","chintai","chloe","christmas","chrome","chrysler","church","ci","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","ck","cl","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","cm","cn","coach","codes","coffee","college","cologne","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","coop","corsica","country","coupon","coupons","courses","cr","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","csc","cu","cuisinella","cv","cw","cx","cy","cymru","cyou","cz","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","de","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dj","dk","dm","dnp","do","docs","doctor","dodge","dog","doha","domains","dot","download","drive","dtv","dubai","duck","dunlop","duns","dupont","durban","dvag","dvr","dz","earth","eat","ec","eco","edeka","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","epost","epson","equipment","er","ericsson","erni","es","esq","estate","esurance","et","eu","eurovision","eus","events","everbank","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fi","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","fj","fk","flickr","flights","flir","florist","flowers","fly","fm","fo","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","fr","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fujixerox","fun","fund","furniture","futbol","fyi","ga","gal","gallery","gallo","gallup","game","games","gap","garden","gb","gbiz","gd","gdn","ge","gea","gent","genting","george","gf","gg","ggee","gh","gi","gift","gifts","gives","giving","gl","glade","glass","gle","global","globo","gm","gmail","gmbh","gmo","gmx","gn","godaddy","gold","goldpoint","golf","goo","goodhands","goodyear","goog","google","gop","got","gp","gq","gr","grainger","graphics","gratis","green","gripe","group","gs","gt","gu","guardian","gucci","guge","guide","guitars","guru","gw","gy","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hk","hkt","hm","hn","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","honeywell","horse","hospital","host","hosting","hot","hoteles","hotmail","house","how","hr","hsbc","ht","htc","hu","hughes","hyatt","hyundai","ibm","icbc","ice","icu","id","ie","ieee","ifm","ikano","il","im","imamat","imdb","immo","immobilien","in","industries","infiniti","info","ing","ink","institute","insurance","insure","int","intel","international","intuit","investments","ipiranga","iq","ir","irish","is","iselect","ismaili","ist","istanbul","it","itau","itv","iveco","iwc","jaguar","java","jcb","jcp","je","jeep","jetzt","jewelry","jio","jlc","jll","jm","jmp","jnj","jo","jobs","joburg","jot","joy","jp","jpmorgan","jprs","juegos","juniper","kaufen","kddi","ke","kerryhotels","kerrylogistics","kerryproperties","kfh","kg","kh","ki","kia","kim","kinder","kindle","kitchen","kiwi","km","kn","koeln","komatsu","kosher","kp","kpmg","kpn","kr","krd","kred","kuokgroup","kw","ky","kyoto","kz","la","lacaixa","ladbrokes","lamborghini","lamer","lancaster","lancia","lancome","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lb","lc","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","li","liaison","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lixil","lk","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","lr","ls","lt","ltd","ltda","lu","lundbeck","lupin","luxe","luxury","lv","ly","ma","macys","madrid","maif","maison","makeup","man","management","mango","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mc","mcd","mcdonalds","mckinsey","md","me","med","media","meet","melbourne","meme","memorial","men","menu","meo","metlife","mg","mh","miami","microsoft","mil","mini","mint","mit","mitsubishi","mk","ml","mlb","mls","mm","mma","mn","mo","mobi","mobile","mobily","moda","moe","moi","mom","monash","money","monster","montblanc","mopar","mormon","mortgage","moscow","moto","motorcycles","mov","movie","movistar","mp","mq","mr","ms","msd","mt","mtn","mtpc","mtr","mu","museum","mutual","mv","mw","mx","my","mz","na","nab","nadex","nagoya","name","nationwide","natura","navy","nba","nc","ne","nec","netbank","netflix","network","neustar","new","newholland","news","next","nextdirect","nexus","nf","nfl","ng","ngo","nhk","ni","nico","nike","nikon","ninja","nissan","nissay","nl","no","nokia","northwesternmutual","norton","now","nowruz","nowtv","np","nr","nra","nrw","ntt","nu","nyc","nz","obi","observer","off","office","okinawa","olayan","olayangroup","oldnavy","ollo","om","omega","one","ong","onl","online","onyourside","ooo","open","oracle","orange","organic","orientexpress","origins","osaka","otsuka","ott","ovh","pa","page","pamperedchef","panasonic","panerai","paris","pars","partners","parts","party","passagens","pay","pccw","pe","pet","pf","pfizer","pg","ph","pharmacy","philips","phone","photo","photography","photos","physio","piaget","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","pk","pl","place","play","playstation","plumbing","plus","pm","pn","pnc","pohl","poker","politie","porn","post","pr","pramerica","praxi","press","prime","pro","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","ps","pt","pub","pw","pwc","py","qa","qpon","quebec","quest","qvc","racing","radio","raid","re","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","rightathome","ril","rio","rip","rmit","ro","rocher","rocks","rodeo","rogers","room","rs","rsvp","ru","ruhr","run","rw","rwe","ryukyu","sa","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sapo","sarl","sas","save","saxo","sb","sbi","sbs","sc","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scjohnson","scor","scot","sd","se","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","sg","sh","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","shriram","si","silk","sina","singles","site","sj","sk","ski","skin","sky","skype","sl","sling","sm","smart","smile","sn","sncf","so","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","space","spiegel","spot","spreadbetting","sr","srl","srt","st","stada","staples","star","starhub","statebank","statefarm","statoil","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","su","sucks","supplies","supply","support","surf","surgery","suzuki","sv","swatch","swiftcover","swiss","sx","sy","sydney","symantec","systems","sz","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tc","tci","td","tdk","team","tech","technology","tel","telecity","telefonica","temasek","tennis","teva","tf","tg","th","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tj","tjmaxx","tjx","tk","tkmaxx","tl","tm","tmall","tn","to","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","tr","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tt","tube","tui","tunes","tushu","tv","tvs","tw","tz","ua","ubank","ubs","uconnect","ug","unicom","university","uno","uol","ups","us","uy","uz","va","vacations","vana","vanguard","vc","ve","vegas","ventures","verisign","versicherung","vet","vg","vi","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","vista","vistaprint","viva","vivo","vlaanderen","vn","vodka","volkswagen","volvo","vote","voting","voto","voyage","vu","vuelos","wales","walmart","walter","wang","wanggou","warman","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","wf","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","ws","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","xn--11b4c3d","xn--1ck2e1b","xn--1qqw23a","xn--30rr7y","xn--3bst00m","xn--3ds443g","xn--3e0b707e","xn--3oq18vl8pn36a","xn--3pxu8k","xn--42c2d9a","xn--45brj9c","xn--45q11c","xn--4gbrim","xn--54b7fta0cc","xn--55qw42g","xn--55qx5d","xn--5su34j936bgsg","xn--5tzm5g","xn--6frz82g","xn--6qq986b3xl","xn--80adxhks","xn--80ao21a","xn--80aqecdr1a","xn--80asehdb","xn--80aswg","xn--8y0a063a","xn--90a3ac","xn--90ae","xn--90ais","xn--9dbq2a","xn--9et52u","xn--9krt00a","xn--b4w605ferd","xn--bck1b9a5dre4c","xn--c1avg","xn--c2br7g","xn--cck2b3b","xn--cg4bki","xn--clchc0ea0b2g2a9gcd","xn--czr694b","xn--czrs0t","xn--czru2d","xn--d1acj3b","xn--d1alf","xn--e1a4c","xn--eckvdtc9d","xn--efvy88h","xn--estv75g","xn--fct429k","xn--fhbei","xn--fiq228c5hs","xn--fiq64b","xn--fiqs8s","xn--fiqz9s","xn--fjq720a","xn--flw351e","xn--fpcrj9c3d","xn--fzc2c9e2c","xn--fzys8d69uvgm","xn--g2xx48c","xn--gckr3f0f","xn--gecrj9c","xn--gk3at1e","xn--h2brj9c","xn--hxt814e","xn--i1b6b1a6a2e","xn--imr513n","xn--io0a7i","xn--j1aef","xn--j1amh","xn--j6w193g","xn--jlq61u9w7b","xn--jvr189m","xn--kcrx77d1x4a","xn--kprw13d","xn--kpry57d","xn--kpu716f","xn--kput3i","xn--l1acc","xn--lgbbat1ad8j","xn--mgb9awbf","xn--mgba3a3ejt","xn--mgba3a4f16a","xn--mgba7c0bbn0a","xn--mgbaam7a8h","xn--mgbab2bd","xn--mgbai9azgqp6j","xn--mgbayh7gpa","xn--mgbb9fbpob","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgbca7dzdo","xn--mgberp4a5d4ar","xn--mgbi4ecexp","xn--mgbpl2fh","xn--mgbt3dhd","xn--mgbtx2b","xn--mgbx4cd0ab","xn--mix891f","xn--mk1bu44c","xn--mxtq1m","xn--ngbc5azd","xn--ngbe9e0a","xn--node","xn--nqv7f","xn--nqv7fs00ema","xn--nyqy26a","xn--o3cw4h","xn--ogbpf8fl","xn--p1acf","xn--p1ai","xn--pbt977c","xn--pgbs0dh","xn--pssy2u","xn--q9jyb4c","xn--qcka1pmc","xn--qxam","xn--rhqv96g","xn--rovu88b","xn--s9brj9c","xn--ses554g","xn--t60b56a","xn--tckwe","xn--tiq49xqyj","xn--unup4y","xn--vermgensberater-ctb","xn--vermgensberatung-pwb","xn--vhquv","xn--vuq861b","xn--w4r85el8fhu5dnra","xn--w4rs40l","xn--wgbh1c","xn--wgbl6a","xn--xhq521b","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--y9a3aq","xn--yfro4i67o","xn--ygbi2ammx","xn--zfr164b","xperia","xxx","xyz","yachts","yahoo","yamaxun","yandex","ye","yodobashi","yoga","yokohama","you","youtube","yt","yun","za","zappos","zara","zero","zip","zippo","zm","zone","zuerich","zw"],a.htmlAttrs=["src=","data=","href=","cite=","formaction=","icon=","manifest=","poster=","codebase=","background=","profile=","usemap="]}),o=a(function(e,a){function n(e){var a=e.match(r);if(null===a)return!1;for(var n=i.length-1;n>=0;n--)if(i[n].test(e))return!1;var t=a[2];return!!t&&o.tlds.indexOf(t)!==-1}Object.defineProperty(a,"__esModule",{value:!0});var o=t,r=/^[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?$/i,i=[/^[!#$%&'*+\-\/=?^_`{|}~.]/,/[.]{2,}[a-z0-9!#$%&'*+\-\/=?^_`{|}~.]+@/i,/\.@/];a.default=n}),r=a(function(e,a){function t(e){if(!r.test(e))return!1;var a=e.split("."),n=Number(a[0]);if(isNaN(n)||n>255||n<0)return!1;var t=Number(a[1]);if(isNaN(t)||t>255||t<0)return!1;var i=Number(a[2]);if(isNaN(i)||i>255||i<0)return!1;var s=Number((a[3].match(/^\d+/)||[])[0]);if(isNaN(s)||s>255||s<0)return!1;var c=(a[3].match(/(^\d+)(:)(\d+)/)||[])[3];return!(c&&!o.isPort(c))}Object.defineProperty(a,"__esModule",{value:!0});var o=n,r=/^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;a.default=t}),i=a(function(e,a){function o(e){var a=e.match(s);return null!==a&&("string"==typeof a[3]&&(i.tlds.indexOf(a[3].toLowerCase())!==-1&&!(a[5]&&!r.isPort(a[5]))))}Object.defineProperty(a,"__esModule",{value:!0});var r=n,i=t,s=/^(https?:\/\/|ftps?:\/\/)?([a-z0-9%\-]+\.){1,}([a-z0-9\-]+)?(:(\d{1,5}))?(\/([a-z0-9\-._~:\/\?#\[\]@!$&'\(\)\*\+,;=%]+)?)?$/i;a.default=o}),s=a(function(e,a){function n(e,a,t){return e.forEach(function(o,r){!(o.indexOf(".")>-1)||e[r-1]===a&&e[r+1]===t||e[r+1]!==a&&e[r+1]!==t||(e[r]=e[r]+e[r+1],"string"==typeof e[r+2]&&(e[r]=e[r]+e[r+2]),"string"==typeof e[r+3]&&(e[r]=e[r]+e[r+3]),"string"==typeof e[r+4]&&(e[r]=e[r]+e[r+4]),e.splice(r+1,4),n(e,a,t))}),e}function t(e){return e=n(e,"(",")"),e=n(e,"[","]"),e=n(e,'"','"'),e=n(e,"'","'")}Object.defineProperty(a,"__esModule",{value:!0}),a.fixSeparators=n,a.default=t}),c=a(function(e,a){function n(e){var a=e.replace(/([\s\(\)\[\]<>"'])/g,"\0$1\0").replace(/([?;:,.!]+)(?=(\0|$|\s))/g,"\0$1\0").split("\0"),n=o.default(a);return n}function t(e){return e.join("")}Object.defineProperty(a,"__esModule",{value:!0});var o=s;a.separate=n,a.deSeparate=t}),l=a(function(e,a){function n(e){return e=e.toLowerCase(),0===e.indexOf("http://")?"http://":0===e.indexOf("https://")?"https://":0===e.indexOf("ftp://")?"ftp://":0===e.indexOf("ftps://")?"ftps://":0===e.indexOf("file:///")?"file:///":0===e.indexOf("mailto:")&&"mailto:"}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n}),u=a(function(e,a){function n(e,a){return e.map(function(n,t){var o=encodeURI(decodeURI(n));if(o.indexOf(".")<1&&!c.default(o))return n;var r=null,i=c.default(o)||"";return a.files&&"file:///"===i&&o.substr(i.length).split(/\/|\\/).length-1?r={reason:"file",protocol:i,raw:n,encoded:o}:i&&(o=o.substr(i.length)),!r&&a.urls&&b.default(o)&&(r={reason:"url",protocol:i?i:"function"==typeof a.defaultProtocol?a.defaultProtocol(n):a.defaultProtocol,raw:n,encoded:o}),!r&&a.emails&&s.default(o)&&(r={reason:"email",protocol:"mailto:",raw:n,encoded:o}),!r&&a.ips&&d.default(o)&&(r={reason:"ip",protocol:i?i:"function"==typeof a.defaultProtocol?a.defaultProtocol(n):a.defaultProtocol,raw:n,encoded:o}),r&&("'"!==e[t-1]&&'"'!==e[t-1]||!~u.htmlAttrs.indexOf(e[t-2]))?r:n})}Object.defineProperty(a,"__esModule",{value:!0});var s=o,c=l,u=t,d=r,b=i;a.default=n}),d=a(function(e,a){function n(e,a){var n=i.separate(e),s=r.default(n,a);if(a.list){for(var c=[],l=0;l<s.length;l++){var u=s[l];"string"!=typeof u&&c.push(u)}return c}return s=s.map(function(e){return"string"==typeof e?e:t(e,a)}),o.deSeparate(s)}function t(e,a){var n=e.protocol+e.encoded,t=e.raw;return"number"==typeof a.truncate&&t.length>a.truncate&&(t=t.substring(0,a.truncate)+"..."),"object"==typeof a.truncate&&t.length>a.truncate[0]+a.truncate[1]&&(t=t.substr(0,a.truncate[0])+"..."+t.substr(t.length-a.truncate[1])),void 0===a.attributes&&(a.attributes=[]),'<a href="'+n+'" '+a.attributes.map(function(a){if("function"!=typeof a)return" "+a.name+'="'+a.value+'" ';var n=(a(e)||{}).name,t=(a(e)||{}).value;return n&&!t?" name ":n&&t?" "+n+'="'+t+'" ':void 0}).join("")+">"+t+"</a>"}Object.defineProperty(a,"__esModule",{value:!0});var o=c,r=u,i=c;a.default=n}),b=a(function(e,a){Object.defineProperty(a,"__esModule",{value:!0});var t=n,s=o,c=r,u=i,b=d,f=l,m=function(e,a){a=t.defaultOptions(a);var n=b.default(e,a);return n};m.validate={ip:c.default,url:function(e){var a=f.default(e)||"";return e=e.substr(a.length),e=encodeURI(decodeURI(e)),u.default(e)},email:s.default},a.default=m}),f=e(b);return f});

















function toggle() {

  var link = document.getElementById("www-uncc-edu-alert-banner-link");
  var desc = document.getElementById("www-uncc-edu-alert-banner-desc");

  if (desc.style.display == "block") {
    desc.style.display = "none";
    link.innerHTML = "Click here for more information";
  } else {
    desc.style.display = "block";
    desc.style.width = "100%";
    desc.style.marginTop = "10px";
    desc.style.marginLeft = "auto";
    desc.style.marginRight = "auto";
    link.innerHTML = "Collapse Alert Banner<br /><br />";
  }

  window.scrollTo(0, 0);

}


/* alert banner push */

var pollingInterval = 10;  /* how often to request new data, in seconds... need to manually change in alert-stream.php, too */


function clearBanner(data) {

  document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(/\bwww-uncc-edu-alert-active\b/, '');
  document.body.style.backgroundPosition=bkgImgPos;
  banner.style.backgroundColor=bkgColor;
  banner.innerHTML='';
  data.title='';
  data.link='';
  data.description='';

  return;

}


function updateBanner(data) {

  if (data.type != "") {

  /* don't update if the banner is expanded */
  var desc = document.getElementById("www-uncc-edu-alert-banner-desc");
  if (desc != undefined && desc.style.display == "block") {
    return;
  }

    if (data.type == 'red') {
      var alertBackgroundColor = '#b22222';
      var alertTextColor = '#ffffff';
      var alertIcon = '<span style="font-weight: normal;">&#9888;&nbsp;</span>';
    }

    if (document.getElementsByTagName('body')[0].className.indexOf('www-uncc-edu-alert-active') < 0) {
      document.getElementsByTagName('body')[0].className += ' www-uncc-edu-alert-active';
      window.scrollTo(0, 0);
    }

    /* convert carriage returns and newlines to HTML breaks */
    data.description = data.description.replace(/[\r\n]/gm, '<br />');
    data.description = data.description.replace(/<br \/><br \/>/gm, '<br />');

    /* auto-link URLs and email addresses */
    data.description = anchorme(data.description, {
      defaultProtocol: 'https://',
      truncate: [40,10],
      attributes: [
        function(urlObj){
          if (urlObj.protocol !== 'mailto:') return { name: 'target', value: '_blank' };
        },
        {
          name: 'style',
          value: 'text-decoration: underline; color: '+alertTextColor+';'
        }
      ]
    });

    document.body.style.backgroundPosition='0 81px';
    banner.style.backgroundColor=alertBackgroundColor;
    banner.style.color=alertTextColor;
    banner.innerHTML='<div style="display: block; min-height: 65px; margin: 8px 0 8px 0;" onclick="toggle();" onmouseover="this.style.cursor=\'pointer\';"><div style="padding: 5px; text-align: center; background: '+alertBackgroundColor+';"><span id="www-uncc-edu-alert-banner-text1" style="line-height: 27px; font-family: arial, helvetica, sans-serif; font-size: 18px; text-transform: uppercase; color: '+alertTextColor+'; font-weight: bold; text-decoration: none;">'+alertIcon+data.title+'</span><br /><div id="www-uncc-edu-alert-banner-desc" style="display: none;"><div style="margin: 0 10% 0 10%; text-align: left;">'+data.description+'</div></div><a id="www-uncc-edu-alert-banner-link" style="font-family: arial, helvetica, sans-serif; color: '+alertTextColor+'; font-size: 14px; text-decoration: underline;"><span id="www-uncc-edu-alert-banner-text2" style="text-decoration: underline; font-family: arial, helvetica, sans-serif; color: '+alertTextColor+'; font-size: 14px;">Click here for more information</span></a></div>';

    return;

  } else {
    clearBanner(data);
/* injectBlackBanner(); */
  }

}


function injectBlackBanner() {

  document.body.style.backgroundPosition='0 81px';
  var alertBackgroundColor='#706642';
  var alertTextColor='#ffffff';
  banner.style.backgroundColor='#706642';
  banner.style.color='#ffffff';
  banner.innerHTML='<div style="display: block; min-height: 65px; margin: 8px 0 8px 0;"><div style="padding: 17px; text-align: center; background: '+alertBackgroundColor+'; display: block;"><span id="www-uncc-edu-alert-banner-text1" style="line-height: 27px; font-family: arial, helvetica, sans-serif; font-size: 18px; text-transform: uppercase; color: '+alertTextColor+'; font-weight: bold; text-decoration: underline;"><a href="https://ninernationremembers.charlotte.edu" target="_blank" style="color: #ffffff; font-size: 20px;">NINER NATION REMEMBERS</a></span></div>';

}


function updateLastUpdated(secsAgo) {

  secsAgo += 10;

  if (secsAgo > (pollingInterval-1)) {
    setTimeout(function() { updateLastUpdated(0); }, 10000);
    return;
  }

  var secsStr = secsAgo + ' seconds ago.';
  if (secsAgo == 1) {
    secsStr = '1 second ago.';
  }

  var lastUpdated = document.getElementById('www-uncc-edu-alert-last-updated');
  if (lastUpdated) {
    lastUpdated.innerHTML='Last updated: ' + secsStr;
  }

  setTimeout(function() { updateLastUpdated(secsAgo); }, 10000);

}


function getJSONwithIE() {

  var ts = Math.round(new Date().getTime() / 1000);

  if (window.location.hash.indexOf('www-uncc-edu-alert-test') > 0) {
    var url = '//www.charlotte.edu/alerts/alerts-test.json?'+ts;
  } else {
    var url = '//www.charlotte.edu/alerts/alerts.json?'+ts;
  }

  if (window.XDomainRequest) {
    xdr = new XDomainRequest();
    if (xdr) {
      xdr.onload = function() {
        data = JSON.parse(xdr.responseText);
        updateBanner(data);
      };
      xdr.open('get', url);
      xdr.send();
    }
  }
  else if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
        updateBanner(data); 
      }
    }
    xhr.send(null);
  }

  setTimeout('getJSONwithIE()', pollingInterval*1000); 

}


document.body.insertAdjacentHTML('afterbegin', '<div id="www-uncc-edu-alert"></div>');


var banner = document.getElementById('www-uncc-edu-alert');
var bkgImgPos = document.body.style.backgroundPosition;
var bkgColor = document.body.style.backgroundColor;
var ts = new Date().getMinutes();

if (banner) {

  if (!!window.EventSource) {
    if (window.location.hash.indexOf('www-uncc-edu-alert-test') > 0) {
      var source = new EventSource('//www.charlotte.edu/alerts/alert-stream-test.php?'+ts);
    } else {
      var source = new EventSource('//www.charlotte.edu/alerts/alert-stream.php?'+ts);
    }
    source.addEventListener('message', function(e) {
      data = JSON.parse(e.data);
      updateBanner(data);
    }, false);
  } else {
    getJSONwithIE();
  }

<!--  setTimeout(function() { updateLastUpdated(0); }, 10000); -->

}
