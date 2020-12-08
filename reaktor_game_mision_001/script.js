function input_day()
{
  var input = document.getElementById("result").innerHTML;
  var substr = "";
  var index = 0;
  do{
    substr = input.substr(index, 16);
    ++index;
    var sub_table = substr.split("");
    if (sub_table.length == [...new Set(sub_table)].length) break;
  }while(substr.length == 16);
  console.log(substr);


}
