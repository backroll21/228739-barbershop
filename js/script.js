//modal-content open/close

$(document).on('ready', function() {
	// popup + overlay
	var link = document.querySelector('.login');
	var popup = document.querySelector('.modal-content');
	var overlay = document.querySelector('.modal-overlay');
	var close = popup.querySelector('.modal-content-close');
	var form = popup.querySelector('form');
	var login = popup.querySelector('[name=login]');
	var password = popup.querySelector('[name=password]');
	var storage = localStorage.getItem('login');
	// map + overlay
	var mapOpen = document.querySelector('.modal-map-open');
	var map = document.querySelector('.modal-content-map');
	var mapClose = map.querySelector('.modal-map-close');

	link.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.add('modal-content-show');
		overlay.classList.add('modal-overlay-show');
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

	close.addEventListener('click', function(event) {
		event.preventDefault();
		popup.classList.remove('modal-content-show');
		overlay.classList.remove('modal-overlay-show');
		popup.classList.remove('modal-content-error');
	});

	form.addEventListener('submit', function() {
		if (!login.value || !password.value) {
			event.preventDefault();
			popup.classList.add('modal-content-error');
		} else {
			localStorage.setItem('login', login.value)
		}
	});

	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27 && popup.classList.contains('modal-content-show')) {
			popup.classList.remove('modal-content-show');
			popup.classList.remove('modal-content-error');
			overlay.classList.remove('modal-overlay-show');
		}
	});

	mapOpen.addEventListener('click', function(event) {
		event.preventDefault();
		map.classList.add('modal-content-map-show');
		overlay.classList.add('modal-overlay-show');
	});

	mapClose.addEventListener('click', function(event) {
		event.preventDefault();
		map.classList.remove('modal-content-map-show');
		overlay.classList.remove('modal-overlay-show');
	});

		window.addEventListener('keydown', function(event) {
		if (event.keyCode === 27 && map.classList.contains('modal-content-map-show')) {
			map.classList.remove('modal-content-map-show');
			overlay.classList.remove('modal-overlay-show');
		}
	});
});