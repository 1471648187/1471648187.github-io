window.onload = function(){
	
	var banner = document.getElementsByClassName('banner')[0];
	var zzz = document.getElementsByClassName('zzz')[0];
	var yyy = document.getElementsByClassName('yyy')[0];
	var lunbo = document.getElementsByClassName('lunbo')[0];
	let icon = document.querySelector('#icon');
	var index = 0;
	var tba = true;
	var set;
	
	
	//让aunt循环
	set = setInterval(()=>{
		ou()
	},3000);
	
	//移入清除定时器
	banner.addEventListener('mouseover',function(){
		clearInterval(set);
		console.log(set)
	})
	
	//移出开启定时器
	banner.addEventListener('mouseout',function(){
		console.log(set)
		set = setInterval(()=>{
			ou()
		},3000);
	})
	
	
	//移入lunbo的时候显示
	 banner.onmouseover = function(){
		 zzz.style.display = 'block';
		 yyy.style.display = 'block';
	 }
	
	//移入lunbo的时候显示
	 banner.onmouseout = function(){
		 zzz.style.display = 'none';
		 yyy.style.display = 'none';
	 }
	 
	 //点击下一张
	 yyy.addEventListener('click',function(){
		if(tba){
			tba = false;
			setTimeout(function(){
				tba = true;
			},820)
			ou();
		}
		
	 })
	 
	 //点击下一站
	 zzz.addEventListener('click',function(){
		 
		 auto();
		 console.log(index);
	 })
	 
	
	//封装上一张函数
	function auto(){
		index--;
	    lunbo.style.transition = 'all .8s ease-out';
	    lunbo.style.transform = 'translateX('+index*-1920+'px)';
		yudian();
	}
	
	//封装下一张函数
	function ou(){
		index++;
		lunbo.style.transition = 'all .8s ease-out';
		lunbo.style.transform = 'translateX('+index*-1920+'px)'; 
		yudian();
	}
	
	// 判断到最后一张返回到第一张,判断第一张返回到最后一张
	lunbo.addEventListener('transitionend',function(){
		if(index > 2){
			index = 0;
			lunbo.style.transition = 'none';
			lunbo.style.transform = 'translateX('+index*0+'px)';
		}else if(index < 0){
			index = 2;
			lunbo.style.transition = 'none';
			lunbo.style.transform = 'translateX('+index*-1920+'px)';
		}
	})
	
	//封装圆点函数
	function yudian(){
		for(let i = 0;i < icon.children.length;i++){
			icon.children[i].classList.remove("aa");
		}

		if(index >2){;
			icon.children[0].className= 'aa';
		}else if(index < 0){
			icon.children[2].className= 'aa';
		}else{
			icon.children[index].className = 'aa';
		}
	}
	
	// //圆点
	// let po = list.querySelectorAll('li');
	// console.log(po);
	// for(var i=0;i<po.length;i++){
	// 	po[i].onclick = function(){
	// 		index = 1;
	// 		auto();
	// 	}
	// }
	
	//把索引绑定到点点上面
	let li = icon.querySelectorAll('li');
	for(let t=0;t<li.length;t++){
		li[t].onclick = function(){
			index = t;
			index++;

			auto();
		}
	}
	
	
	
	const demoList = document.querySelector('.demoList').children;
	const div = document.querySelector('.content').children;
	for(let i = 0; i < demoList.length; i++){
		demoList[i].addEventListener('mouseover',()=>{
			for( let j = 0; j < div.length; j++){
				div[j].style.display = 'none';
				demoList[j].className = '';
			}
			div[i].style.display = 'block'
			demoList[i].className = 'hover';
		})
	}
	
	
	
	// var zxlb = document.querySelector(".hezi");
	// let bian = document.querySelector('#bian').children;

	// console.log(zxlb,bian)
	// for(let i=0;i < bian.length ;i++){
	// 	bian[i].addEventListener("mouseover",function(){
	// 		for(let j = 0; j<bian.length;j++){
	// 			bian[j].className = "";
	// 		}
	// 		// zxlb.style.transform = `translateY(${i*-400}px)`
	// 		// let offset = i * -400;
	// 		zxlb.style.transform = 'translateY('+i*-400+'px)'
	// 		// console.log(offset)
	// 		bian[i].classList.add("tianjia")
	// 	})
	// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var bian = document.querySelector("#bian").children;
	var hezi = document.querySelector(".hezi");
	
	console.log(hezi)
	
	for(let i = 0; i< bian.length; i++){
		bian[i].addEventListener("mouseover",function(){
			for(let j =0;j<bian.length; j++){
			bian[j].className = "";
			}
			bian[i].classList.add("tianjia");
			hezi.style.transform = "translateY("+i*-400+"px)";
		})
	}
}