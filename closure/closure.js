function closure(msgTxt) {
 var msgBoxClosure = function() { alert(msgTxt); }
 return msgBoxClosure;
}
var closureTest = closure('Hi');
closureTest();