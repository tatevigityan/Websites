document.getElementById("test").style.visibility = "hidden";

FinishTest = () => {
  let score = 0;

  for (i = 1; i <= 3; i++) {
    const answer = document.getElementById("answer-" + i);
    if (answer.checked) {
      score++;
    }
  }

  switch (score) {
    case 1: {
      result = "Не справились";
      break;
    }
    case 2: {
      result = "Среднее знание";
      break;
    }
    case 3: {
      result = "Хорошее знание";
      break;
    }
    default: {
      result = "Не справились";
      break;
    }
  }
  alert(result);
};

SwitchPage = () => {
  document.getElementById("info").style.visibility = "hidden";
  document.getElementById("test").style.visibility = "visible";
};
