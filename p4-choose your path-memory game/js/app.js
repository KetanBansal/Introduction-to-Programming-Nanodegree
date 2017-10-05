/*
 * Create a list that holds all of your cards
 */

var cards = ['diamond','plane','anchor','bolt','cube','anchor',
			 'leaf','bicycle','diamond','bomb','leaf','bomb',
			'bolt','bicycle','plane','cube'];

var deck = $("ul.deck");
var stars = $('ul.stars').find('i');
var movesSpan = $('span.moves');
var restartDiv = $('.restart');
var rating2= 15;
var rating1= 22; 
	
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//This function is called on clicking start game button.

function gameStart(){
	var shuffleCards = shuffle(cards);
	deck.empty();
	moves = 0;
    match = 0;
    movesSpan.html(moves);
	
	//cards are appended in html
	shuffleCards.forEach(function(card){
		deck.append('<li class="card"><i class="fa fa-'+card+'"></i></li>');
	});
	showTimer();
}


//this function shows timer on starting the game.
function showTimer() {
	var totalSeconds = 0;
    timerVar = setInterval(countTimer, 1000);
    function countTimer() {
	   ++totalSeconds;
	   var hour = Math.floor(totalSeconds /3600);
	   var minute = Math.floor((totalSeconds - hour*3600)/60);
	   var seconds = totalSeconds - (hour*3600 + minute*60);
	   $("#counter").text("Timer " + hour + ":" + minute + ":" + seconds);
	}
}

$('button.start').on('click',function(){
	gameStart();
})

deck.on('click',".card:not('.match, .open')",function(){
	showCard($(this));
});

//this function contains the logic of  game.
function showCard(card){
	var card = $(card);
	var cardIcon = card.children().attr('class');
	card.addClass('open show');    //card is shown
	var opencard = $('li.card.open.show').not(card);
	if(opencard.length){
		moves++;
		movesSpan.html(moves);
		var opencardIcon = $(opencard).children().attr('class');
		if(cardIcon === opencardIcon){			// condition check if previously opened card matched current card.
			card.removeClass("open show").addClass("match animated  tada");
			opencard.removeClass("open show").addClass("match animated  tada");
			match++;
		}else{
			card.addClass("nomatch animated  shake");
			opencard.addClass("nomatch animated  shake");
			$('.cards').css('cursor','pointer');
			setTimeout(function() {
				$(card).removeClass('open show shake nomatch animated');
				$(opencard).removeClass('open show shake nomatch animated');
			}, 600);
			$('.cards').css('cursor','none');
		}
	}
	showGameRatings();			//game ratings are shown.
	if ( ((cards.length)/2) === match) {
		showGameRatings(moves);
        endGame();
    }
}


//this function shows the game ratings in stars.
//default stars shown are 3.
//as moves increases to 15, stars are decreased.
//if moves are greater than 22, then stars are 1
//if moves are greater than 15 and less than 22, then stars shown are 2.
//else stars shown are 3.
function showGameRatings(){
	if(moves>=rating1){
		$(stars).eq(0).removeClass('fa-star-o').addClass('fa-star')
		$(stars).eq(1).addClass('fa-star-o').removeClass('fa-star');
		$(stars).eq(2).addClass('fa-star-o').removeClass('fa-star');
	}else if(moves<rating1 && moves>=rating2){
		$(stars).eq(1).removeClass('fa-star-o').addClass('fa-star');
		$(stars).eq(2).addClass('fa-star-o').removeClass('fa-star');
		$(stars).eq(0).addClass('fa-star').removeClass('fa-star-o');
	}else{
		$(stars).eq(2).removeClass('fa-star-o').addClass('fa-star')
		$(stars).eq(1).addClass('fa-star').removeClass('fa-star-o');
		$(stars).eq(0).addClass('fa-star').removeClass('fa-star-o');
	}
}

//this function is called on restart click.
function restart() {
    swal({
            title: "Are you sure you want to reset",
            text: "All your progress will be lost!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, Reset Please!",
            closeOnConfirm: false
        },
        function() {
            swal("Reset", "The Game has been Reset!.", "success");
			//window.location.reload();
			clearInterval(timerVar);
			gameStart();
        });
}
restartDiv.on('click', restart);


//this function is called on game ending if all cards are matched.
function endGame() {
	var score = $(".stars").find(".fa.fa-star").length;
    swal({
        title: "Congratulatios!",
        text: "You have matched all the Cards and took  only " + moves + " clicks and manged to earn " + score + " Star in time " +$("#counter").html().split(" ")[1] + " !!",
        imageUrl: "img/thumbs.jpg",
        type: 'success',
        confirmButtonColor: '#33cc33',
        confirmButtonText: 'Play again!'
    },
    function(isConfirm) {
        if (isConfirm) {
            gameStart();
        }
    })
	clearInterval(timerVar);
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
