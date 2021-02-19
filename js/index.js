class BOX {
	constructor(name,anchor,icon) {
		var temp=document.getElementById("navItem");
		temp.innerHTML=temp.innerHTML+'<li><a href="#'+anchor+'"><i class="iconfont icon-'+icon+'"></i>'+name+'</a></li>';
		temp=document.getElementById("mainContent");
		this.box=document.createElement("div");
		this.box.className="box";
		this.box.innerHTML='<a href="#" name="'+anchor+'"></a><div class="sub-category"><div><i class="iconfont icon-'+icon+'"></i>'+name+'</div>'
		temp.insertBefore(this.box,temp.lastChild);
	}
	add(url,name,introduce,logo){
		var Logo='no-logo',temp='';
		if(logo!=undefined){
			Logo='logo';
			temp='<img src='+logo+'> ';
		}
		this.box.innerHTML=this.box.innerHTML+'<div><a target="_blank" href="'+url+'"><div class="item"><div class="'+Logo+'">'+temp+name+'</div><div class="desc">'+introduce+'</div></div></a></div>';
	}
};