///====================================================================================
/// Splitter-Class
///====================================================================================
function Splitter() {
    this.currentSplitter = null;
    this.overlay = null;

    ///====================================================================================
    /// Initialize Splitter-Class
    ///====================================================================================
    this.Initialize = function () {
    }

    ///====================================================================================
    /// Start Splitting
    ///====================================================================================
    this.StartSplitting = function (splitter) {
        if (this.currentSplitter != null) {
            this.StopSplitting();
        }
        this.currentSplitter = splitter;
        overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = "0px";
        overlay.style.left = "0px";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.zIndex = 100000;
        overlay.style.backgroundColor = "red";
        overlay.onmouseup = this.StopSplitting;
        document.body.appendChild(overlay);
    }

    ///====================================================================================
    /// Stop Splitting
    ///====================================================================================
    this.StopSplitting = function () {
        if (overlay != null) {
            document.body.removeChild(overlay);
        }
        overlay = null;
        currentSplitter = null;
    }

    ///====================================================================================
    /// Update Splitting
    ///====================================================================================
    this.UpdateSplitting = function (e) {
        var posX = (isNetscape() ? e.pageX : event.clientX);

        var leftSplitter = document.getElementById("LeftSplitter");
        var rightSplitter = document.getElementById("RightSplitter");
        if (this.currentSplitter != null) {
            if (this.currentSplitter == leftSplitter) {
                var navContent = document.getElementById("NavContent");
                if (navContent) {
                    var updatedWidth = posX - leftSplitter.offsetWidth;
                    if (updatedWidth < 1) {
                        updatedWidth = 1;
                    }
                    navContent.style.width = updatedWidth + "px";
                }
            } else if (this.currentSplitter == rightSplitter) {
                var layoutGrid = document.getElementById("LayoutGrid");
                var detailContent = document.getElementById("Details");
                if (layoutGrid && detailContent) {
                    var updatedWidth = layoutGrid.offsetWidth - posX - rightSplitter.offsetWidth;
                    if (updatedWidth < 1) {
                        updatedWidth = 1;
                    }
                    detailContent.style.width = updatedWidth + "px";
                }
            }
        }
    }

    ///====================================================================================
    /// IsNetscape
    ///====================================================================================
    function isNetscape() {
        return navigator.appName == "Netscape";
    }

    this.Initialize();
}

