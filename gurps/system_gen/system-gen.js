//var forceGarden = true;
var forceGarden = false;

do{
	forceGarden = makeSolarSystem();
} while (forceGarden);

function makeSolarSystem(){
var hasGarden = false;
var stars=new Array();
sysName = generateName();
sysAge = -1.0; //billions of years

var rollSeq = "";
readFrom = false;
forceSingleStar = true;	//just have single star systems for now
var stellarMassTable = new Array();
stellarMassTable[0] = 2.00;
stellarMassTable[1] = 1.90;
stellarMassTable[2] = 1.80;
stellarMassTable[3] = 1.70;
stellarMassTable[4] = 1.60;
stellarMassTable[5] = 1.50;
stellarMassTable[6] = 1.45;
stellarMassTable[7] = 1.40;
stellarMassTable[8] = 1.35;
stellarMassTable[9] = 1.30;
stellarMassTable[10] = 1.25;
stellarMassTable[11] = 1.20;
stellarMassTable[12] = 1.15;
stellarMassTable[13] = 1.10;
stellarMassTable[14] = 1.05;
stellarMassTable[15] = 1.00;
stellarMassTable[16] = 0.95;
stellarMassTable[17] = 0.90;
stellarMassTable[18] = 0.85;
stellarMassTable[19] = 0.80;
stellarMassTable[20] = 0.75;
stellarMassTable[21] = 0.70;
stellarMassTable[22] = 0.65;
stellarMassTable[23] = 0.60;
stellarMassTable[24] = 0.55;
stellarMassTable[25] = 0.50;
stellarMassTable[26] = 0.45;
stellarMassTable[27] = 0.40;
stellarMassTable[28] = 0.35;
stellarMassTable[29] = 0.30;
stellarMassTable[30] = 0.25;
stellarMassTable[31] = 0.20;
stellarMassTable[32] = 0.15;
stellarMassTable[33] = 0.10;

var lmtab = new Array();
lmtab[33] = 0.0012;
lmtab[32] = 0.0036; 
lmtab[31] = 0.0079; 
lmtab[30] = 0.015; 
lmtab[29] = 0.024; 
lmtab[28] = 0.037; 
lmtab[27] = 0.054; 
lmtab[26] = 0.07; 
lmtab[25] = 0.09; 
lmtab[24] = 0.11; 
lmtab[23] = 0.13; 
lmtab[22] = 0.15; 
lmtab[21] = 0.19; 
lmtab[20] = 0.23; 
lmtab[19] = 0.28; 
lmtab[18] = 0.36; 
lmtab[17] = 0.45; 
lmtab[16] = 0.56; 
lmtab[15] = 0.68; 
lmtab[14] = 0.87; 
lmtab[13] = 1.1; 
lmtab[12] = 1.4;
lmtab[11] = 1.7; 
lmtab[10] = 2.1; 
lmtab[9] = 2.5; 
lmtab[8] = 3.1; 
lmtab[7] = 3.7; 
lmtab[6] = 4.3; 
lmtab[5] = 5.1; 
lmtab[4] = 6.7; 
lmtab[3] = 8.6; 
lmtab[2] = 11; 
lmtab[1] = 13; 
lmtab[0] = 16; 


//objects

function moon(){
	//major moons
	this.orbitalRadius = -1.00;	//AU
	this.worldType = "moon";
	this.subType = "ERROR";	//for terrestrial wrolds: garden, chthonian, greenhouse, ice, etc
	this.size = "ERROR"; 	//abstract size (large, medium, small, tiny)
	this.worldName = "ERROR";
	this.features = "";
	this.blackbodyTemp = -1.00;	//K
	this.atmoMass = -1.0;
	this.suffocatingAtmo = false;
	this.corrosiveAtmo = false;
	this.mToxicAtmo = false;
	this.hToxicAtmo = false;
	this.ltoxicAtmo = false;
	this.marginalAtmo = new Array();
	this.vac = false;	//true if the world has no atmosphere
	this.hydro = 0;	//hydrographic covereage, by percentrage of surface
	this.hydroType;	//chemical ocean (water or otherwise) on surface
	this.averageSurfaceTemp = -1.00;	//average surface temp in K
	this.climateType = "ERROR";
	this.density = -1.00;	//Earth densities
	this.diameter = -1.00;	//Earth diameters
	this.gravity = -1.00;	//surface gravity in Gs
	this.mass = -1.00;	//mass in Earths
	this.pressure = -1.00;	//pressure in atmos
	this.abstractPres = "ERROR";
	this.atmoQual = "ERROR";
	this.orbitalPeriod = -1.00;	//orbital period in Earth years
}

function world(orbitalRadius){
	this.orbitalRadius = orbitalRadius;	//AU
	this.worldType = "ERROR";	//gas giant, terrestrial, asteroid belt, etc
	this.subType = "ERROR";	//for terrestrial wrolds: garden, chthonian, greenhouse, ice, etc
	//this.position = -1; //position, including asteroid belts, excluding empty orbs
	this.size = "ERROR"; 	//abstract size (large, medium, small, tiny)
	this.worldName = "ERROR";
	this.features = "";
	this.resonantMoons = 0;	//count of resonant moon
	this.majorMoons = 0;	//count of major moons
	this.capturedMoons = 0;	//count of captured asteroid moons
	this.moonSystem = new Array(); //will hold moon objects for major moons
	this.blackbodyTemp = -1.00;	//K
	this.hasSulfurMoon = false;
	this.testedSulfurMoon = false;
	this.atmoMass = -1.0;
	this.suffocatingAtmo = false;
	this.corrosiveAtmo = false;
	this.mToxicAtmo = false;
	this.hToxicAtmo = false;
	this.ltoxicAtmo = false;
	this.marginalAtmo = new Array();
	this.vac = false;	//true if the world has no atmosphere
	this.hydro = 0;	//hydrographic covereage, by percentrage of surface
	this.hydroType;	//chemical ocean (water or otherwise) on surface
	this.averageSurfaceTemp = -1.00;	//average surface temp in K
	this.climateType = "ERROR";
	this.density = -1.00;	//Earth densities
	this.diameter = -1.00;	//Earth diameters
	this.gravity = -1.00;	//surface gravity in Gs
	this.mass = -1.00;	//mass in Earths
	this.pressure = -1.00;	//pressure in atmos
	this.abstractPres = "ERROR";
	this.atmoQual = "ERROR";
	this.orbitalPeriod = -1.00;	//orbital period in Earth years
}

function starObj(){
	this.starName = "ERROR";
	this.mass = -1.00;	//mass in sols
	this.starType = "ERROR";
	this.spectype = "ERROR";
	this.temp = -1; //photosphere temp in K
	this.lumin = -1.00; //luminocity in sols
	this.radius = -1.00; //radius in AU
	this.avgOrbitalRad = -1.00;	//average orbital radius in AU 
	this.eccentricity = -1.00;	//orbital eccentricity
	this.perigee = -1.00; //closest
	this.apogee = -1.00; //farthest
	this.innerLimitRadius = -1.00;//AU
	this.outerLimitRadius = -1.00; //AU
	this.snowLine = -1.00; //AU
	this.lmin = -1.0; //herpderp
	this.hasForbiddenZone = false;
	this.innerEdgeFZ = -1.00; //AU
	this.outerEdgeFZ = -1.00; //AU
	this.orbits = new Array();	//will hold distances of orbits
	this.hasGasGiant = false;
	this.gasGiantArrangement = "none";
	this.worlds = new Array();	//will hold world objects taht orbit it
	this.planetCount = 0;	//count of planets (non-asteroids)
	//this.hasGarden = false;
}

//functions

function generateName(){
	var names=new Array();

	names[0]="New Seattle";
	names[1]="New America";
	names[2]="Luthien";
	names[3]="New Terra";
	names[4]="New Boston";
	names[5]="New Paris";
	names[6]="New London";
	names[7]="New Rome";
	names[8]="New Mars";
	names[9]="John Wayne";
	names[10]="Clint Eastwood";
	names[11]="Washington";
	names[12]="Lincoln";
	names[13]="Churchill";
	names[14]="Tukayyid";
	names[15]="Marley";
	names[16]="Avalon";
	names[17]="Heaven";
	names[18]="Haven";
	names[19]="Green Acres";
	names[20]="Mayberry";
	names[21]="New Portland";
	names[22]="New Texas";
	names[23]="New Vancouver";
	names[24]="Marx";
	names[25]="Engels";
	names[26]="Lenin";
	names[27]="New Moscow";
	names[28]="Confucius";
	names[29]="Alexander";
	names[30]="New Athens";
	names[31]="New Cairo";
	names[32]="Aristotle";
	names[33]="Plato";
	names[34]="Copernicus";
	names[35]="Rand";
	names[36]="New Dubai";
	names[37]="New Tokyo";
	names[38]="New Stockholm";
	names[39]="New Helsinki";
	names[40]="Gilgamesh";
	names[41]="Jason";
	names[42]="Quixote";
	names[42]="Ulysses";
	names[43]="Sagan";
	names[44]="Genghis";
	names[45]="Armstrong";
	names[46]="Gagarin";
	names[47]="Hubble";
	names[48]="Drake";
	names[49]="Newton";
	names[50]="Einstein";
	names[51]="Borges";
	names[52]="Shakespeare";
	names[53]="New Hague";
	names[54]="Turing";
	names[55]="Timeless";
	names[56]="Hammurabi";
	names[57]="Von Neumann";
	names[58]="Odysseus";
	names[59]="Roosevelt";
	names[60]="Kilroy";
	names[61]="Galt";
	names[61]="Galt's Gulch";
	names[62]="Zion";
	names[63]="New Zion";
	names[64]="New Atlantis";
	names[65]="Atlantis";
	names[66]="Dodge";
	names[67]="Deseret";
	names[68]="Tír na nÓg";
	names[69]="Thule";
	names[70]="Shangri-La";
	names[71]="Xanadu";
	names[72]="Tortuga";
	names[73]="Libertatia";
	names[74]="Arcadia";
	names[75]="Christiania";
	names[76]="Kallipolis";
	names[77]="Agartha";
	names[78]="Shambhala";
	names[79]="Arthur";
	names[80]="Saladin";
	names[81]="Orpheus";
	names[82]="Pesht";
	names[83]="Wolcott";
	names[84]="Marshdale";
	names[85]="Habiba";
	names[86]="Kakfa";
	names[87]="John Ball";
	names[88]="Jack Straw";
	names[89]="Boondock";
	names[90]="Oz";
	names[91]="Elvis";
	names[92]="Bowie";
	names[93]="Bolivar";
	names[94]="Turtle Island";
	names[95]="Woomera";
	names[96]="Goltar";
	names[97]="Dwamerthrax";
	names[98]="Vux";
	names[99]="Sparta";
	names[100]="New Sparta";
	names[101]="Tenochtitlan";
	names[102]="Dreamland";
	names[103]="Boldar";
	names[104]="Waugh";
	names[105]="Warg";
	names[106]="Rubicon";
	names[107]="Karrak";
	names[108]="Brumpy";
	names[109]="Thodin";
	names[110]="Feppo";
	names[111]="Bando";
	names[112]="Vermal";
	names[113]="Hodgenville";
	names[114]="Gilley";
	names[115]="Wolf Creek";
	names[116]="Gadberry";
	names[117]="Jamboree";
	names[118]="Bazaar";
	names[119]="Gasper";
	names[120]="New Idaho";
	names[121]="Crab Orchard";
	names[122]="Morton's Gap";
	names[123]="Grognar";
	names[124]="Sleeth";
	names[125]="Krellion";
	names[126]="Oskar";
	names[127]="Uhura";
	names[128]="Ubuntu";
	names[129]="New Mumbai";
	names[130]="New Bangalore";
	names[131]="New Beijing";
	names[132]="New Manilla";
	names[133]="New Lagos";
	names[134]="Denton";
	names[135]="Gubby";
	names[136]="Dyson";
	names[137]="Ecclesson";
	names[138]="Dieron";
	names[139]="New Berlin";
	names[140]="New Dhaka";
	names[141]="New Quito";
	names[142]="New Brasil";
	names[143]="Santos Dumont";
	names[144]="New Madrid";
	names[145]="Brizon";
	names[146]="Bog";
	names[147]="Brock";
	names[148]="Desh";
	names[149]="Drago";
	names[150]="Enox";
	names[151]="Ernst";
	names[152]="Godel";
	names[153]="Gloodel";
	names[154]="Gubby";
	names[155]="Mok";
	names[156]="Hidea";
	names[157]="Jihana";
	names[158]="Liggum";
	names[159]="Lomea";
	names[160]="Moss";
	names[161]="Norb";
	names[162]="Gollean";
	names[163]="Roada";
	names[164]="Wist";
	names[165]="Galileo";
	names[166]="Lao Tzu";
	names[167]="O'Neill";
	names[168]="Clarke";
	names[169]="Goddard";
	names[170]="Oberth";
	names[171]="Tsiolkovsky";

	namesSize = names.length;
	toReturn=names[Math.floor((Math.random()*namesSize))];
	return toReturn;
}

function doRoll(diceCount, modifier){
	toReturn = modifier;
	for (var n = 0; n < diceCount; n++){
		if (readFrom){
			toReturn += 1;
		} else {
			toReturn += Math.floor((Math.random()*6)) + 1;
		}
	}
	rollSeq += "_" + toReturn;
	return toReturn;
}

function tempToType(temp){
	if (temp < 3150){
		return "M7";
	} else if (temp < 3250){ 
		return "M5";
	} else if (temp < 3350) {
		return "M4";
	} else if (temp < 3450) {
		return "M3";
	} else if (temp < 3550) {
		return "M2";
	} else if (temp < 3700) {
		return "M1";
	} else if (temp < 3900) {
		return "M0";
	} else if (temp < 4100) {
		return "K8";
	} else if (temp < 4300) {
		return "K6";
	} else if (temp < 4500) {
		return "K5";
	} else if (temp < 4750) {
		return "K4";
	} else if (temp < 5050) {
		return "K2";
	} else if (temp < 5300) {
		return "K0";
	} else if (temp < 5450) {
		return "G8";
	} else if (temp < 5600) {
		return "G6";
	} else if (temp < 5750) {
		return "G4";
	} else if (temp < 5850) {
		return "G2";
	} else if (temp < 5950) {
		return "G1";
	} else if (temp < 6050) {
		return "G0";
	} else if (temp < 6200) {
		return "F9";
	} else if (temp < 6350) {
		return "F8";
	} else if (temp < 6450) {
		return "F7";
	} else if (temp < 6550) {
		return "F6";
	} else if (temp < 6650) {
		return "F5";
	} else if (temp < 6800) {
		return "F4";
	} else if (temp < 6950) {
		return "F3";
	} else if (temp < 7150) {
		return "F2";
	} else if (temp < 7400) {
		return "F0";
	} else if (temp < 7650) {
		return "A9";
	} else if (temp < 7900) {
		return "A7";
	} else if (temp < 8100) {
		return "A6";
	} else if (temp < 8500) {
		return "A5";
	} else if (temp < 9250) {
		return "A2";
	} else {
		return "A0";
	}
}

function inForbiddenZone(distance, star){
	if (distance < star.radius){
		return true;
	}
	if (star.hasForbiddenZone && (distance > star.innerEdgeFZ && distance < star.outerEdgeFZ)){
		return true;
	}
	return false;
}

function orbitalSpacingTable(diceRoll){
	switch(diceRoll){
		case 3:
		case 4:
			return 1.4;
		case 5:
		case 6:
			return 1.5;
		case 7:
		case 8:
			return 1.6;
		case 9:
		case 10:
		case 11:
		case 12:
			return 1.7;
		case 13:
		case 14:
			return 1.8;
		case 15:
		case 16:
			return 1.9;
		default:
			return 2.0;
	}
}

function gasGiantSizeTable(roll){
	if (roll < 11){
		return "small";
	} else if (roll < 17){
		return "medium";
	} else {
		return "large";
	}
}

function sortWorlds(){
	//sort the worlds by orbital radius
	//herp, just use insertion sort (not a big data set, so it's fine)
	for (var m = 1; m <= (stars[0].worlds.length - 1); m++){
		n = m;
		while (n > 0 && stars[0].worlds[n-1].orbitalRadius > stars[0].worlds[n].orbitalRadius){
			//swap [n] and [n-1]
			//tempWorldA = stars[0].worlds[n-1];
			//tempWorldB = stars[0].worlds[n];
			var tempWorldA = new world(stars[0].worlds[n-1].orbitalRadius);
			tempWorldA.worldType = stars[0].worlds[n-1].worldType;
			tempWorldA.size = stars[0].worlds[n-1].size;

			var tempWorldB = new world(stars[0].worlds[n].orbitalRadius);
			tempWorldB.worldType = stars[0].worlds[n].worldType;
			tempWorldB.size = stars[0].worlds[n].size;

			stars[0].worlds[n-1] = tempWorldB;
			stars[0].worlds[n] = tempWorldA;
			n = n - 1;
		}
	}
}

function noAtmo(thisWorld){
	if (thisWorld.size == "tiny"){
		return true;
	} else if (thisWorld.size == "small" && (thisWorld.subType == "hadean" || thisWorld.subType == "rock")){
		return true;
	} else if (thisWorld.size == "standard" && (thisWorld.subType == "hadean" || thisWorld.subType == "chthonian")){
		return true;
	} else if (thisWorld.size == "large" && thisWorld.subType == "chthonian"){
		return true;
	}
	return false;
}

function determineMarginal(){
	marg = doRoll(3,0);
	switch(marg){
		case 3:
		case 4:
			return "chlorine";
		case 5:
		case 6:
			return "sulfur compounds";
		case 7:
			return "nitrogen compounds";
		case 8:
		case 9:
			return "organic toxins";
		case 10:
		case 11:
			return "low oxygen";
		case 12:
		case 13:
			return "pollutants";
		case 14:
			return "high carbon dioxide";
		case 15:
		case 16:
			return "high oxygen";
		default:
			return "inert gases";
	}
}

function getAbsorptionFactor(worldType, size, hydro){
	if (worldType == "asteroid belt"){
		return 0.97;
	} else if (size == "tiny"){
		if (worldType == "ice"){
			return 0.86;
		} else if (worldType =="rock"){
			return 0.97;
		} else if (worldType =="sulfur"){
			return 0.77;
		}
	} else if (size == "small"){
		if (worldType == "hadean"){
			return 0.67;
		} else if (worldType =="ice"){
			return 0.93;
		} else if (worldType =="rock"){
			return 0.96;
		}
	} else if (size == "standard" && worldType == "hadean"){
		return 0.67;
	} else if (size == "standard" || size == "large"){
		if (worldType == "ammonia"){
			return 0.84;
		} else if (worldType =="ice"){
			return 0.86;
		} else if (worldType =="ocean" || worldType == "garden"){
			if (hydro <= 20){
				return 0.95;
			} else if (hydro <= 50){
				return 0.92;
			} else if (hydro <= 90){
				return 0.88;
			} else {
				return 0.84;
			}
		} else if (worldType == "greenhouse"){
			return 0.77;
		} else if (worldType == "chthonian"){
			return 0.97;
		}
	}
}

function getGreenhouseFactor(worldType, size){
	if (worldType == "ice" && size == "small"){
		return 0.10;
	} else if (size == "standard" || size == "large"){
		if (worldType == "ammonia" || worldType == "ice"){
			return 0.20;
		} else if (worldType =="garden" || worldType == "ocean"){
			return 0.16;
		} else if (worldType == "greenhouse"){
			return 2.0;
		}
	}

	return 0;
}

function blackbodyCorrection(worldType, size, atmoMass, hydro){
	return getAbsorptionFactor(worldType, size, hydro) * (1 + (atmoMass * getGreenhouseFactor(worldType, size)));
}

function getClimateType(temp){
	if (temp < 244){
		return "frozen";
	} else if (temp < 255){
		return "very cold";
	} else if (temp < 266){
		return "cold";
	} else if (temp < 278){
		return "chilly";
	} else if (temp < 289){
		return "cool";
	} else if (temp < 300){
		return "normal";
	} else if (temp < 311){
		return "warm";
	} else if (temp < 322){
		return "tropical";
	} else if (temp < 333){
		return "hot";
	} else if (temp < 344){
		return "very hot";
	} else {
		return "infernal";
	}
}

function worldDensityTable(subType, size){
	if ((size == "tiny" && (subType == "ice" || subType == "sulfur")) || ((size == "small" && subType == "ice") || (subType == "hadean" || subType == "ammonia"))){
		//icy core
		roll = doRoll(3,0);
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
				return 0.3;
			case 7:
			case 8:
			case 9:
			case 10:
				return 0.4;
			case 11:
			case 12:
			case 13:
			case 14:
				return 0.5;
			case 15:
			case 16:
			case 17:
				return 0.6;
			default:
				return 0.7;
		}
	} else if (subType == "rock" && (size == "tiny" || size == "small")){
		//small iron core
		roll = doRoll(3,0);
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
				return 0.6;
			case 7:
			case 8:
			case 9:
			case 10:
				return 0.7;
			case 11:
			case 12:
			case 13:
			case 14:
				return 0.8;
			case 15:
			case 16:
			case 17:
				return 0.8;
			default:
				return 1.0;
		}
	} else {
		//large iron core
		roll = doRoll(3,0);
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
				return 0.8;
			case 7:
			case 8:
			case 9:
			case 10:
				return 0.9;
			case 11:
			case 12:
			case 13:
			case 14:
				return 1.0;
			case 15:
			case 16:
			case 17:
				return 1.1;
			default:
				return 1.2;
		}
	}
}

