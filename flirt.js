//javascript:(function(){$.getScript('http://donwwright.club/javascript/flirt.js');}());

pickupLines = [
	"ur hawt",
	"let's make babies",
	"qt"
];

cd = false;

API.on(API.CHAT,flirt);

function flirt(data){
	console.log(data);
	rank = API.getUser(data.uid).role

	if (rank > 0 && data.message.slice(0,6) === "!flirt" && cd === false){
		so = data.message.slice(7,255);
		API.sendChat(so+' '+pickupLines[Math.abs(Math.floor(Math.random()*pickupLines.length))]);
		cooldown(10);
	}
}

function cooldown(time){
	cd = true;
	setTimeout(function(){
		cd = false;
	},time*1000);
}
