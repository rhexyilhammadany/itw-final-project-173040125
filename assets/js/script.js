// event pada saat link di klik
$('.page-scroll').on('click', function(e){

// ambil isi
	var tujuan = $(this) .attr('href');

// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

// pindahkan scroll
	$('html , body').animate({
		scrollTop: elemenTujuan.offset().top-50
	}, 1250, 'easeInOutExpo');

e.preventDefault();

});

// paralLax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

});






