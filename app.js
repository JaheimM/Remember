document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("off");
  });

  const background = document.getElementById("bg");

  $(background).hide();

  const allContent = document.getElementById("all-content");

  const images = {
    set: [
      "Images/What are you doing out here.png",
      "Images/What are you doing out here.png",
      "Images/brooding perhaps.png",
      "Images/I'm not one for the politicking 2.png",
      "Images/I'm not one for the politicking 2.png",
      "Images/I'm surprised.png",
      "Images/dotdotdot.png",
      "Images/dotdotdot2.png",
      "Images/is that so.png",
      "images/I'm surprised 2.png"
    ],
  };

  const audio = {
    one: new Audio("Music/UnderwaterBubbleBy PE311303.mp3"),
    two: new Audio("Music/Muffled Rain 2.mp3"),
    three: new Audio("Music/UnderwaterSpaceLo loop.mp3"),
    four: new Audio("Music/mixkit-human-single-heart-beat-490.wav"),
    five: new Audio("Music/Voice lines (answer correct).mp3"),
    six: new Audio("Music/confirm_style_2_echo_001.mp3"),
    seven: new Audio("Music/cave themeb4.ogg"),
    confirm: new Audio("Music/Confirmation-dialogue.mp3")
  };

  //Variables from different elements on document
  const startMenu = document.getElementById("start-menu");
  const mainContent = document.getElementById("main");
  const optionOne = document.getElementById("option-1");
  const mute = document.getElementById("mute");
  const history = document.getElementById("history");
  const help = document.getElementById("help");
  const btn = document.getElementById("btn1");
  const backBtn = document.getElementById("back-btn");
  const love = document.getElementById("memory-love");
  const contentTwo = document.getElementById("content2");
  const instructions = document.getElementById("instructions-screen");
  const close = document.getElementById("close");

  let instructionsOnScreen = true;

  $(close).click(() => {
    $(instructions).hide();
    instructionsOnScreen = false;
    console.log(instructionsOnScreen);
  });

  if (instructionsOnScreen == true) {
    $(backBtn).hide();
  } else {
    $(backBtn).show();
  }

  $(help).click(() => {
    $(instructions).show();
  });

  //Adding functionality to mute button
  let isMute = false;
  mute.addEventListener("click", () => {
    isMute = true;
    if (audio.three.muted === false) {
      audio.three.muted = true;
    } else if (audio.three.muted === true) {
      isMute = false;
      audio.three.muted = false;
    }
    mute.classList.toggle("change");
  });

  optionOne.onmouseover = function () {
    audio.two.play();
    audio.two.loop = true;
    audio.three.muted = true;
    audio.seven.muted = true;
  };

  optionOne.onmouseout = function () {
    audio.two.pause();
    if (isMute == true) {
      audio.three.muted = true;
    } else {
      audio.three.muted = false;
      audio.seven.muted = false;
    }
  };

  // Checks if StartMenu is clicked
  // sets menu to not clicked
  // let wasClicked = false;

  // If startMenu is clicked toggle class
  /*    startMenu.addEventListener("click", () => {
           startMenu.classList.toggle("start");
           mainContent.classList.toggle("appear")
           test = true;
           audio.one.play();
           wasClicked = true;

           // Solves problem of multiple clicks repeating animation
           // Turns off eventlistener for click once clicked
           if (wasClicked === true) {
               startMenu.style.pointerEvents = "none";
           }

           if (test = true) {
               audio.three.play()
               audio.three.loop = true;
           }
       });
    */

  let test = mainContent;
  test = false;
  // (JQuery) If startMenu is clicked toggle class
  $(startMenu).click(function () {
    audio.one.play();
    test = true;
    $(startMenu).fadeOut(2000, function () {
      $(mainContent).fadeIn(2100);
      if ((test = true)) {
        audio.three.play();
        audio.three.onended = function () {
          audio.seven.play();
          audio.seven.onended = function () {
            audio.three.play()
          }
        }
      }
    });
  });

  // attaching page elements to variable for dialogue
  const dialogueTwo = document.getElementById("dialogue2");

  // Array that has values for dialogues on each user click
  const dialogue = {
    Two: [
      "And what is someone like you doing out here all by their lonesome.",
      "Uh...",
      "Brooding perhaps? Contemplating life choices?",
      "Ha Ha you’re a jester I get it.",
      "No, I’m just not one for all the politicking and social gatherings of any kind. I also came out here to clear my head to be truthful.",
      "With this rain pouring down as hard as it is? I’m shocked someone can find any amount of tranquility here.",
      "...",
      "I don’t know why...the sound of the rain is just calming.",
      "Is that so?",
      "Would you like to elaborate on what’s been bothering you?",
      "I mean, i may be a stranger but I’m sure anyone would tell you that they felt better talking about what troubled them rather than letting it fester inside of them.",
      "...",
      "I’m training to become a knight.",
      "There was a slight twitch of her eyebrow. I hope she doesn’t think I’m telling her this to garner some type of sympathy or maybe she just doesn’t take kindly to knights.A Lot of people seem to think that way after the highest ranking knight was exposed for the murders surrounding the common people. ",
      "There’s no love for knights anymore among the commonwealth.",
      "I’m weak. So getting thrashed by bigger and stronger opponents during sparring exams is nothing new to me. But this time I somehow failed my practical exams yesterday and it’s just making me feel—",
      "As if you should give up?",
      "Yeah. Like reality is setting in and my father was right.",
      "Right about what?",
      "That I will be nothing but a failure.",
      "Hmm, What a horrible thing to say to a child. I wonder, What do you think separates failures from those who achieved success?",
      "<em> What a strange question. </em>",
      "Uh...persistence?",
      "Right, one failure doesn’t mean you should throw in the towel. One failure doesn’t determine whether or not you will succeed. Of course those traits are necessary but you failed to mention the one thing that should be the most important above all.",
      "She reaches out her hand cupping my right cheek. The corner of her lips pulling into a gentle smile as her eyes open for the first time. A breath catches in my throat as she tilts her head.",
      "Faith. Faith is what you’re missing.",
      "<em> She’s blind. </em>",
      "“Faith in one’s self or faith in a greater being. Sometimes people forget that they need to have faith that they can succeed no matter the tribulations or trials.”",
      "Something warm bubbled up in my chest and slowly began to rise to my head. I was sure my face was red. Beauty and wisdom. I am sure this woman is someone who went through hell because of having no eyesight. If she was born with it or not doesn’t matter. Her words hold weight.",
      "Faith in myself.",
      "With a chuckle she runs a finger down my jaw. It's a good thing she can't see how red my face is.",
      "On another note You're very cute...",
      "Huh?",
      "For a man.",
      "Click to return",
    ],
  };

  // Event listener for if the next button for dialogue is clicked
  $(contentTwo).click(clicked);

  // states where to start in the array
  let clicks = -1;

  // function for changing the html text accordingly for each value in the array

  function clicked() {
    clicks++;
    console.log(clicks);
    $(background).show();
    $(dialogueTwo).html(dialogue.Two[clicks]);
    /* audio.confirm.play()  */
    if ($(dialogueTwo).html() == dialogue.Two[34]) {
    clicks = 0;
    $(allContent).show();
    $(contentTwo).hide();
    $(background).hide();
    $(dialogueTwo).html(dialogue.Two[0]);
    $(dialogueTwo).html(dialogue.Two[clicks]);
  }

    $('#bg').css('background-image', 'url("' + images.set[clicks] + '")')

    /*  if ($(dialogueTwo).html() == object.myDialogueTwo[3]) {
    $('#bg').css('background-image', 'url("' + images.set[1] +'")')  }
   */
  }

 
  console.log(dialogue.Two);

  //jquery
  // carousel functionality
  var carousel = $(".carousel"),
    currdeg = 0;

  $(".next").on(
    "click",
    {
      d: "n",
    },
    rotate
  );
  $(".prev").on(
    "click",
    {
      d: "p",
    },
    rotate
  );

  function rotate(e) {
    if (e.data.d == "n") {
      currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
      currdeg = currdeg + 60;
    }
    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
    });
  }

  $(btn).click(function () {
    $(allContent).hide();
    audio.three.muted = true;
    $("#solve-screen").show();
    audio.four.play();
    audio.four.loop = true;
    audio.four.muted = false;
  });

  $(backBtn).click(function () {
    audio.four.muted = true;
    $("#solve-screen").hide();
    $(allContent).show();
    $(contentTwo).hide();
    if (isMute == true) {
      audio.three.muted = true;
    } else {
      audio.three.muted = false;
    }
  });

  let faith = false;
  $("#form").submit(function (e) {
    e.preventDefault();
    var answer = $("#answer").val();
    console.log(answer);
    if (answer === "faith" || answer === "FAITH") {
      faith = true;
      $("#form").hide();
      audio.four.muted = true;
      audio.five.play();
      audio.five.onended = () => {
        audio.four.muted = false;
        $("#form")[0].reset();
        $("#form").show();
      };
    }

    if (faith == false) {
      return "yes";
    } else if (faith == true) {
      answer.value = "";
    }
    if (answer == "love" && "LOVE") {
    }
  });

  $("#toggle").on("mousedown", () => {
    $(backBtn).toggle();
    $("#form").toggle();
  });

  $("#toggle").on("mouseup", () => {
    $(backBtn).toggle();
    $("#form").toggle();
  });

  $(love).click(function () {
    $(allContent).hide();
    $(contentTwo).show();
  });
});
