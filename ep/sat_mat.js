var fusion_accel = 0.05*9.8;

//distances in km
var cloudtop_distance = 58000;
var ring_distance = 137000;
var ej_distance = 151000;
var mimas_distance = 185000;
var enc_distance = 238000;
var tt_distance = 295000;
var dione_distance = 377000;
var rhea_distance = 527000;
var titan_distance = 1220000;
var iqz_distance = 3560000;
var kiv_distance = 11100000;

var distances = new Array();
distances[0] = 0;
distances[1] = 58000;
distances[2] = 137000;
distances[3] = 151000;
distances[4] = 185000;
distances[5] = 238000;
distances[6] = 295000;
distances[7] = 377000;
distances[8] = 527000;
distances[9] = 1220000;
distances[10] = 3560000;
distances[11] = 11100000;

var orb_names = new Array();
orb_names[0]="ERROR";
orb_names[1]="cloud tops";
orb_names[2]="ring / shepherd";
orb_names[3]="E/J";
orb_names[4]="Mimas";
orb_names[5]="Enceledus";
orb_names[6]="Tethys / Telesto";
orb_names[7]="Dione";
orb_names[8]="Rhea";
orb_names[9]="Titan";
orb_names[10]="Iapetus";
orb_names[11]="Kiviuq";

function quadratic(a,b,c){
	return ((-1.0*b-Math.sqrt(b*b-4.0*a*c))/(2.0*a));
}

//HOhmann TIME
//document.write("FOOBAR");
//document.write("</p>");
document.write("<h3>Hohmann transfer times: upper bound travel times.</h3>"); 
document.write("<p>Unless a high-impulse craft (AM rocket, fusion rocket, plasma rocket) is trying to save fuel, said craft will almost certainly be able to make this trip is less time! Low-impulse craft (MH chemical rocket, HO chemical rocket) may be limited to making Hohmann transfers to save fuel.</p>");
document.write("<table border=1>");
document.write("<tr><td></td>");
for (var names_ind = 1; names_ind < orb_names.length; names_ind++){
	document.write("<th>" + orb_names[names_ind] + "</th>");
}
document.write("</tr>");

for (var m = 1; m < distances.length; m++){
	document.write("<tr><th>" + orb_names[m] + "</th>");
	for (var n = 1; n < distances.length; n++){
		var time_string = "";
		if (m == n){
			time_string = "n/a";
		} else {
			time_int = (Math.PI * Math.sqrt(Math.pow(distances[m]*1000.0 + distances[n]*1000.0,3)/(3.7931187 * (Math.pow(10,16)) * 8)))/(60.0*60.0);
			hour_string = Math.floor(time_int);
			minute_string = Math.floor((time_int % 1)*60.0);
			time_string += hour_string + " h, " + minute_string + " m";
		}
		document.write("<td>" + time_string + "</td>");
	}
	document.write("</tr>");
} 
document.write("</table>")

//DELTA V of Hohmann
document.write("<h3>Hohmann delta-V (naive: assume instantaneous impulse)</h3>"); 
document.write("<p>Unless a high-impulse craft (AM rocket, fusion rocket, plasma rocket) is trying to save fuel, said craft will almost certainly be able to make this trip is less time! Low-impulse craft (MH chemical rocket, HO chemical rocket) may be limited to making Hohmann transfers to save fuel.</p>");
document.write("<table border=1>");
document.write("<tr><td></td>");
for (var names_ind = 1; names_ind < orb_names.length; names_ind++){
	document.write("<th>" + orb_names[names_ind] + "</th>");
}
document.write("</tr>");

for (var m = 1; m < distances.length; m++){
	document.write("<tr><th>" + orb_names[m] + "</th>");
	for (var n = 1; n < distances.length; n++){
		var dv_string = "";
		if (m == n){
			dv_string = "n/a";
		} else {
			//delta-V in m/s
			dv_0 = (Math.sqrt(3.7931187 * (Math.pow(10,16)) / (distances[m]*1000.0))) * (Math.sqrt(2*distances[n]*1000.0/(distances[n]*1000.0 + distances[m]*1000.0)) - 1.0);

			dv_1 = (Math.sqrt(3.7931187 * (Math.pow(10,16)) / (distances[n]*1000.0))) * (1 - Math.sqrt(2*distances[m]*1000.0/(distances[n]*1000.0 + distances[m]*1000.0)));

			dv_int = dv_0 + dv_1;
			//dv_int = (Math.PI * Math.sqrt(Math.pow(distances[m]*1000.0 + distances[n]*1000.0,3)/(3.7931187 * (Math.pow(10,16)) * 8)))/(60.0*60.0);
			//hour_string = Math.floor(time_int);
			//minute_string = Math.floor((time_int % 1)*60.0);
			//time_string += hour_string + " h, " + minute_string + " m";
			dv_string += Math.abs(Math.round(dv_int)) + " m/s"; 
		}
		document.write("<td>" + dv_string + "</td>");
	}
	document.write("</tr>");
} 
document.write("</table>")

//naive continuous thrust time
document.write("<h3>Naive lower bound: Fusion rockets</h3>");
document.write("<p>assume craft does continuous thrust (prograde for first half, retrograde for second half). This is time it takes to cover linear distance that is minimum distance between these two bodies. Assume it's not actually affected by gravity. (Like I said, \"naive\"). Of course real travel time will take longer. (<strong>Fusion rocket time.</strong>)</p>");

document.write("<table border=1>");
document.write("<tr><td></td>");
for (var names_ind = 1; names_ind < orb_names.length; names_ind++){
	document.write("<th>" + orb_names[names_ind] + "</th>");
}
document.write("</tr>");

for (var m = 1; m < distances.length; m++){
	document.write("<tr><th>" + orb_names[m] + "</th>");
	for (var n = 1; n < distances.length; n++){
		var time_string = "";
		if (m == n){
			time_string = "n/a";
		} else {
			time_int = (quadratic(-0.5*fusion_accel, 0, 0.5*((Math.abs(distances[m]-distances[n]))*1000.0)) * 2.0 / (60.0*60.0));
			hour_string = Math.floor(time_int);
			minute_string = Math.floor((time_int % 1)*60.0);
			time_string += hour_string + " h, " + minute_string + " m";
		}
		document.write("<td>" + time_string + "</td>");
	}
	document.write("</tr>");
} 

document.write("</table>")
