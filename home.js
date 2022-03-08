

let headerText = document.getElementById("headerText");
const headerText1 = "</ Timothy Walker >"

let index = 0;
function writeHeader() {
    headerText.innerText = headerText1.slice(0, index);
    index++;
}
const nameInterval = setInterval(writeHeader, 90);
setTimeout(function( ) { clearInterval( nameInterval ); }, 90*25);

function writeDesc() {
    headerText.innerText = headerText1.slice(0, index);
    index++;
}
writeHeader()  

window.onscroll = function(){
	var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
	
	if (D.scrollTop == 0)
		{
			document.getElementById("projectsHeader").style.opacity=100;
		}   
        
    if (D.scrollTop != 0)
		{
			document.getElementById("projectsHeader").style.opacity=0;
		} 
};