function getDiameter(temp, density, size){
	min = 0.0;
	max = 0.0;
	if (size == "large"){
		min = 0.065;
		max = 0.091;
	} else if (size == "standard"){
		min = 0.030;
		max = 0.065;
	} else if (size == "small"){
		min = 0.024;
		max = 0.030;
	} else {
		//size == tiny
		min = 0.004;
		max = 0.024;
	}

	min *= Math.sqrt(temp/density);
	max *= Math.sqrt(temp/density);

	return min + ((max-min) * 0.1 * doRoll(2,-2));
}

function getPressureFactor(size, subType){
	if (size == "small"){
		return 10;
	} else if (size == "standard" && subType == "greenhouse"){
		return 100;
	} else if (size == "standard"){
		return 1;
	} else if (size == "large" && subType == "greenhouse"){
		return 500;
	} else {
		return 5;
	}
}

function getAbstractPres(pressure){
	if (pressure < 0.01){
		return "trace";
	} else if (pressure <= 0.5){
		return "very thin";
	} else if (pressure <= 0.8){
		return "thin";
	} else if (pressure <= 1.2){
		return "standard";
	} else if (pressure <= 1.5){
		return "dense";
	} else if (pressure <= 10){
		return "very dense";
	} else {
		return "superdense";
	}
}

