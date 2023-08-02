// scroll 

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

//////////////// 


$(() => {

	// //On Scroll Functionality
	// $(window).scroll( () => {
	// 	var windowTop = $(window).scrollTop();
	// 	windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
	// 	windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	// });

	// //Click Logo To Scroll To Top
	// $('#logo').on('click', () => {
	// 	$('html,body').animate({
	// 		scrollTop: 0
	// 	},500);
	// });

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function (e) {
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 500);
		e.preventDefault();
	});

	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');

		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});

});

// hearder js 

$(window).scroll(function () {

	let oppai = $(this).scrollTop();

	$('#content article').css({ opacity: 100 / oppai, filter: 'blur(' + oppai / 100 + 'px)' });
	$('#content').css({ opacity: 100 / oppai });

	if (oppai > 190) {
		if (!$('body').hasClass('abrido'))
			$('#header-main').addClass('arre');
	}
	else {
		$('#header-main').removeClass('arre');
	}
});

$('#burger').on('click', function (e) {

	e.preventDefault();

	$('#nav-main, body, #burger').toggleClass('abrido');

	if ($('#header-main').hasClass('arre')) { $('#header-main').removeClass('arre').addClass('arreno'); }
	else if ($('#header-main').hasClass('arreno')) {
		$('#header-main').removeClass('arreno');
		setTimeout(() => { $('#header-main').addClass('arre') }, 800);
	}

});


/////////////////////////////////////////////////////// 
ScrollReveal({
	// reset: true,
	distance: '80px',
	duration: 2000,
	delay: 100,
});

ScrollReveal().reveal('.card', { origin: 'top' });
ScrollReveal().reveal('.layers__title, .layers__caption', { origin: 'top' });
ScrollReveal().reveal('.project', { origin: 'top' });
ScrollReveal().reveal('.content-third, .third-img', { origin: 'top' });
ScrollReveal().reveal(' .f-img, .content-fourth', { origin: 'top' });
ScrollReveal().reveal(' .services-fifth-box, #heading', { origin: 'top' });
ScrollReveal().reveal(' .sixth, .sixth-img, .six-heading', { origin: 'top' });
ScrollReveal().reveal(' .wasser-img, .content-wasser', { origin: 'top' });
ScrollReveal().reveal(' .sixth-content, .sixth-para', { origin: 'top' });
ScrollReveal().reveal(' #contact-form .container', { origin: 'top' });
ScrollReveal().reveal(' .gallary__content, .image__gallary', { origin: 'top' });






