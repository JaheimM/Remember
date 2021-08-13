document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
      preloader.classList.add("off");
      
    });

  const content = document.getElementById("content");
  $("#content").hide()
 setTimeout(function () {$("#content").fadeIn(2 * 2000)}, 800)
    
     // Optional user input for name
  const name = window.prompt("Your name is: ");

  let userName = name + ".";

  const audio = {
    ba: new Audio("Music/Erik Satie - Gnossienne No.1.mp3"),
    voicelines: [
      new Audio("Music/voicelines/Dialogue1.mp3"),
      new Audio("Music/voicelines/Dialogue2.mp3"),
      new Audio("Music/voicelines/Dialogue3.mp3"),
      new Audio("Music/voicelines/Dialogue4.mp3"),
      new Audio("Music/voicelines/Dialogue5.mp3"),
      new Audio("Music/voicelines/Dialogue6.mp3"),
      new Audio("Music/voicelines/Dialogue7.mp3"),
      "skip",
      new Audio("Music/voicelines/Dialogue8.mp3"),
      new Audio("Music/voicelines/Dialogue9.mp3"),
      new Audio("Music/voicelines/Dialogue10.mp3"),
      "skip",
      new Audio("Music/voicelines/Dialogue11.mp3"),
      new Audio("Music/voicelines/Dialogue12.mp3"),
    ],
    Confirm: new Audio("Music/Confirmation-dialogue.mp3")
  }

  $(document).mousemove(function () {
   audio.ba.play()
    audio.ba.loop = true;
})
 
 
    const object = {
        myDialogue: [
            "When I dream I see the faces of people I don't remember.",
            "I feel a sudden sense of nostalgia I can't place. Making me feel guilty.",
            // "What is it that you want from me?",
            "Everytime I sleep...they come to me like ghost.",
            "Maybe I'm just going mad.",
            "Maybe these people never existed in the first place and they were born of my loneliness?",
            "That reminds me what is my name?",
            "Right, how could I forget?",
            `It's ${userName}.`,
            "These people I don't recognize they always call out that name.",
            "Why can't I remember you?",
            "Any of you?",
            "...",
            "A local told me of a cave filled with a body of water. A nomad who lost his memories traveled there and drowned. The people thought he was dead but there the man was perfectly fine. 'I remember.' he said. Then he told them his true name, 'Lethe.'",
        "I'm desperate for answers. If I first have to die to remember then so be it.",
        "Click to continue",
            "Click to continue"
        ],
    }

  

     // To splice/replace 5th value in array for if statement within function
  const index = object.myDialogue.indexOf(object.myDialogue[6]);
  const indexTwo = object.myDialogue.indexOf(object.myDialogue[7]);

  // states where to start in the array
  let clicks = -1;
    
    // function for changing the html text accordingly for each value in the array
  $(content).click(function clicked() {
    audio.Confirm.play() 
       clicks++;
    console.log(clicks)
   
    $(dialogue).html(object.myDialogue[clicks]);

      if ($(dialogue).text() == object.myDialogue[14]) {
        $(content).fadeOut(1 * 1000);
        setTimeout(function () {
          window.location = 'Index.html';
          return false;
        }, 1000);
        
    }
  audio.voicelines[clicks].play()
    });
  
     // if statement for when prompt is canceled(null) or user presses 'OK' without entering a name,
  if (name === null) {
   let replaceOne = object.myDialogue[index] = "I...don't have one.";
   let replaceTwo = object.myDialogue[indexTwo] = "Wait, Ike that's my name.";
  } else if (name === "") {
    object.myDialogue[index] = "I...don't have one.";
    object.myDialogue[indexTwo] = "Wait, Ike that's my name.";
  }


});