function compareAnswers(clue, userEnteredAnswer) {
  for (const answerOption in clue) {
    if (answerOption === 'question') {
      continue;
    } else if (compareAnswer(clue[answerOption].toLowerCase(), userEnteredAnswer)) {
      return true;
    }
  }
  return false;
}

function compareAnswer(correctAnswer, userEnteredAnswer) {
  if (!correctAnswer || !userEnteredAnswer) {
    return false;
  }

  // Remove common words from both answers
  const commonWords = ['a', 'an', 'the'];
  const commonWordsRegex = new RegExp(`\\b(${commonWords.join('|')})\\b`, 'gi');

  const cleanedCorrectAnswer = correctAnswer.replace(commonWordsRegex, '').trim();
  const cleanedUserAnswer = userEnteredAnswer.replace(commonWordsRegex, '').trim();

  // Remove special characters from both answers
  const specialCharsRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  const finalCorrectAnswer = cleanedCorrectAnswer.replace(specialCharsRegex, '');
  const finalUserAnswer = cleanedUserAnswer.replace(specialCharsRegex, '');

  // Remove HTML tags from both answers
  const htmlTagsRegex = /<[^>]+>/g;

  const finalCleanedCorrectAnswer = finalCorrectAnswer.replace(htmlTagsRegex, '');
  const finalCleanedUserAnswer = finalUserAnswer.replace(htmlTagsRegex, '');

  // Check last names
  if (finalCleanedCorrectAnswer.split(' ').slice(-1)[0].toLowerCase() ===
      finalCleanedUserAnswer.toLowerCase()) {
    return true;
  }

  return finalCleanedCorrectAnswer.toLowerCase() === finalCleanedUserAnswer.toLowerCase();
}

export default compareAnswers;