# daohang
一个简约的导航站

# [demo](http://xihale.gitee.io/daohang/)

# 前言
>模板是网上有的
>但是,代码太复杂
>所以我就改了一下
>现在用js调用会好很多

#调用方法
```html
<script>
	//单个
	var x=BOX("名字","锚点名"[,"图标名(index.html里有具体的代码)"]);
	x.add("url","名字","介绍"[,"图标url"]);
	//多个
	var mirror=new BOX("镜像","mirror","xuexi1");
	mirror.adds([
		[
			"https://xihale.top",
			"博客",
			"我的博客",
			"https://avatars.githubusercontent.com/u/62087089?s=400&u=a4bf42f7f854cd4c34924b73ace325897d80de7a&v=4"
		],
		[
			"https://github.com",
			"github",
			"跳转到github"
		],
		[
			"https://baidu.com",
			"百度"
		]
	]);
</script>
```
