//v1
// ==UserScript==
// @name		  spyhunter
// @namespace	 http://fsck.com/~jesse/
// @description  Remove spymaster tweets from twitter
// @include	   https://twitter.com/*
// @include	   http://twitter.com/*
// ==/UserScript==
// UPDATE INFO http://fsck.com/~jesse/spyhunter.html



( function(){

// initialize spyhunter if spyhunter not works.
if(!document.getElementById('spyhunter_info')){
	spyhunter_init();
} else {
	return(false);
}

function spyhunter_init() {

	spyhunter_version = "1";
	spyhunter_info_panel();
		spyhunter_add_eventlistener_to_timeline();
	spyhunter_main( document.getElementsByClassName("hentry"));
}


function spyhunter_add_eventlistener_to_timeline(timeline) {
	document.getElementById("timeline").addEventListener("DOMNodeInserted", 
		function (event) { spyhunter_main([event.target]); }, false);
}


function spyhunter_main(items) {
      var i=items.length;
      for( i=0; i <= items.length; i++) {
        var item = items[i];
          var text = item.innerText || item.textContent;
          if (text.match('spymaster') ){
                 item.style.display = 'none';
           }
      } 


}

function spyhunter_info_panel() {
	var spyhunter_nav = document.createElement('li');
	spyhunter_nav.id = 'spyhunter_info';
	spyhunter_nav.innerHTML = '<a href="http://fsck.com/~jesse/spyhunter/">spyhunter</a>';
	document.getElementById('header').getElementsByTagName('ul')[0].insertBefore(spyhunter_nav, document.getElementById('header').getElementsByTagName('li')[5]);
}
})();
