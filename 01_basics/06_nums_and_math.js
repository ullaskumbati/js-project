const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));




const buildMetaMap = ({ questions, columns, rowMap, sectionMap }) => {
  const map = {};

  questions.forEach(q => {
    const key = `${q._id}_`;
    map[key] = {
      questionName: q.questionName,
      isCustom: false,
    };
  });

  columns.forEach(c => {
    const row = rowMap[c.rowId?.toString()];
    const sectionId = row?.customFormSectionId?.toString();

    const key = `${c._id}_${c.rowId || ""}_${c._id}`;

    map[key] = {
      questionName: "Custom Form",
      isCustom: true,
      sectionName: sectionMap[sectionId] || "Section",
      label: c.questionName || "Field",
    };
  });

  return map;
};
const prepareMetaData = async (gid, db) => {
  const {
    GuidedCustomFromRow,
    GuidedCustomFromSection,
  } = db;

  // 1. Fetch rows
  const rows = await GuidedCustomFromRow.find({ guidedId: gid }).lean();

  const rowMap = Object.fromEntries(
    rows.map(r => [r._id.toString(), r])
  );

  // 2. Fetch sections
  const sectionIds = rows
    .map(r => r.customFormSectionId)
    .filter(Boolean);

  const sections = await GuidedCustomFromSection.find({
    guidedId: gid,
    _id: { $in: sectionIds },
  }).lean();

  const sectionMap = Object.fromEntries(
    sections.map(s => [s._id.toString(), s.name])
  );

  return {
    rowMap,
    sectionMap,
  };
};
const submitGuidedAnswers = async (req, res) => {
  const { guidedId, cycleNumber } = req.body;

  const gid = new mongoose.Types.ObjectId(guidedId);
  const dbName = req.dbName || req.socket?.handshake?.auth?.dbName;
const db = await getDbConnection(dbName);

const {
  GuidedQuestions,
  GuidedCustomFromColumn,
  AnswerSnapShots
} = db;

  // 1. Get current answers
  const questions = await GuidedQuestions.find({ guidedId: gid }).lean();
  const columns = await GuidedCustomFromColumn.find({ guidedId: gid }).lean();

  const currentAnswers = [
    ...questions.map(q => ({
      questionId: q._id.toString(),
      value: q.answer,
    })),
    ...columns.map(c => ({
      questionId: c._id.toString(),
      value: c.answer,
      rowId: c.rowId?.toString(),
      columnId: c._id.toString(),
    }))
  ];

  // 2. Save snapshot
  await AnswerSnapShots.create({
    guidedId: gid,
    cycleNumber,
    answers: currentAnswers,
  });

  // 3. If cycle > 1 → compare
if (cycleNumber > 1) {
  const prev = await AnswerSnapShots.findOne({
    guidedId: gid,
    cycleNumber: cycleNumber - 1,
  }).lean();

  if (!prev) {
    return res.json({
      status: "Success",
      message: "No previous snapshot found",
    });
  }

  const meta = await prepareMetaData(gid, db);

  const metaMap = buildMetaMap({
    questions,
    columns,
    ...meta
  });

  const changes = buildChanges(
    prev.answers,
    currentAnswers,
    metaMap
  );

  console.log("FINAL CHANGES:", changes);
}

  return res.json({ status: "Success" });
};

