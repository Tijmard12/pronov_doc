function changedColor(x){
    x.style.color = "silver";
}

function normalColor(x){
    x.style.color = "white";
}

function load_config() {
     document.getElementById("content").innerHTML=
     '<iframe src="add_config.html" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_config1() {
     document.getElementById("content").innerHTML=
     '<iframe src="add_config.html#manage" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_config2() {
     document.getElementById("content").innerHTML=
     '<iframe src="add_config.html#search" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_groups() {
     document.getElementById("content").innerHTML=
     '<iframe src="add_groups.html" style="width:980px; min-height:480px; border:none;" ></iframe>';
}

function load_groups1() {
     document.getElementById("content").innerHTML=
     '<iframe src="add_groups.html#manage" style="width:980px; min-height:480px; border:none;" ></iframe>';
}
