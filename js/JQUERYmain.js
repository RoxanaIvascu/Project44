	function resetareAnimatie(){
				console.log('resetam animatia');
	
				$("#faina").css("left","370px").css("top","150px")
				.css('transition-property', 'none');

				$('#faina').css('transition', 'all .7s ease-in');

				var elemente = [ $('#faina'), $('#ceapa'), $('#menta'), $('#piper'), $('#usturoi'),
					$('#gogosar'), $('#ardei'), $('#rosie'), $('#branza'), $('#bacon'), $('#flour') ];

				var pozitii = [
					{ // faina
						top : 200,
						left : 340
					},
					{ // ceapa
						top : 80,
						left : 400
					}, // menta
					{
						top: 180,
						left: 400
					},
					{ // piper
						top: 200,
						left: 450
					},
					{ // usturoi
						top: 350,
						left: 420
					},
					{ // gogosar
						top: 280,
						left: 380
					},
					{ // ardei
						top: 300,
						left: 300
					},
					{ // rosie
						top: 380,
						left: 370
					},
					{ // branza
						top: 380,
						left: 450
					},
					
					{ // bacon
						top: 280,
						left: 440
					}, 
					
					{ // flour
						top: 150,
						left: 450
					}

				];

				for(var i=0; i<elemente.length; i++){
					console.log('i = ' + i);
					console.log('pozitie curenta: ', pozitii[i]);
					elemente[i].css("left", pozitii[i].left).css("top", pozitii[i].top);
				}

	
			}

$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 5){
			$("#faina").css("left","530px").css("top","190px");
			$("#piper").css("left","550px").css("top","290px");
			$("#branza").css("left","527px").css("top","340px");
			$("#rosie").css("left","500px").css("top","360px");
			$("#ardei").css("left","450px").css("top","260px");
			$("#gogosar").css("left","545px").css("top","320px");
			$("#menta").css("left","480px").css("top","210px");
			$("#ceapa").css("left","515px").css("top","140px");
			$("#usturoi").css("left","480px").css("top","320px");
			$("#bacon").css("left","510px").css("top","250px");
			$("#flour").css("left","540px").css("top","240px");
		}else{
			resetareAnimatie();
		}

	});

});