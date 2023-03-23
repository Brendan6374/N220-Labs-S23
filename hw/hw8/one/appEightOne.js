function typeName(frm)
{
var str='Hello ';
str+=frm.name.value.trim();


document.getElementById("writeName").innerHTML=str;
alert(str);
}