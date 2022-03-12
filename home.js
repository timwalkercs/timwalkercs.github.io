

let headerText = document.getElementById("headerText");
const headerText1 = "</ Tim Walker >"

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

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
  }
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("project");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "flex";
	dots[slideIndex-1].className += " active";
  }