function getAtmoQual(world){
	if (((world.suffocatingAtmo || world.corrosiveAtmo) || (world.mToxicAtmo || world.hToxicAtmo)) || world.lToxicAtmo){
		return "unbreathable";
	}

	if (world.abstractPres == "trace"){
		return "unbreathable";
	}

	if (world.marginalAtmo.length > 0){
		toReturn = "marginal (";
			for (var n = 0; n < world.marginalAtmo.length; n++){
				if (n > 0){
					toReturn += ",";
				}
				toReturn += world.marginalAtmo[n];
			}
		return toReturn + ")";
	}

	return "breathable";
}

function getGasMass(roll, size){
	if (size == "small"){
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				return 10;
			case 9:
			case 10:
				return 15;
			case 11:
				return 20;
			case 12:
				return 30;
			case 13:
				return 40;
			case 14:
				return 50;
			case 15:
				return 60;
			case 16:
				return 70;
			default:
				return 80;
		}
	} else if(size == "medium"){
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				return 100;
			case 9:
			case 10:
				return 150;
			case 11:
				return 200;
			case 12:
				return 250;
			case 13:
				return 300;
			case 14:
				return 350;
			case 15:
				return 400;
			case 16:
				return 450;
			default:
				return 500;
		}
	} else {
		//size == "large"
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				return 600;
			case 9:
			case 10:
				return 800;
			case 11:
				return 1000;
			case 12:
				return 1500;
			case 13:
				return 2000;
			case 14:
				return 2500;
			case 15:
				return 3000;
			case 16:
				return 3500;
			default:
				return 4000;
		}
	}
}

function getGasDensity(roll, size){
	if (size == "small"){
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				return 0.42;
			case 9:
			case 10:
				return 0.26;
			case 11:
				return 0.22;
			case 12:
				return 0.19;
			default:
				return 0.17;
		}
	} else if(size == "medium"){
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				return 0.18;
			case 9:
			case 10:
				return 0.19;
			case 11:
				return 0.20;
			case 12:
				return 0.22;
			case 13:
				return 0.24;
			case 14:
				return 0.25;
			case 15:
				return 0.26;
			case 16:
				return 0.27;
			default:
				return 0.29;
		}
	} else {
		//size == "large"
		switch(roll){
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				return 0.31;
			case 9:
			case 10:
				return 0.35;
			case 11:
				return 0.4;
			case 12:
				return 0.6;
			case 13:
				return 0.8;
			case 14:
				return 1.0;
			case 15:
				return 1.2;
			case 16:
				return 1.4;
			default:
				return 1.6;
		}
	}
}

function step31(){
}

function step30(){
	//dynamic properties
	for (n = 0; n < stars[0].worlds.length; n++){
		thisWorld = stars[0].worlds[n];
		thisWorld.orbitalPeriod = Math.sqrt(Math.pow(thisWorld.orbitalRadius,3) / (stars[0].mass + thisWorld.mass*0.000003));

		if (thisWorld.hasSulfurMoon){
			while(thisWorld.moonSystem[0].subType != "sulfur"){
				thisWorld.moonSystem.unshift(thisWorld.moonSystem.pop());
			}
		}

		for (moonInd = 0; moonInd < thisWorld.moonSystem.length; moonInd++){
			thisMoon = thisWorld.moonSystem[moonInd];
		}
	}
	step31()
}

function step29(){
	//world size
	//refer also to step 6 in book
	for (n = 0; n < stars[0].worlds.length; n++){
		thisWorld = stars[0].worlds[n];
		if (thisWorld.worldType == "terrestrial"){
			thisWorld.density = worldDensityTable(thisWorld.subType, thisWorld.size);
			thisWorld.density += Math.random()*0.1 - 0.05;
			thisWorld.diameter = getDiameter(thisWorld.blackbodyTemp, thisWorld.density, thisWorld.size);
			thisWorld.gravity = thisWorld.density * thisWorld.diameter;
			thisWorld.mass = thisWorld.density * Math.pow(thisWorld.diameter,3);
			if (!thisWorld.vac){
				if (thisWorld.subType == "chthonian" || (thisWorld.size == "small" && thisWorld.subType == "rock")){
					thisWorld.pressure = 0.005;	//just aribitrarily pick 0.5% of Earth (Mars is about that)
				} else {
					thisWorld.pressure = thisWorld.atmoMass * thisWorld.gravity * getPressureFactor(thisWorld.size, thisWorld.subType);
				}
				thisWorld.abstractPres = getAbstractPres(thisWorld.pressure);
				thisWorld.atmoQual = getAtmoQual(thisWorld);
			} else {
				thisWorld.pressure = 0;
				thisWorld.abstractPres = "vacuum";
				thisWorld.atmoQual = "";
			}
		} else if (thisWorld.worldType == "gas giant"){
			gasMass = doRoll(3,0);
			thisWorld.mass = getGasMass(gasMass, thisWorld.size);
			thisWorld.mass += thisWorld.mass * Math.random()*0.1;
			thisWorld.density = getGasDensity(gasMass, thisWorld.size);
			thisWorld.density += thisWorld.density * Math.random()*0.2 - 0.1;
			thisWorld.diameter = Math.pow((thisWorld.mass / thisWorld.density),(1.0/3.0));
			thisWorld.gravity = thisWorld.density * thisWorld.diameter;
		} else {
			//asteroid belt
		}

		//now loop through this planet's major moons
		for (moonInd = 0; moonInd < thisWorld.moonSystem.length; moonInd++){
			thisMoon = thisWorld.moonSystem[moonInd];
			thisMoon.density = worldDensityTable(thisMoon.subType, thisMoon.size);
			thisMoon.density += Math.random()*0.1 - 0.05;
			thisMoon.diameter = getDiameter(thisMoon.blackbodyTemp, thisMoon.density, thisMoon.size);
			thisMoon.gravity = thisMoon.density * thisMoon.diameter;
			thisMoon.mass = thisMoon.density * Math.pow(thisMoon.diameter,3);
			if (!thisMoon.vac){
				if (thisMoon.subType == "chthonian" || (thisMoon.size == "small" && thisMoon.subType == "rock")){
					thisMoon.pressure = 0.005; //just aribitrarily pick 0.5% of Earth (Mars is about that)
				} else {
					thisMoon.pressure = thisMoon.atmoMass * thisMoon.gravity * getPressureFactor(thisMoon.size, thisMoon.subType);
				}
				thisMoon.abstractPres = getAbstractPres(thisMoon.pressure);
				thisMoon.atmoQual = getAtmoQual(thisMoon);
			} else {
				thisMoon.pressure = 0;
				thisMoon.abstractPres = "vacuum";
				thisMoon.atmoQual = "";
			}
		}
	}
	step30();
}

function step28(){
	//climate
	//refer also to step 5 in book
	for (n = 0; n < stars[0].worlds.length; n++){
		if (stars[0].worlds[n].worldType == "terrestrial"){
			stars[0].worlds[n].averageSurfaceTemp = stars[0].worlds[n].blackbodyTemp * blackbodyCorrection(stars[0].worlds[n].subType,stars[0].worlds[n].size,stars[0].worlds[n].atmoMass,stars[0].worlds[n].hydro);
			stars[0].worlds[n].climateType = getClimateType(stars[0].worlds[n].averageSurfaceTemp);
		}
		//now loop through this planet's major moons
		for (moonInd = 0; moonInd < stars[0].worlds[n].moonSystem.length; moonInd++){
			stars[0].worlds[n].moonSystem[moonInd].averageSurfaceTemp = stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp * blackbodyCorrection(stars[0].worlds[n].moonSystem[moonInd].subType, stars[0].worlds[n].moonSystem[moonInd].size,stars[0].worlds[n].moonSystem[moonInd].atmoMass,stars[0].worlds[n].moonSystem[moonInd].hydro);
			stars[0].worlds[n].moonSystem[moonInd].climateType = getClimateType(stars[0].worlds[n].moonSystem[moonInd].averageSurfaceTemp);
		}
	}
	step29();
}

function step27(){
	//HYDROGRAPHIC COVERAGE
	//also refer to step 4 in book

	//loop thru planets
	for (n = 0; n < stars[0].worlds.length; n++){
		if (stars[0].worlds[n].subType == "ocean" || stars[0].worlds[n].subType == "garden"){
			stars[0].worlds[n].hydroType = "water";
			if (stars[0].worlds[n].size == "standard"){
				stars[0].worlds[n].hydro = 10 * doRoll(1, 4) - Math.floor(Math.random()*10);
			} else {
				//large world
				hydroRoll = 10 * doRoll(1,6);
				if (hydroRoll > 100){
					hydroRoll = 100;
				}
				stars[0].worlds[n].hydro = hydroRoll - Math.floor(Math.random()*10);
			}
		}

		//now loop through this planet's major moons
		for (moonInd = 0; moonInd < stars[0].worlds[n].moonSystem.length; moonInd++){
			if (stars[0].worlds[n].moonSystem[moonInd].subType == "ocean" || stars[0].worlds[n].moonSystem[moonInd].subType == "garden"){
				stars[0].worlds[n].moonSystem[moonInd].hydro = 10 * doRoll(1, 4) - Math.floor(Math.random()*10);
			}
		}
	}
	step28();
}

