function checkFormat(elem)
{
 var len = elem.value.length;
 if(len != 0)
 {
  if(len == 10 && elem.value.match(/\d/g))
  {
   elem.value = elem.value.replace(elem.value.substring(0,3), elem.value.substring(0,3) + '-');
   elem.value = elem.value.replace(elem.value.substring(3,7), elem.value.substring(3,7) + '-');
  }
  len = elem.value.length;
  if(!elem.value.match(/\d-/g) || len != elem.maxLength)
  {
   alert("Phone numbr isn't in the proper format!");
  }
 }
}

function userInput(elem, evt)
{
 if(evt.which == 8 || evt.which == 46 || evt.which == 109 || evt.which == 173)
 {
  return;
 }
 var len = elem.value.length;
 if(len != 0)
 {
  if(len == 3 || len == 7)
  {
   elem.value += '-';
  }
 }
}