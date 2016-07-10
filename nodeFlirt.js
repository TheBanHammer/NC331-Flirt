var ranks = require('../ranks');

function flirt(module, bot) {
	var request = require("request");
	var flirtURL = "https://rawgit.com/donvoo/NC331-Flirt/master/flirt.json";
	request({
		url: flirtURL,
		json: true
	},function(error, response, body){
		if (error) return 'Unable To Get Pickup Lines... No Love For Me :(';

		console.log('JSON Obtained...')
		pickupLines = JSON.parse(body);
	})


	var that = this;
	this.module = module;
	this.bot = bot;
	this.module.SetName('Flirt Module');
	this.module.RegisterCommand('flirt', ranks.RDJ, function (data) { 
		
		//The Flirt Code
		//Created By donvoo, Idea by Elusive
		so = data.message.slice(7,255);
		cd = false;

		if (cd === false){
			bot.sendChat(data.issuer + so+' '+pickupLines.flirt331[Math.abs(Math.floor(Math.random()*pickupLines.flirt331.length))].line);
			cooldown(10);
		}

		function cooldown(time){
			cd = true;
			setTimeout(function(){cd = false;},time*1000);
		}

	});

};

module.exports = flirt;