//========================================================================
// Toolbar-Class
//========================================================================
function ToolBar(normalStyle, hoverStyle, txtBoxEmpty, txtBox) {
    this.HoverStyle = hoverStyle;
    this.NormalStyle = normalStyle;
    this.TextBoxEmpty = txtBoxEmpty;
    this.TextBox = txtBox;
    this.TextBoxFirst = true;

    ///====================================================================================
    /// Initialize Toolbar-Class
    ///====================================================================================
    this.Initialize = function () {
    }

    //========================================================================
    // Select ToolbarItem
    //========================================================================
    this.Select = function (sender, strNavUrl) {
        var helpButtonTargetLink = PZ.JQ("#JQHelpButtonTargetLink").val();

        if (sender) {
            //var strId = sender.id.replace(/(Default|Hover)/g, "");
            var strId = sender;
            var lcid = _nm.GetActiveLCID();
            if (!lcid || lcid == "") {
                alert("LCID Error: Please contact P+Z GmbH");
            }
            switch (strId) {
                case "NavToProcess":
                    // strNavUrl is GUID
                    if (strNavUrl) {
                        var arrLinks = new Array();

                        arrLinks.push(new Link("Main", "M_" + strNavUrl + "_" + lcid + ".html"));
                        arrLinks.push(new Link("Details", "D_" + strNavUrl + "_" + lcid + ".html"));

                        _nm.Navigate(arrLinks);
                    }
                    break;
                case "GlossarButton":
                    var arrLinks = new Array();

                    arrLinks.push(new Link("Main", "Glossary_" + lcid + ".html"));
                    arrLinks.push(new Link("Details", "DetailContentStart_" + lcid + ".html"));
                    _nm.Navigate(arrLinks);
                    break;
                case "SymbioProcess":
                    var strGuid = _nm.GetDiagramGuid() || "";
                    var strEscapedName = _nm.GetEscapedDiagramName() || "";
                    var strStrongerEscapedName = _nm.GetStrongerEscapedDiagramName() || "";
                    var strongEscaping = (strNavUrl && strNavUrl.indexOf(';ESCAPING:STRONG') > -1);
                    var strName = (strongEscaping) ? strStrongerEscapedName : strEscapedName;
                    if (strongEscaping) {
                        strNavUrl = strNavUrl.replace(';ESCAPING:STRONG', '');
                    }
                    else if (strNavUrl && strNavUrl.indexOf(';ESCAPING:NORMAL') > -1) {
                        strNavUrl = strNavUrl.replace(';ESCAPING:NORMAL', '');
                    }

                    try {
                        var customValue = "";
                        var replacementTerms = new Array();
                        if (strNavUrl.indexOf("{CustomAttribute2}") > -1) {
                            var customAttribute = _nm.GetCustomDiagramAttribute("CustomAttribute2");
                            customValue = _nm.GetCustomDiagramAttribute("CustomAttribute2");
                            replacementTerms.push({ Key: "{CustomAttribute2}", Value: customValue });
                        }
                        if (strNavUrl.indexOf("{CustomAttribute}") > -1) {
                            customValue = _nm.GetCustomDiagramAttribute("CustomAttribute");
                            replacementTerms.push({ Key: "{CustomAttribute}", Value: customValue });
                        }

                        PZ.JQ.each(replacementTerms, function (k) {
                            strNavUrl = strNavUrl.replace(replacementTerms[k].Key, replacementTerms[k].Value);
                        });

                        if (strNavUrl && strNavUrl.indexOf('://') > -1) {
                            var strFullPath = strNavUrl.replace('{guid}', strGuid);
                            strFullPath = strFullPath.replace('{name}', strName);
                            NewWin = window.open(strFullPath, "EditProcess");
                            NewWin.focus();
                        }
                        else if (strNavUrl && strNavUrl.indexOf('://') < 0) {
                            var strFullPath = strNavUrl;
                            if (strFullPath.indexOf('{guid}') > 0) {
                                strFullPath = strFullPath.replace('{guid}', strGuid);
                            }
                            if (strFullPath.indexOf('{name}') > 0) {
                                strFullPath = strFullPath.replace('{name}', strName);
                            }
                            else if (strFullPath.indexOf('{guid') < 0 && strFullPath.indexOf('{name}') < 0) {
                                strFullPath = "../" + strNavUrl + "/" + strGuid + ".xls";
                            }
                            NewWin = window.open(strFullPath, "EditProcess");
                            NewWin.focus();
                        }
                        else if (strGuid && strGuid != "") {
                            var strFullPath = "SymbioProcess/" + strGuid + ".xls";
                            NewWin = window.open(strFullPath, "EditProcess");
                            NewWin.focus();
                        }
                    }
                    catch (ex) {
                        //alert("File not found!");
                    }
                    break;
                case "PDFButton":
                    var strGuid = _nm.GetDiagramGuid();
                    try {
                        if (strNavUrl && strGuid && strGuid != "") {
                            var strFullPath = "../" + strNavUrl + "/" + strGuid + ".xls";
                            NewWin = window.open(strFullPath, "EditProcess");
                            NewWin.focus();
                        }
                        else if (strGuid && strGuid != "") {
                            var strFullPath = "PDF/" + strGuid + ".pdf";
                            NewWin = window.open(strFullPath, "EditProcess");
                            NewWin.focus();
                        }
                    }
                    catch (ex) {
                        //alert("File not found!");
                    }
                    break;
                case "DruckenButton":
                    var strGuid = _nm.GetDiagramGuid();
                    alert(strGuid);
                    try {
                        if (strGuid && strGuid != "") {
                            var strFullPath = "P_" + strGuid + "_" + lcid + ".html";
                            //var strJsPrintWindowTitle = parent._nm.GetElementByIdFromContent("ToolbarContent", "JsPrintWindowTitle");
                            var strJsPrintWindowTitle = "Print";
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "LangChangeButton":
                    if (strNavUrl && strNavUrl != null) {
                        //parent._nm.ChangeLanguage(strNavUrl);
                        try {
                            var linkMain = encodeURIComponent(window.frames.Main.location.href);
                            linkMain = "./" + linkMain.substring(linkMain.lastIndexOf("%2F") + 3, linkMain.length);
                            currentLcid = document.getElementById("LCID").value;
                            linkMain = linkMain.replace(("_" + currentLcid), ("_" + strNavUrl));
                            linkMain = decodeURIComponent(linkMain);

                            var linkDetail = encodeURIComponent(window.frames.Details.location.href);
                            linkDetail = "./" + linkDetail.substring(linkDetail.lastIndexOf("%2F") + 3, linkDetail.length);
                            linkDetail = linkDetail.replace(("_" + currentLcid), ("_" + strNavUrl));
                            linkDetail = decodeURIComponent(linkDetail);

                            var bookmarkurl;
                            var linkGrid = document.location.href.split("?")[0];
                            linkGrid = linkGrid.replace(("_" + currentLcid), ("_" + strNavUrl));
                            bookmarkurl = linkGrid
                            + "?main=" + linkMain
                            + "&detail=" + linkDetail

                            if (strNavUrl && strNavUrl == "SharePoint") {
                                bookmarkurl = bookmarkurl.replace("SymbioPresentationFiles/Default_SP_1033.html", "default.aspx");
                            }

                            if (bookmarkurl.indexOf("FromFile") == -1) {
                                // guaranteed to be NOT the first param (see above)
                                bookmarkurl += "&FromFile=True";
                            }
                            window.location.href = bookmarkurl;
                        }
                        catch (ex) {
                        }
                    }
                    break;
                case "LangDeButton":
                    _nm.ChangeLanguage(1031);
                    break;
                case "LangEnButton":
                    _nm.ChangeLanguage(1033);
                    break;
                case "FeedbackButton":
                    var strFeedbackEMail = _nm.GetFeedbackEMail();
                    var strDiagramName = _nm.GetDiagramName();
                    var strDetailName = _nm.GetDetailName();
                    try {
                        if (strDiagramName == null || strDiagramName == "") {
                            strDiagramName = "Allgemeines Feedback";
                        }

                        if (strNavUrl == "RS") {
                            var strFullPath = "Feedback_RS_New.aspx?modelname=" + encodeURIComponent(strDiagramName) + "&detailname=" + encodeURIComponent(strDetailName) + "&langid=" + lcid;
                            //var strJsFeedbackWindowTitle = parent._nm.GetElementByIdFromContent("ToolbarContent", "JsFeedbackWindowTitle");
                            var strJsFeedbackWindowTitle = "Feedback";
                            NewWin = window.open(strFullPath, strJsFeedbackWindowTitle, "width=400,height=600,scrollbars=no");
                            NewWin.focus();
                        }
                        else if (strNavUrl != null && strNavUrl != "") {
                            var strJsFeedbackWindowTitle = "Feedback";
                            NewWin = window.open(strNavUrl, strJsFeedbackWindowTitle, "scrollbars=yes");
                            NewWin.focus();
                        }
                        else if (strFeedbackEMail && strFeedbackEMail != "") {
                            var strFullPath = "Feedback_" + lcid + ".html?mail=" + encodeURIComponent(strFeedbackEMail) + "&modelname=" + encodeURIComponent(strDiagramName) + "&langid=" + lcid;
                            //var strJsFeedbackWindowTitle = parent._nm.GetElementByIdFromContent("ToolbarContent", "JsFeedbackWindowTitle");
                            var strJsFeedbackWindowTitle = "Feedback";
                            NewWin = window.open(strFullPath, strJsFeedbackWindowTitle, "width=400,height=500,scrollbars=no");
                            NewWin.focus();
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "KontaktButton":
                    var strContactEMail = _nm.GetContactEMail();
                    var strDiagramName = _nm.GetDiagramName();
                    try {
                        if (strContactEMail && strContactEMail != "" && strDiagramName && strDiagramName != "") {
                            var strJsContactEmailSubject = _nm.GetElementByIdFromContent("ToolbarContent", "JsContactEmailSubject");
                            location.href = "mailto:" + strContactEMail + "?subject=" + strJsContactEmailSubject + "%20" + strDiagramName;
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "HelpButton":
                    try {
                        var helpButtonTargetLink = PZ.JQ("#JQHelpButtonTargetLink").val();

                        var strFullPath = helpButtonTargetLink;
                        //JK 12-11-30: This is NOT a window caption but a name for the window to reference it again. No special characters are allowed.
                        var strName = "SymbioHelpWindow";

                        if (strFullPath == undefined || strFullPath == "") strFullPath = "http://help.symbioworld.com/";

                        NewWin = window.open(strFullPath, strName);
                        NewWin.focus();
                    }
                    catch (ex) {
                    }
                    break;
                case "FavoritButton":
                    try {
                        var linkMain = encodeURIComponent(window.frames.Main.location.href);
                        linkMain = "./" + linkMain.substring(linkMain.lastIndexOf("%2F") + 3, linkMain.length);

                        var linkDetail = encodeURIComponent(window.frames.Details.location.href);
                        linkDetail = "./" + linkDetail.substring(linkDetail.lastIndexOf("%2F") + 3, linkDetail.length);

                        var bookmarkurl;
                        var toolbarLinkPattern = PZ.JQ('#JQLinkPattern').val();
                        if (toolbarLinkPattern) {
                            bookmarkurl = toolbarLinkPattern.replace('{lcid}', PZ.JQ('#LCID').val()).replace('{main}', linkMain).replace('{detail}', linkDetail);
                        } else {
                            bookmarkurl = document.location.href.split("?")[0]
                                + "?main=" + linkMain
                                + "&detail=" + linkDetail;
                        }

                        if (strNavUrl && strNavUrl == "SharePoint") {
                            bookmarkurl = bookmarkurl.replace("SymbioPresentationFiles/Default_SP_1033.html", "default.aspx");
                        }

                        if (bookmarkurl.indexOf("FromFile") == -1) {
                            if (bookmarkurl.indexOf("?") == -1) {
                                bookmarkurl += "?FromFile=True";
                            } else {
                                bookmarkurl += "&FromFile=True";
                            }
                        }

                        var content = _nm.GetContent("Main");
                        content = document.getElementById(content);

                        if (content && content != null) {
                            var linkText1 = document.getElementById("LinkText1");
                            var jsLinkText1 = document.getElementById("JsLinkText1");
                            if (linkText1 && jsLinkText1) {
                                linkText1.firstChild.nodeValue = jsLinkText1.firstChild.nodeValue;
                            }

                            var linkClose = document.getElementById("LinkClose");
                            var jsCloseButton = document.getElementById("JsCloseButton");
                            if (linkClose && jsCloseButton) {
                                linkClose.firstChild.nodeValue = jsCloseButton.firstChild.nodeValue;
                            }

                            document.getElementById("LinkTextBoxValue").value = bookmarkurl;
                            // LB: Work in both
                            var linkPopup = document.getElementById("LinkPopup");
                            if (linkPopup != null) {
                                document.getElementById("LinkPopup").style.display = "block";
                            }
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "ZoomButton":
                    try {
                        var content = _nm.GetContent("Main");
                        content = document.getElementById(content);

                        if (content && content != null) {
                            if (typeof content.contentWindow.SetViewScale == "function") {
                                var zoomLevelText = document.getElementById("ZoomLevelText");
                                var jsZoomLevel = document.getElementById("JsZoomLevel");
                                if (zoomLevelText && jsZoomLevel) {
                                    zoomLevelText.firstChild.nodeValue = jsZoomLevel.firstChild.nodeValue;
                                }

                                var closeZoomButton = document.getElementById("CloseZoomButton");
                                var jsCloseButton = document.getElementById("JsCloseButton");
                                if (closeZoomButton && jsCloseButton) {
                                    closeZoomButton.firstChild.nodeValue = jsCloseButton.firstChild.nodeValue;
                                }

                                document.getElementById("ZoomPopup").style.display = "block";
                                //parent.document.getElementById("ZoomPopup").style.setAttribute("display", "block", false);
                            }
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "ExcelButton":
                    var strGuid = _nm.GetDiagramGuid();
                    try {
                        if (strGuid && strGuid != "") {
                            var ext = ".png";
                            if (strNavUrl != null && strNavUrl != "") {
                                ext = "." + strNavUrl;
                            }
                            var strFullPath = "Print/I_" + strGuid + "_" + lcid + ext;
                            //var strJsExcelWindowTitle = parent._nm.GetElementByIdFromContent("ToolbarContent", "JsExcelWindowTitle");
                            var strJsExcelWindowTitle = "Graphic";
                            NewWin = window.open(strFullPath, strJsExcelWindowTitle);
                            NewWin.focus();
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "GrafikButton":
                    var strGuid = _nm.GetDiagramGuid();
                    try {
                        if (strGuid && strGuid != "") {
                            var strFullPath = "Print/I_" + strGuid + "_" + lcid + ".emf";
                            //var strJsExcelWindowTitle = parent._nm.GetElementByIdFromContent("ToolbarContent", "JsExcelWindowTitle");
                            var strJsGrafikWindowTitle = "Grafik";
                            NewWin = window.open(strFullPath, strJsGrafikWindowTitle);
                            NewWin.focus();
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "PrintPopupButton":
                    var strGuid = _nm.GetDiagramGuid();
                    try {
                        if (strGuid && strGuid != "") {
                            var strFullPath = "P_" + strGuid + "_" + lcid + ".html";
                            var strJsGrafikWindowTitle = "PrintPopup";
                            NewWin = window.open(strFullPath, strJsGrafikWindowTitle);
                            NewWin.focus();
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "LegendButton":
                    try {
                        var arrLinks = new Array();
                        arrLinks.push(new Link(_nm.GetContent("Details"), "DetailContentLegend_" + lcid + ".html"));
                        _nm.Navigate(arrLinks);
                    }
                    catch (ex) {
                    }
                    break;
                case "FavoritPopupButton":
                    try {
                        if (typeof RenderMyFavorites == "function") {
                            RenderMyFavorites();

                            var popupInput = document.getElementById("PopupInput");
                            if (popupInput != null) {
                                popupInput.focus();
                                popupInput.focus();
                            }
                        }
                    }
                    catch (ex) {
                    }
                    break;
                case "AddFavoritButton":
                    try {
                        var strDetailGuid = null;
                        var strMsgTxt = _nm.GetElementByIdFromContent("ToolbarContent", "JsFavoritCommitTxt").firstChild.nodeValue;
                        _nm.AddFavorite(strDetailGuid, strMsgTxt);
                    }
                    catch (ex) {
                    }
                    break;
                default:
                    break;
            }
        }
        return;
    }

    //Call Initilize Function to Raise this.Initialize()
    this.Initialize();
}