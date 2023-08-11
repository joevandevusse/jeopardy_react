function compareAnswers(correctAnswer, userEnteredAnswer) {
  // Remove common words from both answers
  const commonWords = ['a', 'an', 'the'];
  const regex = new RegExp(`\\b(${commonWords.join('|')})\\b`, 'gi');

  const cleanedCorrectAnswer = correctAnswer.replace(regex, '').trim();
  const cleanedUserAnswer = userEnteredAnswer.replace(regex, '').trim();

  // Remove special characters from both answers
  const specialCharsRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  const finalCorrectAnswer = cleanedCorrectAnswer.replace(specialCharsRegex, '');
  const finalUserAnswer = cleanedUserAnswer.replace(specialCharsRegex, '');

  // Remove HTML tags from both answers
  const htmlTagsRegex = /<[^>]+>/g;

  const finalCleanedCorrectAnswer = finalCorrectAnswer.replace(htmlTagsRegex, '');
  const finalCleanedUserAnswer = finalUserAnswer.replace(htmlTagsRegex, '');

  // Check last names

  return finalCleanedCorrectAnswer.toLowerCase() === finalCleanedUserAnswer.toLowerCase();
}

export default compareAnswers;