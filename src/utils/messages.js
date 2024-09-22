export default function selectMessage(score) {
  let resultMessage = "";
  const messages = {
    99: ["Perfect Score!", "Perfection feels good"],
    90: [
      "WOW!",
      "Lightning Fast!",
      "Bop It! Twist It! Pull It!",
      "Yeeeeeah!",
      "MONEY!",
      "skill or luck?",
      "A+",
      "GOOOOOAAAALLL!",
      "the crowd goes wild!",
    ],
    80: ["Nice Dude", "Solid", "B+"],
    70: ["its aight", "C+", "getting better", "decent"],
    60: ["not great :(", "mid.", "meh.", "D+", "ok", "brick"],
    50: ["yikes", "womp womp", "quadruple bogey", "F", "uh oh", "air-ball"],
    1: ["fumble", "turnover", "yikes", "trash"],
    0: [
      "fail",
      "too quick for you?",
      "your parents are disappointed",
      "um... what?",
    ],
  };

  // Determine the score and corresponding message key.
  let messageKey;

  if (score >= 99) messageKey = 99;
  else if (score >= 90) messageKey = 90;
  else if (score >= 80) messageKey = 80;
  else if (score >= 70) messageKey = 70;
  else if (score >= 60) messageKey = 60;
  else if (score >= 50) messageKey = 50;
  else if (score > 0) messageKey = 1;
  else messageKey = 0;

  // Use the random selection function.
  const messageArray = messages[messageKey];
  resultMessage = getRandomElement(messageArray);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return resultMessage;
}
