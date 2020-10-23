
function createParagraph() {
    console.log('create paragraph has been called');
    var wordOne = document.getElementById('one').value;
    var wordTwo = document.getElementById('two').value;
    var wordThree = document.getElementById('three').value;
    var wordFour = document.getElementById('four').value;
    var wordFive = document.getElementById('five').value;
    var wordSix = document.getElementById('six').value;
    var wordSeven = document.getElementById('seven').value;
    var wordEight = document.getElementById('eight').value;
    var wordNine = document.getElementById('nine').value;
    var wordTen = document.getElementById('ten').value;
    var wordEleven = document.getElementById('eleven').value;
    var wordTwelve = document.getElementById('twelve').value;
    var wordThirteen = document.getElementById('thirteen').value;
    var wordFourteen = document.getElementById('fourteen').value;
    var wordFifteen = document.getElementById('fifteen').value;
    var wordSixteen = document.getElementById('sixteen').value;
    var wordSeventeen = document.getElementById('seventeen').value;
    var wordEighteen = document.getElementById('eighteen').value;
    var wordNineteen = document.getElementById('nineteen').value;
    var wordTwenty = document.getElementById('twenty').value;
    var wordTwentyone = document.getElementById('twentyOne').value;
    var wordTwentytwo = document.getElementById('twentyTwo').value;


    var paragraph = '<p> Last night I went to the most ' + wordOne + ' Halloween party! The invitation was delivered by ' + wordTwo + ' and told me to go to the deep dark ' + wordThree + ' and ' + wordFour + ' all the way to the very top of the spooky ' + wordFive + '. I ' + wordSix + ' the doorbell ' + wordSeven + ' . ' + wordEight + '!' + ' My friend ' + wordNine + ' answered the door dressed up as ' + wordTen + ' and said ' + '"' + wordEleven + '!" ' + ' There were ' + wordTwelve + ' different costumes, including ' + wordThirteen + ' ghouls and mummified ' + wordFourteen + '. The music was loud and ' + wordFifteen + ', ' + ' so I ' + wordSixteen + ' until my ' + wordSeventeen + ' hurt. ' + ' There were also delicious treats to ' + wordEighteen + ',' + ' like candy corn and chocolate-covered ' + wordNineteen + ',' + ' but my favorite part of the party was the pumpkin ' + wordTwenty + ' and bobbing for ' + wordTwentyone + '.' + " I can't wait until next Halloween it will be even more " + wordTwentytwo + '!!</p>';
    
    console.log(paragraph);
    document.getElementById('answer').innerHTML = paragraph;

}

    // Last night I went to the most _________ Halloween
    //         party! The invitation was delivered by ____________
    //         and told me to go to the deep dark ______________
    //         and _________ all the way to the very top of the
    //         spooky __________. I __________ the doorbell
    //         __________. ___________! My friend __________ answered
    //         the door dressed up as _____________ and said
    //         “______________!” There were _________ different
    //         costumes, including _____________ ghouls and mummified
    //         _____________. The music was loud and ___________, so
    //         I ______________ until my __________ hurt. There were
    //         also delicious treats to __________, like candy corn and
    //         chocolate-covered ______________, but my favourite part of
    //         the party was the pumpkin _____________ and bobbing for
    //         ______________. I can’t wait until next Halloween—
    //         it will be even more ______________!
















