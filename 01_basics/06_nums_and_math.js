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

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.5));

console.log(Math.random());
console.log(Math.random()* 10);



import { useMemo } from "react";
import { formatDate } from "../../utils/approvalUtils";
import { commonService } from "../../utils/common";
import "../../assets/css/recentAnswerChanges/recentAnswerChanges.css";

const RecentChangesTable = ({ cycleNumber,changes }) => {
    console.log(changes);
const filteredChanges = useMemo(() => {
  return changes.filter(
    (c) => Number(c.cycleNumber) === Number(cycleNumber)
  );
}, [changes, cycleNumber]);

const groupedChanges = useMemo(() => {
  return Object.values(
    filteredChanges.reduce((acc, change) => {
      const key = change.cycleNumber;

      if (!acc[key]) {
        acc[key] = {
          cycleNumber: key,
          items: [],
        };
      }

      acc[key].items.push(change);
      return acc;
    }, {})
  ).sort((a, b) => a.cycleNumber - b.cycleNumber);
}, [filteredChanges]);


  const renderLoading = () => (
    <div className="recent-changes-loading">Loading recent changes...</div>
  );

  const renderEmpty = () => (
    <div className="no-changes">No recent changes found.</div>
  );

  if (!changes.length) return renderEmpty();

  return (
    <div className="recent-changes-section">
      <h4 className="recent-changes-title">Recent Changes</h4>
      {groupedChanges.map((group) => (
        <div
          key={`cycle-${group.cycleNumber}`}
          style={{ marginBottom: "20px" }}
        >
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
                        {change.isCustomForm
                          ? `Custom Form - ${change.questionName}`
                          : change.questionName}
                        <br />
                        <small>
                          {change.sectionName} → {change.label}
                        </small>
                      </>
                    ) : (
                      change.questionName
                    )}
                  </td>

                  <td className="old-value-cell">{change.oldValue || "-"}</td>

                  <td className="new-value-cell">{change.newValue || "-"}</td>

                  <td>{formatDate(change.changedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default RecentChangesTable;
