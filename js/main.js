console.log('hello to the main.js file');


var english, morse;

function translateToMorse() {	
    console.log('translating your text to morse code');
	// print to morse div to display
	document.getElementById('morse').innerHTML = morse;
		
	// show div if there is more then 1 letter translated
    if (english === 0) {
    	document.getElementById('morseWrapper').css.display="block";
    	document.getElementById('morse').innerHTML = 'Nothing to Translate';
    } else if{
    	document.getElementById('morseWrapper').style.display="block";
    }
}
function userEnglishInput {
	// get user value and make all lower case
    english = document.$('#englishInput').value.toLowerCase();
    morse = english.join("");
    // console array that splits user text into an array
    console.log(morse);
    // replace object
    var replaceObj = {
    	a: '.- / ',
    	b: '-... / ',
    	c: '-.-. / ',
    	d: '-.. / ',
    	e: '. / ',
    	f: '..-. / ',
    	g: '--. / ',
    	h: '.... / ' 
    	i: '.. / ', 
    	j: '.--- / ', 
    	k: '-.- / ', 
    	l: '.-.. / ', 
    	m: '-- / ', 
    	n: '-. / ', 
    	o: '--- / ', 
    	p: '.--. / ' 
    	q: '--.- / ',
    	r: '.-. / ', 
    	s: '... / ', 
    	t: '- / ', 
    	u: '..- / ', 
    	v: '...- / ', 
    	w: '.-- / ', 
    	x: '-..- / ', 
    	y: '-.-- / ', 
    	z: '--.. / ',
    	'0': '----- / ',
    	'1': '.---- / ',
    	'2': '..-- / ',
    	'3': '...-- / ',
    	'4': '....- / ',
    	'5': '----- / ',
    	'6': '-.... / ',
    	'7': '--.... / ',
    	'8': '---.. / ',
    	'9': '----. / ',
    	'.': '.-.-.- / ',
    	',': '--..-- / ',
    	':': '---... / ',
    	"'": '.----. / ',
    	'"': '.----. / ',
    	'-': '-....- / ',
    	'@': '.--.-. / ',
    	'=': '-...- / ',
    	' ': "",
    	'?': '..--.. / ',
    	'\/': '-..-. / '
    }
    // replace characters and retrun
    morse = english.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|@|.|,|:|"|'|=|\s+|[?=]|\//gi, function(matched) {   	
    	return replaceObj[matched];
    });    
}
function resetTranslate() {
    // console to confirm funciton works
    console.log('reset')
    // reset arrays
	english = [];
	morse = [];
    // reset view
	document.getElementById('englishInput').value = '';
	document.getElementById('morse').style.display="none";
	document.getElementById('englishInput').focus();
    
}
// stop user from hitting enter instead translate
function runScript(event) {
    if (event.keyCode == 13) {
        e.preventDefault()
        translate
    }
}