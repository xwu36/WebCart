var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
	new Product({
	imagePath : 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
	title : 'Gothic',
	description: 'Awesome Game!!!!',
	price : 10
	}),
	new Product({
	imagePath : 'http://us.blizzard.com/static/_images/games/sc/wallpapers/wall1/wall1-1920x1200.jpg',
	title : 'StarCraft',
	description: 'The StarCraft: Brood War expansion adds a host of new features to the game, including three new campaigns set in the aftermath of the original StarCraft. Explore new worlds, fight your way through dangerous missions, and command powerful new units for each race.',
	price : 12
	}),
	new Product({
	imagePath : 'https://i.ytimg.com/vi/90H-ARdf1dw/maxresdefault.jpg',
	title : 'WarCraft III',
	description: 'Warcraft III: The Frozen Throne is the official expansion pack to Warcraft III: Reign of Chaos, a real-time strategy computer game by Blizzard Entertainment.[1] Released worldwide on July 1, 2003,[2] it includes new units for each race, two new auxiliary races, four campaigns, five neutral heroes (an additional neutral hero was added April 2004 and two more were added in August 2004),[3] the ability to build a shop and other improvements such as the ability to queue upgrades. Sea units were reintroduced; they had been present in Warcraft II but were absent in Reign of Chaos. Blizzard Entertainment has released patches for the game to fix bugs, extend the scripting system, and balance multiplayer.',
	price : 12
	}),
	new Product({
	imagePath : 'http://cdn.bulbagarden.net/upload/thumb/9/95/Yellow_EN_boxart.png/250px-Yellow_EN_boxart.png',
	title : 'Pockmon Yellow',
	description: 'Pokémon Yellow Version: Special Pikachu Edition (ポケットモンスターピカチュウ Poketto Monsutā Pikachū?, lit. "Pocket Monsters Pikachu") more commonly known as Pokémon Yellow Version, is a 1998 role-playing video game developed by Game Freak and published by Nintendo for the Game Boy handheld video game console. It is an enhanced version of Pokémon Red and Blue. Along with the release of Pokémon Yellow, a special edition yellow Pokémon-themed Game Boy Color was also released.',
	price : 2
	}),
	new Product({
	imagePath : 'https://upload.wikimedia.org/wikipedia/en/4/4c/Pok%C3%A9mon_box_art_-_Gold_Version.png',
	title : 'Pockmon Gold',
	description: 'Pokémon Gold Version and Silver Version[a] are the second installments of the Pokémon series of role-playing video games, developed by Game Freak and published by Nintendo for the Game Boy Color. They were released in Japan in 1999, Australia and North America in 2000, and Europe in 2001. Pokémon Crystal, a special edition, was released roughly a year later in each region. In 2009, Nintendo remade Gold and Silver for the Nintendo DS as Pokémon HeartGold and SoulSilver.',
	price : 3
	})
];

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}