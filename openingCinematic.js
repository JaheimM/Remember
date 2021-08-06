document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        preloader.classList.add("off");
    });

    const content = document.getElementById("content");
    
     // Optional user input for name
  const name = window.prompt("Your name is: ");

  let userName = name + ".";

  const audio = {
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
  }

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
            "I'm desperate for answers. If I first have to die to remember then so be it."
        ],
    }

    $(content).click(clicked);

     // To splice/replace 5th value in array for if statement within function
  const index = object.myDialogue.indexOf(userName);
  const indexTwo = object.myDialogue.indexOf(object.myDialogue[4]);

  // states where to start in the array
  let clicks = -1;
    
    // function for changing the html text accordingly for each value in the array
  function clicked() {
    clicks++;
    $(dialogue).html(object.myDialogue[clicks]);
    audio.voicelines[clicks].play()
    console.log(clicks)
    }
    
     // if statement for when prompt is canceled(null) or user presses 'OK' without entering a name,
  if (name === null) {
   let replaceOne = object.myDialogue[indexTwo] = "I...don't have one.";
   let replaceTwo = object.myDialogue[index] = "Wait, Ike that's my name.";
  } else if (name === "") {
    object.myDialogue[indexTwo] = "I...don't have one.";
    object.myDialogue[index] = "Wait, Ike that's my name.";
  }


});