function E2K(str) {
var 초성="rRseEfaqQtTdwWczxvg";
var 모음=["k","o","i","O","j","p","u","P","h","hk","ho","hl","y","n","nj","np","nl","b","m","ml","l"];
var 자음=["r","R","rt","s","sw","sg","e","E","f","fr","fa","fq","ft","fx","fv","fg","a","q","Q","qt","t","T","d","w","W","c","z","x","v","g"];
var 종성=["r","R","rt","s","sw","sg","e","f","fr","fa","fq","ft","fx","fv","fg","a","q","qt","t","T","d","w","c","z","x","v","g"];
var 전체=자음+모음;
var out="";
var d=[0,0,0];
str+="    ";
var 이전문자=" ";
//$console.log("str",str);
for (var i=0; i<str.length-4; i++) {
    //$console.log('for문',str[i]);
    var 문자;
    var 다음문자;
    if (자음.includes(str[i])){
        if(자음.includes(str[i]+str[i+1])){//이중모음가능?
           if (모음.includes(str[i+2])) 문자=str[i],다음문자=str[i+1]; //불가능한경우 (뒤에모음);
            else if (모음.includes(str[i+3])&&!(초성.includes(str[i+2])))문자=str[i],다음문자=str[i+1];//불가능(초성에못옴)
            //else if (모음.includes(이전문자)&&!(초성.includes(str[i+2])))문자=str[i],다음문자=str[i+1];//불가능(종성자리에 못옴) . //"여덟", "값"같은 글자가 변환 안 됨.
            else 문자=str[i]+str[i+1],다음문자=str[i+2],i++; //가능한 경우
        }
        else 문자=str[i],다음문자=str[i+1];

       /*

        //초성에 넣을경우
        //종성에 넣을경우
        //따로 개별문자.

        //따로넣는경우
            // 자음->자음->자음
            //자음->자음->없음
            // 없음->자음->자음
            //없음->자음->없음
            // 모음 ->자음&&!종성-> 자음
            //자음->자음&&!초성->모음

            //못넣는경우
            //1. 모음->자음->자음->모음

        //초성에 넣는경우
            //없음->자음->모음
            //모음->자음&&초성->모음 가가
            //자음->자음->모음
            //모음->자음->모음
        */
        //$console.log("전중후",이전문자,'|',문자,'|',다음문자);\
        if(
        (자음.includes(이전문자)&&자음.includes(다음문자))||
        (자음.includes(이전문자)&&(!(전체.includes(다음문자))))||
        ((!(전체.includes(이전문자)))&&자음.includes(다음문자))||
        ((!(전체.includes(이전문자)))&&(!(전체.includes(다음문자))))||
        (자음.includes(이전문자)&& 자음.includes(다음문자))||
        (모음.includes(이전문자)&&(!(종성.includes(문자)))&& 자음.includes(다음문자))||
        (자음.includes(이전문자)&&(!(초성.includes(문자)))&&모음.includes(다음문자))
        ){
            if (d[0]+d[1]+d[2]){
            out+=decodeURI( X2URL(d2X(d2KU(초성.indexOf(d[0])+1,모음.indexOf(d[1])+1,종성.indexOf(d[2])+1))));
            d[0]=d[1]=d[2]=0;
        }
        out+=decodeURI( X2URL(d2X(d2KU(자음.indexOf(문자)+1,0,0))));
        }
        //초성
        else if(
        ((!(전체.includes(이전문자)))&&모음.includes(다음문자))||
        (모음.includes(이전문자)&&(초성.includes(문자))&& 모음.includes(다음문자))||
        (자음.includes(이전문자)&&모음.includes(다음문자))||
        (모음.includes(이전문자)&&모음.includes(다음문자))){
            //$console.log('초성자음');
            if (d[0]+d[1]+d[2]){
            out+=decodeURI( X2URL(d2X(d2KU(초성.indexOf(d[0])+1,모음.indexOf(d[1])+1,종성.indexOf(d[2])+1))));
            d[0]=d[1]=d[2]=0;
            }
            d[0]=문자;
        }//초성에 넣어야 할 경우
        else{
            d[2]=문자;
            //$console.log("종성",d[2]);
            if (d[0]+d[1]+d[2]){
                //$console.log("종성if출력안",d[2]);
            out+=decodeURI( X2URL(d2X(d2KU(초성.indexOf(d[0])+1,모음.indexOf(d[1])+1,종성.indexOf(d[2])+1))));
            d[0]=d[1]=d[2]=0;
            }
        }
    }
    else if (모음.includes(str[i])){
        if (모음.includes(str[i]+str[i+1])) 문자=str[i]+str[i+1], 다음문자=str[i+2],i++;
        else 문자=str[i],다음문자=str[i+1];
        //$console.log("모음",문자);
        if (자음.includes(이전문자)){
            d[1]=문자;
        }
        else{//독립된 모음일 경우
            if (d[0]+d[1]+d[2]){
                out+=decodeURI( X2URL(d2X(d2KU(초성.indexOf(d[0])+1,모음.indexOf(d[1])+1,종성.indexOf(d[2])+1))));
                d[0]=d[1]=d[2]=0;
}
    //$console.log('혼자모음',문자);
        out+=decodeURI( X2URL(d2X(d2KU(0,모음.indexOf(문자)+1,0))));   
            문자=" ";
        }
    }
    else{
        if (d[0]+d[1]+d[2]){
            out+=decodeURI( X2URL(d2X(d2KU(초성.indexOf(d[0])+1,모음.indexOf(d[1])+1,종성.indexOf(d[2])+1))));
            d[0]=d[1]=d[2]=0;
}
        문자=str[i];
        out+=str[i];
    }   
이전문자=문자;
    //$console.log("d[]",d[0],d[1],d[2]);
}
if (d[0]+d[1]+d[2]){
    out+=decodeURI( X2URL(d2X(d2KU(초성.indexOf(d[0])+1,모음.indexOf(d[1])+1,종성.indexOf(d[2])+1))));
    d[0]=d[1]=d[2]=0;
}
return out;
}
//$E2K("rhkrskawjd")//갏ㄹ