function changedColor(x){
    x.style.color = "silver";
}

function normalColor(x){
    x.style.color = "white";
}

function load_config() {
     document.getElementById("content").innerHTML=
     '<iframe src="config.html" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_config1() {
     document.getElementById("content").innerHTML=
     '<iframe src="config.html#manage" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_config2() {
     document.getElementById("content").innerHTML=
     '<iframe src="config.html#search" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_branches() {
     document.getElementById("content").innerHTML=
     '<iframe src="branches.html" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_branches1() {
     document.getElementById("content").innerHTML=
     '<iframe src="branches.html#manage" style="width:980px; min-height:480px; border:none;" ></iframe>';
}
