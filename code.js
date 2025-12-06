/*
	Alexander Devereux
	11.18.2019
	Blackjack Assignment
	Coding a fully functional game of Blackjack!
*/
"use strict";
let dealerCard1 = null;
let dealerCard2 = null;
let dealerCard3 = null;
let dealerCard4 = null;
let dealerCard5 = null;
let dealerCard6 = null;
let dealerCard7 = null;
let dealerCard8 = null;
let dealerCard9 = null;
let dealerCard10 = null;
let dealerCard11 = null;
let playerCard1 = null;
let playerCard2 = null;
let playerCard3 = null;
let playerCard4 = null;
let playerCard5 = null;
let playerCard6 = null;
let playerCard7 = null;
let playerCard8 = null;
let playerCard9 = null;
let playerCard10 = null;
let playerCard11 = null;
//11 cards is the max possible amount of cards you can have.(four 1s + four 2s + three 3s = 21)
let cardCheckDealer1 = null;
let cardCheckDealer2 = null;
let cardCheckDealer3 = null;
let cardCheckDealer4 = null;
let cardCheckDealer5 = null;
let cardCheckDealer6 = null;
let cardCheckDealer7 = null;
let cardCheckDealer8 = null;
let cardCheckDealer9 = null;
let cardCheckDealer10 = null;
let cardCheckDealer11 = null;
let cardCheckPlayer1 = null;
let cardCheckPlayer2 = null;
let cardCheckPlayer3 = null;
let cardCheckPlayer4 = null;
let cardCheckPlayer5 = null;
let cardCheckPlayer6 = null;
let cardCheckPlayer7 = null;
let cardCheckPlayer8 = null;
let cardCheckPlayer9 = null;
let cardCheckPlayer10 = null;
let cardCheckPlayer11 = null;
let chipCount = 100;
let betAmount = 0;
let betaTotal;
let dealerCardTotal;
let playerCardTotal;
let dealerTurn;
$(document).ready(function(event){
	$("#imgPlayerCard3").hide();
	$("#imgPlayerCard4").hide();
	$("#imgPlayerCard5").hide();
	$("#imgPlayerCard6").hide();
	$("#imgPlayerCard7").hide();
	$("#imgPlayerCard8").hide();
	$("#imgPlayerCard9").hide();
	$("#imgPlayerCard10").hide();
	$("#imgPlayerCard11").hide();
	$("#imgDealerCard3").hide();
	$("#imgDealerCard4").hide();
	$("#imgDealerCard5").hide();
	$("#imgDealerCard6").hide();
	$("#imgDealerCard7").hide();
	$("#imgDealerCard8").hide();
	$("#imgDealerCard9").hide();
	$("#imgDealerCard10").hide();
	$("#imgDealerCard11").hide();
	$("#btnNewHand").prop("disabled", true);
	$("#btnBetReset").prop("disabled", true);
	$("#btnDraw").prop("disabled", true);
	$("#btnStay").prop("disabled", true);
	$("#btnBet1000").prop("disabled", true);
	$("#btnDeal").click(function(event){
		$("#backgroundMusic")[0].play();
		$("#btnDeal").prop("disabled", true);
		$("#btnBet1").prop("disabled", true);
		$("#btnBet10").prop("disabled", true);
		$("#btnBet100").prop("disabled", true);
		$("#btnBet1000").prop("disabled", true);
		$("#btnBetAllIn").prop("disabled", true);
		$("#btnBetReset").prop("disabled", true);
		$("#btnDraw").prop("disabled", false);
		$("#btnStay").prop("disabled", false);
		dealerCard1 = Math.round(1 + Math.random() * 51);
		$("#imgDealerCard1").prop("src","cards/cards/card" + dealerCard1 + ".JPG");
		cardCheckDealer1 = dealerCard1;
		dealerCard1 = dealerCard1 % 13;
		if(dealerCard1 == 0 || dealerCard1 == 11 || dealerCard1 == 12){
			dealerCard1 = 10;
		}
		if(dealerCard1 == 1){
			dealerCard1 = 11;
		}
		//this will be used to find the correct total number. you need to divide by 13 to get its remainder. some exceptions are the face cards, which are all ten, and ace, which can be 1 or 11.
		dealerCardTotal = dealerCard1;
		$("#lblDealerTotal").text(dealerCardTotal);
		do{
			playerCard1 = Math.round(1 + Math.random() * 51);
		}while(playerCard1 == cardCheckDealer1);
		cardCheckPlayer1 = playerCard1;
		do{
			playerCard2 = Math.round(1 + Math.random() * 51);
		}while(playerCard2 == (cardCheckDealer1 && cardCheckPlayer1));
		cardCheckPlayer2 = playerCard2;
		$("#imgPlayerCard1").prop("src","cards/cards/card" + playerCard1 + ".JPG");
		$("#imgPlayerCard2").prop("src","cards/cards/card" + playerCard2 + ".JPG");
		playerCard1 = playerCard1 % 13;
		playerCard2 = playerCard2 % 13;
		if(playerCard1 == 0 || playerCard1 == 11 || playerCard1 == 12){
			playerCard1 = 10;
		}
		if(playerCard2 == 0 || playerCard2 == 11 || playerCard2 == 12){
			playerCard2 = 10;
		}
		betaTotal = playerCard1 + playerCard2;
		if(playerCard1 == 1){
			if(betaTotal <= 11){
				playerCard1 = 11;
			}
			betaTotal = playerCard1 + playerCard2;
		}
		if(playerCard2 == 1){
			if(betaTotal <= 11){
				playerCard2 = 11;
			}
			betaTotal = playerCard1 + playerCard2;
		}
		playerCardTotal = betaTotal;
		$("#lblPlayerTotal").text(playerCardTotal);
		betaTotal = 0;		
	});
	$("#btnDraw").click(function(event){
		if(playerCard3 == null){
			do{
				playerCard3 = Math.round(1 + Math.random() * 51);
			}while(playerCard3 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2));
			cardCheckPlayer3 = playerCard3;
			$("#imgPlayerCard3").prop("src","cards/cards/card" + playerCard3 + ".JPG");
			$("#imgPlayerCard3").show();
			playerCard3 = playerCard3 % 13;
			if(playerCard3 == 0 || playerCard3 == 11 || playerCard3 == 12){
				playerCard3 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3;
			if(playerCard3 == 1){
				if(betaTotal <= 11){
					playerCard3 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard4 == null){
			do{
				playerCard4 = Math.round(1 + Math.random() * 51);
			}while(playerCard4 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3));
			cardCheckPlayer4 = playerCard4;
			$("#imgPlayerCard4").prop("src","cards/cards/card" + playerCard4 + ".JPG");
			$("#imgPlayerCard4").show();
			playerCard4 = playerCard4 % 13;
			if(playerCard4 == 0 || playerCard4 == 11 || playerCard4 == 12){
				playerCard4 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4;
			if(playerCard4 == 1){
				if(betaTotal <= 11){
					playerCard4 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard5 == null){
			do{
				playerCard5 = Math.round(1 + Math.random() * 51);
			}while(playerCard5 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4));
			cardCheckPlayer5 = playerCard5;
			$("#imgPlayerCard5").prop("src","cards/cards/card" + playerCard5 + ".JPG");
			$("#imgPlayerCard5").show();
			playerCard5 = playerCard5 % 13;
			if(playerCard5 == 0 || playerCard5 == 11 || playerCard5 == 12){
				playerCard5 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5;
			if(playerCard5 == 1){
				if(betaTotal <= 11){
					playerCard5 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard6 == null){
			do{
				playerCard6 = Math.round(1 + Math.random() * 51);
			}while(playerCard6 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5));
			cardCheckPlayer6 = playerCard6;
			$("#imgPlayerCard6").prop("src","cards/cards/card" + playerCard6 + ".JPG");
			$("#imgPlayerCard6").show();
			playerCard6 = playerCard6 % 13;
			if(playerCard6 == 0 || playerCard6 == 11 || playerCard6 == 12){
				playerCard6 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5 + playerCard6;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5 + playerCard6;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5 + playerCard6;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			if(playerCard5 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard6;
				if(betaTotal >= 11){
					playerCard5 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6;
			if(playerCard6 == 1){
				if(betaTotal <= 11){
					playerCard6 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard7 == null){
			do{
				playerCard7 = Math.round(1 + Math.random() * 51);
			}while(playerCard7 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6));
			cardCheckPlayer7 = playerCard7;
			$("#imgPlayerCard7").prop("src","cards/cards/card" + playerCard7 + ".JPG");
			$("#imgPlayerCard7").show();
			playerCard7 = playerCard7 % 13;
			if(playerCard7 == 0 || playerCard7 == 11 || playerCard7 == 12){
				playerCard7 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5 + playerCard6 + playerCard7;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5 + playerCard6 + playerCard7;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			if(playerCard5 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard6 + playerCard7;
				if(betaTotal >= 11){
					playerCard5 = 1;
				}
			}
			if(playerCard6 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard7;
				if(betaTotal >= 11){
					playerCard6 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7;
			if(playerCard7 == 1){
				if(betaTotal <= 11){
					playerCard7 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard8 == null){
			do{
				playerCard8 = Math.round(1 + Math.random() * 51);
			}while(playerCard8 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7));
			cardCheckPlayer8 = playerCard8;
			$("#imgPlayerCard8").prop("src","cards/cards/card" + playerCard8 + ".JPG");
			$("#imgPlayerCard8").show();
			playerCard8 = playerCard8 % 13;
			if(playerCard8 == 0 || playerCard8 == 11 || playerCard8 == 12){
				playerCard8 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5 + playerCard6 + playerCard7 + playerCard8;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			if(playerCard5 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard6 + playerCard7 + playerCard8;
				if(betaTotal >= 11){
					playerCard5 = 1;
				}
			}
			if(playerCard6 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard7 + playerCard8;
				if(betaTotal >= 11){
					playerCard6 = 1;
				}
			}
			if(playerCard7 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard8;
				if(betaTotal >= 11){
					playerCard7 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8;
			if(playerCard8 == 1){
				if(betaTotal <= 11){
					playerCard8 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard9 == null){
			do{
				playerCard9 = Math.round(1 + Math.random() * 51);
			}while(playerCard9 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8));
			cardCheckPlayer9 = playerCard9;
			$("#imgPlayerCard9").prop("src","cards/cards/card" + playerCard9 + ".JPG");
			$("#imgPlayerCard9").show();
			playerCard9 = playerCard9 % 13;
			if(playerCard9 == 0 || playerCard9 == 11 || playerCard9 == 12){
				playerCard9 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			if(playerCard5 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard5 = 1;
				}
			}
			if(playerCard6 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard7 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard6 = 1;
				}
			}
			if(playerCard7 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard8 + playerCard9;
				if(betaTotal >= 11){
					playerCard7 = 1;
				}
			}
			if(playerCard8 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard9;
				if(betaTotal >= 11){
					playerCard8 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
			if(playerCard9 == 1){
				if(betaTotal <= 11){
					playerCard9 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard10 == null){
			do{
				playerCard10 = Math.round(1 + Math.random() * 51);
			}while(playerCard10 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9));
			cardCheckPlayer10 = playerCard10;
			$("#imgPlayerCard10").prop("src","cards/cards/card" + playerCard10 + ".JPG");
			$("#imgPlayerCard10").show();
			playerCard10 = playerCard10 % 13;
			if(playerCard10 == 0 || playerCard10 == 11 || playerCard10 == 12){
				playerCard10 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			if(playerCard5 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard5 = 1;
				}
			}
			if(playerCard6 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard6 = 1;
				}
			}
			if(playerCard7 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard8 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard7 = 1;
				}
			}
			if(playerCard8 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard9 + playerCard10;
				if(betaTotal >= 11){
					playerCard8 = 1;
				}
			}
			if(playerCard9 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard10;
				if(betaTotal >= 11){
					playerCard9 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
			if(playerCard10 == 1){
				if(betaTotal <= 11){
					playerCard10 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		else if(playerCard11 == null){
			do{
				playerCard11 = Math.round(1 + Math.random() * 51);
			}while(playerCard11 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10));
			cardCheckPlayer11 = playerCard11;
			$("#imgPlayerCard11").prop("src","cards/cards/card" + playerCard11 + ".JPG");
			$("#imgPlayerCard11").show();
			playerCard11 = playerCard11 % 13;
			if(playerCard11 == 0 || playerCard11 == 11 || playerCard11 == 12){
				playerCard11 = 10;
			}
			if(playerCard1 == 11){
				betaTotal = playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard1 = 1;
				}
			}
			if(playerCard2 == 11){
				betaTotal = playerCard1 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard2 = 1;
				}
			}
			if(playerCard3 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard3 = 1;
				}
			}
			if(playerCard4 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard4 = 1;
				}
			}
			if(playerCard5 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard5 = 1;
				}
			}
			if(playerCard6 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard6 = 1;
				}
			}
			if(playerCard7 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard7 = 1;
				}
			}
			if(playerCard8 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard9 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard8 = 1;
				}
			}
			if(playerCard9 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard10 + playerCard11;
				if(betaTotal >= 11){
					playerCard9 = 1;
				}
			}
			if(playerCard10 == 11){
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard11;
				if(betaTotal >= 11){
					playerCard10 = 1;
				}
			}
			betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
			if(playerCard11 == 1){
				if(betaTotal <= 11){
					playerCard11 = 11;
				}
				betaTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
			}
			playerCardTotal = betaTotal;
			betaTotal = null;
		}
		if(playerCardTotal >= 22){
			$("#btnDraw").prop("disabled", true);
		}
		playerCardTotal = playerCard1 + playerCard2 + playerCard3 + playerCard4 + playerCard5 + playerCard6 + playerCard7 + playerCard8 + playerCard9 + playerCard10 + playerCard11;
		$("#lblPlayerTotal").text(playerCardTotal);
	});
	$("#btnStay").click(function(event){
		$("#btnStay").prop("disabled", true);
		$("#btnDraw").prop("disabled", true);
		dealerTurn = true;
		do{
			dealerCard2 = Math.round(1 + Math.random() * 51);
		}while(dealerCard2 == (cardCheckDealer1 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
		cardCheckDealer2 = dealerCard2;
		$("#imgDealerCard2").prop("src","cards/cards/card" + dealerCard2 + ".JPG");
		dealerCard2 = dealerCard2 % 13;
		if(dealerCard2 == 0 || dealerCard2 == 11 || dealerCard2 == 12){
			dealerCard2 = 10;
		}
		betaTotal = dealerCard1 + dealerCard2;
		if(dealerCard2 == 1){
			if(betaTotal <= 11){
				dealerCard2 = 11;
			}
			betaTotal = dealerCard1 + dealerCard2;
		}
		dealerCardTotal = betaTotal;
		betaTotal = null;
		$("#lblDealerTotal").text(dealerCardTotal);
		if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard3 = Math.round(1 + Math.random() * 51);
			}while(dealerCard3 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer3 = dealerCard3;
			$("#imgDealerCard3").prop("src", "cards/cards/card" + dealerCard3 + ".JPG");
			$("#imgDealerCard3").show();
			dealerCard3 = dealerCard3 % 13;
			if(dealerCard3 == 0 || dealerCard3 == 11 || dealerCard3 == 12){
				dealerCard3 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3;
				if(betaTotal <= 11){
					dealerCard3 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || (playerCardTotal == dealerCardTotal && dealerCardTotal <= 15)) && dealerTurn == true){
			do{
				dealerCard4 = Math.round(1 + Math.random() * 51);
			}while(dealerCard4 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer4 = dealerCard4;
			$("#imgDealerCard4").prop("src", "cards/cards/card" + dealerCard4 + ".JPG");
			$("#imgDealerCard4").show();
			dealerCard4 = dealerCard4 % 13;
			if(dealerCard4 == 0 || dealerCard4 == 11 || dealerCard4 == 12){
				dealerCard4 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4;
				if(betaTotal <= 11){
					dealerCard4 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard5 = Math.round(1 + Math.random() * 51);
			}while(dealerCard5 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer5 = dealerCard5;
			$("#imgDealerCard5").prop("src", "cards/cards/card" + dealerCard5 + ".JPG");
			$("#imgDealerCard5").show();
			dealerCard5 = dealerCard5 % 13;
			if(dealerCard5 == 0 || dealerCard5 == 11 || dealerCard5 == 12){
				dealerCard5 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5;
				if(betaTotal <= 11){
					dealerCard5 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard6 = Math.round(1 + Math.random() * 51);
			}while(dealerCard6 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckDealer5 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer6 = dealerCard6;
			$("#imgDealerCard6").prop("src", "cards/cards/card" + dealerCard6 + ".JPG");
			$("#imgDealerCard6").show();
			dealerCard6 = dealerCard6 % 13;
			if(dealerCard6 == 0 || dealerCard6 == 11 || dealerCard6 == 12){
				dealerCard6 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5 + dealerCard6;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5 + dealerCard6;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard6;
				if(betaTotal >= 11){
					dealerCard5 = 1;
				}
			}
			if(dealerCard6 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6;
				if(betaTotal <= 11){
					dealerCard6 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard7 = Math.round(1 + Math.random() * 51);
			}while(dealerCard7 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckDealer5 && cardCheckDealer6 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer7 = dealerCard7;
			$("#imgDealerCard7").prop("src", "cards/cards/card" + dealerCard7 + ".JPG");
			$("#imgDealerCard7").show();
			dealerCard7 = dealerCard7 % 13;
			if(dealerCard7 == 0 || dealerCard7 == 11 || dealerCard7 == 12){
				dealerCard7 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5 + dealerCard6 + dealerCard7;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard6 + dealerCard7;
				if(betaTotal >= 11){
					dealerCard5 = 1;
				}
			}
			if(dealerCard6 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard7;
				if(betaTotal >= 11){
					dealerCard6 = 1;
				}
			}
			if(dealerCard7 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7;
				if(betaTotal <= 11){
					dealerCard7 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard8 = Math.round(1 + Math.random() * 51);
			}while(dealerCard8 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckDealer5 && cardCheckDealer6 && cardCheckDealer7 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer8 = dealerCard8;
			$("#imgDealerCard8").prop("src", "cards/cards/card" + dealerCard8 + ".JPG");
			$("#imgDealerCard8").show();
			dealerCard8 = dealerCard8 % 13;
			if(dealerCard8 == 0 || dealerCard8 == 11 || dealerCard8 == 12){
				dealerCard8 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard6 + dealerCard7 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard5 = 1;
				}
			}
			if(dealerCard6 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard7 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard6 = 1;
				}
			}
			if(dealerCard7 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard8;
				if(betaTotal >= 11){
					dealerCard7 = 1;
				}
			}
			if(dealerCard8 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8;
				if(betaTotal <= 11){
					dealerCard8 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard9 = Math.round(1 + Math.random() * 51);
			}while(dealerCard9 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckDealer5 && cardCheckDealer6 && cardCheckDealer7 && cardCheckDealer8 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer9 = dealerCard9;
			$("#imgDealerCard9").prop("src", "cards/cards/card" + dealerCard9 + ".JPG");
			$("#imgDealerCard9").show();
			dealerCard9 = dealerCard9 % 13;
			if(dealerCard9 == 0 || dealerCard9 == 11 || dealerCard9 == 12){
				dealerCard9 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard5 = 1;
				}
			}
			if(dealerCard6 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard6 = 1;
				}
			}
			if(dealerCard7 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard8 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard7 = 1;
				}
			}
			if(dealerCard8 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard9;
				if(betaTotal >= 11){
					dealerCard8 = 1;
				}
			}
			if(dealerCard9 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
				if(betaTotal <= 11){
					dealerCard9 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard10 = Math.round(1 + Math.random() * 51);
			}while(dealerCard10 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckDealer5 && cardCheckDealer6 && cardCheckDealer7 && cardCheckDealer8 && cardCheckDealer9 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer10 = dealerCard10;
			$("#imgDealerCard10").prop("src", "cards/cards/card" + dealerCard10 + ".JPG");
			$("#imgDealerCard10").show();
			dealerCard10 = dealerCard10 % 13;
			if(dealerCard10 == 0 || dealerCard10 == 11 || dealerCard10 == 12){
				dealerCard10 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard5 = 1;
				}
			}
			if(dealerCard6 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard6 = 1;
				}
			}
			if(dealerCard7 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard7 = 1;
				}
			}
			if(dealerCard8 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard9 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard8 = 1;
				}
			}
			if(dealerCard9 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard10;
				if(betaTotal >= 11){
					dealerCard9 = 1;
				}
			}
			if(dealerCard10 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
				if(betaTotal <= 11){
					dealerCard10 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if((playerCardTotal > dealerCardTotal || playerCardTotal == dealerCardTotal && dealerCardTotal <= 15) && dealerTurn == true){
			do{
				dealerCard11 = Math.round(1 + Math.random() * 51);
			}while(dealerCard11 == (cardCheckDealer1 && cardCheckDealer2 && cardCheckDealer3 && cardCheckDealer4 && cardCheckDealer5 && cardCheckDealer6 && cardCheckDealer7 && cardCheckDealer8 && cardCheckDealer9 && cardCheckDealer10 && cardCheckPlayer1 && cardCheckPlayer2 && cardCheckPlayer3 && cardCheckPlayer4 && cardCheckPlayer5 && cardCheckPlayer6 && cardCheckPlayer7 && cardCheckPlayer8 && cardCheckPlayer9 && cardCheckPlayer10 && cardCheckPlayer11));
			cardCheckDealer11 = dealerCard11;
			$("#imgDealerCard11").prop("src", "cards/cards/card" + dealerCard11 + ".JPG");
			$("#imgDealerCard11").show();
			dealerCard11 = dealerCard11 % 13;
			if(dealerCard11 == 0 || dealerCard11 == 11 || dealerCard11 == 12){
				dealerCard11 = 10;
			}
			if(dealerCard1 == 11){
				betaTotal = dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard1 = 1;
				}
			}
			if(dealerCard2 == 11){
				betaTotal = dealerCard1 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard2 = 1;
				}
			}
			if(dealerCard3 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard3 = 1;
				}
			}
			if(dealerCard4 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard4 = 1;
				}
			}
			if(dealerCard5 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard5 = 1;
				}
			}
			if(dealerCard6 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard6 = 1;
				}
			}
			if(dealerCard7 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard7 = 1;
				}
			}
			if(dealerCard8 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard8 = 1;
				}
			}
			if(dealerCard9 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard10 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard9 = 1;
				}
			}
			if(dealerCard10 == 11){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard11;
				if(betaTotal >= 11){
					dealerCard10 = 1;
				}
			}
			if(dealerCard11 == 1){
				betaTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
				if(betaTotal <= 11){
					dealerCard10 = 11;
				}
			}
			dealerCardTotal = dealerCard1 + dealerCard2 + dealerCard3 + dealerCard4 + dealerCard5 + dealerCard6 + dealerCard7 + dealerCard8 + dealerCard9 + dealerCard10 + dealerCard11;
			$("#lblDealerTotal").text(dealerCardTotal);
			if(playerCardTotal >= 22 || dealerCardTotal == 21){	
			dealerTurn = false;
			}
		}
		if(playerCardTotal == 21 && dealerCardTotal != 21){
			betAmount = betAmount * 2.5;
			chipCount = chipCount + betAmount;
			betAmount = 0;
			$("#lblBetAmount").text(betAmount);
			$("#lblChipCount").text(chipCount);
			$("#lblWinTitle").text("BLACKJACK! YOU WIN MORE!");
			$("#backgroundMusic")[0].pause();
			$("#winMusic")[0].play();
			setTimeout(continueMusicWin, 2000);
		}
		else if(dealerCardTotal >= 22){
			betAmount = betAmount * 2;
			chipCount = chipCount + betAmount;
			betAmount = 0;
			$("#lblBetAmount").text(betAmount);
			$("#lblChipCount").text(chipCount);
			$("#lblWinTitle").text("You Win");
			$("#backgroundMusic")[0].pause();
			$("#winMusic")[0].play();
			setTimeout(continueMusicWin, 2000);
		}
		else if(playerCardTotal >= 22 || (dealerCardTotal == 21 && playerCardTotal != 21)){	
			betAmount = 0;
			$("#lblBetAmount").text(betAmount);
			$("#lblWinTitle").text("You Lose");
			$("#backgroundMusic")[0].pause();
			$("#loseMusic")[0].play();
			setTimeout(continueMusicLose, 6300);
		}
		else if(playerCardTotal > dealerCardTotal){
			betAmount = betAmount * 2;
			chipCount = chipCount + betAmount;
			betAmount = 0;
			$("#lblBetAmount").text(betAmount);
			$("#lblChipCount").text(chipCount);
			$("#lblWinTitle").text("You Win");
			$("#backgroundMusic")[0].pause();
			$("#winMusic")[0].play();
			setTimeout(continueMusicWin, 2000);
		}
		else if(playerCardTotal < dealerCardTotal){
			betAmount = 0;
			$("#lblBetAmount").text(betAmount);
			$("#lblWinTitle").text("You Lose");
			$("#backgroundMusic")[0].pause();
			$("#loseMusic")[0].play();
			setTimeout(continueMusicLose, 6300);
		}
		else if(playerCardTotal == dealerCardTotal){
			chipCount = chipCount + betAmount;
			betAmount = 0;
			$("#lblBetAmount").text(betAmount);
			$("#lblChipCount").text(chipCount);
			$("#lblWinTitle").text("Its A Tie! Bet Returned.")
		}
		$("#btnNewHand").prop("disabled", false);
	});
	$("#btnBet1").click(function(event){
		if(chipCount >= 1){
			chipCount = chipCount - 1;
			betAmount = betAmount + 1;
			$("#lblChipCount").text(chipCount);
			$("#lblBetAmount").text(betAmount);
			$("#btnBetReset").prop("disabled", false);
		}
		if(chipCount < 1000){
			$("#btnbet1000").prop("disabled", true);
			if(chipCount < 100){
				$("#btnBet100").prop("disabled", true);
				if(chipCount < 10){
					$("#btnBet10").prop("disabled", true);
					if(chipCount == 0){
						$("#btnBet1").prop("disabled", true);
						$("#btnBetAllIn").prop("disabled", true);
					}
				}
			}
		}
	});
	$("#btnBet10").click(function(event){
		if(chipCount >= 10){
			chipCount = chipCount - 10;
			betAmount = betAmount + 10;
			$("#lblChipCount").text(chipCount);
			$("#lblBetAmount").text(betAmount);
			$("#btnBetReset").prop("disabled", false);
		}
		if(chipCount < 1000){
			$("#btnbet1000").prop("disabled", true);
			if(chipCount < 100){
				$("#btnBet100").prop("disabled", true);
				if(chipCount < 10){
					$("#btnBet10").prop("disabled", true);
					if(chipCount == 0){
						$("#btnBet1").prop("disabled", true);
						$("#btnBetAllIn").prop("disabled", true);
					}
				}
			}
		}
	});
	$("#btnBet100").click(function(event){
		if(chipCount >= 100){
			chipCount = chipCount - 100;
			betAmount = betAmount + 100;
			$("#lblChipCount").text(chipCount);
			$("#lblBetAmount").text(betAmount);
			$("#btnBetReset").prop("disabled", false);
		}
		if(chipCount < 1000){
			$("#btnbet1000").prop("disabled", true);
			if(chipCount < 100){
				$("#btnBet100").prop("disabled", true);
				if(chipCount < 10){
					$("#btnBet10").prop("disabled", true);
					if(chipCount == 0){
						$("#btnBet1").prop("disabled", true);
						$("#btnBetAllIn").prop("disabled", true);
					}
				}
			}
		}
	});
	$("#btnBet1000").click(function(event){
		if(chipCount >= 1000){
			chipCount = chipCount - 1000;
			betAmount = betAmount + 1000;
			$("#lblChipCount").text(chipCount);
			$("#lblBetAmount").text(betAmount);
			$("#btnBetReset").prop("disabled", false);
		}
		if(chipCount < 1000){
			$("#btnbet1000").prop("disabled", true);
			if(chipCount < 100){
				$("#btnBet100").prop("disabled", true);
				if(chipCount < 10){
					$("#btnBet10").prop("disabled", true);
					if(chipCount == 0){
						$("#btnBet1").prop("disabled", true);
						$("#btnBetAllIn").prop("disabled", true);
					}
				}
			}
		}
	});
	$("#btnBetAllIn").click(function(event){
		if(chipCount >= 1){
			betAmount = betAmount + chipCount;
			chipCount = 0;
			$("#lblChipCount").text(chipCount);
			$("#lblBetAmount").text(betAmount);
			$("#btnBet1").prop("disabled", true);
			$("#btnBet10").prop("disabled", true);
			$("#btnBet100").prop("disabled", true);
			$("#btnBet1000").prop("disabled", true);
			$("#btnBetAllIn").prop("disabled", true);
			$("#btnBetReset").prop("disabled", false);
		}
	});
	$("#btnBetReset").click(function(event){
		chipCount = chipCount + betAmount;
		betAmount = 0;
		$("#lblChipCount").text(chipCount);
		$("#lblBetAmount").text(betAmount);
		$("#btnBetReset").prop("disabled", true);
		if(chipCount >= 1){
			$("#btnBet1").prop("disabled", false);
			$("#btnBetAllIn").prop("disabled", false);
			if(chipCount >= 10){
				$("#btnBet10").prop("disabled", false);
				if(chipCount >= 100){
					$("#btnBet100").prop("disabled", false);
					if(chipCount >= 1000){
						$("#btnBet1000").prop("disabled", false);
					}
				}
			}
		}
	});
	$("#btnNewHand").click(function(event){
		$("#btnNewHand").prop("disabled", true);
		if(chipCount >= 1){
			$("#btnBet1").prop("disabled", false);
			$("#btnBetAllIn").prop("disabled", false);
			if(chipCount >= 10){
				$("#btnBet10").prop("disabled", false);
				if(chipCount >= 100){
					$("#btnBet100").prop("disabled", false);
					if(chipCount >= 1000){
						$("#btnBet1000").prop("disabled", false);
					}
				}
			}
		}
		$("#lblWinTitle").text("BlackJack");
		playerCardTotal = 0;
		dealerCardTotal = 0;
		playerCard1 = null;
		playerCard2 = null;
		playerCard3 = null;
		playerCard4 = null;
		playerCard5 = null;
		playerCard6 = null;
		playerCard7 = null;
		playerCard8 = null;
		playerCard9 = null;
		playerCard10 = null;
		playerCard11 = null;
		dealerCard1 = null;
		dealerCard2 = null;
		dealerCard3 = null;
		dealerCard4 = null;
		dealerCard5 = null;
		dealerCard6 = null;
		dealerCard7 = null;
		dealerCard8 = null;
		dealerCard9 = null;
		dealerCard10 = null;
		dealerCard11 = null;
		cardCheckDealer1 = null;
		cardCheckDealer2 = null;
		cardCheckDealer3 = null;
		cardCheckDealer4 = null;
		cardCheckDealer5 = null;
		cardCheckDealer6 = null;
		cardCheckDealer7 = null;
		cardCheckDealer8 = null;
		cardCheckDealer9 = null;
		cardCheckDealer10 = null;
		cardCheckDealer11 = null;
		cardCheckPlayer1 = null;
		cardCheckPlayer2 = null;
		cardCheckPlayer3 = null;
		cardCheckPlayer4 = null;
		cardCheckPlayer5 = null;
		cardCheckPlayer6 = null;
		cardCheckPlayer7 = null;
		cardCheckPlayer8 = null;
		cardCheckPlayer9 = null;
		cardCheckPlayer10 = null;
		cardCheckPlayer11 = null;
		$("#imgPlayerCard1").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard2").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard3").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard4").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard5").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard6").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard7").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard8").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard9").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard10").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard11").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard1").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard2").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard3").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard4").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard5").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard6").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard7").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard8").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard9").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard10").prop("src", "cards/cards/card55.JPG");
		$("#imgDealerCard11").prop("src", "cards/cards/card55.JPG");
		$("#imgPlayerCard3").hide();
		$("#imgPlayerCard4").hide();
		$("#imgPlayerCard5").hide();
		$("#imgPlayerCard6").hide();
		$("#imgPlayerCard7").hide();
		$("#imgPlayerCard8").hide();
		$("#imgPlayerCard9").hide();
		$("#imgPlayerCard10").hide();
		$("#imgPlayerCard11").hide();
		$("#imgDealerCard3").hide();
		$("#imgDealerCard4").hide();
		$("#imgDealerCard5").hide();
		$("#imgDealerCard6").hide();
		$("#imgDealerCard7").hide();
		$("#imgDealerCard8").hide();
		$("#imgDealerCard9").hide();
		$("#imgDealerCard10").hide();
		$("#imgDealerCard11").hide();
		$("#lblPlayerTotal").text(playerCardTotal);
		$("#lblDealerTotal").text(dealerCardTotal);
		$("#btnDraw").prop("disabled", true);
		$("#btnStay").prop("disabled", true);
		$("#btnDeal").prop("disabled", false);
	});
});
function continueMusicWin(){
	$("#backgroundMusic")[0].play();
}
function continueMusicLose(){
	$("#backgroundMusic")[0].play();
}
