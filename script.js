document.querySelector('.tr-btn').addEventListener('click', function(e) {
	var box = document.querySelector('.tr-box');
	box.classList.toggle('enable-transition');

	var isDisabled = e.target.innerText === "Disable transition";
	e.target.innerText = isDisabled ? "Enable transition" : "Disable transition";
});

document.querySelector('.anim-btn').addEventListener('click', function(e) {
	var box = document.querySelector('.anim-box');
	box.classList.toggle('enable-animation');

	var isDisabled = e.target.innerText === "Disable animation";
	e.target.innerText = isDisabled ? "Enable animation" : "Disable animation";
});