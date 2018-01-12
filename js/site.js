var stickyComponents = function() {
  var startPosY = 110;
  var breadcrumb = document.querySelector('.breadcrumb-wrapper');
  var sidebar = document.querySelector('.sidebar-content');

  if (window.scrollY > startPosY) {
    breadcrumb.classList.add('sticky');
    sidebar.classList.add('sticky');
    sidebar.style.marginTop = (window.scrollY - startPosY) + "px";
  } else {
    breadcrumb.classList.remove('sticky');
    sidebar.classList.remove('sticky');
    sidebar.style.marginTop = "0";
  }
};

window.addEventListener('scroll', stickyComponents);


$(document).ready(function(){

  //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
   });
});




jQuery.fn.smoothScroll = function(){
	$(this).each(function(){
		var node = $(this);
		$(node).click(function(e){
			var anchor = $(this).attr('href');
			anchor = anchor.split("#");
			anchor = anchor[1];
			var t = 0;
			var found = false;
			var tName = 'a[name='+anchor+']';
			var tId = '#'+anchor;
			if (!!$(tName).length){
				t = $(tName).offset().top;
				if ($(tName).text() == ""){
					t = $(tName).parent().offset().top;
				}
				found = true;
			} else if(!!$(tId).length){
				t = $(tId).offset().top;
				found = true;
			}
			if (found){
				$("body, html").animate({scrollTop: t}, 500);
			}
			//e.preventDefault();
		});
	});
	var lAnchor = location.hash;
	if (lAnchor.length > 0){
		lAnchor = lAnchor.split("#");
		lAnchor = lAnchor[1];
		if (lAnchor.length > 0){
			$("body, html").scrollTop(0);
			var lt = 0;
			var lfound = false;
			var ltName = 'a[name='+lAnchor+']';
			var ltId = '#'+lAnchor;
			if (!!$(ltName).length){
				lt = $(ltName).offset().top;
				if ($(ltName).text() == ""){
					lt = $(ltName).parent().offset().top;
				}
				lfound = true;
			} else if(!!$(ltId).length){
				lt = $(ltId).offset().top;
				lfound = true;
			}
			if (lfound){
				$("body, html").animate({scrollTop: lt}, 500);
			}
		}
	}
}

$('.anchorList a').smoothScroll();
