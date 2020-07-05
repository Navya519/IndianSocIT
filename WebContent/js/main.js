$(document).ready(function(){
	
  $('.header').height($(window).height());
  $("#articlesdata").DataTable({"pageLength": 1});
	$(".articlesthead").hide();
	$("#articlesdata_length").hide();
})