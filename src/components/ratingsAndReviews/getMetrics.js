const getMetrics = (metaData) => {
  let calcCount = 0;
  let total = 0;
  for (let i = 1; i < 6; i++) {
    let newCount = metaData.ratings[i];
    calcCount += Number(newCount);
    total += (Number(newCount) * i);
  }
  let calcAvg = (total / calcCount).toPrecision(2);
  calcAvg = (Math.round(calcAvg * 4) / 4).toPrecision(3)
  let calcRecPct = (Number(metaData.recommended.true) / (Number(metaData.recommended.true) + Number(metaData.recommended.false))).toPrecision(3);

  let result = {calcCount, calcAvg, calcRecPct};
  return result;
};

export default getMetrics;