$(function(){

				$(window).resize(checkSize);
				
				
				function checkSize() {
					if($("body").css("max-width") == "820px") {
						$(".ric").hide();

					} else {
						$(".ric").show();
					}

					if($("body").css("max-width") == "490px") {
						$(".ric").hide();

					} else {
						$(".ric").show();
					}
				}					
		

				var ergebnis = 0;
				var punkte1 = 0;
				var punkte2 = 0;
				var punkte3 = 0;
				var punkte4 = 0;
			
				$("#startbild").show();
				$("#antwort1").hide();
				$("#antwort2").hide();
				$("#antwort3").hide();
				$("#antwort4").hide();
				$("#richtigerSinn").hide();
				$("#nase2").hide();			
				$("#nase1").hide();
				$("#auge1").hide();
				$("#ohr1").hide();
				$("#pr").hide();
				$("#punk").hide();
				$("#liste").hide();
								

				$(".reflesh").on("click", function() {
					location.reload();
				});
		
				$("#clickme").on("click", function() {
					alert("Dein Score wurde eingetragen, danke für die Teilnahme");
				});


			$("#start").on("click", function() {
				$("#richtigerSinn").show();
				$(".aus1").on("click", function() {
					$(".aus1").prop("disabled",true);
					
				});
				$(".aus2").on("click", function() {
					$(".aus2").prop("disabled",true);
					
				});
				$(".aus3").on("click", function() {
					$(".aus3").prop("disabled",true);
					
				});
				$(".aus4").on("click", function() {
					$(".aus4").prop("disabled",true);
					
				});
				$("#bu5").on("click", function() {
					$("#bild1").html("richtig");
					ergebnis = ergebnis + 1;
				});
				$("#bu10").on("click", function() {
					$("#bild2").html("richtig");	
					ergebnis = ergebnis + 1;
				});
				$("#bu12").on("click", function() {
					$("#bild3").html("richtig");
					ergebnis = ergebnis + 1;
				});
				$("#bu18").on("click", function() {
					$("#bild4").html("richtig");
					ergebnis = ergebnis + 1;
				});








					$("#startbild").hide();
					
					d();

					setTimeout( function(){
					$("#nase2").show();	
					$("#nase1").hide();
					$("#auge1").hide();
					$("#ohr1").hide();
					$("#nase2").css({"animation": "walk-east 6.0s steps(6) 1", "-webkit-animation": "walk-east 6.0s steps(6) 1"});	
					},1000);

					setTimeout( function(){	
					$("#nase2").hide();
					$("#nase1").show();
					$("#auge1").hide();
					$("#ohr1").hide();
        					$("#nase1").css({"animation": "walk-east 6.0s steps(6) 1", "-webkit-animation": "walk-east 6.0s steps(6) 1"});
    					},7000);

					setTimeout( function(){
					$("#nase2").hide();
					$("#nase1").hide();
					$("#auge1").show();
					$("#ohr1").hide();
        					$("#auge1").css({"animation": "walk-east 6.0s steps(6) 1", "-webkit-animation": "walk-east 6.0s steps(6) 1"});
    					},13000);
					
					setTimeout( function(){
					$("#nase2").hide();
					$("#nase1").hide();
					$("#auge1").hide();
					$("#ohr1").show();
        					$("#ohr1").css({"animation": "walk-east 6.0s steps(6) 1", "-webkit-animation": "walk-east 6.0s steps(6) 1"});
    					},19000);
					

					
				





				$('.c').hide();
				
				function d() {
					var n=25;
					$('.c').html(n);
					setInterval(function(){
					n= n - 1;
					if(n > 0) {
						$('.c').html(n);
					}
					
					if(n > 18) {
						$("#antwort1").show();
						
					}

					if(n > 12 && n <= 18) {
						$("#antwort1").hide();
						$("#antwort2").show();
						
					}

					if(n > 6 && n <= 12) {
						$("#antwort2").hide();
						$("#antwort3").show();
						
					}
					
					if(n > 0 && n <= 6) {
						$("#antwort3").hide();
						$("#antwort4").show();
						
					}


					if(n == 24) {
						$("#bu5").on("click", function() {
							punkte1 = punkte1 + 6;
						});
					}

					if(n == 23) {
						$("#bu5").on("click", function() {
							punkte1 = punkte1 - 1;
						});
					}

					if(n == 22) {
						$("#bu5").on("click", function() {
							punkte1 = punkte1 - 1;
						});
					}
					
					if(n == 21) {
						$("#bu5").on("click", function() {
							punkte1 = punkte1 - 1;
						});
					}
					
					if(n == 20) {
						$("#bu5").on("click", function() {
							punkte1 = punkte1 - 1;
						});
					}

					if(n == 19) {
						$("#bu5").on("click", function() {
							punkte1 = punkte1 - 1;
						});
					}
		




					if(n == 18) {
						$("#bu10").on("click", function() {
							punkte2 = punkte2 + 6;
						});
					}

					if(n == 17) {
						$("#bu10").on("click", function() {
							punkte2 = punkte2 - 1;
						});
					}

					if(n == 16) {
						$("#bu10").on("click", function() {
							punkte2 = punkte2 - 1;
						});
					}
					
					if(n == 15) {
						$("#bu10").on("click", function() {
							punkte2 = punkte2 - 1;
						});
					}
					
					if(n == 14) {
						$("#bu10").on("click", function() {
							punkte2 = punkte2 - 1;
						});
					}

					if(n == 13) {
						$("#bu10").on("click", function() {
							punkte2 = punkte2 - 1;
						});
					}






					if(n == 12) {
						$("#bu12").on("click", function() {
							punkte3 = punkte3 + 6;
						});
					}

					if(n == 11) {
						$("#bu12").on("click", function() {
							punkte3 = punkte3 - 1;
						});
					}

					if(n == 10) {
						$("#bu12").on("click", function() {
							punkte3 = punkte3 - 1;
						});
					}
					
					if(n == 9) {
						$("#bu12").on("click", function() {
							punkte3 = punkte3 - 1;
						});
					}
					
					if(n == 8) {
						$("#bu12").on("click", function() {
							punkte3 = punkte3 - 1;
						});
					}

					if(n == 7) {
						$("#bu12").on("click", function() {
							punkte3 = punkte3 - 1;
						});
					}





					if(n == 6) {
						$("#bu18").on("click", function() {
							punkte4 = punkte4 + 6;
						});
					}

					if(n == 5) {
						$("#bu18").on("click", function() {
							punkte4 = punkte4 - 1;
						});
					}

					if(n == 4) {
						$("#bu18").on("click", function() {
							punkte4 = punkte4 - 1;
						});
					}
					
					if(n == 3) {
						$("#bu18").on("click", function() {
							punkte4 = punkte4 - 1;
						});
					}
					
					if(n == 2) {
						$("#bu18").on("click", function() {
							punkte4 = punkte4 - 1;
						});
					}

					if(n == 1) {
						$("#bu18").on("click", function() {
							punkte4 = punkte4 - 1;
						});
					}





					if(n == 0) {
						
						$("#imspiel").hide();
						ergebnis = (ergebnis / 4) * 100;
						$("#pr").val(ergebnis);
						$("#prozent").html(ergebnis);
						var punkte = punkte1 + punkte2 + punkte3 + punkte4;
						$("#punk").val(punkte);
						$("#pu").html(punkte);
						$("#nase2").hide();			
						$("#nase1").hide();
						$("#auge1").hide();
						$("#ohr1").hide();
						$("#liste").show();
					}
        					},1000);
				}

				setInterval(function(){
				},25000);
			});

			
	
});






