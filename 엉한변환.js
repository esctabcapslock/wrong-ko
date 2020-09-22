function d2X(x){
const arr='0123456789ABCDEF';
  if (x<16)return arr[x];
  else return d2X(Math.round(x/16-0.5))+arr[x%16];	
}

function X2d(x){
const arr='0123456789ABCDEF';
if (x.length<2)return arr.indexOf(x[x.length-1]);
else return X2d(x.substr(0,[x.length-1]))*16+arr.indexOf(x[x.length-1]);
}

function URL2X(x){
 return  x.substr(1,2)+x.substr(4,2)+x.substr(7,2);
}

function X2URL(x){
if(!x) return "";
return  '%'+x.substr(0,2)+'%'+ x.substr(2,2)+'%'+ x.substr(4,2);
}
/*
var out='';
for (var i=14910863;i<=14910863+10000;i++){
let str="";
try{str+= `${i}, ${decodeURI(X2URL(d2X(i)))}`;}
catch{}
if(str)out+=str+'\n';
}

//X2d( URL2X( encodeURI("가"))) //15380608 15572643

*/
function d2KU(초,중,종){
//19 21 28
//$console.log("d2KU",초,중,종)
if (초*중==0&&!종){
if (중) return 14910862+중;
else if (초<16)return 14910640+초;
else if (초) return 14910848+초-16;
}
var x = (초-1)*21*28 + (중-1)*28+(종);
if(x<0) return -1;
a=Math.round(x/64-0.5)*192;
b=Math.round((x+3*1024)/1024/4-0.5)*49152;
return x+a+b+15380608;
}