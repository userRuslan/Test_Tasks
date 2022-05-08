// Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м.
// Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз.
// На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи.

function calcDistans(path, positiveMovement, negativeMovement) {
  let days = 0;
  let road = 0;
  while (true) {
    days++;
    road += positiveMovement;
    if (road >= path) {
      return days;
    }
    road -= negativeMovement;
  }
}

console.log(calcDistans(100, 50, 30));
