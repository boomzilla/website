var JAMES = "<title>:=<zzz> : <zzz>|<zzz>\n" + \
"<c>:=<adj> <noun>|<noun>\n" + \
"<xxx>:=<c>|<c> and <c>|<c> <prep> <c>|<c> and <c>  <prep> <c>\n" + \
"<yyy>:=<vbing> <c>|<c>\n" + \
"<zzz>:=<xxx>|<yyy>\n" + \
"<prep>:=to|from|of|in\n" + \
"<noun>:=alternatives|foundations|representations|narratives|crafts|biodiversity|knowledge|abjection|art|time|argentina|plants|people|ecoliteracy|change|mausoleum\n" + \
"<vbing>:=drawing|defending|writing|rewriting|interogating|looking|re-interpretting\n" + \
"<adj>:=real|literary|imagined|cultural|evolutionary|social|forbidden|sustainable\n";

function parse_grammar(grammar){
	var str_array = grammar.split("\n");
	var dictionary = {};
	var line;
	for (line in str_array)
	{
		var line_split = line.split(":=")
		dictionary[line_split[0]] = line_split[1].split("|");
	}
	
	return dictionary;
}

function generate_sentence(grammar_dict, rule){
	var g_list = grammar_dict[rule];
	var g_list_size = g_list.length;
    var g_string = g_list[Math.floor((Math.random()*g_list_size))];
    var to_return = "";

    var sub_list = g_string.split(" ");
	var rule;
    for rule in sub_list:
            if (rule[0] == "<"):
                to_return += generate_sentence(grammar_dict, rule);
            else:
                to_return += rule + " ";
    
    return to_return;
}

var grammar_dict = parse_grammar(JAMES);
var rule = "<title>";
var to_print = generate_sentence(grammar_dict, rule));
document.write(to_print);
