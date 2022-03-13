var data =
[
    "babash",
    "bachannal",
    "bamboozle",
    "bazodee",
    "blasted",
    "blight",
    "bobol",
    "callaloo",
    "calypso",
    "carnival",
    "choka",
    "chook",
    "chutney",
    "crix",
    "cunumunu",
    "dingolay",
    "dotish",
    "doubles",
    "dougla",
    "ent",
    "fete",
    "frontish",
    "harden",
    "horn",
    "hornerman",
    "imps",
    "jagabat",
    "jamette",
    "jep",
    "jouvert",
    "jumbie",
    "ketch",
    "lickrish",
    "licks",
    "lime",
    "maco",
    "macocious",
    "maga",
    "mamaguy",
    "mampee",
    "nah",
    "nowherian",
    "obzokee",
    "peleau",
    "planass",
    "roti",
    "soca",
    "sorrel",
    "sousou",
    "steelpan",
    "steups",
    "tabanca",
    "tanty",
    "vaps",
    "wajang",
    "yampee",
    "zaboca",
    "zoghead"
]
var r_text = new Array ();
r_text[0] = "He was last seen eating a bake and shark in Maracas Bay.";
r_text[1] = "He was last seen currying a duck in Caura River.";
r_text[2] = "He was last seen buying a 10 piece bucket of KFC at Independence Square.";
r_text[3] = "He was last seen eating a doubles with slight by the Green Shed in Debe.";
r_text[4] = "He was last seen driving into a Double Palm.";
r_text[5] = "He was last seen buying jockeyshorts in Rattan's.";
r_text[6] = "He was last seen hiding behind a Leatherback turtle in Grande Riviere.";
r_text[7] = "He was last seen with a full crocus bag down Moruga.";
r_text[8] = "He was last seen bathing in the Nylon Pool.";
r_text[9] = "He was last seen eating Crab and Dumpling in Store Bay.";
r_text[10] = "He was last seen stealing a plant from the Asa Wright Nature center.";
r_text[11] = "He was last seen drinking a coconut by the Savannah.";
r_text[12] = "He was last seen stealing a bucket of pitch from the Pitch Lake.";
r_text[13] = "He was last seen teasing monkeys at the Emperor Valley Zoo.";
r_text[14] = "He was last seen hiding in the Gasparee Caves.";
r_text[15] = "He was last seen looking for a park in Gulf City Mall.";
r_text[16] = "He was last seen looking for his missing car at Trincity Mall.";
r_text[17] = "He was last seen buying nuts from the Rastaman by Curepe lights.";
r_text[18] = "He was last seen drinking a Stag with a straw.";
r_text[19] = "He was last seen drag racing on the Cross.";
r_text[20] = "He was last seen taking a sea bath in Mayaro.";
r_text[21] = "He was last seen running crab down Guayaguayare.";
r_text[22] = "He was last seen collecting a ticket for dark tint.";
r_text[23] = "He was last seen entering a goat race in Tobago.";
r_text[24] = "He was last seen throwing guavas at caimans in the Caroni Swamp.";
r_text[25] = "He was last seen looking for chadon beni in Paramin.";
r_text[26] = "He was last seen trying to enter the Great Race with a dinghy.";
r_text[27] = "He was last seen trying to learn Spanish down Icacos.";
r_text[28] = "He was last seen trying to sneak a pot of peleau in MovieTowne.";
r_text[29] = "He was last seen ordering Starbucks with a freshwater accent.";
r_text[30] = "He was last seen buying back a lost cricket ball.";
r_text[31] = "He was last seen pitching marbles with the President.";
r_text[32] = "He was last seen drinking a Carib in Pigeon Point beach.";
r_text[33] = "He was last seen looking for the Pieman by Chaguanas market.";
r_text[34] = "He was last seen taking curry to a crab race in Tobago.";

function copyToClipboard(elementId) {

  // Create an auxiliary hidden input
  var aux = document.createElement("input");

  // Get the text from the element passed into the input
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append the aux input to the body
  document.body.appendChild(aux);

  // Highlight the content
  aux.select();

  // Execute the copy command
  document.execCommand("copy");

  // Remove the input from the body
  document.body.removeChild(aux);

}

function log(){
    console.log('---')
}

$(document).ready(function main() {
    $('.container-fluid').load('./home.html', function () {
        var score = 0;
        var randHistory = [];
        $('#playBtn').click(function game() {
            $('.container-fluid').load('./game.html', function () {
                do {
                    var rand = Math.floor(Math.random() * 50);
                } while (randHistory.indexOf(rand) != -1);
                randHistory.push(rand);
                word = data[rand].toUpperCase();
                var wordSplit = word.split('');
                var hp = 7;
                $('#score').text(score);
                for (let index = 0; index < word.length; index++) {
                    $('#word').append('<div class="guessLetter">_</div>');
                }
                for (let index = 0; index < 26; index++) {
                    let char = 'A'.charCodeAt(0) + index;
                    $('#keyboard').append('<button type="button" class="btn btn-primary m-1 letter" style="width: 38px; heght: 38px">' + String.fromCharCode(char) + '</button>');
                }
                $('.letter').click(function () {
                    var char = $(this).text();
                    var charIndex = word.indexOf(char);
                    if (charIndex == -1) {
                        $(this).removeClass('btn-primary');
                        $(this).addClass('btn-danger');
                        $(this).prop('disabled', true);
                        $('.hp').eq(hp--).removeClass('fas').addClass('far');
                        if (hp < 0) {
                            $('.container-fluid').load('./game-over.html', function () { 
                                $('#correctWord').text(word);
                                $('#finalScore').text(score);
                                $('#fsmsg').text("🇹🇹 HangJack Final Score: " + score + "🏆");
                                $('#home').click(function () {
                                    main();
                                });
                            });
                        }
                    } else {
                        $(this).removeClass('btn-primary');
                        $(this).addClass('btn-success');
                        $(this).prop('disabled', true);
                        var guess = $('#word').text();
                        for (let index = 0; index < word.length; index++) {
                            if (wordSplit[index] == char) {
                                guess = guess.substring(0, index) + char + guess.substring(index + 1);
                            }
                        }
                        guess = guess.split('');
                        $('#word').empty();
                        guess.forEach(element => {
                            $('#word').append('<span class="guessLetter">' + element + '</span>');
                        });
                        if (guess.indexOf('_') == -1) {
                            score += (hp + 1) * 10;
                            setTimeout(function () {
                                $('.container-fluid').load('./success.html', function () {
                                    var x = Math.floor(r_text.length * Math.random());
                                    let rmsg = r_text[x] ;
                                    $('#rmsg').text(rmsg);
                                    $('#curScore').text(score);
                                    $('#next').click(function () {
                                        game();
                                    })
                                });
                            }, 500);
                        }
                    }
                });
            });
        });
    });
});