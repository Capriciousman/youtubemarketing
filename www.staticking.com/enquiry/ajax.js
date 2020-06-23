$(document).ready(function () {	
	document.getElementById("subserviceson").innerHTML="";
});

function showvalue(str)
{
var xmlhttp;  
  
if (str=="")
  {
  document.getElementById("subserviceson").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("subserviceson").innerHTML=xmlhttp.responseText;
    }	
  }
  
xmlhttp.open("GET","https://www.staticking.com/enquiry/getsubservice.php?subservice="+str,true);
xmlhttp.send();
  
}





(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-32032409-2', 'staticking.com');
ga('send', 'pageview');