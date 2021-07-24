const data =
  '107\t1\t81.14\t21.0\t21.0\t13\n' +
  '107\t2\t82.81\t21.0\t21.0\t15\n' +
  '108\t1\t91.25\t24.0\t24.0\t1\n' +
  '108\t2\t91.65\t23.0\t23.0\t2\n' +
  '109\t1\t93.63\t16.0\t16.0\t2\n' +
  '109\t2\t88.59\t22.0\t22.0\t3';

const rows = data.split('\n').map((x) => x.split('\t'));
const text = rows
  .map(
    (row) =>
      `${row[0]}學年第${row[1]}學期\n\t學期平均:${row[2]}\n\t總修學分:${row[3]}\n\t實得學分:${row[4]}\n\t名次:${row[5]}`
  )
  .join('\n');
module.exports = text;
