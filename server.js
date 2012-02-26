var http = require('http');

http.createServer(function (req, res) {
  var body = getCode(req.url.slice(1)) + "\n";
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': body.length
  });
  res.end(body);
}).listen(80);

function getCode(pname){
  var nlist = {
"meso"                : "guest398 / XWtJ8Rct",
"kysnm"               : "guest399 / 92HduR8T",
"chrhsmt"             : "guest400 / S2RcCVzn",
"Mohsen"              : "guest401 / DrYRFaBJ",
"YasuOza"             : "guest402 / nV9Kstbd",
"amachang"            : "guest403 / mgwV4Zn9",
"oidong1"             : "guest404 / P5yxprMp",
"ian"                 : "guest405 / Qvvb3H9Q",
"tanaka_u1"           : "guest406 / PQu2M7mB",
"fjwr38"              : "guest407 / EZrqxPqk",
"tomoyuki_inoue"      : "guest408 / 7Vb9QUbB",
"kawanoshinobu"       : "guest409 / DmPnpWr7",
"justoneplanet"       : "guest410 / kT67qHH6",
"mainya"              : "guest411 / wyZqK4ze",
"teddy14"             : "guest412 / wgxkXNJA",
"rokujyouhitoma"      : "guest413 / nbFAzhpR",
"nyamadandan"         : "guest414 / eJ3S9SXP",
"rabe_ame"            : "guest415 / yfxSrWHv",
"nakanowatari"        : "guest416 / kgqrj5AE",
"agektmr"             : "guest417 / 8tEhhZE8",
"hide_o_55"           : "guest418 / gYm3PJZW",
"cesare"              : "guest419 / H8aHXjNt",
"kazupon"             : "guest420 / dr6g4FdE",
"kaori"               : "guest421 / 5hM4uJnP",
"koichik"             : "guest422 / fmrTnxH8",
"sekky"               : "guest423 / aTQTjRTb",
"summerwind"          : "guest424 / j9hqkhr9",
"freddiefujiwara"     : "guest425 / VR4nuBx5",
"xkyoji"              : "guest426 / zmwHMpgD",
"neuwpe"              : "guest427 / vYyqUKaR",
"kano4"               : "guest428 / QEvmdDdD",
"jed"                 : "guest429 / 4PbBCXTE",
"wuitap"              : "guest430 / SExVkZUG",
"hakobera"            : "guest431 / xwfTq47d",
"lidice"              : "guest432 / RFc8VPQK",
"komiya_atsushi"      : "guest433 / 8K573Nu5",
"shinsuke-kuroki"     : "guest434 / z8TPjRK5",
"kzms2"               : "guest435 / 9fCNsAPg",
"tfukushima"          : "guest436 / C2QwmZ3r",
"yoichi_u"            : "guest438 / uhwnPGed",
"erukiti"             : "guest439 / GtgBDCCZ",
"yanap"               : "guest440 / 2fJunSnQ",
"charlie"             : "guest441 / 4v7DW4GK",
"teppeis"             : "guest442 / ujZry7t5",
"ngs"                 : "guest443 / mHC3WsSN",
"Jxck"                : "guest444 / A2y2HbUs",
"uecchi"              : "guest445 / ydPAY2Nn",
"toritori0318"        : "guest446 / MN4zmfPk",
"_mpon"               : "guest447 / T9kcGK4Y",
"ksk_kbys"            : "guest448 / btTZNXUH",
"toshi_ooe"           : "guest449 / fKZvwcHn",
"tosh1ak1"            : "guest450 / GaUP5gBB",
"kan_"                : "guest451 / hVD7BJJQ",
"alumican"            : "guest452 / 3JcjCkgW",
"emuaki"              : "guest453 / hzRJanph",
"vanx2"               : "guest454 / uS2EgEx8",
"sonic_ootani"        : "guest455 / D7ecC9Qb",
"nodewars"            : "guest456 / UVJDGhgk",
"shimanp"             : "guest457 / SsssaCPT",
"hiruandon2nd"        : "guest458 / 5ASM8kGX",
"1"                   : "guest459 / rKQUHbmR",
"2"                   : "guest460 / 5Quqd2vv",
"3"                   : "guest461 / pCVFuaUm",
"4"                   : "guest462 / fbzVPMdp",
"5"                   : "guest463 / zvs2AbZe",
"6"                   : "guest464 / jS85PuQX",
"7"                   : "guest465 / uv8XQsXj",
"8"                   : "guest466 / FxGxmykF",
"9"                   : "guest467 / CV2qyFs6",
"10"                  : "guest468 / mMrgNgHj",
"11"                  : "guest469 / zRvuGZ4c",
"12"                  : "guest470 / cb8vN8Kx",
"13"                  : "guest471 / XKptYtJz",
"14"                  : "guest472 / dpU7YRVE",
"15"                  : "guest473 / TW4nQRAu",
"16"                  : "guest474 / KtA5hKT7",
"17"                  : "guest475 / ecttH3xw",
"18"                  : "guest476 / BhtftjF8",
"19"                  : "guest477 / kxUdvsKp",
"EOL" : "EOL"
}

var a = "";

a=a+'<p></p><p></p>';
a=a+'<pre>\n';
a=a+'\n';
a=a+'##[git]#########################################\n';
a=a+'(local)\n';
a=a+' git\n';
a=a+' ssh-keygen -t rsa -C "your_address@example.com"\n';
a=a+'\n';
a=a+'(NodeNinja)\n';
a=a+' Add SSH Key\n';
a=a+' Order Machine\n';
a=a+'\n';
a=a+'(local)\n';
a=a+' git init\n';
a=a+' git add .\n';
a=a+' git commit -am "hoge"\n';
a=a+' git remote add ninja node@[IP]:repo\n';
a=a+' git push ninja master\n';
a=a+'\n';
a=a+'\n';
a=a+'##[github]#########################################\n';
a=a+'(local)\n';
a=a+' git\n';
a=a+' ssh-keygen -t rsa -C "your_address@example.com"\n';
a=a+'\n';
a=a+'(Github)\n';
a=a+' Create Account\n';
a=a+' Add SSH Key\n';
a=a+' Create Repo\n';
a=a+'\n';
a=a+'(NodeNinja)\n';
a=a+' Add SSH Key\n';
a=a+' Order Machine\n';
a=a+'\n';
a=a+'\n';
a=a+'##[ssh]#########################################\n';
a=a+'(local)\n';
a=a+' ssh-keygen -t rsa -C "your_address@example.com"\n';
a=a+'\n';
a=a+'(NodeNinja)\n';
a=a+' Add SSH Key\n';
a=a+' Order Machine\n';
a=a+'\n';
a=a+'(local)\n';
a=a+' ssh node@[IP]\n';
a=a+' svcadm restart node\n';
a=a+' \n';
a=a+'\n';
a=a+'</pre>\n';
a=a+'';

  var b = "<body><html>";
  if (pname == "") {
    b = b + 'Name(connpass) : <input id=n /><input type=button onClick="location.href=document.getElementById(' + "'n'" + ').value" value=get />';
  } else if ( nlist[pname] != null ) {
    b = b + nlist[pname] + "<p><a href=https://node-ninja.com>https://node-ninja.com</a></p>" + a;
  } else {
    b = b + "Hi " + pname + ". Please send a request message. <a href=https://twitter.com/#!/node_ninja>https://twitter.com/#!/node_ninja</a></p>";
  }
  b = b + "</html></body>"
  return b;
}

