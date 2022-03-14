var startDate = new Date();
startDate.setHours(12,0,0,0);

var endDate = new Date();
endDate.setHours(23,59,59,999);

var countDownDate=(new Date()).getHours() < 12 ? startDate.getTime() : endDate.getTime();var x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("demo").innerHTML=days+"d "+hours+"h "
+minutes+"m "+seconds+"s ";if(distance<0){clearInterval(x);document.getElementById("demo").innerHTML="EXPIRED";}},1000);
