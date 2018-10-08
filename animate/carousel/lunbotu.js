window.onload = function() {
	var imgs = document.getElementById('images');
	var li = document.getElementsByTagName('li');
	var left = document.getElementById("carousel-left");
	var right = document.getElementById("carousel-right");
	CirColor(0);//第一个圆点默认样式

	// 添加图片
	for (let i = 1; i < 9; i++) {
		var img = document.createElement('img');
		img.src = `images/banner_0${i}.jpg`;
		imgs.appendChild(img);
	}
	var num = 0; // 图片编号
	var changes; // 触发器

	// 图片轮播
	function changeImg() {
		changes = setInterval(function() {
			if (num == 9) {
				animate(imgs, {
					left: 0
				});
				num = 0;
				CirColor(num);
			}
			animate(imgs, {
				left: (-1257 * num - 7)
			});
			CirColor(num++);

		}, 1500);
	}
	changeImg();

	// 向左切换
	left.onclick = function moveToL() {
		clearInterval(changes);
		if (!num) {
			animate(imgs, {
				left: (-1257 * 8 - 7)
			});
			num = 8;
		} else {
			animate(imgs, {
				left: (-1257 * (num--) - 7)
			})
		}
		CirColor(num);
		changeImg();
	}

	// 向右切换
	right.onclick = function moveToR() {
		clearInterval(changes);
		if (num == 8) {
			animate(imgs, {
				left: 0
			});
			num = 0;
		} else {
			animate(imgs, {
				left: (-1257 * (num++) - 7)
			});
		}
		CirColor(num);
		changeImg();
	}

	// 圆点变色函数
	function CirColor(num) {
		for (let i = 0; i < li.length; i++) {
			li[i].style.backgroundColor = "grey";
		}
		li[num].style.backgroundColor = "#fff";
	}

	// 点击圆点切换
	for (let i = 0; i < li.length; i++) {
		li[i].onclick = function() {

			clearInterval(changes);
			num = i;
			
			if (!num) animate(imgs, {
				left: 0
			});
			else animate(imgs, {
				left: (-1257 * num - 7)
			});
			CirColor(num);
			changeImg();
		}
	}

	// 图片切换函数
	function animate(obj, json) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var isStop = true;
			for (var attr in json) {
				var now = parseInt(getStyle(obj, attr));
				var speed = (json[attr] - now) / 6;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				var current = now + speed;
				obj.style[attr] = current + "px";
				if (json[attr] !== current) {
					isStop = false;
				}
			}
			if (isStop) clearInterval(obj.timer);
		}, 40);
	}

	// 获取元素的style属性
	function getStyle(obj, attr) {
		if (obj.currentStyle) { 
            // IE
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}

}