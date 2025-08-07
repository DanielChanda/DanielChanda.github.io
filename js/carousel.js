// Pause/resume carousel when modal is open/closed
$(function() {
	$('#modalEvelynHone, #modalHighland').on('show.bs.modal', function () {
		$('.owl-carousel1').trigger('stop.owl.autoplay');
	});
	$('#modalEvelynHone, #modalHighland').on('hidden.bs.modal', function () {
	  $('.owl-carousel1').trigger('play.owl.autoplay');
	});
});