//dates 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());





import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { FaAngleLeft, FaSearch } from "react-icons/fa";
import {
  Link,
  NavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "../../assets/css/quoteCreation/QuoteCreation.css";
import useDisableAutofill from "../../common/useDisableAutofill";
import CustomDropdown from "../../components/common/CustomDropdown";
import { baseUrl } from "../../config";
import DataContext from "../../dataContext/DataContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import { commonService, getSocket } from "../../utils/common";
import GuidedSellingNew from "../guidedSellingNew/GuidedSellingNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const quoteCreationTitle = {
  gs: "USE GUIDED SELLING",
  previous_quote: "PREVIOUS QUOTE",
  default: "NEW QUOTE",
};

const QuoteCreation = () => {
  useDisableAutofill();
  const navigate = useNavigate();
  const socket = getSocket();
  const { user } = useAuthContext();
  const [template, setTemplate] = useState("");
  const data_state = useLocation();
  const timerRef = useRef(null);
  const [quoteNameLoading, setQuoteNameLoading] = useState(false);

  const { dbConfigData, peopleName, loggedIdPersonId, ownerMap } =
    useContext(DataContext);
  const [quoteCreationState, setQuoteCreationState] = useState(
    quoteCreationTitle.default,
  );
  const acc_opp_id = data_state.state?.acc_opp_id || data_state.state;
  const quoteCreationIntials = {
    accountId: acc_opp_id.accountId,
    accountName: acc_opp_id.accountName,
    opportunityId: acc_opp_id.opportunityId,
    opportunityName: acc_opp_id.opportunityName,
    quoteId: null,
    quotesName: null,
    // owner: quoteData.quote_owner,
  };
  const [previousQuoteCreation, setPreviousQuoteCreation] =
    useState(quoteCreationIntials);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);
  const [quoteNames, setQuoteNames] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  const quoteCreationValue = [
    {
      name: "GUIDED SELLING",
      state: quoteCreationTitle.gs,
    },
    {
      name: "PREVIOUS QUOTE",
      state: quoteCreationTitle.previous_quote,
    },
  ];

  const approvalPermission =
    dbConfigData && dbConfigData.length > 0
      ? dbConfigData[0].anyone_can_approve
      : "";

  const multilevelApproval =
    dbConfigData && dbConfigData.length > 0
      ? dbConfigData[0].multilevel_approval
      : "";

  const DefinedApprovalType =
    multilevelApproval === "YES"
      ? "multilevelapproved"
      : approvalPermission === "YES"
        ? "Self-Approved"
        : "";

  const approvalData = data_state.state?.approvalData || [];
  const ownerNameFromState =
    data_state.state?.ownerName ||
    data_state.state?.acc_opp_id?.ownerName ||
    "";
  const opportunityStage =
    data_state.state?.opportunityStage ||
    data_state.state?.acc_opp_id?.opportunityStage ||
    "";

      const createdByFromState =
    data_state.state?.createdBy || acc_opp_id?.createdBy || "";
 
 
  const Opp_external_references_id1 =
    acc_opp_id?.Quote_external_references_id1 || acc_opp_id?.opportunityRefID;

  const ownerId = acc_opp_id?.opportunityOwner || acc_opp_id?.owner;

  const quoteOwnerName =
    ownerMap && ownerId && ownerMap[ownerId]
      ? ownerMap[ownerId].value
      : ownerId; // fallback

  const userName =
    user && user.userType === "admin"
      ? `${user.admin.firstname} ${user.admin.lastname}`
      : "" || (user && user.userType === "people")
        ? `${user.people.first_name} ${user.people.last_name}`
        : "";

  const [surveyNames, setSurveyNames] = useState([]);
  const [surveyData, setSurveyData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const header1 =
    surveyData.find((item) => item._id === selectedOption)?.header1 || "";
  const header2 =
    surveyData.find((item) => item._id === selectedOption)?.header2 || "";
  const isButtonDisabled = template.length === 0;
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const fromPrevious = true;
  const handleSelectTemplate = (selected) => {
    surveyData.forEach((item) => {
      if (item.title === selected) {
        setSelectedOption(item._id);
        setTemplate(item._id);
      }
    });
  };
  const row = acc_opp_id;

  useEffect(() => {
    if (!socket) return;

    // ✅ optional (your existing room)
    socket.emit("joinPeopleroom", `admin_${user?.admin?._id}`);

    // 🔥 IMPORTANT → call guided selling
    socket.emit("getSurveyGuidedSelling", {});

    const handler = (response) => {
      if (!response || response.code !== 200) return;

      setSurveyData(response.data);

      const surveyTitles = response.data.map((item) => ({
        title: item.title,
        _id: item._id,
        update_type: item.update_type,
        templateUpdateType: item.templateUpdateType,
        notification: item.notification,
      }));

      setSurveyNames(surveyTitles);
    };

    socket.on("getSurveyGuidedSellingResponse", handler);

    return () => {
      socket.off("getSurveyGuidedSellingResponse", handler);
    };
  }, [socket]);

  const getQuotesNames = async () => {
    try {
      setQuoteNameLoading(true);
      const response = await commonService(`/api/survey/getquoteNames`, "POST");
      if (response) {
        setQuoteNames(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching quotes data:", error);
    }

    setQuoteNameLoading(false);
  };

  const filteredQuotes = React.useMemo(() => {
    const search = debouncedSearch.trim().toLowerCase();

    // ✅ initial load → show all quotes
    if (!search) return quoteNames;

    return quoteNames.filter((quoteData) => {
      const text = `${quoteData?.accounts?.toLowerCase()} ${quoteData?.opportunity_name?.toLowerCase()} ${quoteData?.quotes_name?.toLowerCase()} `;
      return text.includes(search);
    });
  }, [quoteNames, debouncedSearch]);

  const addQuotes = async (e) => {
    console.log("logged in person id",loggedIdPersonId)
    try {
      setButtonClicked(true);
      setLoading(true);

      // ✅ Step 1: Extract and filter approvals from nested approvalData
      const flatApprovals =
        Array.isArray(approvalData) && approvalData.length > 0
          ? approvalData[0].approvals.filter(
              (item) => item.approvalStatus === "pending",
            )
          : [];

      // ✅ Step 2: Wrap into the format expected by the backend
      const formattedApprovalData = [
        {
          approvals: flatApprovals,
        },
      ];

      // ✅ Step 3: Find the selected survey
      const selectedSurvey = surveyNames.find(
        (item) => item._id === selectedOption,
      );

      // ✅ Step 4: Make the API call
      const response = await fetch(`${baseUrl}/api/quotes/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          acc_key: acc_opp_id.accountId,
          opp_id: acc_opp_id.opportunityId,
          Opp_external_references_id1,
          survey_key: selectedOption,
          survey_name: selectedSurvey?.title || "",
          surveyUpdateType: selectedSurvey?.update_type || "",
          templateUpdateType: selectedSurvey?.templateUpdateType || "",
          accounts: acc_opp_id?.accountName,
          opportunity_name: acc_opp_id?.opportunityName,
          created_by_name: createdByFromState,
          opportunityStage: opportunityStage,
          created_by: userName,
          modifiedBy: userName,
          quote_notes: acc_opp_id?.opportunityNotes || [],
          quote_owner: quoteOwnerName,
          ownerName: ownerNameFromState,
          header1,
          header2,
          DefinedApprovalType,
          peopleName,
          approvalData: formattedApprovalData,
          loggedIdPersonId: loggedIdPersonId,
        }),
      });

      // ✅ Step 5: Handle response
      if (response.status == 201) {
        const quoteData = await response.json().then((res) => res.data);
        toast.success("Successfully created!");
        navigate(`/guidedselling_new?quotes=${quoteData?._id}`, {
          state: {
            ...acc_opp_id,
            approvalData: formattedApprovalData,
            oppID: quoteData.opportunity_id,
            template: quoteData.template_type,
            quoteId: quoteData?._id,
            navigationType: "CREATE",
            quoteDetail: quoteData,
          },
        });
      } else {
        toast.error("Failed to create!");
      }
    } catch (error) {
      console.error("Error creating quote:", error);
      toast.error("Failed to create!");
    } finally {
      setLoading(false);
      setButtonClicked(false);
    }
  };

  const handleChangeQuoteState = (value) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setQuoteCreationState(value);
    setPreviousQuoteCreation(quoteCreationIntials);

    if (value == "PREVIOUS QUOTE") {
      getQuotesNames();
    }
  };

  const handlePreviousQuoteCreation = (quoteData) => {
    setPreviousQuoteCreation({
      accountId: acc_opp_id.accountId,
      accountName: acc_opp_id.accountName,
      opportunityId: acc_opp_id.opportunityId,
      opportunityName: acc_opp_id.opportunityName,
      quoteId: quoteData._id,
      quotesName: quoteData.quotes_name,
      owner: ownerId,
    });
  };

  // previous quote
  const createFromPreviousQuote = async () => {
    if (!previousQuoteCreation.quoteId) {
      toast.error("Please select a quote first");
      return;
    }

    try {
      setLoading(true);
      const quoteRes = await commonService(
        `/api/quotes/fetchQuoteDatas/${previousQuoteCreation.quoteId}`,
        "GET",
      );

      const oldQuote = quoteRes.data.data;
      const createRes = await fetch(`${baseUrl}/api/quotes/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          acc_key: acc_opp_id.accountId,
          opp_id: acc_opp_id.opportunityId,
          survey_key: oldQuote.template_type?.toString(),
          survey_name: oldQuote.template_name,
          templateUpdateType: oldQuote.template_type?.toString(),
          surveyUpdateType: oldQuote.surveyUpdateType,
          accounts: acc_opp_id?.accountName,
          opportunity_name: acc_opp_id?.opportunityName,
          created_by: userName,
          modifiedBy: userName,
          fromPrevious,
        }),
      });

      if (createRes.status !== 201) {
        throw new Error("Failed to create quote");
      }

      const newQuote = await createRes.json().then((res) => res.data);
      await fetch(`${baseUrl}/api/quotes/init`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quoteId: newQuote._id,
          surveyId: oldQuote.template_type,
        }),
      });
      await fetch(`${baseUrl}/api/quotes/previousQuote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldQuoteId: previousQuoteCreation.quoteId,
          newQuoteId: newQuote._id,
        }),
      });
      toast.success("Quote created from previous!");
      navigate(`/guidedselling_new?quotes=${newQuote._id}`, {
        state: {
          ...previousQuoteCreation,
          quoteId: newQuote._id,
          navigationType: "COPY",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Error creating quote");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      handleChangeQuoteState(quoteCreationTitle.gs);
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="quote_start_div">
      <Navbar />
      <div className="bread">
        <ul className="breadcrumbs">
          <li className="breadcrumbs--item">
            <Link to="/home" className="breadcrumbs--link">
              HOME
            </Link>
          </li>
          <li className="breadcrumbs--item">
            <Link
              to={`/accounts?id=${acc_opp_id?.accountId}&from=customReport`}
              className="breadcrumbs--link breadcrumbs--link_mid"
              state={acc_opp_id?.accountId}
            >
              {acc_opp_id?.accountName}
            </Link>
          </li>
          <li className="breadcrumbs--item">
            <Link
              to={`/opportunitiesdata?oppID=${acc_opp_id?.opportunityId}&from=customReport`}
              state={row}
              className="breadcrumbs--link breadcrumbs--link_mid"
            >
              {acc_opp_id?.opportunityName}
            </Link>
          </li>
          <li className="breadcrumbs--item">
            <Link className="breadcrumbs--link breadcrumbs--link--active">
              New Quote
            </Link>
          </li>
        </ul>
        <hr className="hr" />
      </div>

      <div className="flex-container">
        <Sidebar />
        <div className="row-newquote">
          <div className="left-newquote">
            <div className="create_quote_header_div">
              <header
                className="createquoteheader"
                style={{ position: "relative" }}
              >
                {quoteCreationState !== quoteCreationTitle.default && (
                  <FaAngleLeft
                    className="faAngleLeft"
                    style={{
                      color: "#ccc",
                      cursor: "pointer",
                      position: "absolute",
                      left: "20px",
                      marginBottom: "3px",
                    }}
                    onClick={() =>
                      handleChangeQuoteState(quoteCreationTitle.default)
                    }
                  />
                )}
                <label className="guidedsellinglabel">
                  {quoteCreationState}
                </label>
              </header>
            </div>

            {!loading && quoteCreationState == quoteCreationTitle.gs && (
              <div className="template">
                <CustomDropdown
                  options={surveyNames.map((item) => item.title)}
                  Placeholder={"Select Guided Selling Survey Template"}
                  onSelect={handleSelectTemplate}
                  label="GUIDED SELLING TEMPLATE"
                  customInput="guidedsellinginput"
                  ID={"quooteCreation"}
                  value={
                    surveyNames.find((item) => item._id === template)?.title ||
                    ""
                  }
                  onChange={(value) => setTemplate(value)}
                  isBorderVisible={true}
                />

                <div className="createbtn">
                  <button
                    type="submit"
                    id="create"
                    disabled={
                      isButtonDisabled || buttonClicked 
                    }
                    onClick={addQuotes}
                    style={{cursor: isButtonDisabled || buttonClicked && 'not-allowed'}}
                  >
                    CREATE
                  </button>
                </div>
              </div>
            )}

            {quoteCreationState == quoteCreationTitle.default && (
              <ul className="quotecreation_list">
                {quoteCreationValue.map((quoteData) => (
                  <li onClick={() => handleChangeQuoteState(quoteData.state)}>
                    {quoteData.name}
                  </li>
                ))}
              </ul>
            )}

            {quoteCreationState == quoteCreationTitle.previous_quote && (
              // <CustomDropdown
              //   options={quoteNames.map((item) => item.quotes_name)}
              //   Placeholder={"Select Guided Selling Survey Template"}
              //   onSelect={handleSelectTemplate}
              //   label="GUIDED SELLING TEMPLATE"
              //   customInput="guidedsellinginput"
              //   ID={"quooteCreation"}
              //   value={
              //     surveyNames.find((item) => item._id === template)?.title || ""
              //   }
              //   onChange={(value) => setTemplate(value)}
              //   isBorderVisible={true}
              //   onFocus={handleDropdownClick}
              // />
              <div>
                <div className="quotelist_quote_input_data">
                  <FaSearch className="quotelist_quote_icon" />
                  {/* <input type="text" className="quotelist_quote_input" />
                   */}
                  <input
                    type="text"
                    className="quotelist_quote_input"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search quotes..."
                  />
                </div>

                <div className="quotelist_quote_details">
                  {quoteNameLoading ? (
                    <>
                      <div className="default-loader">
                        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
                        <span>Loading...</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {filteredQuotes.map((quoteData) => (
                        <div
                          className={`quotecreation_span_quoteData  ${previousQuoteCreation.quoteId == quoteData._id && "previous_bg_highlight"}`}
                          key={quoteData._id}
                        >
                          <div
                            className="data"
                            onClick={() =>
                              handlePreviousQuoteCreation(quoteData)
                            }
                          >
                            <span className="quote-creation_subtext">
                              {quoteData.accounts?.toUpperCase()}{" "}
                              {quoteData.opportunity_name?.toUpperCase()}
                            </span>

                            <div className="quote-creation_quote_name">
                              {quoteData.quotes_name?.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <div className="previous_quote_creation_btn_div">
                  <button
                    className="previous_quote_creation_btn"
                    onClick={createFromPreviousQuote}
                    disabled={!previousQuoteCreation.quoteId}
                  >
                    CREATE
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="right_newquote">
            {!previousQuoteCreation.quoteId ? (
              <>
                <p className="right_newquote_message">
                  Select your Guided Selling Survey Template to Start an
                  Effort-Based Quote.
                </p>
                <p className="right_newquote_message">Press Create to Start.</p>
              </>
            ) : (
              <GuidedSellingNew
                ispreviousQuote={true}
                previousQuoteCreation={previousQuoteCreation}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCreation;
