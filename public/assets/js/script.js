/*
 * DWAdmin
 */

/*
 * this is the javascipt for the dwadmin template.
 * if you want to change, please create a new javascript, 
 * because if one is missing in the original dwadmin javascript it will fall apart
 */

$(document).ready(function () {
	setInterval(function () {
		$(".loader").hide();
		$(".loader-overlay").hide();
	}, 1000);

	$("#sidebar-toggle, .sidebar-overlay").click(function () {
		$(".sidebar").toggleClass("sidebar-show");
		$(".sidebar-overlay").toggleClass("d-block");
	});

	$(".sidebar-items .submenu-items").click(function () {
		$(".sidebar-items .submenu-items").removeClass("active");
		$(this).toggleClass("active");
	});

	function clickMenu(goId, title) {
		$(goId).click(function (e) {
			e.preventDefault();

			$(".sidebar-items .items").removeClass("active");
			$(".sidebar-items .submenu a").removeClass("active");
			$(this).addClass("active");

		});
	}

});
$('#checkbox').prop('checked', true);


window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}



var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/mee/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visitor').innerText = this.response.value;
}
xhr.send();
window.setTimeout("getip()",1000);function getip(){
var xhr= new XMLHttpRequest();
var url='https://api.xteam.xyz/cekip';
xhr.onloadend=function(){data=JSON.parse(this.responseText);
document.getElementById("ipanda").textContent=data.response
document.getElementById("hit").innerText=data.userhit};
xhr.open("GET",url,true);
xhr.send();}
let text_el=document.querySelector('h5#jam')
let hSalam=document.querySelector('small#salam')
setInterval(()=>{var d=new Date();const jam=d.getHours().toString().padStart(2,0)
const menit=d.getMinutes().toString().padStart(2,0)
const detik=d.getSeconds().toString().padStart(2,0)
if(hSalam<4){hSalam.innerHTML="Selamat Malam"}else if(hSalam<11){hSalam.innerHTML="Selamat Pagi"}else if(hSalam<16){hSalam.innerHTML="Selamat Siang"}else if(hSalam<20){hSalam.innerHTML="Selamat Sore"}
else{hSalam.innerHTML="Selamat Malam";}
text_el.innerHTML=jam+":"+menit+":"+detik},250)



$.getJSON( "/ingfo", function(data) {
   console.log( "success" );
   $('#ram').html(data.totalmem + ' MB /' + data.freemem + ' MB');
   $('#cpusage').html(data.cpusage + '/' + data.cpufree);
   $('#sysuptime').hrml(data.sysuptime);
   $('#cpucount').html(data.cpucount + ' CPU');
   $('#platform').html(data.flatform);
        
   
   
   
   
})