function step26(){
	//atmosphere
	//refer also to step 3 in book
	for (n = 0; n < stars[0].worlds.length; n++){
		if (stars[0].worlds[n].worldType == "terrestrial"){
			if (!noAtmo(stars[0].worlds[n])){
				stars[0].worlds[n].atmoMass = doRoll(3,0)/10.0;
				document.write("wat: " + stars[0].worlds[n].atmoMass + "<br/>");
				stars[0].worlds[n].atmoMass += (Math.random()*0.1 - 0.05);
				document.write("random statement makes " + (Math.random()*0.1 - 0.05));
				document.write("post: " + stars[0].worlds[n].atmoMass + "<br/>");
				if (stars[0].worlds[n].size == "small" && stars[0].worlds[n].subType == "ice"){
					if (doRoll(3,0)<16){
						stars[0].worlds[n].suffocatingAtmo = true;
						stars[0].worlds[n].mToxicAtmo = true;
					} else {
						stars[0].worlds[n].suffocatingAtmo = true;
						stars[0].worlds[n].hToxicAtmo = true;
					}
				} else if (stars[0].worlds[n].subType == "ammonia"){
					stars[0].worlds[n].suffocatingAtmo = true;
					stars[0].worlds[n].lToxicAtmo = true;
					stars[0].worlds[n].corrosiveAtmo = true;
				} else if (stars[0].worlds[n].size == "standard" && stars[0].worlds[n].subType == "ice"){
					if (doRoll(3,0) < 13){
						stars[0].worlds[n].suffocatingAtmo = true;
					} else {
						stars[0].worlds[n].suffocatingAtmo = true;
						stars[0].worlds[n].mToxicAtmo = true;
					}
				} else if(stars[0].worlds[n].size == "standard" && stars[0].worlds[n].subType == "ocean"){
					if (doRoll(3,0) < 13){
						stars[0].worlds[n].suffocatingAtmo = true;
					} else {
						stars[0].worlds[n].suffocatingAtmo = true;
						stars[0].worlds[n].mToxicAtmo = true;
					}
				} else if (stars[0].worlds[n].subType == "garden"){
					if (doRoll(3,0)>11){
						stars[0].worlds[n].marginalAtmo.push(determineMarginal());
					}
				} else if (stars[0].worlds[n].subType == "greenhouse"){
					stars[0].worlds[n].suffocatingAtmo = true;
					stars[0].worlds[n].lToxicAtmo = true;
					stars[0].worlds[n].corrosiveAtmo = true;
				} else if (stars[0].worlds[n].size == "large" && stars[0].worlds[n].subType == "ice"){
					stars[0].worlds[n].suffocatingAtmo = true;
					stars[0].worlds[n].hToxicAtmo = true;
				} else {
					//large ocean world
					stars[0].worlds[n].suffocatingAtmo = true;
					stars[0].worlds[n].hToxicAtmo = true;
				}
			} else if (!((stars[0].worlds[n].size == "small" && stars[0].worlds[n].subType == "rock") || stars[0].worlds[n].subType == "chthonian")){
				stars[0].worlds[n].vac = true;
			}
		}

		//now loop through major moons
		for (moonInd = 0; moonInd < stars[0].worlds[n].moonSystem.length; moonInd++){
			if (!noAtmo(stars[0].worlds[n].moonSystem[moonInd])){
				stars[0].worlds[n].moonSystem[moonInd].atmoMass = doRoll(3,0)/10.0;
				stars[0].worlds[n].moonSystem[moonInd].atmoMass += (Math.random()*0.1 - 0.05);
				if (stars[0].worlds[n].moonSystem[moonInd].size == "small" && stars[0].worlds[n].moonSystem[moonInd].subType == "ice"){
					if (doRoll(3,0)<16){
						stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
						stars[0].worlds[n].moonSystem[moonInd].mToxicAtmo = true;
					} else {
						stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
						stars[0].worlds[n].moonSystem[moonInd].hToxicAtmo = true;
					}
				} else if (stars[0].worlds[n].moonSystem[moonInd].size == "standard" && stars[0].worlds[n].moonSystem[moonInd].subType == "ammonia"){
					stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
					stars[0].worlds[n].moonSystem[moonInd].lToxicAtmo = true;
					stars[0].worlds[n].moonSystem[moonInd].corrosiveAtmo = true;
				} else if (stars[0].worlds[n].moonSystem[moonInd].size == "standard" && stars[0].worlds[n].moonSystem[moonInd].subType == "ice"){
					if(doRoll(3,0) < 13){
						stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
					} else {
						stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
						stars[0].worlds[n].moonSystem[moonInd].mToxicAtmo = true;
					}
				} else if (stars[0].worlds[n].moonSystem[moonInd].size == "standard" && stars[0].worlds[n].moonSystem[moonInd].subType == "ocean"){
					if(doRoll(3,0) < 13){
						stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
					} else {
						stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
						stars[0].worlds[n].moonSystem[moonInd].mToxicAtmo = true;
					}
				} else if (stars[0].worlds[n].moonSystem[moonInd].size == "standard" && stars[0].worlds[n].moonSystem[moonInd].subType == "garden"){
					if (doRoll(3,0)>11){
						stars[0].worlds[n].moonSystem[moonInd].marginalAtmo.push(determineMarginal());
					}
				} else {
					//standard-sized greenhouse moon
					stars[0].worlds[n].moonSystem[moonInd].suffocatingAtmo = true;
					stars[0].worlds[n].moonSystem[moonInd].lToxicAtmo = true;
					stars[0].worlds[n].moonSystem[moonInd].corrosiveAtmo = true;
				}
			} else {
				stars[0].worlds[n].moonSystem[moonInd].vac = true;
			}
		}
	}
	step27();
}

function step25(){
	//world types
	for (n = 0; n < stars[0].worlds.length; n++){
		if (stars[0].worlds[n].worldType == "terrestrial"){
			stars[0].worlds[n].blackbodyTemp = 278 * (Math.pow(stars[0].lumin, 0.25)) / Math.sqrt(stars[0].worlds[n].orbitalRadius);
			if (stars[0].worlds[n].size == "tiny"){
				if (stars[0].worlds[n].blackbodyTemp <= 140){
					stars[0].worlds[n].subType = "ice";
				} else {
					stars[0].worlds[n].subType = "rock";
				} 
			} else if (stars[0].worlds[n].size == "small"){
				if (stars[0].worlds[n].blackbodyTemp <= 80){
					stars[0].worlds[n].subType = "hadean";
				} else if (stars[0].worlds[n].blackbodyTemp <= 140){
					stars[0].worlds[n].subType = "ice";
				} else {
					stars[0].worlds[n].subType = "rock";
				}
			} else if (stars[0].worlds[n].size == "standard"){
				if (stars[0].worlds[n].blackbodyTemp <= 80){
					stars[0].worlds[n].subType = "hadean";
				} else if (stars[0].worlds[n].blackbodyTemp <= 150){
					stars[0].worlds[n].subType = "ice";
				} else if (stars[0].worlds[n].blackbodyTemp <= 230){
					if (stars[0].mass <= 0.65){
						stars[0].worlds[n].subType = "ammonia";
					} else {
						stars[0].worlds[n].subType = "ice";
					}
				} else if (stars[0].worlds[n].blackbodyTemp <= 240){
					stars[0].worlds[n].subType = "ice";
				} else if (stars[0].worlds[n].blackbodyTemp <= 320){
					gardenMod = Math.floor(sysAge / 0.5);
					if (gardenMod > 10){
						gardenMod = 10;
					}
					if (doRoll(3,gardenMod) > 17){
						stars[0].worlds[n].subType = "garden";
						hasGarden = true;
					} else {
						stars[0].worlds[n].subType = "ocean";
					}
				} else if (stars[0].worlds[n].blackbodyTemp <= 500){
					stars[0].worlds[n].subType = "greenhouse";
				} else {
					stars[0].worlds[n].subType = "chthonian";
				}
			} else {
				//large terrestrial
				if (stars[0].worlds[n].blackbodyTemp <= 150){
					stars[0].worlds[n].subType = "ice";
				} else if (stars[0].worlds[n].blackbodyTemp <= 230){
					if (stars[0].mass <= 0.65){
						stars[0].worlds[n].subType = "ammonia";
					} else {
						stars[0].worlds[n].subType = "ice";
					}
				} else if (stars[0].worlds[n].blackbodyTemp <= 240){
					stars[0].worlds[n].subType = "ice";
				} else if (stars[0].worlds[n].blackbodyTemp <= 320){
					gardenMod = Math.floor(sysAge / 0.5);
					if (gardenMod > 5){
						gardeMod = 5;
					}

					if (doRoll(3,gardenMod) > 17){
						stars[0].worlds[n].subType = "garden";
						hasGarden = true;
					} else {
						stars[0].worlds[n].subType = "ocean";
					}
				} else if (stars[0].worlds[n].blackbodyTemp <= 500){
					stars[0].worlds[n].subType = "greenhouse";
				} else {
					stars[0].worlds[n].subType = "chthonian";
				}
			}
		} else if (stars[0].worlds[n].worldType == "gas giant"){
			stars[0].worlds[n].subType = "gas giant";
		} else {
			stars[0].worlds[n].subType = "astroid belt";
		}

		//now loop through major moons
		for (moonInd = 0; moonInd < stars[0].worlds[n].moonSystem.length; moonInd++){
			stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp = 278 * (Math.pow(stars[0].lumin, 0.25)) / Math.sqrt(stars[0].worlds[n].orbitalRadius);
			if (stars[0].worlds[n].moonSystem[moonInd].size == "tiny"){
				if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 140){
					if (!stars[0].worlds[n].testedSulfurMoon){
						stars[0].worlds[n].testedSulfurMoon = true;
						if (doRoll(1,0) < 4){
							stars[0].worlds[n].hasSulfurMoon = true;
							stars[0].worlds[n].moonSystem[moonInd].subType = "sulfur";
						} else {
							stars[0].worlds[n].moonSystem[moonInd].subType = "ice";
						}
					} else {
						stars[0].worlds[n].moonSystem[moonInd].subType = "ice";
					}
				} else {
					stars[0].worlds[n].moonSystem[moonInd].subType = "rock";
				}
			} else if (stars[0].worlds[n].moonSystem[moonInd].size == "small"){
				if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 80){
					stars[0].worlds[n].moonSystem[moonInd].subType = "hadean";
				} else if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 140) {
					stars[0].worlds[n].moonSystem[moonInd].subType = "ice";
				} else {
					stars[0].worlds[n].moonSystem[moonInd].subType = "rock";
				}
			} else {
				//standard-sized world
				if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 80){
					stars[0].worlds[n].moonSystem[moonInd].subType = "hadean";
				} else if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 150){
					stars[0].worlds[n].moonSystem[moonInd].subType = "ice";
				} else if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 230){
					if (stars[0].mass <= 0.65){
						stars[0].worlds[n].moonSystem[moonInd].subType = "ammonia";
					} else {
						stars[0].worlds[n].moonSystem[moonInd].subType = "ice";
					}
				} else if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 240){
					stars[0].worlds[n].moonSystem[moonInd].subType = "ice";
				} else if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 320){
					gardenMod = Math.floor(sysAge / 0.5);
					if (gardenMod > 10){
						gardenMod = 10;
					}
					if (doRoll(3,gardenMod) > 17){
						stars[0].worlds[n].moonSystem[moonInd].subType = "garden";
						hasGarden = true;
					} else {
						stars[0].worlds[n].moonSystem[moonInd].subType = "ocean";
					}
				} else if (stars[0].worlds[n].moonSystem[moonInd].blackbodyTemp <= 500){
					stars[0].worlds[n].moonSystem[moonInd].subType = "ocean";
				} else {
					stars[0].worlds[n].moonSystem[moonInd].subType = "chthonian"
				}
			}
		}
	}
	step26();
}

