function showContent(){
    var cont = document.getElementsByClassName("content");
    for(var n = 0; n < cont.length; n++){
	cont[n].style.backgroundColor = "grey";
    }
}

var elms = document.getElementsByClassName("share");
for(var i = 0; i < elms.length; i++){
    elms[i].innerHTML = "<a href='http://clickb8m8.github.io/index.html'>Main Page</a><br>"
	+ "<a href='https://www.facebook.com/sharer/sharer.php?u="
	+ document.URL
	+ "' target='_blank'>"
	+ "<img class='shrimg' src='http://clickb8m8.github.io/articles/share-on-facebook.png'></img></a>";
}

var elms = document.getElementsByClassName("shrimg");
for(var i = 0; i < elms.length; i++){
    elms[i].onclick = showContent;
}
