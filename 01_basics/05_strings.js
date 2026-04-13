const name = "ullas";
const repoCount = 30;

// console.log(name + repoCount + " value"); dont use it 

console.log(`hellow my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("ullas kumbati");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)

console.log(gameName.charAt(3));
console.log(gameName.indexOf(' '));

const newString =gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-12,4);
console.log(anotherString);

const newStringOne = "  ullas   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ullas.com/ullas%28kumbati"

console.log(url.replace('%28','-'));

console.log(url.includes('ullas'));





import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/approvalUtils";
import { commonService } from "../../utils/common";
import "../../assets/css/recentAnswerChanges/recentAnswerChanges.css";

const RecentChangesTable = ({ userId, quoteId, cycleNumber }) => {
    console.log(userId, quoteId, cycleNumber)
  const [changes, setChanges] = useState([]);
  const [loading, setLoading] = useState(false);
  
    const fetchChanges = async () => {
      setLoading(true);
      try {
        const res = await commonService(
          "/api/guidedselling/getRecentChanges",
          "post",
          { quoteId, userId, cycleNumber }
        );
        console.log(res);
        const data = Array.isArray(res?.data?.data) ? res.data.data : [];

        setChanges(data);
      } catch (err) {
        console.error("❌ Error loading recent changes", err);
        setChanges([]);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    const shouldSkip = !quoteId || !userId || !cycleNumber || cycleNumber <= 1;

    if (shouldSkip) {
      setChanges([]);
      setLoading(false);
      return;
    }

    fetchChanges();
  }, [quoteId, userId, cycleNumber]);

  // -----------------------------------------
  // Render Helpers
  // -----------------------------------------

  const renderLoading = () => (
    <div className="recent-changes-loading">Loading recent changes...</div>
  );

  const renderEmpty = () => (
    <div className="no-changes">No recent changes found.</div>
  );

  // Base Row UI
  const renderBaseRow = (questionName, oldVal, newVal, date) => (
    <tr>
      <td>{questionName}</td>
      <td className="old-value-cell">{oldVal || "-"}</td>
      <td className="new-value-cell">{newVal || "-"}</td>
      <td>{formatDate(date)}</td>
    </tr>
  );
console.log("CHANGES DATA:", changes);
  // Custom Form Rows (Sectioned)
  const renderCustomRows = (change, index) => {
    const { questionName, sections, changedAt } = change;

    return (
      <React.Fragment key={index}>
        {/* Custom Form Parent Header */}
        <tr className="custom-form-header">
          <td colSpan="4">
            <strong>{questionName}</strong> (Custom Form)
          </td>
        </tr>

        {Object.entries(sections).map(([sectionName, rows], sIdx) => (
          <React.Fragment key={sectionName}>
            <tr className="custom-form-subheader">
              <td colSpan="4">
                <b>Section:</b> {sectionName}
              </td>
            </tr>

            {rows.map((row, rIdx) => (
              <tr key={rIdx} className="subchange-row">
                <td className="sub-label">Field: {row.label}</td>
                <td className="old-value-cell">{row.oldValue || "-"}</td>
                <td className="new-value-cell">{row.newValue || "-"}</td>

                {rIdx === 0 && (
                  <td rowSpan={rows.length} className="subchange-date">
                    {formatDate(changedAt)}
                  </td>
                )}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };

  // Normal Q/A Rows
  const renderNormalRows = (change, index) => {
    const { questionName, normal, changedAt } = change;
    return normal.map((n, nIdx) =>
      renderBaseRow(questionName, n.oldValue, n.newValue, changedAt)
    );
  };

  // Decide Renderer based on type
  const renderRows = () =>
    changes.map((change, idx) =>
      change.isCustomForm
        ? renderCustomRows(change, idx)
        : renderNormalRows(change, idx)
    );


  if (loading) return renderLoading();
  if (!changes.length) return renderEmpty();

  return (
    <div className="recent-changes-section">
      <h4 className="recent-changes-title">Recent Changes</h4>

      <table className="recent-changes-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Old Value</th>
            <th>New Value</th>
            <th>Changed On</th>
          </tr>
        </thead>

        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default RecentChangesTable;