function step24(){
	//place moons
	for (n = 0; n < stars[0].worlds.length; n++){
		if (stars[0].worlds[n].worldType == "gas giant")
		{
			resonantModifier = 0;
			if (stars[0].worlds[n].orbitalRadius < 0.1){
				resonantModifier = -10;
			} else if (stars[0].worlds[n].orbitalRadius < 0.5){
				resonantModifier = -8;
			} else if (stars[0].worlds[n].orbitalRadius < 0.75){
				resonantModifier = -6;
			} else if (stars[0].worlds[n].orbitalRadius < 1.5){
				resonantModifier = -3;
			}

			resMoon = doRoll(2,resonantModifier);
			if (resMoon > 0){
				stars[0].worlds[n].resonantMoons = resMoon;
				if (resMoon > 9){
					stars[0].worlds[n].features += "* spectacular ring system<br/>"
				}
			}
			
			majorModifier = 0;
			if (stars[0].worlds[n].orbitalRadius < 0.1){
				majorModifier = -6;
			} else if (stars[0].worlds[n].orbitalRadius < 0.5){
				majorModifier = -5;
			} else if (stars[0].worlds[n].orbitalRadius < 0.75){
				majorModifier = -4;
			} else if (stars[0].worlds[n].orbitalRadius < 1.5){
				majorModifier = -1;
			}

			majMoon = doRoll(1,majorModifier);
			if (majMoon > 0){
				stars[0].worlds[n].majorMoons = majMoon;
				for (moonCount = 0; moonCount < majMoon; moonCount++){
					moonSize = doRoll(3,0);
					thisMoon = new moon;
					if (moonSize < 12){
						thisMoon.size = "tiny";
					} else if (moonSize < 15){
						thisMoon.size = "small";
					} else {
						thisMoon.size = "standard";
					}
					stars[0].worlds[n].moonSystem.push(thisMoon);
				}
			}

			capturedModifier = 0;
			if (stars[0].worlds[n].orbitalRadius < 0.5){
				capturedModifier = -6;
			} else if (stars[0].worlds[n].orbitalRadius < 0.75){
				capturedModifier = -5;
			} else if (stars[0].worlds[n].orbitalRadius < 1.5){
				capturedModifier = -4;
			} else if (stars[0].worlds[n].orbitalRadius < 3.0){
				capturedModifier = -1;
			}
			capMoon = doRoll(1,capturedModifier);
			if (capMoon > 0){
				stars[0].worlds[n].capturedMoons = capMoon;
			}
		} else if (stars[0].worlds[n].worldType == "terrestrial"){
			moonMod = 0;

			if (stars[0].worlds[n].orbitalRadius < 0.5){
				moonMod = -10;
			} else if (stars[0].worlds[n].orbitalRadius < 0.75){
				moonMod = -3;
			} else if (stars[0].worlds[n].orbitalRadius < 1.5){
				moonMod = -1;
			}
		
			if (stars[0].worlds[n].size == "tiny"){
				moonMod -= 2;
			} else if (stars[0].worlds[n].size == "small"){
				moonMod -= 1;
			} else if (stars[0].worlds[n].size == "large"){
				moonMod += 1;
			}

			majorMoon = doRoll(1, (-4+moonMod));

			if (majorMoon > 0){
				stars[0].worlds[n].majorMoons = majorMoon;
				for (moonCount = 0; moonCount < majorMoon; moonCount++){
					moonSize = doRoll(3,0);
					thisMoon = new moon;
					if (moonSize < 12){
						thisMoon.size = "tiny";
					} else if (moonSize < 15){
						if (stars[0].worlds[n].size = "large"){
							thisMoon.size = "small";
						} else {
							thisMoon.size = "tiny";
						}
					} else {
						if (stars[0].worlds[n].size = "large"){
							thisMoon.size = "standard";
						} else if (stars[0].worlds[n].size = "standard"){
							thisMoon.size = "small";
						} else {
							thisMoon.size = "tiny";
						}
					}
					stars[0].worlds[n].moonSystem.push(thisMoon);
				}
			} else {
				//it has no major moons, but possible captured moonlets
				moonlet = doRoll(1, (-2+moonMod));
				if (moonlet > 0){
					stars[0].worlds[n].capturedMoons = moonlet;
				}
			}
		}
	}
	step25();
}

function step23(){
	//document.write("STEP 23");
	//PLACE WORLDS
	//just assume one star for now
	var terrestrials = new Array();

	if (stars[0].hasGasGiant){
		var firstGasGiant = new world(stars[0].orbits[0]);
		firstGasGiant.worldType = "gas giant";
		stars[0].worlds.push(firstGasGiant);
		stars[0].planetCount++;

		//find the orbit just beyond the snow line
		firstBeyond = -1;	
		for (var n = 0; n < stars[0].orbits.length; n++){
			if (stars[0].orbits[n] > stars[0].snowLine && (firstBeyond = -1 || stars[0].orbits[firstBeyond] > stars[0].orbits[n])){
				firstBeyond = n;
			}
		}

		//determine size of firstGasGiant
		if (stars[0].worlds[0].orbitalRadius < stars[0].snowLine || firstBeyond == 0){
			stars[0].worlds[0].size = gasGiantSizeTable(doRoll(3, 4));
		} else {
			stars[0].worlds[0].size = gasGiantSizeTable(doRoll(3,0));
		}

		for (var n = 1; n < stars[0].orbits.length; n++){
			if ((stars[0].gasGiantArrangement == "conventional" && stars[0].orbits[n] > stars[0].snowLine) && doRoll(3,0) < 16)
			{
				//this is a gas giant
				var aGasGiant = new world(stars[0].orbits[n]);
				aGasGiant.worldType = "gas giant";
				if (n == firstBeyond){
					aGasGiant.size = gasGiantSizeTable(doRoll(3,4));
				} else {
					aGasGiant.size = gasGiantSizeTable(doRoll(3,0));
				}
				stars[0].worlds.push(aGasGiant);
				stars[0].planetCount++;
			} else if((stars[0].gasGiantArrangement == "eccentric" && stars[0].orbits[n] < stars[0].snowLine) && doRoll(3,0) < 9){
				//this is a gas giant inside snow line
				var aGasGiant = new world(stars[0].orbits[n]);
				aGasGiant.worldType = "gas giant";
				aGasGiant.size = gasGiantSizeTable(doRoll(3,4));
				stars[0].worlds.push(aGasGiant);
				stars[0].planetCount++;
			} else if ((stars[0].gasGiantArrengement == "eccentric" && stars[0].orbits[n] > stars[0].snowLine) && doRoll(3,0) < 15){
				//this is a gas giant beyond snow line
				var aGasGiant = new world(stars[0].orbits[n]);
				aGasGiant.worldType = "gas giant";
				if (n == firstBeyond){
					aGasGiant.size = gasGiantSizeTable(doRoll(3,4));
				} else {
					aGasGiant.size = gasGiantSizeTable(doRoll(3,0));
				}
				stars[0].worlds.push(aGasGiant);
				stars[0].planetCount++;
			} else if ((stars[0].gasGiantArrangement == "epistellar" && stars[0].orbits[n] < stars[0].snowLine) && doRoll(3,0) < 7){
				//this is a gas giant inside snow line
				var aGasGiant = new world(stars[0].orbits[n]);
				aGasGiant.worldType = "gas giant";
				aGasGiant.size = gasGiantSizeTable(doRoll(3,4));
				stars[0].worlds.push(aGasGiant);
				stars[0].planetCount++;
			} else if ((stars[0].gasGiantArrangement == "epistellar" && stars[0].orbits[n] > stars[0].snowLine) && doRoll(3,0) < 15){
				//this is a gas giant beyond snow line
				var aGasGiant = new world(stars[0].orbits[n]);
				aGasGiant.worldType = "gas giant";
				if (n == firstBeyond){
					aGasGiant.size = gasGiantSizeTable(doRoll(3,4));
				} else {
					aGasGiant.size = gasGiantSizeTable(doRoll(3,0));
				}
				stars[0].worlds.push(aGasGiant);
				stars[0].planetCount++;
			} else {
				//this is an empty or asteroid or terrestrial orbit
				terrestrials.push(stars[0].orbits[n]);
			}
		}
	}

	stars[0].orbits.sort();
	//okay, now iterate through set of potential terrestrials, empties, asteroids
	for (var n = 0; n < terrestrials.length; n++){
		modifier = 0;

		presentRad = terrestrials[n];
		presentOrb = stars[0].orbits.indexOf(presentRad);

		if (presentOrb == 0){
			modifier -= 3;
		}

		if (presentOrb == stars[0].orbits.length){
			modifier -= 3;
		}

		if (presentOrb != stars[0].orbits.length){
			nextRad = stars[0].orbits[presentOrb + 1];
			for (var worldInd = 0; worldInd < stars[0].worlds; worldInd++){
				if (stars[0].worlds[worldInd].orbitalRadius == nextRad){
					if (stars[0].worlds[worldInd].worldType == "gas giant"){
						modifier -= 6;
					}					
					break;
				}
			}
		}

		if (presentOrb != 0){
			prevRad = stars[0].orbits[presentOrb - 1];
			for (var worldInd = 0; worldInd < stars[0].worlds; worldInd++){
				if (stars[0].worlds[worldInd].orbitalRadius == prevRad){
					if (stars[0].worlds[worldInd].worldType == "gas giant"){
						modifier -= 3;
					}					
					break;
				}
			}
		}

		orbitContent = doRoll(3,modifier);
		if (orbitContent > 15){
			var aPlanet = new world(terrestrials[n]);
			aPlanet.worldType = "terrestrial";
			aPlanet.size = "large";
			stars[0].worlds.push(aPlanet);
			stars[0].planetCount++;
		} else if (orbitContent > 11){
			var aPlanet = new world(terrestrials[n]);
			aPlanet.worldType = "terrestrial";
			aPlanet.size = "standard";
			stars[0].worlds.push(aPlanet);
			stars[0].planetCount++;
		} else if (orbitContent > 8){
			var aPlanet = new world(terrestrials[n]);
			aPlanet.worldType = "terrestrial";
			aPlanet.size = "small";
			stars[0].worlds.push(aPlanet);
			stars[0].planetCount++;
		} else if (orbitContent > 6){
			var aPlanet = new world(terrestrials[n]);
			aPlanet.worldType = "terrestrial";
			aPlanet.size = "tiny";
			stars[0].worlds.push(aPlanet);
			stars[0].planetCount++;
		} else if (orbitContent > 3){
			var belt = new world(terrestrials[n]);
			belt.worldType = "asteroid belt";
			belt.size = "asteroid belt";
			stars[0].worlds.push(belt);
		} //else, it's an empty orbit
	}

	sortWorlds();
	step24();
}

function step22(){
	//document.write("STEP 22");
	//place planetary orbits
	for (var n = 0; n < stars.length; n++){
		if (stars[n].orbits.length > 0){
			//if there is already a gas giant orbit established in step 21
			//work inward
			//document.write("line 996 <br/>");
			presentOrbit = stars[n].orbits[0];
			prevOrbit = presentOrbit;
			while (true) {
				//document.write(presentOrbit + "<br/>");
				presentOrbit /= orbitalSpacingTable(doRoll(3,0));
				if (presentOrbit < stars[n].innerLimitRadius || presentOrbit < stars[n].radius){
					break;
				}
				if (prevOrbit - presentOrbit > 0.15){
					//document.write("line 1005<br/>");
					stars[n].orbits.push(presentOrbit);
					prevOrbit = presentOrbit;
				}
			}

			//work outward
			presentOrbit = stars[n].orbits[0];
			prevOrbit = presentOrbit;
			//document.write("presentRobit: " + pres);
			while (true) {
				//prevOrbit = presentOrbit;
				presentOrbit *= orbitalSpacingTable(doRoll(3,0));
				if (presentOrbit > stars[n].outerLimitRadius){
					break;
				}
				if (presentOrbit - prevOrbit > 0.15){
					stars[n].orbits.push(presentOrbit);
					prevOrbit = presentOrbit;
				}
			}
		} else {
			//if there are no gas giants
			//work inward from outerLimitRadius
			presentOrbit = stars[n].outerLimitRadius / (1 + doRoll(1,0)*0.05);
			prevOrbit = presentOrbit;
			while (true) {
				//prevOrbit = presentOrbit;
				presentOrbit /= orbitalSpacingTable(doRoll(3,0));
				if (presentOrbit < stars[n].innerLimitRadius || presentOrbit < stars[n].radius){
					break;
				}
				if (prevOrbit - presentOrbit > 0.15){
					stars[n].orbits.push(presentOrbit);
					prevOrbit = presentOrbit;
				}
			}
		} 
	}
	step23();
}

