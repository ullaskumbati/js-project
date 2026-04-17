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

return (
  <div className="recent-changes-section">
    <h4 className="recent-changes-title">Recent Changes</h4>
{groupedChanges.map((group) => (
  <div key={`cycle-${group.cycleNumber}`} style={{ marginBottom: "20px" }}>

    <table className="recent-changes-table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Old Value</th>
          <th>New Value</th>
          <th>Changed On</th>
        </tr>
      </thead>

      <tbody>
        {group.items.map((change, idx) => (
          <tr key={`${group.cycleNumber}-${idx}`}>
            <td>
              {change.isCustomForm ? (
                <>
                  {change.questionName}
                  <br />
                  <small>
                    {change.sectionName} → {change.label}
                  </small>
                </>
              ) : (
                change.questionName
              )}
            </td>

            <td className="old-value-cell">
              {change.oldValue || "-"}
            </td>

            <td className="new-value-cell">
              {change.newValue || "-"}
            </td>

            <td>{formatDate(change.changedAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
))}
  </div>
);

