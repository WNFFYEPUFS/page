var now = new Date(); var countDownDate=new Date("Feb 04, 2022 12:00:00").getTime(); if(now.getTime() >= countDownDate){countDownDate=new Date("Mar 12, 2022 12:00:00").getTime(); $('.reveal-from-right .pricing-item-features p').text('IDO Round 2 ends in Mar 04, 2022'); $('.reveal-from-right li:first-child').css('color', '#fff').css('text-decoration-line', 'line-through'); $('.reveal-from-right li:nth-child(2)').css('color', '#F9CD04')};var x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("demo").innerHTML=days+"d "+hours+"h "
+minutes+"m "+seconds+"s ";if(distance<0){clearInterval(x);document.getElementById("demo").innerHTML="EXPIRED";}},1000);