function step21(){
	//document.write("STEP 21");
	//placing first planets
	for (var n = 0; n < stars.length; n++){
		gasGiantArrangement = doRoll(3, 0);
		orbitalRadius = -1.00;

		if (gasGiantArrangement == 11 || gasGiantArrangement == 12){
			stars[n].hasGasGiant = true;
			stars[n].gasGiantArrangement = "conventional";
			orbitalRadius = ((doRoll(2,-2) * 0.05) + 1) * stars[n].snowLine;
		} else if (gasGiantArrangement == 13 || gasGiantArrangement == 14){
			stars[n].hasGasGiant = true;
			stars[n].gasGiantArrangement = "eccentric";
			orbitalRadius = doRoll(1, 0) * 0.125 * stars[n].snowLine;
		} else if (gasGiantArrangement > 14){
			stars[n].hasGasGiant = true;
			stars[n].gasGiantArrangement = "epistellar";
			orbitalRadius = doRoll(3,0) * 0.1 * stars[n].innerLimitRadius;
		}
		
		if(stars[n].hasGasGiant && !inForbiddenZone(orbitalRadius, stars[n])){
			stars[n].orbits[0] = orbitalRadius;
		}
	}

	step22();
}

function step20(){
	//document.write("STEP 20");
	//locate orbital zones
	for (var n = 0; n < stars.length; n++){
		//determine inner limit radius
		stars[n].innerLimitRadius = 0.1 * stars[n].mass;
		if ((0.01 * Math.sqrt(stars[n].lumin)) > stars[n].innerLimitRadius){
			stars[n].innerLimitRadius = (0.01 * Math.sqrt(stars[n].lumin));
		}

		//determine outer limit radius
		stars[n].outerLimitRadius = 40 * stars[n].mass;

		//determine snow line
		stars[n].snowLine = 4.85 * Math.sqrt(stars[n].lmin);
	}

	//determine forbidden zone
	if (stars.length > 1){
		stars[0].hasForbiddenZone = true;
		stars[1].hasForbiddenZone = true;
		//innerEdgeFZ;
		//outerEdgeFZ;
		
		stars[0].innerEdgeFZ = (stars[1].perigee / 3);
		stars[0].outerEdgeFZ = (stars[1].apogee * 3);
		stars[1].innerEdgeFZ = stars[0].innerEdgeFZ;
		stars[1].outerEdgeFZ = stars[0].outerEdgeFZ;
		if (stars.length > 2){
			stars[2].innerEdgeFZ = (stars[2].perigee / 3);
			stars[2].outerEdgeFZ = (stars[2].apogee * 3);
		}
	}

	step21();
}

function step19(){
	//document.write("STEP 19");
	//companion star orbits
	for (var n = 1; n < stars.length; n++){
		//only iterate thru companion stras, duh
		orbitalSepTable = -1;
		if (n == 1){
			orbitalSepTable = doRoll(3, 0);
		} else {
			orbitalSepTable = doRoll(3, 6);
		}

		radMod = -1.0;
		eccMod = 0;
		
		switch(orbitalSepTable){
			case 3:
			case 4:
			case 5:
			case 6:
				radMod = 0.05;
				eccMod = 6;
				break;
			case 7:
			case 8:
			case 9:
				radMod = 0.5; 
				eccMod = 4;
				break;
			case 10:
			case 11:
				radMod = 2.0;
				eccMod = 2;
				break;
			case 12:
			case 13:
			case 14:
				radMod = 10.0;
				break;
			default:
				radMod = 50.0;
		}

		stars[n].avgOrbitalRad = doRoll(2, 0) * radMod;
		if (orbitalSepTable >= 15){
			//check for companion star's companion
			//I can't deal with this right now, force a 3
			rollSeq += "_" + 3;
		}

		//find eccentricity now
		stellarOrbitalEccTab = doRoll(3, (-1 * eccMod));
		switch(stellarOrbitalEccTab){
			case 4:
				stars[n].eccentricity = 0.1;
				break;
			case 5:
				stars[n].eccentricity = 0.2;
				break;
			case 6:
				stars[n].eccentricity = 0.3;
				break;
			case 7:
			case 8:
				stars[n].eccentricity = 0.4;
				break;
			case 9:
			case 10:
			case 11:
				stars[n].eccentricity = 0.5;
				break;
			case 12:
			case 13:
				stars[n].eccentricity = 0.6;
				break;
			case 14:
			case 15:
				stars[n].eccentricity = 0.7;
				break;
			case 16:
				stars[n].eccentricity = 0.8;
				break;
			case 17:
				stars[n].eccentricity = 0.9;
				break;
			case 18:
				stars[n].eccentricity = 0.95;
				break;
			default:
				stars[n].eccentricity = 0.0;
		}

		//find perigee and apogee
		stars[n].perigee = (1 - stars[n].eccentricity) * stars[n].avgOrbitalRad;
		stars[n].apogee = (1 + stars[n].eccentricity) * stars[n].avgOrbitalRad;
	}

	step20();
}

