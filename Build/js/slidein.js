$(function(){
var menu = $('#slide_menu'),
	menuBtn = $('#button'),
	body = $(document.body),	
	menuWidth = menu.outerWidth();	            
		
	menuBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			menu.animate({'left' : 8 }, 120);
		} else {
			menu.animate({'left' : -200 }, 120);
		}		     
	});
});    

$(function(){
var check = $('#icon_legend'),
	checkBtn = $('#legend_button'),
	body = $(document.body),	
	checkWidth = check.outerWidth();	            
		
	checkBtn.on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			check.animate({'left' : 60 }, 240);
		} else {
			check.animate({'left' : -500 }, 240);
		}		     
	});
}); 