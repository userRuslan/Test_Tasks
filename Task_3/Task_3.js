// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка...").
// Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS.
// На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.

function deleteDublicateWords(stringOfWords) {
  let words = stringOfWords.split(",");
  words = Array.from(new Set(words)).join(",");
  return words;
}

console.log(deleteDublicateWords("кошка,собака,лошадь,корова,кошка"));
