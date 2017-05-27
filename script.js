$(document).ready(function(){

	$("#knopka1").click(function(){
		var th = Number($("#th").val());
		var tm = Number($("#tm").val());
		var tff = Number($("#tff").val()); 
		$(".YSwhat1").hide();
		var sth = th-1;
		var stm = tm - 30 - tff;
		while ((stm)<0) {
			stm=60+stm;
			sth=sth-1;
		}
		if (sth<0) { sth=sth+24; }
		if (stm<10){$(".Sc1 .YSstage1").html("Вам следует заснуть в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>1.5 часов</span>");}
		else {$(".Sc1 .YSstage1").html("Вам следует заснуть в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>1.5 часов</span>");}

		sth = sth-1;
		stm = stm - 30;
		while ((stm)<0) {
			stm=60+stm;
			sth=sth-1;
		}
		if (sth<0) { sth=sth+24; }
		if (stm<10){$(".Sc1 .YSstage2").html("Вам следует заснуть в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>3 часа</span>");}
		else {$(".Sc1 .YSstage2").html("Вам следует заснуть в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>3 часа</span>");}

		
		sth = sth-1;
		stm = stm - 30;
		while ((stm)<0) {
			stm=60+stm;
			sth=sth-1;
		}
		if (sth<0) { sth=sth+24; }
		if (stm<10){$(".Sc1 .YSstage3").html("Вам следует заснуть в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>4.5 часа</span>");}
		else {$(".Sc1 .YSstage3").html("Вам следует заснуть в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>4.5 часа</span>");}

		
		sth = sth-1;
		stm = stm - 30;
		while ((stm)<0) {
			stm=60+stm;
			sth=sth-1;
		}
		if (sth<0) { sth=sth+24; }
		if (stm<10){$(".Sc1 .YSstage4").html("Вам следует заснуть в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>6 часов</span>");}
		else {$(".Sc1 .YSstage4").html("Вам следует заснуть в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>6 часов</span>");}

		
		sth = sth-1;
		stm = stm - 30;
		while ((stm)<0) {
			stm=60+stm;
			sth=sth-1;
		}
		if (sth<0) { sth=sth+24; }
		if (stm<10){$(".Sc1 .YSstage5").html("Вам следует заснуть в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>7.5 часов</span>");}
		else {$(".Sc1 .YSstage5").html("Вам следует заснуть в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>7.5 часов</span>");}

		
		sth = sth-1;
		stm = stm - 30;
		while ((stm)<0) {
			stm=60+stm;
			sth=sth-1;
		}
		if (sth<0) { sth=sth+24; }
		if (stm<10){$(".Sc1 .YSstage6").html("Вам следует заснуть в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>9 часов</span>");}
		else {$(".Sc1 .YSstage6").html("Вам следует заснуть в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>9 часов</span>");}	
    	$(".YSwhat1").slideDown("slow");
    	}


    );

    $("#knopka2").click(function(){
		var th = Number($("#th2").val());
		var tm = Number($("#tm2").val());
		var tff = Number($("#tff2").val()); 
		$(".YSwhat2").hide();

		var sth = th+1;
		var stm = tm + 30 + tff;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc2 .YSstage1").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>1.5 часов</span>");}
		else {$(".Sc2 .YSstage1").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>1.5 часов</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc2 .YSstage2").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>3 часа</span>");}
		else {$(".Sc2 .YSstage2").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>3 часа</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc2 .YSstage3").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>4.5 часа</span>");}
		else {$(".Sc2 .YSstage3").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>4.5 часа</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc2 .YSstage4").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>6 часов</span>");}
		else {$(".Sc2 .YSstage4").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>6 часов</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc2 .YSstage5").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>7.5 часов</span>");}
		else {$(".Sc2 .YSstage5").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>7.5 часов</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc2 .YSstage6").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>9 часов</span>");}
		else {$(".Sc2 .YSstage6").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>9 часов</span>");}
    	$(".YSwhat2").slideDown("slow");
    });

	$("#knopka3").click(function(){
		var date = new Date();
		var th = date.getHours();
		var tm = date.getMinutes();
		var tff = Number($("#tff3").val()); 
		$(".YSwhat3").hide();

		var sth = th+1;
		var stm = tm + 30 + tff;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc3 .YSstage1").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>1.5 часов</span>");}
		else {$(".Sc3 .YSstage1").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>1.5 часов</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc3 .YSstage2").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>3 часа</span>");}
		else {$(".Sc3 .YSstage2").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>3 часа</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc3 .YSstage3").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>4.5 часа</span>");}
		else {$(".Sc3 .YSstage3").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>4.5 часа</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc3 .YSstage4").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>6 часов</span>");}
		else {$(".Sc3 .YSstage4").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>6 часов</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc3 .YSstage5").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>7.5 часов</span>");}
		else {$(".Sc3 .YSstage5").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>7.5 часов</span>");}

		sth = sth+1;
		stm = stm + 30;
		while ((stm)>=60) {
			stm=stm-60;
			sth=sth+1;
		}
		if (sth>=24) { sth=sth-24; }
		if (stm<10){$(".Sc3 .YSstage6").html("Вам следует встать в <span class='youshould'>" + sth + ":0" + stm + "</span>, и тогда вы будете спать <span class='youwill'>9 часов</span>");}
		else {$(".Sc3 .YSstage6").html("Вам следует встать в <span class='youshould'>" + sth + ":" + stm + "</span>, и тогда вы будете спать <span class='youwill'>9 часов</span>");}
    	$(".YSwhat3").slideDown("slow");
    });    
});