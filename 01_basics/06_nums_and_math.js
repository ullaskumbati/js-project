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





  return (
    <div className="Account_Main_Div">
      <Navbar />
      <div className="bread">
        <ul className="breadcrumbs-guidedd">
          <div className="breadcrumbs--left">
            <li className="breadcrumbs--item">
              <Link to="/home" className="breadcrumbs--link_mid">
                Home
              </Link>
            </li>
            <li className="breadcrumbs--item">
              <Link to="/catalog-roles" className="breadcrumbs--link_mid">
                Catalog
              </Link>
            </li>
            <li className="breadcrumbs--item">
              <Link to="" className="breadcrumbs--link--active">
                Template
              </Link>
            </li>
          </div>
          <div className="breadcrumbs--right">
            <li
              style={{
                float: "right",
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Link
                to=""
                className={`breadcrumbs--link breadcrumbs--link--active  ${isHighlighted && "breadcrumbs-template-active"
                  } `}
              >
                <FaPen
                  className={`accountpen ${isHighlighted ? "highlighted_template" : ""
                    }`}
                  onClick={toggleTempDetailspen}
                />
              </Link>
              <Link
                to=""
                className={`breadcrumbs--link breadcrumbs--link--active ${isHighlightedFile && "breadcrumbs-template-active"
                  }`}
                onClick={scrolllistingicon}
              >
                <FaScroll
                  className={`file ${isHighlightedFile ? "highlighted_template" : ""
                    }`}
                  onClick={scrolllistingicon}
                />
              </Link>
            </li></div>
        </ul>
        <hr className="hr" />
      </div>
      <div className="row">
        <div className="sidebarguideddiv_Account">
          <CatalogSidebar />
        </div>
        {Writeflexvisible && (
          <WriteFlexAll
            showGrouping={false}
            // resetFields={resetTemplateFields}
            data={dbTemplateData}
            onItemSelect={handleItemSelect}
            dataType="template"
            permission={templatePagePermission}
            hasItems={dbTemplateData.length > 0}
          />
        )}
        {Plusiconclick && (
          <div id="hidetempluicon">
            <div className="dotswriteblank">
              <div className="tempmaindiv">
                <FaAngleLeft
                  className="newtemplateicon"
                  id="faangletemplateleft"
                />
                <label id="newtwmplabel">NEW TEMPLATE</label>
              </div>
              <ul id="myMenuwriteblank">
                <li>
                  <Link to="#">TEMPLATE</Link>
                </li>
                <li>
                  <Link to="#">PREVIOUS QUOTE</Link>
                </li>
                <li to="#" onClick={handleBlankQuoteClick}>
                  <Link to="#">BLANK QUOTE</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div
          className="right"
          style={{
            width: accountOpen ? "78%" : "80%",
          }}
        >
          {isLoading ? (
            <div className="spinner-container">
              <div className="spinner"></div>
              <div className="loading_page">Loading...</div>
            </div>
          ) : (
            <>
              <button
                id="openbtn"
                onClick={handleOpenSideBar}
                style={{ display: accountOpen ? "none" : "block" }}
              >
                {accountOpen ? <FaGreaterThan /> : <FaLessThan />}
              </button>
              <div id="headerTempaltes">
                  {headerTemplateMsgVisible && (
                  <HeaderBar headerlabel={headerChange} templateheader={true}>
                    <div className="copy-btn">
                      <button id="update_data" onClick={handleCopyTemplate} 
                      disabled ={templatePagePermission === "readOnly" || dbTemplateData.length === 0}>CREATE A COPY</button>
                    </div>
                  </HeaderBar>
                )}
 
 
                {showTemplateplusmessage && (
                  <div id="accessmsgdiv">
                    <label id="accessmsg">
                      PICK FROM THE LISTED OPTIONS TO START YOUR QUOTE
                    </label>
                  </div>
                )}
              </div>

              {dbTemplateData.length > 0 || plusIconClicked ? (
                <div>
                  <div>
                    {showlistingtemplate && (
                      <div className="showlisticonclick">
                        <GuidedListing
                          actualWidth={"360px"}
                          showFlagHeader={true}
                          showFlagButton={false}
                          options={doctypePublished
                            .filter((docType) =>
                              selectedOptionsContentdoctype.includes(
                                docType._id
                              )
                            )
                            .map((docType) => docType.doc_name)}
                          doctypePublished={doctypePublished}
                          doc_tempData={templateData.doc_tempData}
                          updateDocTempData={updateDocTempData}
                          readOnly={templatePagePermission === "readOnly"}
                          docTempClicks={showlistingtemplate}
                          unSavedChange={unSavedChange}
                          setUnSavedChange={setUnSavedChange}
                          quote_name={templateData.quote_name}
                          templateData={templateData}
                          dbTemplateData={dbTemplateData}
                          selectedOptionsContentdoctype={
                            selectedOptionsContentdoctype
                          }
                          setSelectedOptionsContentdoctype={
                            setSelectedOptionsContentdoctype
                          }
                          handleDownloadWord={handleDownloadWord}
                          handleDownloadWrapperWord={handleDownloadWrapperWord}
                          downloadButtonText={downloadButtonText}
                          setDownloadButtonText={setDownloadButtonText}
                          setDownloadTriggered={setDownloadTriggered}
                          setDownloadLink={setDownloadLink}
                          selectedOptionTemplate={selectedOptionTemplate}
                          setSelectedOptionTemplate={setSelectedOptionTemplate}
                          triggerDownload={triggerDownload}
                          handleDownloadWrapperPdf={handleDownloadWrapperPdf}
                          downloadButtonText1={downloadButtonText1}
                          setDownloadButtonText1={setDownloadButtonText1}
                          downloadUrl={downloadUrl}
                          setDownloadUrl={setDownloadUrl}
                          setFileNamePdf={setFileNamePdf}
                          setDownloadTriggered1={setDownloadTriggered1}
                          setDownloadTriggered2={setDownloadTriggered2}
                          downloadButtonText2={downloadButtonText2}
                          setDownloadButtonText2={setDownloadButtonText2}
                          handleDownloadWrapperXl={handleDownloadWrapperXl}
                          triggerDownloadXl={triggerDownloadXl}
                          extracted={extracted}
                        />
                      </div>
                    )}

                    {isGuideVisible && (
                      <div id="Amul">
                        <div className="tempdeatails">
                          <div className="buttontemp">
                            <button
                              type="button"
                              className="tempbttn"
                              id="clickmetemp"
                              onClick={toggleGuidebtn}
                            >
                              {isGuideVisiblebtn ? (
                                <FaAngleUp id="saa" />
                              ) : (
                                <FaAngleDown id="saa" />
                              )}
                            </button>
                          </div>

                          {isGuideVisiblebtn && (
                            <div className="quotempid">
                              <div className="quotempid2">
                                <div className="templeft">
                                  <div className="containertemplate1">
                                    <div id="contenttemp1">
                                      <ErrorMessage
                                        type={"text"}
                                        showFlaxErrorMessageText={true}
                                        label={"QUOTE NAME"}
                                        errormsg="QUOTE NAME IS A REQUIRED FIELD"
                                        value={templateData.quote_name}
                                        onChange={(value) =>
                                          handleInputChange("quote_name", value)
                                        }
                                        readOnly={
                                          templatePagePermission === "readOnly"
                                        }
                                      />
                                    </div>
                                    <div id="contenttemp2">
                                      <CustomDropdown
                                        options={filteredpricemodel}
                                        label={"PRICE MODEL"}
                                        onSelect={handleOptionSelect}
                                        readOnly={true}
                                        ID={"greyoutInputId"}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutcareticon={"greyoutcareticon"}
                                      />
                                    </div>
                                  </div>
                                  <div className="containertemp2">
                                    <div id="contentdownb1">
                                      <CustomDropdown
                                        options={filteredcatagory}
                                        label={"CATALOG CATEGORY"}
                                        value={templateData.catalog_category}
                                        onChange={(value) =>
                                          handleInputChange(
                                            "catalog_category",
                                            value
                                          )
                                        }
                                        onSelect={(selectedoption) =>
                                          handleSelect(
                                            "catalog_category",
                                            selectedoption
                                          )
                                        }
                                        readOnly={
                                          templatePagePermission === "readOnly"
                                        }
                                      />
                                    </div>

                                    <div id="contentdownb3">
                                      <CustomDropdown
                                        label={"STATUS"}
                                        options={catalogstatus}
                                        readOnly={true}
                                        ID={"greyoutInputId"}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutcareticon={"greyoutcareticon"}
                                        value={templateData.status}
                                        onChange={(value) =>
                                          handleSelect("status", value)
                                        }
                                        onSelect={(selectedoption) =>
                                          handleInputChange(
                                            "status",
                                            selectedoption
                                          )
                                        }
                                      />
                                    </div>
                                    <div id="contentdownb4">
                                      <InputTypes
                                        type={"number"}
                                        TextLabel="CURRENCY"
                                        showFlagText={true}
                                        onSelect={handleOptionSelect}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="tempright">
                                  <div className="containerquoteGuide1">
                                    <div id="listpricedd">
                                      <InputTypes
                                        type={"number"}
                                        TextLabel="LIST PRICE"
                                        textplaceholder={"$0.00"}
                                        showFlagText={true}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                    <div id="discountdd">
                                      <InputTypes
                                        type={"number"}
                                        TextLabel="DISCOUNT"
                                        textplaceholder={"0%"}
                                        showFlagText={true}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                    <div id="netpricedd">
                                      <InputTypes
                                        type={"number"}
                                        TextLabel="NET PRICE"
                                        textplaceholder={"$0.00"}
                                        showFlagText={true}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                  </div>
                                  <div className="containerqoute2">
                                    <div id="expensesdd">
                                      <InputTypes
                                        TextLabel="EXPENSES"
                                        showFlagText={true}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                    <div id="margindd">
                                      <InputTypes
                                        TextLabel="MARGIN"
                                        textplaceholder={"0%"}
                                        showFlagText={true}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                    <div id="costdd">
                                      <InputTypes
                                        TextLabel="COST"
                                        showFlagText={true}
                                        readOnly={true}
                                        greyoutLabelId={"greyoutLabelId"}
                                        greyoutInputId={"greyoutInputId"}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="contentqtemp">
                                <textarea
                                  id="multiline-text"
                                  name="multiline-text"
                                  rows={4}
                                  cols={50}
                                  style={{
                                    fontFamily: "Arial,Helvetica,sans-serif",
                                    resize: "none",
                                    padding: "6px",
                                    overflowY: "hidden",
                                  }}
                                  value={templateData.description}
                                  onChange={handleTextareaChange}
                                />
                                <label htmlFor="multiline-text">
                                  DESCRIPTION
                                </label>
                              </div>

                              {!isReadOnly && (
                                <div className="delete_update_template">
                                  <button
                                    id="update_data"
                                    onClick={
                                      mode === "create"
                                        ? addTemplate
                                        : handleUpdate
                                    }
                                    disabled={
                                      mode === "update" &&
                                      !areRequiredFieldsFilled()
                                    }
                                  >
                                    {mode === "create" ? "CREATE" : "UPDATE"}
                                  </button>
                                  <button
                                    id={
                                      deleteClicked
                                        ? "delete-highlight"
                                        : "delete_data"
                                    }
                                    ref={deleteButtonRef}
                                    onClick={
                                      mode1 === "cancel"
                                        ? handleCancelClick
                                        : handelDeleteTemplate
                                    }
                                    disabled={
                                      mode1 !== "cancel" &&
                                      templateData.status === "PUBLISHED"
                                    }
                                  >
                                    {mode1 === "cancel" ? "CANCEL" : "DELETE"}
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div id="accessmsgdiv">
                  <p id="accessmsg">
                    NO TEMPLATE FOUND. PLEASE USE + TO ADD A NEW TEMPLATE
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        <div
          className="sidepanel"
          style={{
            width: accountOpen ? "18%" : "0%",
            display: accountOpen ? "block" : "none",
          }}
        >
          <SidePanel
            showFlagTimeStamp={accountOpen ? true : ""}
            showFlagDoctypeAll={accountOpen ? true : ""}
            showFlagPdfdocument={accountOpen ? true : ""}
            showFlagWorddocument={accountOpen ? true : ""}
            showFlagXldocument={accountOpen ? true : ""}
            doctypePublished={doctypePublished}
            updateOptionsDoctype={updateOptionsDoctype}
            selectedOptionsContentdoctype={selectedOptionsContentdoctype}
            showFlagExternal={accountOpen ? true : ""}
            onClose={handleCloseSideBar}
            createdAt={formatDate(templateData.createdAt)}
            modifiedAt={formatDate(templateData.modifiedAt)}
            createdBy={templateData.createdBy}
            modifiedBy={templateData.modifiedBy}
            revision={templateData.revision}
            setUnSavedChange={setUnSavedChange}
            doc_tempData={templateData.doc_tempData}
          />
        </div>
      </div>
    </div>
  );
