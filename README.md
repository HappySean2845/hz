<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8">
		<title>华住酒店</title>
	</head>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/darre.css">

	<body>
		<div class="logo">
			<img src="images/darre/logo_03.png" alt="" />
		</div>
		<div class="gamerule">
			<img src="images/darre/howplay_06.png" alt="" />
		</div>
		<!--
    	作者：404877757@qq.com
    	时间：2017-07-17
    	描述：可点击光圈  定位 点击事件  闪烁
    -->
		<div class="light_Icon light_shake">
			<img src="images/darre/lightIcon_11.png" alt="" />
		</div>
		<!--三个absolute定位到中间-->
		<img class="bed" src="images/bed.png">
		<img class="light" src="images/light.png">
		<img class="table" src="images/table.png">
		<!-- 需要动的元素 -->
		<div id="scene" data-limit-y="0">
			<img data-depth="0.2" class="star" src="images/star.png">
			<img data-depth="0.3" class="chair" src="images/chair.png">
			<img data-depth="0.3" class="tv" src="images/tv.png">
		</div>
		<!-- 想住就住4个字 -->
		<div class="text_wrap">
			<div class="text">想<i>0</i></div>
			<div class="text">住<i>0</i></div>
			<div class="text">就<i>0</i></div>
			<div class="text">住<i>0</i></div>
			<div class="getJiu">
				<img src="images/darre/get_11.png" alt="" />
			</div>
		</div>
	</body>
	<script type="text/javascript" src="js/rem.js"></script>
	<script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
	<script type="text/javascript" src="libs/parallax.js"></script>
	<script type="text/javascript">
		var scene = $('#scene').get(0)
		var parallax = new Parallax(scene);
	</script>

</html>