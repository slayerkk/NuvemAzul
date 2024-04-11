$("#search-icon").click(function() {
	$(".nav").toggleClass("search");
	$(".nav").toggleClass("no-search");
	$(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
	 $(".nav").toggleClass("mobile-nav");
	 $(this).toggleClass("is-active");
  });

  $(document).ready(function () {
	$("#search").keyup(function (e) {
		if (e.keyCode == 13) {
			var valor = document.getElementById("search").value;
			window.location = "games.html?pl=search&val="+valor;
		}
	});
});