function step18(){
	//stellar characteristics
	//hork
	for (var n = 0; n < stars.length; n++){
		mass = stars[n].mass;
		if (mass > 1.95){
			if (sysAge <= 1.3){
				stars[n].starType = "main sequence";
				stars[n].spectype = "A5 V";
				stars[n].temp = 8200;
				stars[n].lumin = 16 + ((sysAge/1.3) * (20-16));
			} else if (sysAge <= 1.5){
				stars[n].starType = "subgiant";
				stars[n].temp = 8200 - (((sysAge - 1.3)/0.2) * (8200 - 4800));
				stars[n].lumin = 20;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 1.6){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 20 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}
		} else if (mass > 1.85){
			if (sysAge <= 1.5){
				stars[n].starType = "main sequence";
				stars[n].spectype = "A6 V";
				stars[n].temp = 8000;
				stars[n].lumin = 13 + ((sysAge/1.5) * (16-13));
			} else if (sysAge <= 1.7){
				stars[n].starType = "subgiant";
				stars[n].temp = 8000 - (((sysAge - 1.5)/0.2) * (8000 - 4800));
				stars[n].lumin = 16;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 1.8){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 16 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}
		} else if (mass > 1.75){
			if (sysAge <= 1.8){
				stars[n].starType = "main sequence";
				stars[n].spectype = "A7 V";
				stars[n].temp = 7800;
				stars[n].lumin = 11 + ((sysAge/1.8) * (13-11));
			} else if (sysAge <= 2.1){
				stars[n].starType = "subgiant";
				stars[n].temp = 7800 - (((sysAge - 1.8)/0.3) * (7800 - 4800));
				stars[n].lumin = 13;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 2.3){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 13 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}
		} else if (mass > 1.65){
			if (sysAge <= 2.1){
				stars[n].starType = "main sequence";
				stars[n].spectype = "A9 V";
				stars[n].temp = 7500;
				stars[n].lumin = 8.6 + ((sysAge/2.1) * (10 - 8.6));
			} else if (sysAge <= 2.4){
				stars[n].starType = "subgiant";
				stars[n].temp = 7500 - (((sysAge - 2.1)/0.3) * (7500 - 4800));
				stars[n].lumin = 10;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 2.6){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 10 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.55){
			if (sysAge <= 2.5){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F0 V";
				stars[n].temp = 7300;
				stars[n].lumin = 6.7 + ((sysAge/2.5) * (8.2-6.7));
			} else if (sysAge <= 2.9){
				stars[n].starType = "subgiant";
				stars[n].temp = 7300 - (((sysAge - 2.5)/0.4) * (7300 - 4800));
				stars[n].lumin = 8.2;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 3.1){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 8.2 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.47){
			if (sysAge <= 3.0){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F2 V";
				stars[n].temp = 7000;
				stars[n].lumin = 5.1 + ((sysAge/3.0) * (6.5-5.1));
			} else if (sysAge <= 3.5){
				stars[n].starType = "subgiant";
				stars[n].temp = 7000 - (((sysAge - 3.0)/0.5) * (7000 - 4800));
				stars[n].lumin = 6.5;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 3.8){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 6.5 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.42){
			if (sysAge <= 3.3){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F3 V";
				stars[n].temp = 6900;
				stars[n].lumin = 4.3 + ((sysAge/3.3) * (5.7-4.3));
			} else if (sysAge <= 3.8){
				stars[n].starType = "subgiant";
				stars[n].temp = 6900 - (((sysAge - 3.3)/0.5) * (6900 - 4800));
				stars[n].lumin = 5.7;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 4.1){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 5.7 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.37){
			if (sysAge <= 3.7){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F4 V";
				stars[n].temp = 6700;
				stars[n].lumin = 3.7 + ((sysAge/3.7) * (5.1-3.7));
			} else if (sysAge <= 4.3){
				stars[n].starType = "subgiant";
				stars[n].temp = 6700 - (((sysAge - 3.7)/0.6) * (6700 - 4800));
				stars[n].lumin = 5.1;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 4.7){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 5.1 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.32){
			if (sysAge <= 4.1){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F5 V";
				stars[n].temp = 6600;
				stars[n].lumin = 3.1 + ((sysAge/4.1) * (4.5-3.1));
			} else if (sysAge <= 4.7){
				stars[n].starType = "subgiant";
				stars[n].temp = 6600 - (((sysAge - 4.1)/0.6) * (6600 - 4800));
				stars[n].lumin = 4.5;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 5.1){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 4.5 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.27){
			if (sysAge <= 4.6){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F6 V";
				stars[n].temp = 6500;
				stars[n].lumin = 2.5 + ((sysAge/4.6) * (3.9-2.5));
			} else if (sysAge <= 5.3){
				stars[n].starType = "subgiant";
				stars[n].temp = 6500 - (((sysAge - 4.6)/0.7) * (6500 - 4800));
				stars[n].lumin = 3.9;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 5.7){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 3.9 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.22){
			if (sysAge <= 5.2){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F7 V";
				stars[n].temp = 6400;
				stars[n].lumin = 2.1 + ((sysAge/5.2) * (3.5-2.1));
			} else if (sysAge <= 6.0){
				stars[n].starType = "subgiant";
				stars[n].temp = 6400 - (((sysAge - 5.2)/0.8) * (6400 - 4800));
				stars[n].lumin = 3.5;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 6.5){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 3.5 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.17){
			if (sysAge <= 5.9){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F8 V";
				stars[n].temp = 6300;
				stars[n].lumin = 1.7 + ((sysAge/5.9) * (3.0-1.7));
			} else if (sysAge <= 6.8){
				stars[n].starType = "subgiant";
				stars[n].temp = 6300 - (((sysAge - 5.9)/0.9) * (6300 - 4800));
				stars[n].lumin = 3.0;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 7.4){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 3.0 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.12){
			if (sysAge <= 6.7){
				stars[n].starType = "main sequence";
				stars[n].spectype = "F9 V";
				stars[n].temp = 6100;
				stars[n].lumin = 1.4 + ((sysAge/6.7) * (2.6-1.4));
			} else if (sysAge <= 7.7){
				stars[n].starType = "subgiant";
				stars[n].temp = 6100 - (((sysAge - 6.7)/1.0) * (6100 - 4800));
				stars[n].lumin = 2.6;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 8.3){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 2.6 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.07){
			if (sysAge <= 7.7){
				stars[n].starType = "main sequence";
				stars[n].spectype = "G0 V";
				stars[n].temp = 6000;
				stars[n].lumin = 1.1 + ((sysAge/7.7) * (2.2-1.1));
			} else if (sysAge <= 8.9){
				stars[n].starType = "subgiant";
				stars[n].temp = 6000 - (((sysAge - 7.7)/1.2) * (6000 - 4800));
				stars[n].lumin = 2.2;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 9.5){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 2.2 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 1.02){
			if (sysAge <= 8.8){
				stars[n].starType = "main sequence";
				stars[n].spectype = "G1 V";
				stars[n].temp = 5900;
				stars[n].lumin = 0.87 + ((sysAge/8.8) * (1.9-0.87));
			} else if (sysAge <= 10.2){
				stars[n].starType = "subgiant";
				stars[n].temp = 5900 - (((sysAge - 8.8)/1.4) * (5900 - 4800));
				stars[n].lumin = 1.9;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 11){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 1.9 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}  
		} else if (mass > 0.97){
			if (sysAge <= 10){
				stars[n].starType = "main sequence";
				stars[n].spectype = "G2 V";
				stars[n].temp = 5800;
				stars[n].lumin = 0.68 + ((sysAge/10) * (1.6-0.68));
			} else if (sysAge <= 11.6){
				stars[n].starType = "subgiant";
				stars[n].temp = 5800 - (((sysAge - 10)/1.6) * (5800 - 4800));
				stars[n].lumin = 1.6;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			} else if (sysAge <= 12.6){
				stars[n].starType = "giant";
				stars[n].temp = (doRoll(2, -2) * 200) + 3000;
				stars[n].spectype = tempToType(stars[n].temp) + " III";
				stars[n].lumin = 1.6 * 25;
			} else {
				stars[n].starType = "white dwarf";
				stars[n].mass = (doRoll(2, -2) * 0.05) + 0.9;
				stars[n].lumin = 0.001;
				stars[n].temp = 10000;
				stars[n].spectype = "";
			}
		}  else if (mass > 0.92){
			if (sysAge <= 12){
				stars[n].starType = "main sequence";
				stars[n].spectype = "G4 V";
				stars[n].temp = 5700;
				stars[n].lumin = 0.56 + ((sysAge/12) * (1.3-0.56));
			} else {
				stars[n].starType = "subgiant";
				stars[n].temp = 5700 - (((sysAge - 12)/1.8) * (5700 - 4800));
				stars[n].lumin = 1.3;
				stars[n].spectype = tempToType(stars[n].temp) + " IV";
			}
		} else if (mass > 0.87){
			stars[n].starType = "main sequence";
			stars[n].spectype = "G6 V";
			stars[n].temp = 5500;
			stars[n].lumin = 0.45 + ((sysAge/14) * (1.0-0.45));
		} else if (mass > 0.82){
			stars[n].starType = "main sequence";
			stars[n].spectype = "G8 V";
			stars[n].temp = 5400;
			stars[n].lumin = 0.36 + ((sysAge/17) * (0.84-0.36));
		} else if (mass > 0.77){
			stars[n].starType = "main sequence";
			stars[n].spectype = "K0 V";
			stars[n].temp = 5200;
			stars[n].lumin = 0.28 + ((sysAge/20) * (0.65-0.28));
		} else if (mass > 0.72){
			stars[n].starType = "main sequence";
			stars[n].spectype = "K2 V";
			stars[n].temp = 4900;
			stars[n].lumin = 0.23 + ((sysAge/24) * (0.48-0.23));
		} else if (mass > 0.67){
			stars[n].starType = "main sequence";
			stars[n].spectype = "K4 V";
			stars[n].temp = 4600;
			stars[n].lumin = 0.19 + ((sysAge/30) * (0.35-0.19));
		} else if (mass > 0.62){
			stars[n].starType = "main sequence";
			stars[n].spectype = "K5 V";
			stars[n].temp = 4400;
			stars[n].lumin = 0.15 + ((sysAge/37) * (0.25-0.15));
		} else if (mass > 0.57){
			stars[n].starType = "main sequence";
			stars[n].spectype = "K6 V";
			stars[n].temp = 4200;
			stars[n].lumin = 0.13 + ((sysAge/42) * (0.20-0.13));
		} else if (mass > 0.52){
			stars[n].starType = "main sequence";
			stars[n].spectype = "K8 V";
			stars[n].temp = 4000;
			stars[n].lumin = 0.11 + ((sysAge/50) * (0.15-0.11));
		} else if (mass > 0.47){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M0 V";
			stars[n].temp = 3800;
			stars[n].lumin = 0.09 + ((sysAge/59) * (0.11-0.09));
		} else if (mass > 0.42){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M1 V";
			stars[n].temp = 3600;
			stars[n].lumin = 0.07 + ((sysAge/70) * (0.08-0.07));
		} else if (mass > 0.37){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M2 V";
			stars[n].temp = 3500;
			stars[n].lumin = 0.054;
		} else if (mass > 0.32){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M3 V";
			stars[n].temp = 3400;
			stars[n].lumin = 0.037; 
		} else if (mass > 0.27){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M4 V";
			stars[n].temp = 3300;
			stars[n].lumin = 0.024;
		} else if (mass > 0.22){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M4 V";
			stars[n].temp = 3300;
			stars[n].lumin = 0.015; 
		} else if (mass > 0.17){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M5 V";
			stars[n].temp = 3200;
			stars[n].lumin = 0.0079; 
		} else if (mass > 0.12){
			stars[n].starType = "main sequence";
			stars[n].spectype = "M6 V";
			stars[n].temp = 3200;
			stars[n].lumin = 0.0036;
		} else {
			stars[n].starType = "main sequence";
			stars[n].spectype = "M7 V";
			stars[n].temp = 3100;
			stars[n].lumin = 0.0012; 
		}
		stars[n].lumin += stars[n].lumin*(Math.random()*0.2 - 0.1);
		stars[n].radius = (155000 * Math.sqrt(stars[n].lumin)) / (stars[n].temp * stars[n].temp);
		//type (e.g. main sequence, etc) has now been determined, now find derived vars for this star
		//actually, no
		//if (stars[n].starType == "main sequence"){
		//	
		//}
	}
	step19();
}

function step17(){
	//star system age
	baseAge = doRoll(3, 0);
	stepA = doRoll(1, -1);
	stepB = doRoll(1, -1);
	switch(baseAge){
		case 3:
			sysAge = 0;
			break;
		case 4:
		case 5:
		case 6:
			sysAge = 0.1 + (0.3 * stepA) + (0.05 * stepB);
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			sysAge = 2 + (0.6 * stepA) + (0.1 * stepB); 
			break;
		case 11:
		case 12:
		case 13:
		case 14:
			sysAge = 5.6 + (0.6 * stepA) + (0.1 * stepB);
			break;
		case 15:
		case 16:
		case 17:
			sysAge = 8 + (0.6 * stepA) + (0.1 * stepB);
			break;
		default:
			sysAge = 10 + (0.6 * stepA) + (0.1 * stepB); //max age 13.5 billion
	}
	step18()
}

function step16(){
	//star masses
	caseNumb = -1;
	SMTable1st = doRoll(3, 0);
	SMTable2nd = doRoll(3, 0);
	switch(SMTable1st){
		case 3:
			if (SMTable2nd < 11){
				caseNumb = 0;
			} else {
				caseNumb = 1;
			}
			break;
		case 4:
			if (SMTable2nd < 9){
				caseNumb = 2;
			} else if (SMTable2nd < 12){
				caseNumb = 3;
			} else {
				caseNumb = 4;
			}
			break;
		case 5:
			if (SMTable2nd < 8){
				caseNumb = 5;
			} else if (SMTable2nd < 11){
				caseNumb= 6;
			} else if (SMTable2nd < 13){
				caseNumb = 7;
			} else {
				caseNumb = 8;
			}
			break;
		case 6:
			if (SMTable2nd < 8){
				caseNumb = 9;
			} else if (SMTable2nd <10){
				caseNumb = 10;
			} else if (SMTable2nd == 10){
				caseNumb = 11;
			} else if (SMTable2nd < 13){
				caseNumb = 12;
			} else {
				caseNumb = 13;
			}
			break;
		case 7:
			if (SMTable2nd < 8){
				caseNumb = 14;
			} else if (SMTable2nd < 10){
				caseNumb = 15;
			} else if (SMTable2nd == 10){
				caseNumb = 16;
			} else if (SMTable2nd < 13){
				caseNumb = 17;
			} else {
				caseNumb = 18;
			}
			break;
		case 8:
			if (SMTable2nd < 8){
				caseNumb = 19;
			} else if (SMTable2nd < 10){
				caseNumb = 20;
			} else if (SMTable2nd == 10){
				caseNumb = 21;
			} else if (SMTable2nd < 13){
				caseNumb = 22;
			} else {
				caseNumb = 23;
			}
			break;
		case 9:
			if (SMTable2nd < 9){
				caseNumb = 24;
			} else if (SMTable2nd < 12){
				caseNumb = 25;
			} else {
				caseNumb = 26;
			}
			break;
		case 10:
			if (SMTable2nd < 9){
				caseNumb = 27;
			} else if (SMTable2nd < 12){
				caseNumb = 28;
			} else {
				caseNumb = 29;
			}
			break;
		case 11:
			caseNumb = 30;
			break;
		case 12:
			caseNumb = 31;
			break;
		case 13:
			caseNumb = 32;
			break;
		default:
			caseNumb = 33;
	}

	/**if (stars.length > 1)
	{
		//find mass of any companion stars
		isSameMassAs = doOneDieWithMinus(1);
		SecondCaseNumb = caseNumb;
		ThirdCaseNumb = caseNumb;
		for (var n = 0; n < isSameMassAs; n++){
			SecondCaseNumb += doRoll(3, 0)
		}

		if (SecondCaseNumb > 33){
			SecondCaseNumb = 33;
		}

		stars[1].mass = stellarMassTable[SecondCaseNumb];
		stars[1].lmin = lmtab[SecondCaseNumb];

		if (stars.length == 3)
		{
			isSameMassAs = doOneDieWithMinus(1);
			for (var n = 0; n < isSameMassAs; n++){
				ThirdCaseNumb += doRoll(3, 0)
			}

			if (ThirdCaseNumb > 33){
				ThirdCaseNumb = 33;
			}

			if (SecondCaseNumb <= ThirdCaseNumb){
				stars[2].mass = stellarMassTable[ThirdCaseNumb];
				stars[2].lmin = lmtab[ThirdCaseNumb];
			} else {
				//make sure Beta star is second most massive, Gamma third
				stars[1].mass = stellarMassTable[ThirdCaseNumb];
				stars[2].mass = stellarMassTable[SecondCaseNumb];

				stars[1].lmin = lmtab[ThirdCaseNumb];
				stars[2].lmin = lmtab[SecondCaseNumb];
			}
		}
	}**/
	stars[0].mass = stellarMassTable[caseNumb];
	stars[0].mass += (Math.random()*0.04 - 0.02);	
	stars[0].lmin = lmtab[caseNumb];

	step17()
}

function step15(){
	//number of stars
	rollSeq += "STEP15";
	MultiStarTable = -1;
	if (forceSingleStar){
		MultiStarTable = 3;
		rollSeq += "_3"
	} else {
		MultiStarTable = doRoll(3, 0);
	}
	var starA = new starObj();
	starA.starName = sysName;
	stars[0] = starA;
	if (MultiStarTable > 10)
	{
		var starB = new starObj();
		stars[0].starName = "Alpha " + sysName;
		starB.starName = "Beta " + sysName;
		stars[1] = starB;
	}
	if (MultiStarTable > 15){
		var starC = new starObj();
		starC.starName = "Gamma " + sysName;
		stars[2] = starC;
	}

	step16()
}

step15()

//
//do we have a garden world, and are we forcing a garden world?
//
if (forceGarden && !hasGarden){
	return true;
}

//
//now output shiz
//

document.write("<h1>" + sysName + " System</h1>");

document.write("<a href=\"#diceRolls\">Dice Roll Sequence</a><br/>");
document.write("<a href=\"#systemOverviewText\">System Overview (plaintext)</a><br/>");
document.write("<a href=\"#planetsText\">Planets (plaintext)</a><br/>");
document.write("<a href=\"#moonsText\">Moons (plaintext)</a><br/>");
document.write("<a href=\"#systemOverview\">System Overview (markup)</a><br/>");
document.write("<a name=\"#diceRolls\">Dice rolls:</a><br/>");
document.write(rollSeq);
document.write("<br/>");

document.write("<h2><a name=\"systemOverviewText\">System Overview (plaintext):</a></h2>");
document.write("<br/>");
document.write("<code>");

document.write(sysAge + " billion Terran-year-old solar system<br/>");
document.write("<br/>");


//output plaintext system overview
for (var n=0;n<stars.length;n++){
	document.write("Star Name: " + stars[n].starName + "<br/>");
	document.write("Star Type: " + stars[n].spectype + " " + stars[n].starType + "<br/>");
	//<div class="SystemTableCat TableAltRow">Coordinates</div><div class="SystemTableEntry SystemBuffer TableAltRow TableTBD">TBD</div>
	document.write("Radius: " + stars[n].radius + " AU<br/>");
	document.write("Mass: " + stars[n].mass + " sols <br/>");
	document.write("Temperature: " + stars[n].temp + "K<br/>");
	document.write("Luminosity: " + stars[n].lumin + " sols<br/>");
	document.write("# of Planets: " + stars[n].planetCount + "<br/>");
	if (n > 0){
		document.write("Orbital Radius: " + stars[n].avgOrbitalRad + " AU<br/>");
		document.write("Orbital Eccentricity: " + stars[n].eccentricity + "<br/>");
		document.write("Perigee: " + stars[n].perigee + " AU<br/>");
		document.write("Apogee: " + stars[n].apogee + " AU<br/>");
	}
	document.write("<br/>");
	document.write("<br/>");
	for (var planetInd = 0; planetInd<stars[n].worlds.length; planetInd++){
		document.write("Planet: " + stars[n].starName + " " + (planetInd + 1) + "<br/>");
		document.write("Type: " + stars[n].worlds[planetInd].subType + "<br/>");
		document.write("Orbital Radius: " + stars[n].worlds[planetInd].orbitalRadius + "(AU) <br/>");
		document.write("Gravity: " + stars[n].worlds[planetInd].gravity + " g<br/>");
		document.write("Hydrosphere: " + stars[n].worlds[planetInd].hydro + "% <br/>");
		document.write("Atmosphere: " + stars[n].worlds[planetInd].abstractPres + " " + stars[n].worlds[planetInd].atmoQual + "<br/>");
		document.write("Moons: " + (stars[n].worlds[planetInd].resonantMoons + stars[n].worlds[planetInd].majorMoons + stars[n].worlds[planetInd].capturedMoons) + "<br/>");
		document.write("Notes: <br/>" + stars[n].worlds[planetInd].features + "<br/>");
		document.write("<br/>");
		document.write("<br/>");
	}
}

//describe planets in plaintext
//
document.write("<h2><a name=\"planetsText\">planets (plaintext):</a></h2>");
document.write("<br/>");
for (var planetInd = 0; planetInd<stars[0].worlds.length; planetInd++){
	document.write("<h2>" + stars[0].starName + " " + (planetInd + 1) + "</h2>");
	document.write("<h3>Basic Info</h3>");
	document.write("Planet name: " + stars[0].starName + " " + (planetInd + 1) + "<br/>");
	document.write("System: " + stars[0].starName + "<br/>");
	document.write("Orbit: " + (planetInd + 1) + "<br/>");
	document.write("Moons: " + (stars[0].worlds[planetInd].resonantMoons + stars[0].worlds[planetInd].majorMoons + stars[0].worlds[planetInd].capturedMoons) + "<br/>");
	document.write("<h3>Physics</h3>");
	document.write("Type: " + stars[0].worlds[planetInd].size + " " + stars[0].worlds[planetInd].subType + "<br/>");
	document.write("Radius: " + (stars[0].worlds[planetInd].diameter) + " x Terra <br/>");
	document.write("Surface Area: " + Math.pow(stars[0].worlds[planetInd].diameter,2) + " x Terra <br/>");
	document.write("Land Area: " + ((Math.pow(stars[0].worlds[planetInd].diameter,2)) - 0.01*stars[0].worlds[planetInd].hydro*(Math.pow(stars[0].worlds[planetInd].diameter,2))) + " x Terra <br/>");
	document.write("Mass: " + stars[0].worlds[planetInd].mass + " x Terra <br/>")
	document.write("Density: " + stars[0].worlds[planetInd].density + " x Terra <br/>")
	document.write("<h3>Gravimetry</h3>");
	document.write("Gravity: " + stars[0].worlds[planetInd].gravity + "g<br/>");
	document.write("<h3>Hydrosphere</h3>");
	document.write("Water: " + stars[0].worlds[planetInd].hydro + "%<br/>");
	document.write("<h3>Atmosphere</h3>");
	document.write("Type: " + stars[0].worlds[planetInd].abstractPres + " " + stars[0].worlds[planetInd].atmoQual +"<br/>");
	document.write("Pressure: " + stars[0].worlds[planetInd].pressure + " x Terra<br/>");
	document.write("<h3>Climate</h3>");
	document.write("Type: " + stars[0].worlds[planetInd].climateType + "<br/>");
	document.write("Avg Temp: " + stars[0].worlds[planetInd].averageSurfaceTemp + "K (" + (stars[0].worlds[planetInd].averageSurfaceTemp-273.15) + "C)<br/>");
	document.write("Special Features: <br/>" + stars[0].worlds[planetInd].features + "<br/>");
	document.write("<br/>");
}

//describe moon in plaintext
document.write("<h2><a name=\"moonsText\">major moons (plaintext):</a></h2>");
document.write("<br/>");
for (var planetInd = 0; planetInd<stars[0].worlds.length; planetInd++){
	for (var moonInd = 0; moonInd<stars[0].worlds[planetInd].moonSystem.length;moonInd++){
		document.write("<h2>" + stars[0].starName + " " + (planetInd + 1) + " " + (moonInd + 1) + "</h2>");
		document.write("<h3>Basic Info</h3>");
		document.write("Moon name: " + stars[0].starName + " " + (planetInd + 1) + " " + (moonInd + 1) + "<br/>");
		document.write("Planet: " + stars[0].starName + " " + (planetInd + 1) + "<br/>");
		document.write("<h3>Physics</h3>");
		document.write("Type: " + stars[0].worlds[planetInd].moonSystem[moonInd].size + " " + stars[0].worlds[planetInd].moonSystem[moonInd].subType + "<br/>");
		document.write("Radius: " + stars[0].worlds[planetInd].moonSystem[moonInd].diameter + " x Terra <br/>");
		document.write("Surface Area: " + Math.pow((stars[0].worlds[planetInd].moonSystem[moonInd].diameter),2) + " x Terra <br/>");
		document.write("Land Area: " + (Math.pow((stars[0].worlds[planetInd].moonSystem[moonInd].diameter),2) - 0.01*stars[0].worlds[planetInd].moonSystem[moonInd].hydro*Math.pow((stars[0].worlds[planetInd].moonSystem[moonInd].diameter),2)) + " x Terra <br/>");
		document.write("Mass: " + stars[0].worlds[planetInd].moonSystem[moonInd].mass + " x Terra <br/>")
		document.write("Density: " + stars[0].worlds[planetInd].moonSystem[moonInd].density + " x Terra <br/>")
		document.write("<h3>Gravimetry</h3>");
		document.write("Gravity: " + stars[0].worlds[planetInd].moonSystem[moonInd].gravity + "g<br/>");
		document.write("<h3>Hydrosphere</h3>");
		document.write("Water: " + stars[0].worlds[planetInd].moonSystem[moonInd].hydro + "%<br/>");
		document.write("<h3>Atmosphere</h3>");
		document.write("Type: " + stars[0].worlds[planetInd].moonSystem[moonInd].abstractPres + " " + stars[0].worlds[planetInd].moonSystem[moonInd].atmoQual +"<br/>");
		document.write("Pressure: " + stars[0].worlds[planetInd].moonSystem[moonInd].pressure + " x Terra<br/>");
		document.write("<h3>Climate</h3>");
		document.write("Type: " + stars[0].worlds[planetInd].moonSystem[moonInd].climateType + "<br/>");
		document.write("Avg Temp: " + stars[0].worlds[planetInd].moonSystem[moonInd].averageSurfaceTemp + "K (" + (stars[0].worlds[planetInd].moonSystem[moonInd].averageSurfaceTemp-273.15) + "C) <br/>");
		document.write("Special Features: <br/>" + stars[0].worlds[planetInd].moonSystem[moonInd].features + "<br/>");
		document.write("<br/>");
	}
}

//output markup
//
//defer for now
//
/**
document.write("</code>");

document.write("<h2><a name=\"systemOverview\">System Overview (markup):</a></h2>");
document.write("<hr/>");
document.write("<code>");

for (var n=0;n<stars.length;n++){
	//fix this--it only shows M stars right now!
	document.write("&lt;div class=\"DatapadURImageS\" style=\"background-image:url('http://i443.photobucket.com/albums/qq157/Belrathius/Gaming/Space%20Campaign/MRedDwarf_zps61eb55a1.jpg');background-size:240px;background-position:0px 0px;background-repeat:no-repeat;\"&gt;&lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat\"&gt;Star Name&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer\"&gt; " + stars[n].starName + " &lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat\"&gt;Star Type&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer\"&gt;" + stars[n].spectype + " " + stars[n].starType + "&lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat TableAltRow\"&gt;Coordinates&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer TableAltRow TableTBD\"&gt;TBD&lt;/div&gt;<br/>")
	document.write("&lt;div class=\"SystemTableCat\"&gt;Radius&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer\"&gt;" + stars[n].radius + " AU&lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat TableAltRow Table2L\"&gt;Mass&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer TableAltRow Table2L\"&gt; " + stars[n].mass + " x sol &lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat\"&gt;Temperature&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer\"&gt;" + stars[n].temp + "K &lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat TableAltRow\"&gt;Luminosity&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer TableAltRow\"&gt;" + stars[n].lumin + " x Sol &lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat\"&gt;# of Planets&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer\"&gt;" + stars[n].planetCount + "&lt;/div&gt;<br/>");
	document.write("&lt;div class=\"SystemTableCat TableAltRow\"&gt;Jumpgate&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer TableAltRow\"&gt;???&lt;/div&gt;<br/>");
	if (n > 0){
		document.write("&lt;div class=\"SystemTableCat TableAltRow\"&gt;Orbital Radius&lt;/div&gt;&lt;div class=\"SystemTableEntry SystemBuffer TableAltRow\"&gt;" + stars[n].avgOrbitalRad + " AU &lt;/div&gt;<br/>");
	}
	document.write("&lt;br/&gt;");
	document.write("<br/>");
}
document.write("</code>");
**/

return false;
}
