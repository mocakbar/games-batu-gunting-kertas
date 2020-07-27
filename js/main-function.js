$('.hasil').hide()

$('.kertas').on("click", function(){
  $('.player .pilihan').attr('src', './images/icon-paper.svg');
  $('.hasil').show();
  let orang = 'paper';
  compPilih(orang);
  playerKertas()
  $('.pilih-mana').hide()
})

$('.gunting').on("click", function(){
  let orang = 'scissors';
  $('.hasil').show()
  $('.player .pilihan').attr('src', './images/icon-scissors.svg')
  compPilih(orang)
  playerGunting()
  $('.pilih-mana').hide()
})

$('.batu').on("click", function(){
  let orang = 'rock';
  $('.hasil').show()
  $('.player .pilihan').attr('src', './images/icon-rock.svg')
  compPilih(orang)
  playerBatu()
  $('.pilih-mana').hide()
})

function playerKertas(){
  $('.player .pilihan').addClass('paper');
  $('.player').addClass('kertas');
  if($('.player .pilihan').hasClass('rock') || $('.player .pilihan').hasClass('scissors')){
    $('.player .pilihan').removeClass('rock scissors')
    $('.player').removeClass('batu gunting')
  }
}

function playerGunting(){
  $('.player .pilihan').addClass('scissors');
  $('.player').addClass('gunting');
  if($('.player .pilihan').hasClass('rock') || $('.player .pilihan').hasClass('paper')){
    $('.player .pilihan').removeClass('rock paper')
    $('.player').removeClass('batu kertas')
  }
}

function playerBatu(){
  $('.player .pilihan').addClass('rock');
  $('.player').addClass('batu');
  if($('.player .pilihan').hasClass('paper') || $('.player .pilihan').hasClass('scissors')){
    $('.player .pilihan').removeClass('paper scissors')
    $('.player').removeClass('kertas gunting')
  }
}

function compBatu(){
  $('.comp .pilihan').addClass('rock')
  $('.comp').addClass('batu')
  if($('.comp .pilihan').hasClass('paper') || $('.comp .pilihan').hasClass('scissors')){
    $('.comp .pilihan').removeClass('paper scissors')
    $('.comp').removeClass('kertas gunting')
  }
}

function compKertas(){
  $('.comp .pilihan').addClass('paper')
  $('.comp').addClass('kertas')
  if($('.comp .pilihan').hasClass('rock') || $('.comp .pilihan').hasClass('scissors')){
    $('.comp .pilihan').removeClass('rock scissors')
    $('.comp').removeClass('batu gunting')
  }
}

function compGunting(){
  $('.comp .pilihan').addClass('scissors')
  $('.comp').addClass('gunting')
  if($('.comp .pilihan').hasClass('rock') || $('.comp .pilihan').hasClass('paper')){
    $('.comp .pilihan').removeClass('rock paper')
    $('.comp').removeClass('batu kertas')
  }
}

function compPilih(player){
  console.log(player)
  let compLik;
  let aiChose = Math.floor(Math.random() * 3) + 1;
  console.log(aiChose)

  if(aiChose == 1) {
    $('.comp .pilihan').attr('src', './images/icon-paper.svg')
    compLik = 'paper'
    compKertas()
  } else if(aiChose == 2) {
    $('.comp .pilihan').attr('src', './images/icon-scissors.svg')
    compLik = 'scissors'
    compGunting()
  } else {
    $('.comp .pilihan').attr('src', './images/icon-rock.svg')
    compLik = 'rock'
    compBatu()
  }

  // melakukan perbandingan
  if(player == 'paper' && compLik == 'paper'){
    $('.teks-hasil').html("<span>You Tie</span>");
    $('.jml-hasil').html(jmlScore)
  } else if (player == 'paper' && compLik == 'scissors') {
    $('.teks-hasil').html("<span>You Lose</span>");
    kurangScore()
    playsound('wrong')
  } else if ( player == 'paper' && compLik == 'rock') {
    $('.teks-hasil').html("<span>You Win</span>")
    tambahScore()
    playsound('win')
  } else if ( player == 'scissors' && compLik == 'paper') {
    $('.teks-hasil').html("<span>You Win</span>")
    tambahScore()
    playsound('win')
  } else if ( player == 'scissors' && compLik == 'scissors') {
    $('.teks-hasil').html("<span>You Tie</span>")
    $('.jml-hasil').html(jmlScore)
  } else if ( player == 'scissors'&& compLik == 'rock') {
    $('.teks-hasil').html("<span>You Lose</span>")
    kurangScore()
    playsound('wrong')
  } else if ( player == 'rock' && compLik == 'paper') {
    $('.teks-hasil').html("<span>You Lose</span>")
    kurangScore()
    playsound('wrong')
  } else if ( player == 'rock' && compLik == 'scissors') {
    $('.teks-hasil').html("<span>You Win</span>")
    tambahScore()
    playsound('win')
  } else if ( player == 'rock' && compLik == 'rock') {
    $('.teks-hasil').html("<span>You Tie</span>")
    $('.jml-hasil').html(jmlScore)
  } 

}

function playsound(name){
  let audio = new Audio('sounds/' + name + '.mp3')
  audio.play()
}

// hasil score yang dimiliki.
let jmlScore = 0;
function tambahScore(){
  jmlScore++
  $('.jml-hasil').html(jmlScore)
}

function kurangScore(){
  jmlScore--
  $('.jml-hasil').html(jmlScore)
}

// function play again.
function mainLagi(){
  $('.hasil').hide()
  $('.pilih-mana').show()
}