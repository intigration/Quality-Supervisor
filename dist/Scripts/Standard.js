//CONTENT FROM DEFAULT.ASPX

//Functions used by the StandardTemplate

/*
    Resizes the pages' elements.
    This function is called, when the page initially loads or the browser window gets resized.
*/
function ResizeWebElements() {
    var accordion = PZ.JQ("#Accordion");
    var main = PZ.JQ("#Main");
    var details = PZ.JQ("#Details");
    var toolbarBox = PZ.JQ("#ToolbarBox");
    // For Vertical Swimlane
    var verticalHeader = main.length > 0 ? main.contents().find('div[id=VerticalHeader]') : null;
    // For Horizontal Swimlane
    var horizontalHeader = main.length > 0 ? main.contents().find('div[id=HorizontalHeader]') : null;
    var horizontalSpacer = main.length > 0 ? main.contents().find('div[id=HorizontalSpacer]') : null;

    if (accordion.length > 0) {
        accordion.css('height', ((PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#NavContentHeader').outerHeight() + PZ.JQ('#ToggleNavigation').outerHeight() + 2)) + 'px'));
    }
    if (main.length > 0) {
        main.css('height', ((PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight())) + 'px'));
    }
    if (details.length > 0) {
        details.css('height', ((PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#ToggleDetailContentPanel').outerHeight())) + 'px'));
    }
    if (toolbarBox.length > 0) {
        toolbarBox.css('width', ((PZ.JQ(window).width() - PZ.JQ('.ToolbarBox').position().left) + 'px'));
    }
    if (main.length > 0) {
        main.contents().find('div[id=Viewport]').css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
        var $htmlRenderingViewPort = main.contents().find('div[id=Content_Viewport_Html]');
        if ($htmlRenderingViewPort.length > 0) {
            $htmlRenderingViewPort.css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
        }

        var $table = main.contents().find('table[id=diagramTable]');
        if ($table.length > 0) {
            $table.children("tbody").css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + main.contents().find('table[id=diagramTable]').children("thead").outerHeight() + main.contents().find('div[id=diagramTable_filter]').outerHeight() + 2 + main.contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
        }

        if (verticalHeader.length > 0) {
            main.contents().find('div[id=Viewport]').css('margin-bottom', main.contents().find('div[id=Viewport]').outerHeight() * -1 + 'px');
        }

        if (horizontalHeader.length > 0) {
            main.contents().find('div[id=Viewport]').css('margin-bottom', main.contents().find('div[id=Viewport]').outerHeight() * -1 + 'px');

            var scrollHeightToSubtract = 0;
            if (main.contents().find('div[id=Viewport]')[0].scrollWidth > main.contents().find('div[id=Viewport]')[0].clientWidth) {
                scrollHeightToSubtract = 17;
            }

            PZ.JQ(horizontalHeader).css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + scrollHeightToSubtract + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
            PZ.JQ(horizontalSpacer).css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + scrollHeightToSubtract + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
        }
    }
    if (accordion.length > 0) {
        accordion.accordion('resize');
    }
};

function ResizeViewport() {
    var main = PZ.JQ("#Main");
    // For Vertical Swimlane
    var verticalHeader = main.length > 0 ? main.contents().find('div[id=VerticalHeader]') : null;
    // For Horizontal Swimlane
    var horizontalHeader = main.length > 0 ? main.contents().find('div[id=HorizontalHeader]') : null;

    if (main.length > 0) {
        main.contents().find('div[id=Viewport]').css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
        main.contents().find('div[id=Viewport]').css('width', '100%');

        main.contents().find('div[id=VerticalHeader]').css('width', '100%');
        main.contents().find('div[id=HorizontalHeader]').css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
        main.contents().find('div[id=HorizontalSpacer]').css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
    }
};

function ResizeAccordion() {
    var accordion = PZ.JQ("#Accordion");
    if (accordion.length > 0) {
        accordion.css('height', ((PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#NavContentHeader').outerHeight() + PZ.JQ('#ToggleNavigation').outerHeight() + 2)) + 'px'));
        accordion.accordion('resize');
    }
};

function EvaluateGlobalRedirectCookie() {
    if (window.location.href.indexOf("FromFile=True") == -1) {
        var cookieValue = PZ.JQ.cookie("PZ.GlobalRedirectCookie");
        if (cookieValue != null && cookieValue != "") {
            try {
                if (cookieValue.indexOf("?") == -1) {
                    document.location.href = cookieValue + "?FromFile=True";
                } else {
                    document.location.href = cookieValue + "&FromFile=True";
                }
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }

    if (window.location.href.indexOf("CookieValue") > 0) {
        var link = window.location.href.substr(window.location.href.indexOf("&CookieValue=") + "&CookieValue=".length, window.location.href.length - window.location.href.indexOf("&CookieValue=") - "&CookieValue=".length);
        PZ.JQ.cookie("PZ.GlobalRedirectCookie", link, { expires: 7 });
    }
};

function SetInitialDiagramViewMode() {
    //Initial diagram view mode.
    var initialDiagramViewMode = "";
    if (PZ.JQ("#JQInitialDiagramViewMode").length > 0) {
        initialDiagramViewMode = PZ.JQ("#JQInitialDiagramViewMode").val();
    }

    var viewModeCookie = PZ.JQ.cookie("DiagramViewMode");

    if (viewModeCookie != null) {
        if (viewModeCookie.length > 0) {
            if (viewModeCookie == "") {
                PZ.JQ.cookie("DiagramViewMode", initialDiagramViewMode, { expires: 7 });
            }
        }
        else {
            PZ.JQ.cookie("DiagramViewMode", initialDiagramViewMode, { expires: 7 });
        }
    }
    else {
        PZ.JQ.cookie("DiagramViewMode", initialDiagramViewMode, { expires: 7 });
    }
};

function CheckClibboardButtonVisibility() {
    var tmpUserAgentString = navigator.userAgent;

    //Check if current browser is Internet Explorer.
    if (tmpUserAgentString.lastIndexOf("MSIE") == -1) {
        PZ.JQ("#CopyToClipboardButton").css("display", "none");
        PZ.JQ("#LinkText2").css("display", "block");
    }
};

function CheckBrowserVersion() {
    var tmpUserAgentString = navigator.userAgent;

    //Check if current browser is firefox. If true, check version. (Minimum: 17)
    if (tmpUserAgentString.lastIndexOf("Firefox/") != -1) {
        tmpUserAgentString = tmpUserAgentString.substr(tmpUserAgentString.lastIndexOf("Firefox/"), 10);
        var tmpVersionString = tmpUserAgentString.substring(tmpUserAgentString.indexOf("/") + 1, tmpUserAgentString.length);
        var tmpVersion = parseInt(tmpVersionString);
        if (tmpVersion != NaN && tmpVersion >= 17) {
            return true;
        }
        else {
            return false;
        }
    }
        //Check if current browser is Internet Explorer. If true, check version. (Minimum: 9)
    else if (tmpUserAgentString.lastIndexOf("MSIE") != -1) {
        var cutUserAgentString = tmpUserAgentString.substring(tmpUserAgentString.lastIndexOf("MSIE"), tmpUserAgentString.indexOf(";", tmpUserAgentString.lastIndexOf("MSIE")));
        var tmpVersionString = cutUserAgentString.substring(cutUserAgentString.indexOf(" ") + 1, cutUserAgentString.length);
        var tmpVersion = parseFloat(tmpVersionString);
        //Temporary tweak for IE11
        if (cutUserAgentString.lastIndexOf("like Gecko") != -1 || cutUserAgentString.lastIndexOf("Trident/7.0") != -1)
            return true
        if (tmpVersion != NaN && tmpVersion >= 8) {
            return true;
        }
        else {
            return false;
        }
    }
        //Temporary tweak for IE11
    else {
        cutUserAgentString = navigator.userAgent;
        if (cutUserAgentString.lastIndexOf("like Gecko") != -1 || cutUserAgentString.lastIndexOf("Trident/7.0") != -1)
            return true
    }
    return false;
    //return (navigator.appName + " <br/>" + navigator.appVersion + " <br/>ua: " + navigator.userAgent);
};

function IsActiveXEnabled() {
    //if (typeof (window.ActiveXObject) == "undefined") {
    //    return false;
    //}
    //else {
    //    return true;
    activeXelement = null;
    try {
        activeXelement = new ActiveXObject('htmlfile');
    }
    catch (e) {
        return false;
    }
    if (activeXelement) {
        return true;
    }
    return false;
};

function IsMsieInCompatibilityMode() {
    var tmpUserAgentString = navigator.userAgent;
    var tmpUserAgentTridentString = navigator.userAgent;

    //IE browser constant v8.X
    var ie8Trident = "Trident/4.0";
    var ie9Trident = "Trident/5.0";
    var ie10Trident = "Trident/6.0";
    var ie11Trident = "Trident/7.0";

    var ie8TridentNumber = 4;
    var ie9TridentNumber = 5;
    var ie10TridentNumber = 6;
    var ie11TridentNumber = 7;

    //Check if current browser is Internet Explorer. If true, check version. (Minimum: 9)
    if (tmpUserAgentString.lastIndexOf("MSIE") != -1) {
        //MSIE entry.
        tmpUserAgentString = tmpUserAgentString.substring(tmpUserAgentString.lastIndexOf("MSIE"), tmpUserAgentString.indexOf(";", tmpUserAgentString.lastIndexOf("MSIE")));
        var tmpVersionString = tmpUserAgentString.substring(tmpUserAgentString.indexOf(" ") + 1, tmpUserAgentString.length);
        var tmpVersion = parseFloat(tmpVersionString);
        //alert("IE version: " + tmpVersion);

        if (tmpUserAgentTridentString.lastIndexOf("Trident") != -1) {
            //Trident entry
            tmpUserAgentTridentString = tmpUserAgentTridentString.substring(tmpUserAgentTridentString.lastIndexOf("Trident"), tmpUserAgentTridentString.lastIndexOf("Trident") + 11);
            var tmpTridentVersionString = tmpUserAgentTridentString.substring(tmpUserAgentTridentString.indexOf("/") + 1, tmpUserAgentTridentString.length);
            var tmpTridentVersion = parseFloat(tmpTridentVersionString);
            //alert("Trident version: " + tmpTridentVersion);
        }

        if (tmpTridentVersion == 4) {
            if (tmpVersion != 8) {
                return true;
            }
            else {
                return false;
            }
        }
        if (tmpTridentVersion == 5) {
            if (tmpVersion != 9) {
                return true;
            }
            else {
                return false;
            }
        }
        if (tmpTridentVersion == 6) {
            if (tmpVersion != 10) {
                return true;
            }
            else {
                return false;
            }
        }
        if (tmpTridentVersion == 7) {
            if (tmpVersion != 11) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

function BrowserIsChrome() {
    return navigator.userAgent.lastIndexOf("Chrome/") > -1 && navigator.userAgent.lastIndexOf("Edge/12") == -1
}

/*
    If a browser version string is provided, the check will will be performed against the given version.
*/
function BrowserIsMSIE(versionString) {
    var tmpUserAgentString = navigator.userAgent;

    //Check if current browser is Internet Explorer. If true, check version. (Minimum: 9)
    if (versionString == null || (versionString != null && versionString == "")) {
        if (tmpUserAgentString.lastIndexOf("MSIE") != -1 || (tmpUserAgentString.lastIndexOf("like Gecko") != -1 || tmpUserAgentString.lastIndexOf("Trident/7.0") != -1)) {
            return true;
        }
    }
    else {
        switch (versionString) {
            case "12":
                if (tmpUserAgentString.lastIndexOf("Edge/12") != -1) {
                    return true;
                }
                break;
            case "11":
                if (tmpUserAgentString.lastIndexOf("Trident/7.0") != -1) {
                    return true;
                }
                break;
            case "10":
                if (tmpUserAgentString.lastIndexOf("Trident/5.0") != -1) {
                    return true;
                }
                break;
            case "9":
                if (tmpUserAgentString.lastIndexOf("Trident/5.0") != -1) {
                    return true;
                }
                break;
            case "8":
                if (tmpUserAgentString.lastIndexOf("Trident/4.0") != -1) {
                    return true;
                }
                break;
        }
    }
    return false;
};

/*
    Used to evaluate the nodes to be generated for display when navigating via detail or main content: jsTree sensitive.
*/
function SearchParents(Tree, NodeId) {
    var parentList = [];
    FindParent(Tree, NodeId, parentList);

    for (var i = parentList.length - 1; i > 0; i--) {
        Tree.open_node("#" + parentList[i]);
    }
    Tree.select_node("#" + parentList[0]);
}

/*
    Used to evaluate the nodes to be generated for display when navigating via detail or main content: jsTree sensitive.
*/
function FindParent(Tree, NodeId, ParentList) {
    var tmpParentList = ParentList;
    var tmpTree = Tree;
    if (Tree._get_node("#" + NodeId) != "[object Object]") {
        tmpParentList.push(NodeId);
        var tmpParent = PZ.JQ("#_" + NodeId).parents("li").attr("id");
        if (tmpParent != null) {
            tmpParent = tmpParent.replace("_", "");
            FindParent(tmpTree, tmpParent, tmpParentList);
        }
        else return;
    }
    else {
        tmpParentList.push(NodeId);
        return ParentList;
    }
}

/*
    Used to initially load the content into an IFrame. Used for main and details to prevent invalid loading order in IE.
*/
function LoadInitialIFrameContent(targetIFrame, contentToLoad) {
    var tmpTargetIFrame = targetIFrame;
    var tmpContentToLoad = contentToLoad;
    if ((tmpTargetIFrame != null) && (tmpContentToLoad != null)) {
        //jQuery
        PZ.JQ("#" + tmpTargetIFrame).attr("src", tmpContentToLoad);
        //JavaScript
        //var iFrame = document.getElementById('Main');
        //iFrame.src = "MainStart_1031.html";
    }
}

/*
    Clears any set IFrame source content.
*/
function ClearIFrameContent(targetIFrame) {
    var tmpTargetIFrame = targetIFrame;
    if (tmpTargetIFrame != null) {
        //jQuery
        PZ.JQ("#" + tmpTargetIFrame).attr("src", "");
        //JavaScript
        //var iFrame = document.getElementById('Main');
        //iFrame.src = "MainStart_1031.html";
    }
}

/*
Reactivates print, zoom, graphics and link button (Used in context of Movie mode
*/
function ReactivateToolbarButtons(isInMovieMode) {
    try {
        if (isInMovieMode.toLowerCase()) {
            PZ.JQ("#ToolbarControl_DiagramViewModeButton").button("option", "disabled", false); //Graphics
            PZ.JQ("#ToolbarControl_ZoomButton").button("option", "disabled", false); //Zoom
            PZ.JQ("#ToolbarControl_PrintButton").button("option", "disabled", false); //Print
            PZ.JQ("#ToolbarControl_FavoriteButton").button("option", "disabled", false); //Link
        }
    }
    catch (e) { }
}

/*
The main navigation function used for updating the accordion and the tree, setting list link highlight in the tree etc.
TODO JK: IMPROVE: Maybe this function can be minified and optimized a bit, although already working nicely currently.
*/
function Navigate() {
    var treeNodeId = PZ.JQ('#TREENODEID');
    var refreshingContentType = PZ.JQ("#REFRESHINGCONTENTTYPE");
    var accordion = PZ.JQ("#Accordion");
    var accordionTabChangeByNavigate = PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE');
    var favoriteTriggeredChange = PZ.JQ("#FAVORITETRIGGEREDCHANGE");

    if (PZ.JQ('#TREENODEID').val() != "NoNode") {
        var id = PZ.JQ('#TREENODEID').val();

        var accTabId = "";
        if (PZ.JQ(id) && ((PZ.JQ("#" + id).parents(".AccordionLinks").parent().attr("id") != undefined) || (PZ.JQ("#_" + id).parents(".AccordionTreeShadowCopy").parent().attr("id") != undefined))) {
            if (PZ.JQ("#REFRESHINGCONTENTTYPE").val() == "ListElement") {
                accTabId = PZ.JQ("#" + id).parents(".AccordionLinks").parent().attr("id");
            }
            else {
                accTabId = PZ.JQ("#_" + id).parents(".AccordionTreeShadowCopy").parent().attr("id");
            }
            accTabId = (accTabId != null && accTabId.length > 7) ? accTabId.substring(7, accTabId.length) : "";
            var parsedAccTabId = parseInt(accTabId);
            var currentAccTabId = 0;

            if (PZ.JQ("#Accordion").accordion("option", "active") == "[object Object]") {
                currentAccTabId = 0;
            }
            else {
                currentAccTabId = PZ.JQ("#Accordion").accordion("option", "active");
            }

            if (parsedAccTabId != currentAccTabId) {
                PZ.JQ("#Accordion").accordion("activate", parsedAccTabId);
                PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE').val("1");
                //Firing: AccordionChange, AccordionChangeStart
            }
            else {
                var searchableTabId = "";
                if (PZ.JQ("#REFRESHINGCONTENTTYPE").val() != "ListElement") {
                    var realTreeId = "#" + PZ.JQ("#_" + id).parents(".AccordionTreeShadowCopy").attr("id");
                    if ((realTreeId.indexOf("StructureTreeControl") != -1) && realTreeId != null) {
                        realTreeId = realTreeId.replace(/StructureTreeControl/g, "RenderedStructureTree");
                    }
                    if ((realTreeId.indexOf("TreeControl") != -1) && realTreeId != null) {
                        realTreeId = realTreeId.replace(/TreeControl/g, "RenderedTree");
                    }
                    PZ.JQ(realTreeId).jstree('set_focus');
                    if (PZ.JQ.jstree._focused() != null) {
                        if (PZ.JQ.jstree._focused().get_selected()) {
                            PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
                        }
                    }
                    searchableAccTabId = "#" + PZ.JQ("#_" + id).parents(".AccordionTreeShadowCopy").parent().attr("id");
                }
                else {
                    searchableAccTabId = "#" + PZ.JQ("#" + id).parents(".AccordionLinks").parent().attr("id");
                }
                if (PZ.JQ(searchableAccTabId).find(".AccordionLinks").children(".AccordionListLinkContainer").hasClass("ClickedAccordionListLinkContainer ui-corner-all")) {
                    PZ.JQ(searchableAccTabId).find(".AccordionLinks").children(".AccordionListLinkContainer").removeClass("ClickedAccordionListLinkContainer ui-corner-all");
                    PZ.JQ(searchableAccTabId).find(".AccordionLinks").find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
                }
                if (PZ.JQ(searchableAccTabId).find(".AccordionSubLinks").children(".AccordionListSubLinkContainer").hasClass("ClickedAccordionListSubLinkContainer ui-corner-all")) {
                    PZ.JQ(searchableAccTabId).find(".AccordionSubLinks").children(".AccordionListSubLinkContainer").removeClass("ClickedAccordionListSubLinkContainer ui-corner-all");
                    PZ.JQ(searchableAccTabId).find(".AccordionSubLinks").find(".ClickedAccordionListSubLink").removeClass("ClickedAccordionListSubLink");
                }

                if (PZ.JQ("#REFRESHINGCONTENTTYPE").val() != "ListElement") {
                    if (PZ.JQ.jstree._focused() != null) {
                        if (PZ.JQ.jstree._focused()._get_node("#" + PZ.JQ('#TREENODEID').val()) != "[object Object]") {
                            SearchParents(PZ.JQ.jstree._focused(), PZ.JQ('#TREENODEID').val());
                        }
                        else {
                            PZ.JQ.jstree._focused().select_node("#" + PZ.JQ('#TREENODEID').val());
                            PZ.JQ.jstree._focused().toggle_node("#" + PZ.JQ('#TREENODEID').val());
                        }
                    }
                }
                else {
                    if (PZ.JQ.jstree._focused() != null) {
                        if (PZ.JQ.jstree._focused().get_selected()) {
                            PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
                        }
                    }
                    var tmpNode = PZ.JQ("#TREENODEID").val();
                    if (PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).parent().hasClass("AccordionListLinkContainer")) {
                        PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).parent().addClass("ClickedAccordionListLinkContainer ui-corner-all");
                        PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).addClass("ClickedAccordionListLink");
                    }
                    if (PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).parent().hasClass("AccordionListSubLinkContainer")) {
                        PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).parent().addClass("ClickedAccordionListSubLinkContainer ui-corner-all");
                        PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).parents(".AccordionListLinkContainer").addClass("ClickedAccordionListLinkContainer ui-corner-all");
                        PZ.JQ("#" + PZ.JQ("#TREENODEID").val()).addClass("ClickedAccordionListSubLink");
                    }
                }
                PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE').val("0");
                PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
                PZ.JQ("#FAVORITETRIGGEREDCHANGE").val("false");
            }
        }
    }
    else {
        if (PZ.JQ.jstree._focused() != null) {
            if (PZ.JQ.jstree._focused().get_selected()) {
                PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
            }
        }
    }
}

/*
    When clicking an active accordionTab (An active tab gets marked with the css class "ActiveAccordionTab"), its associated
    link gets executed, when clicked.
*/
PZ.JQ(".ActiveAccordionTab").live("click", function () {
    var tmpLinkToEvaluate = PZ.JQ(this).next().children(".AcccordionHeaderLinkSpan").text();
    if (tmpLinkToEvaluate != null) {
        var command = tmpLinkToEvaluate.substring(12, tmpLinkToEvaluate.length - 1);
        var plainLink = tmpLinkToEvaluate.substring(1, tmpLinkToEvaluate.length - 1);
        if (window.location.href != plainLink) {
            window.location.href = plainLink;
        }
    }
});

/*
    When clicking an accordion list link, an eventually selected tree has to be deselected and unfocussed, additionally
    the clicked list entry has to be highlighted (corresponding css classes) and any other selected link has to be set back to an unselected state.
*/
PZ.JQ(".AccordionListLink").live("click", function () {
    if (PZ.JQ.jstree._focused() != null) {
        if (PZ.JQ.jstree._focused().get_selected()) {
            PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
        }
    }
    PZ.JQ(this.parentNode).parents(".AccordionLinks").children(".ClickedAccordionListLinkContainer").removeClass("ClickedAccordionListLinkContainer ui-corner-all");
    PZ.JQ(this.parentNode).parents(".AccordionLinks").find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
    PZ.JQ(this.parentNode).addClass("ClickedAccordionListLinkContainer ui-corner-all");
    PZ.JQ(this).addClass("ClickedAccordionListLink");

    if (PZ.JQ(this.parentNode).parents(".AccordionLinks").find(".AccordionListSubLinkContainer") != null) {
        PZ.JQ(this.parentNode).parents(".AccordionLinks").find(".AccordionListSubLinkContainer").removeClass("ClickedAccordionListSubLinkContainer ui-corner-all");
        PZ.JQ(this.parentNode).parents(".AccordionLinks").find(".AccordionListSubLinkContainer").children(".ClickedAccordionListSubLink").removeClass("ClickedAccordionListSubLink");
    }
});

/*
When clicking an accordion list sub link, an eventually selected tree has to be deselected and unfocussed, additionally
the clicked list entry has to be highlighted (corresponding css classes) and any other selected link has to be set back to an unselected state.
*/
PZ.JQ(".AccordionListSubLink").live("click", function () {
    if (PZ.JQ.jstree._focused() != null) {
        if (PZ.JQ.jstree._focused().get_selected()) {
            PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
        }
    }
    PZ.JQ(this.parentNode).parents(".AccordionSubLinks").find(".ClickedAccordionListSubLinkContainer").removeClass("ClickedAccordionListSubLinkContainer ui-corner-all");
    PZ.JQ(this.parentNode).parents(".AccordionSubLinks").find(".ClickedAccordionListSubLink").removeClass("ClickedAccordionListSubLink");
    PZ.JQ(this.parentNode).addClass("ClickedAccordionListSubLinkContainer ui-corner-all");
    PZ.JQ(this).addClass("ClickedAccordionListSubLink");
    PZ.JQ(this.parentNode).parents(".AccordionLinks").find(".ClickedAccordionListLinkContainer").removeClass("ClickedAccordionListLinkContainer ui-corner-all");
    PZ.JQ(this.parentNode).parents(".AccordionLinks").find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
    PZ.JQ(this.parentNode).parent(".AccordionSubLinks").parent(".AccordionListLinkContainer").addClass("ClickedAccordionListLinkContainer ui-corner-all");
});

/*
    When clicking an element of a tree, any other accordion link has to be deselected.
*/
PZ.JQ(".AccordionTree").live("click", function () {
    PZ.JQ(this.parentNode).children(".AccordionLinks").children(".ClickedAccordionListLinkContainer .ui-corner-all").removeClass("ClickedAccordionListLinkContainer ui-corner-all");
    PZ.JQ(this.parentNode).children(".AccordionSubLinks").children(".ClickedAccordionListSubLinkContainer .ui-corner-all").removeClass("ClickedAccordionListSubLinkContainer ui-corner-all");
    PZ.JQ(this.parentNode).children(".AccordionLinks").find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
    PZ.JQ(this.parentNode).children(".AccordionSubLinks").find(".ClickedAccordionListSubLink").removeClass("ClickedAccordionListSubLink");
});

/*
    Resizes the accordion on completed tab change (necessary due to buggy accordion behavior, when fillSpace is used).
    Also contains logic for dealing with link highlights.
    This event gets triggered every time the accordion changes.
*/
PZ.JQ('#Accordion').live('accordionchange', function (event, ui) {
    //Add/Remove Dummy class for "Click active accordeon tab for initial content"-functionality
    var activeTab = ui.newContent.prev("h3");
    if ((PZ.JQ(activeTab) != null) && (!PZ.JQ(activeTab).hasClass("ActiveAccordionTab"))) {
        PZ.JQ(activeTab).addClass("ActiveAccordionTab");
    }
    var deactivatedTab = ui.oldContent.prev("h3");
    if ((PZ.JQ(deactivatedTab) != null) && (PZ.JQ(deactivatedTab).hasClass("ActiveAccordionTab"))) {
        PZ.JQ(deactivatedTab).removeClass("ActiveAccordionTab");
    }
    var favoriteTriggeredChange = PZ.JQ("#FAVORITETRIGGEREDCHANGE").val();
    var ignoreCookieNewContent = ui.newContent.find(".IgnoreCookieSpan").text().replace(/\'/g, "");
    ignoreCookieNewContent = ignoreCookieNewContent.toLowerCase();
    if (PZ.JQ("#REFRESHINGCONTENTTYPE").val() == "ListElement") {
        ui.oldContent.find(".AccordionTree").jstree('unset_focus');
        if (ui.newContent.find(".AccordionLinks").children(".AccordionListLinkContainer").hasClass("ClickedAccordionListLinkContainer ui-corner-all")) {
            ui.newContent.find(".AccordionLinks").children(".AccordionListLinkContainer").removeClass("ClickedAccordionListLinkContainer ui-corner-all");
            ui.newContent.find(".AccordionLinks").find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
        }
        if (ui.newContent.find(".AccordionSubLinks").children(".AccordionListSubLinkContainer").hasClass("ClickedAccordionListSubLinkContainer ui-corner-all")) {
            ui.newContent.find(".AccordionSubLinks").children(".AccordionListSubLinkContainer").removeClass("ClickedAccordionListSubLinkContainer ui-corner-all");
            ui.newContent.find(".AccordionSubLinks").find(".ClickedAccordionListSubLink").removeClass("ClickedAccordionListSubLink");
        }
        var nodeId = PZ.JQ('#TREENODEID').val();
        PZ.JQ("#" + nodeId).parent().addClass("ClickedAccordionListLinkContainer ui-corner-all");
        PZ.JQ("#" + nodeId).addClass("ClickedAccordionListLink");
        PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
        ResizeAccordion();
        PZ.JQ("#ACCORDIONTABCHANGEBYNAVIGATE").val("0");
    }
    else if ((ignoreCookieNewContent == "true") && (favoriteTriggeredChange == "false") && (PZ.JQ("#ACCORDIONTABCHANGEBYNAVIGATE").val() != "1")) {
        href = ui.newContent.children(".AcccordionHeaderLinkSpan").text();
        if (href != null) {
            var command = href.substring(12, href.length - 1);
            var plainLink = href.substring(1, href.length - 1);
            PZ.JQ("#REFRESHINGCONTENTTYPE").val("false");
            ResizeAccordion();
            window.location.href = plainLink;
        }
        PZ.JQ("#ACCORDIONTABCHANGEBYNAVIGATE").val("0");
    }
    else
        if (ui.newContent.find(".AccordionLinks").children(".ClickedAccordionListLinkContainer").attr("class") == undefined) {
            ui.oldContent.find(".AccordionTree").jstree('unset_focus');
            if (ui.newContent.children(".AccordionTree").attr("class") != undefined) {//check if there exists a tree in the target tab
                ui.newContent.children(".AccordionTree").jstree('set_focus');
                ResizeAccordion();
                if (PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE').val() == "1") {
                    if (PZ.JQ.jstree._focused() != null) {
                        if (PZ.JQ.jstree._focused().get_selected()) {
                            PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
                        }
                        if (PZ.JQ.jstree._focused()._get_node("#" + PZ.JQ('#TREENODEID').val()) != "[object Object]") {
                            SearchParents(PZ.JQ.jstree._focused(), PZ.JQ('#TREENODEID').val());
                        }
                        else {
                            PZ.JQ.jstree._focused().select_node("#" + PZ.JQ('#TREENODEID').val());
                            PZ.JQ.jstree._focused().toggle_node("#" + PZ.JQ('#TREENODEID').val());
                        }
                    }
                    PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE').val("0");
                    PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
                    ResizeAccordion();
                }
                else {
                    if (PZ.JQ.jstree._focused() != null) {
                        if (PZ.JQ.jstree._focused().get_selected()) {
                            var href = PZ.JQ.jstree._focused().get_selected().children("a").attr("href");
                            if (href != null) {
                                var command = href.substring(11, href.length);
                                PZ.JQ('#TREENODEID').val("#" + PZ.JQ.jstree._focused().get_selected().attr("id"));
                                PZ.JQ("#ACCORDIONTABCHANGEBYNAVIGATE").val("0");
                                PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
                                ResizeAccordion();
                                window.location.href = href;
                            }
                            else {
                                href = ui.newContent.children(".AcccordionHeaderLinkSpan").text();
                                if (href != null) {
                                    var command = href.substring(12, href.length - 1);
                                    var plainLink = href.substring(1, href.length - 1);
                                    PZ.JQ('#TREENODEID').val("#" + PZ.JQ.jstree._focused().get_selected().attr("id"));
                                    PZ.JQ("#ACCORDIONTABCHANGEBYNAVIGATE").val("0");
                                    PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
                                    ResizeAccordion();
                                    window.location.href = plainLink;
                                }
                            }
                        }
                    }
                    PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
                }
            }
            else { // no tree, no selected list => evaluate accordion header link
                href = ui.newContent.children(".AcccordionHeaderLinkSpan").text();
                if (href != null) {
                    var command = href.substring(12, href.length - 1);
                    var plainLink = href.substring(1, href.length - 1);
                    PZ.JQ("#ACCORDIONTABCHANGEBYNAVIGATE").val("0");
                    PZ.JQ("#REFRESHINGCONTENTTYPE").val("");
                    ResizeAccordion();
                    window.location.href = plainLink;
                }
            }
        }
        else {
            ui.oldContent.find(".AccordionTree").jstree('unset_focus'); // jQuery object, activated content
            ui.newContent.children(".AccordionTree").jstree('set_focus');
            if (PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE').val() == "1") {
                if (PZ.JQ.jstree._focused() != null) {
                    if (PZ.JQ.jstree._focused().get_selected()) {
                        PZ.JQ.jstree._focused().deselect_node(PZ.JQ.jstree._focused().get_selected());
                        if (PZ.JQ.jstree._focused()._get_node("#" + PZ.JQ('#TREENODEID').val()) != "[object Object]") {
                            SearchParents(PZ.JQ.jstree._focused(), PZ.JQ('#TREENODEID').val());
                        }
                        else {
                            PZ.JQ.jstree._focused().select_node("#" + PZ.JQ('#TREENODEID').val());
                            PZ.JQ.jstree._focused().toggle_node("#" + PZ.JQ('#TREENODEID').val());
                        }
                    }
                }
                PZ.JQ('#ACCORDIONTABCHANGEBYNAVIGATE').val("0");
                ResizeAccordion();

                var selectednode = null;
                if (PZ.JQ.jstree._focused() != null) {
                    selectednode = PZ.JQ.jstree._focused().get_selected();
                }

                if (selectednode != null) {
                    if (PZ.JQ(selectednode).parents().find(".AccordionLinks").children(".AccordionListLinkContainer").hasClass("ClickedAccordionListLinkContainer ui-corner-all")) {
                        PZ.JQ(selectednode).parents().find(".AccordionLinks").children(".AccordionListLinkContainer").removeClass("ClickedAccordionListLinkContainer ui-corner-all");
                        PZ.JQ(selectednode).parents().find(".AccordionLinks").find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
                    }
                }
            }
            else {
                var href = "";
                if (ui.newContent.find(".AccordionSubLinks").find(".ClickedAccordionListSubLinkContainer").children("a").attr("href")) {
                    href = ui.newContent.find(".AccordionSubLinks").find(".ClickedAccordionListSubLinkContainer").children("a").attr("href");
                }
                else {
                    href = ui.newContent.find(".AccordionLinks").children(".ClickedAccordionListLinkContainer").children("a").attr("href");
                }
                if (href != null) {
                    var command = href.substring(11, href.length);
                    PZ.JQ('#TREENODEID').val("NoNode");
                    ResizeAccordion();
                    window.location.href = href;
                }
            }
        }
    PZ.JQ("#FAVORITETRIGGEREDCHANGE").val("false");
});

// url parameter "fullscreen" == true => hide toolbar
PZ.JQ(function () {
    var fullScreenParameter = GetURLParameter("fullscreen");
    if (fullScreenParameter != null && fullScreenParameter.toLowerCase() == "true") {
        PZ.JQ('.headerImage').hide();
        ResizeWebElements();
        //Resize List Tabs
        var tmpMain = document.getElementById("Main");
        var tmpActivatedTab = PZ.JQ('#Main').contents().find('.ui-tabs-selected');
        var tmpActivatedTabHref = "";
        if (tmpActivatedTab != null) {
            tmpActivatedTabHref = PZ.JQ(tmpActivatedTab).children("a").attr("href");
        }
        if ((tmpMain != null) && (tmpActivatedTabHref != null)) {
            tmpMain.contentWindow.SetTabContentSize(tmpActivatedTabHref);
        }
    }

    //Handling for closing a "closable"-notification
    PZ.JQ(document).on("click", ".NotificationClosableCloseButton", function () {
        PZ.JQ.cookie(PZ.JQ(this).attr("data-pz-notifyid"), "closed", { expires: 7 }); PZ.JQ(this).parent().fadeOut(); PZ.JQ(".NotificationPermanentModal").fadeOut(); setTimeout(function () { PZ.JQ(this).parent().remove(); PZ.JQ(".NotificationPermanentModal").remove(); }, 1000);
    });

    PZ.JQ("#ToolbarControl_HomeButton").on("mouseleave", function () {
        PZ.JQ(this).blur();
    });

    //CheckClibboardButtonVisibility();
    if (BrowserIsMSIE(null)) {
        var compatibilityModeCheck = IsMsieInCompatibilityMode();
        var browserVersionCheck = (!compatibilityModeCheck && !CheckBrowserVersion()) ? CheckBrowserVersion() : true;
        var activeXCheck = IsActiveXEnabled();

        var _suppressWarnings = (PZ.JQ("#SuppressWarnings") != null && PZ.JQ("#SuppressWarnings") != undefined) ? PZ.JQ("#SuppressWarnings").val() : null;
        _suppressWarnings = (_suppressWarnings != null && _suppressWarnings != undefined && _suppressWarnings != "") ? _suppressWarnings.toLowerCase() : "";
        var suppressWarnings = String(_suppressWarnings) == "true";

        var showDialogAtAll = !suppressWarnings && (!activeXCheck || compatibilityModeCheck || !browserVersionCheck);

    }
});

//CONTENT FROM TOOLBAR.ASCX

/*
NEW: Navigate to the start page(s) explicitly using WebApp_Navigate (benefits from changes in WebApp)
*/
function NavigateToStartPage() {
    var tmpFileExtension = ".html";
    var tmpLcid = PZ.JQ("#LCID");
    if (PZ.JQ(tmpLcid).length > 0) {
        WebApp_Navigate({ "MainUrl": "MainStart_" + tmpLcid.val() + tmpFileExtension, "DetailUrl": "DetailsStart_" + tmpLcid.val() + tmpFileExtension });
    }
}

/* The Favorites Dialog */
function CreateFavoriteDialog(addFavoriteUrl, deleteFavoriteUrl) {
    var renderFavorites = function (parameter) {
        if (parameter["rCode"] < 0) return;
        var favorites = parameter["data"];

        var html = "";
        var hasFavorites = false;
        for (var index in favorites) {
            var processGuid = favorites[index][0];
            var detailGuid = favorites[index][1];

            var favoriteData = GetFavoriteData();
            var process = favoriteData[processGuid];
            var details = favoriteData[detailGuid];
            if (process != null) {
                var displayName;
                if (details != null && processGuid != detailGuid) {
                    displayName = process["NAME"] + " &rarr; " + details["NAME"];
                }
                else {
                    displayName = process["NAME"];
                }
                html += "<div style=\"z-index:1;\">";
                html += "<div  style=\"float: left; width: 250px;  align:right; padding:7px 4px; cursor: pointer; \" onmouseover=\"_processGuid='" + processGuid + "';_detailGuid='" + detailGuid + "';this.style.backgroundColor = '#CECECE';\" onmouseout=\"_processGuid = ''; this.style.backgroundColor = '#FFFFFF';\" onclick=\"navigateFavorite('" + processGuid + "','" + detailGuid + "');\">";
                html += displayName + "&nbsp;";
                html += "</div>";
                html += "<div style=\"float: left; text-align:right; padding:2px 4px; cursor: pointer;\" onmouseover=\"_processGuid='remove'" + ";_detailGuid=" + index + ";\" + \" onmouseout=\"_processGuid = '';\" onclick=\"removeFavorite('" + deleteFavoriteUrl + "','" + processGuid + "','" + detailGuid + "');\"><img  src='App_Themes/Standard/images/x-icon.gif' /></div>";
                html += "<div style=\"clear: both;\"></div>";
                html += "</div>";
                hasFavorites = true;
            }
        }
        if (!hasFavorites) {
            // local definition
            var favoritesDialogNoFavoritesSelectedLabel = PZ.JQ("#JQFavoritesDialogNoFavoritesSelectedLabel").val();
            html += "<div  style=\"z-index:1; text-align: center; padding: 7px 4px;\">(" + favoritesDialogNoFavoritesSelectedLabel + ")</div>";
            //   PZ.JQ("#RemoveFavoritesDiv").hide();
        }
        else {
            //   PZ.JQ("#RemoveFavoritesDiv").show();
        }
        PZ.JQ('#Favorites').html(html);
    }
    PZ.JQ("#FavoritesDialog").dialog({
        autoOpen: false,
        show: "blind",
        hide: "blind",
        resizable: false,
        draggable: false,
        minHeight: 60,
        minWidth: 310,
        open: function (event, ui) {
            var parameter = new Object();
            parameter["callback"] = renderFavorites;
            PZ.JQ('#Favorites').html("<div class=\"WaitingViewImage\"></div>");
            _nm.GetFavorites(addFavoriteUrl, parameter);

            // events for closing by clicking out of dialog
            var dlg = PZ.JQ("#FavoritesDialog").parent();
            PZ.JQ("#ToolbarControl_AddToFavoriteButton").mouseleave(function () {
                dlg.focus();
                dlg.focusout(closeDialog);
            });
            PZ.JQ("#ToolbarControl_AddToFavoriteButton").mouseenter(function () {
                dlg.off("focusout");
            });

            dlg.mouseenter(function () {
                dlg.off("focusout");
            });

            dlg.mouseleave(function () {
                dlg.focusout(closeDialog);
            });

            function closeDialog() {
                if (PZ.JQ("#FavoritesDialog").dialog("isOpen")) {
                    PZ.JQ('#FavoritesDialog').dialog('close');
                }
            }
        }
    });
}

PZ.JQ(document).ready(function () {
    /*
    Retrieving the localized text values for the toolbar buttons.
    This approach is necessary due to outsourcing alle the jQuery logic in seperate JavaScript files.
    */
    var searchBoxText = PZ.JQ("#JQSearchboxText").val();
    var favoritesDialogNoFavoritesSelectedLabel = PZ.JQ("#JQFavoritesDialogNoFavoritesSelectedLabel").val();
    var handbookFileExtension = PZ.JQ("#JQHandbookFileExtension").val();
    var printFolderPath = PZ.JQ("#JQPrintFolderPath").val();
    var printGraphicFolderPath = PZ.JQ("#JQPrintGraphicFolderPath").val();
    var printDialogProcessDescription = PZ.JQ("#JQPrintDialogProcessDescription").val();
    var printDialogProcessGraphic = PZ.JQ("#JQPrintDialogProcessGraphic").val();
    var printDialogAdditionalDocument = PZ.JQ("#JQPrintDialogAdditionalDocument").val();
    var printDialogNoPrintAllowed = PZ.JQ("#JQPrintDialogNoPrintAllowed").val();
    var graphicPopupType = PZ.JQ("#JQGraphicPopupType").val();
    var symbioProcessButtonDefault = PZ.JQ("#JQSymbioProcessButtonDefault").val();
    var alternativeFeedbackInToolbar = PZ.JQ("#JQAlternativeFeedbackInToolbar").val();
    var favoriteButtonDefault = PZ.JQ("#JQFavoriteButtonDefault").val();
    var createQrCode = PZ.JQ("#JQCreateQrCode").val();
    var createDescription = PZ.JQ("#JQCreateDescription").val();
    var createGraphic = PZ.JQ("#JQCreateGraphic").val();
    var generalLinkButtonLinkValue = PZ.JQ("#JQGeneralLinkButtonLinkValue").val();
    var generalLinkButton2LinkValue = PZ.JQ("#JQGeneralLinkButton2LinkValue").val();
    var generalLinkButton3LinkValue = PZ.JQ("#JQGeneralLinkButton3LinkValue").val();
    var printGraphicFileExtension = PZ.JQ("#JQPrintGraphicFileExtension").val();
    var generalLinkButtonFunctionality = PZ.JQ("#JQGeneralLinkButtonFunctionality").val();
    var generalLinkButton2Functionality = PZ.JQ("#JQGeneralLinkButton2Functionality").val();
    var generalLinkButton3Functionality = PZ.JQ("#JQGeneralLinkButton3Functionality").val();
    var printDialogAllowedDescriptionModelDiagramTypes = PZ.JQ("#JQPrintDialogAllowedDescriptionModelDiagramTypes").val();

    /* JQuery Watermark */
    PZ.JQ.watermark.options.useNative = false;
    PZ.JQ.watermark.options.hideBeforeUnload = false;
    PZ.JQ(function () {
        PZ.JQ("#ToolbarControl_TextBoxSearch").watermark(searchBoxText);
    });

    /* The Print Dialog */
    PZ.JQ.fx.speeds._default = 500;
    PZ.JQ(function () {
        PZ.JQ("#PrintDialog").dialog({
            autoOpen: false,
            show: "blind",
            hide: "blind",
            resizable: false,
            draggable: false,
            minHeight: 100,
            open: function (event, ui) {
                var html = "";
                var guid = PZ.JQ('#Main').contents().find('input[id=Content_Guid]').val();
                var lcid = PZ.JQ('#Main').contents().find('input[id=Content_Lcid]').val();
                var imageFileName = PZ.JQ('#Main').contents().find('input[id=Content_ImageFileName]').val();
                var currentExtension = PZ.JQ('#Main').contents().find('input[id=Content_CurrentViewExtension]').val();
                var diagramType = PZ.JQ('#Main').contents().find('input[id=Content_DiagramType]').val();
                //JK 13-02-28: The fileExtension is inserted to flexible regarding the diagramType, which is currently needed, because MT_ROLE_DGM pdfs can not be rendered.
                var fileExtension = "." + printGraphicFileExtension;
                if (diagramType && diagramType == "MT_ROLE_DGM") fileExtension = ".png";
                var additionalDocumentGuid = PZ.JQ('#Main').contents().find("#Content_AdditionalDocumentGuid").val();

                if (PZ.JQ('#Main').contents().find('div[id=Viewport]').length > 0) {
                    if (PZ.JQ(guid) != null && PZ.JQ(lcid) != null) {
                        //Also in case of a custom graphic (vsl, hsl, detailled, etc.) the png-file will be linked, because currently there are no pdfs generated for this cases.
                        if (createDescription == "True" && !(diagramType == "MT_ROLE_DGM") && !(diagramType == "MTX_PROCESS_HOUSE") && ((printDialogAllowedDescriptionModelDiagramTypes.length > 0 && printDialogAllowedDescriptionModelDiagramTypes.indexOf(diagramType) > -1) || (printDialogAllowedDescriptionModelDiagramTypes.length == 0))) {
                            html += "<div class='ToolbarPrintDialogLink'><a href='" + printFolderPath + "/P_" + guid + "_" + lcid + "." + handbookFileExtension + "' target='_blank'>" + printDialogProcessDescription + "</a></div>";
                        }
                        // JK 13-08-14: Temporary fix complete template usage with process house
                        /*if (createDescription == "True" && (diagramType == "MTX_PROCESS_HOUSE")) {
                            html += "<div class='ToolbarPrintDialogLink'><a href='" + printFolderPath + "/Comp_" + guid + "_" + lcid + "." + handbookFileExtension + "' target='_blank'>" + printDialogProcessDescription + "</a></div>"
                        }*/
                        if (createGraphic == "True") {
                            if (diagramType != "MT_ROLE_DGM") {
                                html += "<div class='ToolbarPrintDialogLink'><a href='" + printGraphicFolderPath + "/M_" + guid + "_" + lcid + fileExtension + "'" + " target='_blank'>" + printDialogProcessGraphic + "</a></div>";
                            }
                            else {
                                if (currentExtension && currentExtension.length > 0) {
                                    html += "<div class='ToolbarPrintDialogLink'><a href='" + imageFileName + "." + currentExtension + ".png'" + " target='_blank'>" + printDialogProcessGraphic + "</a></div>";
                                }
                                else {
                                    html += "<div class='ToolbarPrintDialogLink'><a href='" + "M_" + guid + "_" + lcid + fileExtension + "'" + " target='_blank'>" + printDialogProcessGraphic + "</a></div>";
                                }
                            }
                        }
                        if (createQrCode == "True") {
                            html += "<div class='ToolbarPrintDialogLink'><img src='QR_" + guid + "_" + lcid + fileExtension + " /></div>";
                        }

                        if (additionalDocumentGuid && additionalDocumentGuid != undefined) {
                            html += "<div class='ToolbarPrintDialogLink'><a href='" + printFolderPath + "/PH_" + additionalDocumentGuid + "_" + lcid + fileExtension + "' target='_blank'>" + printDialogAdditionalDocument + "</a></div>";
                        }
                    }
                    PZ.JQ('#Prints').html(html);
                }
                else {
                    html += "<div class='DialogFunctionNotAvailable'>" + printDialogNoPrintAllowed + "</div>";
                    PZ.JQ('#Prints').html(html);
                }

                // events for closing by clicking out of dialog
                var dlg = PZ.JQ("#PrintDialog").parent();
                PZ.JQ("#ToolbarControl_PrintButton").mouseleave(function () {
                    dlg.focus();
                    dlg.focusout(closeDialog);
                });
                PZ.JQ("#ToolbarControl_PrintButton").mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseleave(function () {
                    dlg.focusout(closeDialog);
                });

                function closeDialog() {
                    if (PZ.JQ("#PrintDialog").dialog("isOpen")) {
                        PZ.JQ('#PrintDialog').dialog('close');
                    }
                }
            }
        });
    });

    /* The Zoom Dialog */
    PZ.JQ.fx.speeds._default = 500;
    PZ.JQ(function () {
        PZ.JQ("#ZoomDialog").dialog({
            autoOpen: false,
            show: "blind",
            hide: "blind",
            resizable: false,
            draggable: false,
            minHeight: 100,
            open: function (event, ui) {
                if (PZ.JQ('#Main').contents().find('div[id=Viewport]').length == 0) {
                    PZ.JQ("#ZoomContent").hide();
                    PZ.JQ("#NoZoomAllowed").show();
                }
                else {
                    PZ.JQ("#ZoomContent").show();
                    PZ.JQ("#NoZoomAllowed").hide();
                }

                //PZ.JQ('#Favorites').html(html);

                // events for closing by clicking out of dialog
                var dlg = PZ.JQ("#ZoomDialog").parent();
                PZ.JQ("#ToolbarControl_ZoomButton").mouseleave(function () {
                    dlg.focus();
                    dlg.focusout(closeDialog);
                });
                PZ.JQ("#ToolbarControl_ZoomButton").mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseleave(function () {
                    dlg.focusout(closeDialog);
                });

                function closeDialog() {
                    if (PZ.JQ("#ZoomDialog").dialog("isOpen")) {
                        PZ.JQ('#ZoomDialog').dialog('close');
                    }
                }
            }
        });
    });

    /* The Link Dialog */
    PZ.JQ.fx.speeds._default = 500;
    PZ.JQ(function () {
        PZ.JQ("#LinkDialog").dialog({
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 500,
                complete: function () {
                    PZ.JQ("#LinkTextBoxValue").focus();
                    PZ.JQ("#LinkTextBoxValue").select();
                }
            },
            hide: "blind",
            resizable: false,
            draggable: false,
            minHeight: 100,
            open: function (event, ui) {
                // events for closing by clicking out of dialog
                var dlg = PZ.JQ("#LinkDialog").parent();
                PZ.JQ("#ToolbarControl_FavoriteButton").mouseleave(function () {
                    PZ.JQ("#LinkTextBoxValue").focus();
                    PZ.JQ("#LinkTextBoxValue").select();
                    dlg.focusout(closeDialog);
                });
                PZ.JQ("#ToolbarControl_FavoriteButton").mouseenter(function () {
                    dlg.off("focusout");
                });

                PZ.JQ("#ToolbarControl_FavoriteButton").mouseover(function () {
                    PZ.JQ("#LinkTextBoxValue").focus();
                    PZ.JQ("#LinkTextBoxValue").select();
                });

                PZ.JQ("#LinkTextBoxValue").mouseenter(function () {
                    PZ.JQ("#LinkTextBoxValue").focus();
                    PZ.JQ("#LinkTextBoxValue").select();
                });

                dlg.mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseleave(function () {
                    dlg.focusout(closeDialog);
                });

                PZ.JQ("#LinkTextBoxValue").focus();
                PZ.JQ("#LinkTextBoxValue").select();

                function closeDialog() {
                    if (PZ.JQ("#LinkDialog").dialog("isOpen")) {
                        PZ.JQ('#LinkDialog').dialog('close');
                    }
                }

                PZ.JQ("#LinkTextBoxValue").focus();
                PZ.JQ("#LinkTextBoxValue").select();
            }
        });
    });
    /* Diagram ViewMode Dialog */
    var _diagramViewModeDialogControlsList = null; // Set of Radio Buttons for "Diagram ViewMode Dialog"
    PZ.JQ(function () {
        PZ.JQ("#DiagramViewModeDialog").dialog({
            autoOpen: false,
            show: "blind",
            hide: "blind",
            resizable: false,
            draggable: false,
            minHeight: 100,
            open: function (event, ui) {
                if (_diagramViewModeDialogControlsList != null) {
                    PZ.JQ("#DiagramViewMode").children().remove();
                    PZ.JQ("#DiagramViewMode").append(_diagramViewModeDialogControlsList);
                    PZ.JQ("#ChooseDiagramRendererSpan").buttonsetv();
                };

                // events for closing by clicking out of dialog
                var dlg = PZ.JQ("#DiagramViewModeDialog").parent();
                PZ.JQ("#ToolbarControl_DiagramViewModeButton").mouseleave(function () {
                    dlg.focus();
                    dlg.focusout(closeDialog);
                });
                PZ.JQ("#ToolbarControl_DiagramViewModeButton").mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseenter(function () {
                    dlg.off("focusout");
                });

                dlg.mouseleave(function () {
                    dlg.focusout(closeDialog);
                });

                function closeDialog() {
                    if (PZ.JQ("#DiagramViewModeDialog").dialog("isOpen")) {
                        PZ.JQ("#DiagramViewModeDialog").dialog('close');
                    }
                }

                PZ.JQ(".ChooseDiagramRendererButton").off("click", "**");
                PZ.JQ(".ChooseDiagramRendererButton").on("click", function () {
                    var extension = "";
                    if (PZ.JQ(this).attr("id").indexOf("AlternativeView-") == 0) {
                        extension = PZ.JQ(this).attr("id").substring("AlternativeView-".length);
                    }

                    var content = _nm.GetContent("Main");
                    content = document.getElementById(content);
                    if (content != null) {
                        var contentImageFile = content.contentWindow.document.getElementById("Content_ImageFileName");

                        var imageFileName = PZ.JQ(contentImageFile).val();

                        if (extension != null && extension != "" && extension.length > 0) imageFileName += "." + extension;
                        {
                            PZ.JQ.cookie("DiagramViewMode", extension, { expires: 7 });

                            closeDialog();
                            PZ.JQ.ajax({
                                type: "GET",
                                url: imageFileName + ".html",
                                async: false,
                                success: function (data) {
                                    content.contentWindow.location.href = imageFileName + ".html";
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    alert("The requested page does not exist.");
                                }
                            });
                        }
                    }
                });
            }
        });
    });

    /* The Slider Dialog */
    PZ.JQ(function () {
        PZ.JQ("#slider-range-min").slider({
            range: "min",
            value: 100,
            min: 50,
            max: 300,
            step: 10,
            slide: function (event, ui) {
                PZ.JQ("#zoomSliderValue").val(ui.value);
            }
        });
        _nm.ItemList["ZoomSliderMinValue"] = 50;
        _nm.ItemList["ZoomSliderMaxValue"] = 300;
        PZ.JQ("#zoomSliderValue").val(PZ.JQ("#slider-range-min").slider("value"));
    });

    /*
    Initializing the language buttons.
    */
    PZ.JQ(function () {
        if (PZ.JQ("#LCID") != null) {
            var currentLcid = PZ.JQ("#LCID").val();
            switch (currentLcid) {
                case "1031":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: false });
                    break;
                case "1033":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: false });
                    break;
                case "2057":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: false });
                    break;
                case "1040":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: false });
                    break;
                case "1053":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: false });
                    break;
                case "1029":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: false });
                    break;
                case "3082":
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").button({ disabled: true });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").button({ disabled: false });
                    PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").button({ disabled: false });
                    break;
            }
        }
    });

    /*
    Initialization of the toolbar buttons' click handlers.
    */
    PZ.JQ(document).ready(function () {
        PZ.JQ("#ToolbarControl_HomeButton").click(function () {
            NavigateToStartPage();
        });

        PZ.JQ("#ToolbarControl_ExcelButton").click(function () {
            ToolBarItem_OnClick('ExcelButton', graphicPopupType);
            return false;
        });

        PZ.JQ("#ToolbarControl_AddToFavoriteButton").click(function () {
            openFavoriteDialog("ToolbarControl_AddToFavoriteButton", 0, 0);
            return false;
        });

        PZ.JQ("#ToolbarControl_PrintButton").click(function () {
            var dialogX = PZ.JQ("#ToolbarControl_PrintButton").offset().left;
            var dialogY = PZ.JQ("#ToolbarControl_PrintButton").offset().top + PZ.JQ("#ToolbarControl_PrintButton").outerHeight();
            PZ.JQ('#PrintDialog').dialog('option', 'position', [dialogX, dialogY]);
            PZ.JQ("#PrintDialog").dialog("open");
            return false;
        });

        PZ.JQ("#ToolbarControl_PDFButton").click(function () {
            ToolBarItem_OnClick('PDFButton', null);
            return false;
        });

        PZ.JQ("#ToolbarControl_FeedbackButton").click(function () {
            ToolBarItem_OnClick('FeedbackButton', null);
            return false;
        });

        PZ.JQ("#ToolbarControl_SymbioProcessButton").click(function () {
            eval(symbioProcessButtonDefault);
            return false;
        });

        PZ.JQ("#ToolbarControl_FeedbackAlternativeButton").click(function () {
            window.location = alternativeFeedbackInToolbar;
            return false;
        });

        PZ.JQ("#ToolbarControl_HelpButton").click(function () {
            ToolBarItem_OnClick('HelpButton', null);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_GeneralLinkButton").click(function () {
            if ("Link" == generalLinkButtonFunctionality) {
                window.open(generalLinkButtonLinkValue);
                PZ.JQ(this).blur();
            }
            return false;
        });

        PZ.JQ("#ToolbarControl_GeneralLinkButton2").click(function () {
            if ("Link" == generalLinkButton2Functionality) {
                window.open(generalLinkButton2LinkValue);
                PZ.JQ(this).blur();
            }
            return false;
        });

        PZ.JQ("#ToolbarControl_GeneralLinkButton3").click(function () {
            if ("Link" == generalLinkButton3Functionality) {
                window.open(generalLinkButton3LinkValue);
                PZ.JQ(this).blur();
            }
            return false;
        });

        PZ.JQ("#ToolbarControl_ZoomButton").click(function () {
            ToolBarItem_OnClick('ZoomButton', null);
            var dialogX = PZ.JQ("#ToolbarControl_ZoomButton").offset().left;
            var dialogY = PZ.JQ("#ToolbarControl_ZoomButton").offset().top + PZ.JQ("#ToolbarControl_ZoomButton").outerHeight();
            PZ.JQ('#ZoomDialog').dialog('option', 'position', [dialogX, dialogY]);
            PZ.JQ("#ZoomDialog").dialog("open");
            return false;
        });

        PZ.JQ(".zoomSliderValue").keypress(function (event) {
            if (event.keyCode == 13) {
                var tmpValue = PZ.JQ(this).val();
                var tmpParsedValue = parseInt(tmpValue);
                var tmpMinValue = _nm.ItemList["ZoomSliderMinValue"] - 1;
                var tmpMaxValue = _nm.ItemList["ZoomSliderMaxValue"] - 1;

                if (!isNaN(tmpParsedValue)) {
                    if (tmpParsedValue > tmpMaxValue) {
                        PZ.JQ(this).val(tmpMaxValue + 1);
                    }
                    else if (tmpParsedValue > 50) {
                        PZ.JQ(this).val(tmpParsedValue.toString());
                    }
                    else {
                        PZ.JQ(this).val(tmpMinValue + 1);
                    }
                }
                else {
                    PZ.JQ(this).val(_nm.ItemList["ZoomValue"]);
                }

                PZ.JQ("#slider-range-min").slider("value", PZ.JQ(this).val());
                SetZoomValue(this, false);
            }
        });

        PZ.JQ("#slider-range-min").slider({
            change: function (event, ui) { SetZoomValue(this, false); }
        });

        PZ.JQ("#ToolbarControl_FavoriteButton").click(function () {
            var dialogX = PZ.JQ("#ToolbarControl_FavoriteButton").offset().left;
            var dialogY = PZ.JQ("#ToolbarControl_FavoriteButton").offset().top + PZ.JQ("#ToolbarControl_FavoriteButton").outerHeight();
            eval(favoriteButtonDefault);
            PZ.JQ('#LinkDialog').dialog('option', 'position', [dialogX, dialogY]);
            PZ.JQ("#LinkDialog").dialog("open");
            return false;
        });

        PZ.JQ("#ToolbarControl_ButtonSearchASPX").click(function () {
            DeselectAccordionListLinks();
            DoSearch('AdvancedSearch_EX', 'ASPX', PZ.JQ("#ToolbarControl_TextBoxSearch").val());
            return false;
        });

        PZ.JQ("#ToolbarControl_ButtonSearchPHP").click(function () {
            DeselectAccordionListLinks();
            DoSearch('AdvancedSearch', 'PHP', PZ.JQ("#ToolbarControl_TextBoxSearch").val());
            return false;
        });

        PZ.JQ("#ToolbarControl_ButtonSearch").click(function () {
            DeselectAccordionListLinks();
            DoSearch('AdvancedSearch', null, PZ.JQ("#ToolbarControl_TextBoxSearch").val());
            //return false;
        });

        PZ.JQ("#ToolbarControl_DiagramViewModeButton").click(function () {
            var content = _nm.GetContent("Main");
            content = document.getElementById(content);
            if (typeof content.contentWindow.buildViewSelectionControls == "function") {
                var controlsList = content.contentWindow.buildViewSelectionControls();
                if (controlsList != "") {
                    _diagramViewModeDialogControlsList = controlsList;
                    var dialogX = PZ.JQ("#ToolbarControl_DiagramViewModeButton").offset().left;
                    var dialogY = PZ.JQ("#ToolbarControl_DiagramViewModeButton").offset().top + PZ.JQ("#ToolbarControl_FavoriteButton").outerHeight();
                    PZ.JQ('#DiagramViewModeDialog').dialog('option', 'position', [dialogX, dialogY]);
                    PZ.JQ("#DiagramViewModeDialog").dialog("open");
                }
            }
            return false;
        });

        PZ.JQ('#ToolbarControl_TextBoxSearch').keypress(function (e) {
            if (e.which == 13) {
                if (PZ.JQ("#ToolbarControl_ButtonSearch").length > 0) {
                    DeselectAccordionListLinks();
                    DoSearch('AdvancedSearch', null, PZ.JQ("#ToolbarControl_TextBoxSearch").val());
                }
                else if (PZ.JQ("#ToolbarControl_ButtonSearchPHP").length > 0) {
                    DeselectAccordionListLinks();
                    DoSearch('AdvancedSearch', 'PHP', PZ.JQ("#ToolbarControl_TextBoxSearch").val());
                }
                else if (PZ.JQ("#ToolbarControl_ButtonSearchASPX").length > 0) {
                    DeselectAccordionListLinks();
                    DoSearch('AdvancedSearch_EX', 'ASPX', PZ.JQ("#ToolbarControl_TextBoxSearch").val());
                }
            }
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton1031").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 1031);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton1033").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 1033);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton2057").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 2057);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton1040").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 1040);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton1053").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 1053);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton1029").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 1029);
            PZ.JQ(this).blur();
            return false;
        });

        PZ.JQ("#ToolbarControl_ChangeLanguageButton3082").click(function () {
            ToolBarItem_OnClick('LangChangeButton', 3082);
            PZ.JQ(this).blur();
            return false;
        });
        //----
        PZ.JQ(function () {
            PZ.JQ.getJSON(PZ.JQ("#ToolbarControl_SearchData").val())
            .success(function (data, textStatus, jqXHR) {
                searchData = data;

                var uniqueness = new Object();
                var autocompleteStrings = new Array();
                PZ.JQ.each(searchData, function (i) {
                    var entry = searchData[i];
                    if (uniqueness[entry["Title"]] != entry["Title"]) {
                        autocompleteStrings.push(entry["Title"]);
                        uniqueness[entry["Title"]] = entry["Title"];
                    }
                    PZ.JQ.each(entry["Content"], function (j) {
                        var record = entry["Content"][j];
                        if (record["Type"] == "AT_DESC") {
                            var parts = record["Value"].split(" ");
                            PZ.JQ.each(parts, function (k) {
                                if (uniqueness[parts[k]] != parts[k]) {
                                    autocompleteStrings.push(parts[k]);
                                    uniqueness[parts[k]] = parts[k];
                                }
                            });
                        }
                    });
                });

                autocompleteStrings.sort();
                PZ.JQ("#ToolbarControl_TextBoxSearch").autocomplete({
                    minLength: 3,
                    source: autocompleteStrings,
                    select: function (event, ui) {
                        PZ.JQ("#ToolbarControl_TextBoxSearch").val(ui.item.value);
                        if (PZ.JQ("#ToolbarControl_ButtonSearch").length > 0) {
                            DeselectAccordionListLinks();
                            DoSearch('AdvancedSearch', null, PZ.JQ("#ToolbarControl_TextBoxSearch").val());
                        }
                        else if (PZ.JQ("#ToolbarControl_ButtonSearchPHP").length > 0) {
                            DeselectAccordionListLinks();
                            DoSearch('AdvancedSearch', 'PHP', PZ.JQ("#ToolbarControl_TextBoxSearch").val());
                        }
                        else if (PZ.JQ("#ToolbarControl_ButtonSearchASPX").length > 0) {
                            DeselectAccordionListLinks();
                            DoSearch('AdvancedSearch_EX', 'ASPX', PZ.JQ("#ToolbarControl_TextBoxSearch").val());
                        }

                        PZ.JQ(this).val('');
                        return false;
                    }
                });
            })
            .error(function (jqXHR, textStatus, errorThrown) {
                searchData = new Array();
                PZ.JQ("#SearchDataMissingMessage").show("slow");
            });
        });
        //---
    });

    PZ.JQ(function () {
        //Prevent Forms from performing their submit action
        PZ.JQ("form")
    .submit(function () {
        return false;
    });
    });
});            //end intial document.ready

/*
    Deselect all accordion list links or sub links.
*/
function DeselectAccordionListLinks() {
    //JK: 2013-03-19: Removed some parent calls to avoid undesired behavior in portal site integration.
    //var tmpNavigationAccordion = parent.document.getElementById("Accordion");
    var tmpNavigationAccordion = PZ.JQ("#Accordion");
    var tmpClickedAccordionListLinkContainers = PZ.JQ(tmpNavigationAccordion).find(".ui-accordion-content-active").find(".ClickedAccordionListLinkContainer");
    PZ.JQ(tmpClickedAccordionListLinkContainers).removeClass("ClickedAccordionListLinkContainer ui-corner-all");
    PZ.JQ(tmpClickedAccordionListLinkContainers).find(".ClickedAccordionListLink").removeClass("ClickedAccordionListLink");
    PZ.JQ(tmpClickedAccordionListLinkContainers).find(".ClickedAccordionLisSubLinkContainer").removeClass("ClickedAccordionListSubLinkContainer ui-corner-all");
    PZ.JQ(tmpClickedAccordionListLinkContainers).find(".ClickedAccordionLisSubLink").removeClass("ClickedAccordionListSubLink");
}

/*
    Opens the currently needed feedback page according to the current diagram an d detail content.
*/
function OpenFeedback() {
    var lcid = _nm.GetActiveLCID();
    var strFeedbackEMail = _nm.GetFeedbackEMail();
    var strDiagramName = _nm.GetDiagramName();
    var strDetailName = _nm.GetDetailName();

    var strFullPath = "Feedback.aspx?modelname=" + encodeURIComponent(strDiagramName) + "&detailname=" + encodeURIComponent(strDetailName) + "&langid=" + lcid;
    var strJsFeedbackWindowTitle = "Feedback";
    NewWin = window.open(strFullPath, strJsFeedbackWindowTitle, "width=400,height=600,scrollbars=no");
    NewWin.focus();
}

/*
    Initializes a specified element as jQuery button.
    Parameter 1: Name;
    Parameter 2: Disabled: {true, false}
*/
function InitializeJQueryButton(name, isDisabled) {
    if ((name != "") && (isDisabled != "")) {
        if (isDisabled == "false") {
            PZ.JQ(name).button({ disabled: false });
        }
        if (isDisabled == "true") {
            PZ.JQ(name).button({ disabled: false });
        }
    }
}

/*
    Initializes the standard set of buttons for the toolbar
*/
function InitializeJQueryStandardToolbarButtons() {
    var watermarkHoverColor = PZ.JQ("#JQWatermarkHoverColor").val();
    var watermarkColor = PZ.JQ("#JQWatermarkColor").val();

    PZ.JQ("#ToolbarControl_FavoriteButton").button(); //Link
    PZ.JQ("#ToolbarControl_AddToFavoriteButton").button(); //Favorites
    PZ.JQ("#ToolbarControl_ZoomButton").button(); //Zoom
    // Search buttons
    PZ.JQ("#searchbuttonaspx").button();
    PZ.JQ("#searchbuttonphp").button();
    PZ.JQ("#ToolbarControl_ButtonSearch").button();
    // Link-Copy Button
    PZ.JQ("#CopyToClipboardButton").button();
    PZ.JQ("#FavoritesLinkButton").button();
    PZ.JQ("#AddCurrentPageToFavoritesButton").button();
    PZ.JQ("#ToolbarControl_TextBoxSearch").mouseenter(function () {
        PZ.JQ(this).animate({ backgroundColor: watermarkHoverColor }, 250);
    });

    PZ.JQ("#ToolbarControl_TextBoxSearch").mouseleave(function () {
        PZ.JQ(this).animate({ backgroundColor: watermarkColor }, 250);
    });
}

//CONTENT FROM NAVIGATION.ASCX
PZ.JQ(function () {
    var navigationCurrentCulture = PZ.JQ("#JQNavigationCurrentCulture").val();
    var navigationFileExtension = PZ.JQ("#JQNavigationFileExtension").val();
    var navigationStandardAccordionIconsEnabled = PZ.JQ("#JQNavigationStandardAccordionIconsEnabled").val();

    var icons = { "header": "ui-icon-triangle-1-e", "headerSelected": "ui-icon-triangle-1-s" }
    PZ.JQ("#Accordion").accordion("option", "autoHeight", false);
    PZ.JQ("#Accordion").accordion({ fillSpace: true });
    PZ.JQ("#Accordion").accordion("option", "icons", eval(navigationStandardAccordionIconsEnabled));
    PZ.JQ(".AccordionTree").bind("select_node.jstree", function (e, data) {
        var liid = data.rslt.obj.attr("id");
        var href = data.rslt.obj.children("a").attr("href");
        var command = href.substring(11, href.length);
        var a = PZ.JQ.jstree._focused().get_selected();
        PZ.JQ.jstree._focused().toggle_node(a);

        if (PZ.JQ("#TREENODEID").val() != (liid)) {
            window.location.href = href;
        }
    });

    var NumberOfTreesToBeInitialized;
    try {
        NumberOfTreesToBeInitialized = PZ.JQ(".AccordionTreeShadowCopy").length;
    }
    catch (e) { }

    PZ.JQ(".AccordionTree")
        .bind("loaded.jstree", function (event, data) {
            if ((NumberOfTreesToBeInitialized != null) && (NumberOfTreesToBeInitialized > 1)) {
                NumberOfTreesToBeInitialized--;
            }
            else {
                var tmpGivenLink = window.location.href;
                var tmpGivenLinkContainsDetailInformation = 0;
                var tmpGivenLinkContainsMainInformation = 0;
                if (tmpGivenLink != null) {
                    tmpGivenLinkContainsDetailInformation = tmpGivenLink.indexOf("detail");
                    tmpGivenLinkContainsMainInformation = tmpGivenLink.indexOf("main");
                }
                if ((tmpGivenLinkContainsDetailInformation == -1) && (tmpGivenLinkContainsMainInformation == -1)) {
                    //Load Initial IFrame contents when *THIS* page is ready.
                    LoadInitialIFrameContent("Details", "DetailsStart_" + navigationCurrentCulture + "." + navigationFileExtension);
                    LoadInitialIFrameContent("Main", "MainStart_" + navigationCurrentCulture + "." + navigationFileExtension);
                }
                if ((tmpGivenLinkContainsDetailInformation != -1) && (tmpGivenLinkContainsMainInformation != -1)) {
                    //var tmpMain = tmpGivenLink.substring(tmpGivenLinkContainsMainInformation + 7, tmpGivenLinkContainsDetailInformation - 1);
                    var tmpMain = GetURLParameter("main");
                    //var tmpDetails = tmpGivenLink.substring(tmpGivenLinkContainsDetailInformation + 9);
                    var tmpDetails = GetURLParameter("detail");
                    if (tmpMain.indexOf("search") > 0) {
                        tmpMain = decodeURIComponent(tmpMain);
                    }
                    PZ.JQ("#Main").attr("src", tmpMain);
                    PZ.JQ("#Details").attr("src", tmpDetails);
                }
            }
        });

    PZ.JQ("#PROCESSHOUSEID").val(PZ.JQ(".AccordionTree").children("ul").children(":first").attr("id"));
});

//Auto select the first model in a diagram's folder.
PZ.JQ("li a").live("click", function () {
    var treeAutoSelectFirstModelInFolder = PZ.JQ("#JQTreeAutoSelectFirstModelInFolder").val();
    if (treeAutoSelectFirstModelInFolder != null && (treeAutoSelectFirstModelInFolder == "true" || treeAutoSelectFirstModelInFolder == "True")) {
        if ((PZ.JQ(this).parent().attr("rel") == "folder")) {
            var tmpId = PZ.JQ(this).parent().attr("id");
            var tmpDiagram = PZ.JQ("#_" + tmpId).children("ul").children("li:first-child[rel=diagram]");
            if (PZ.JQ(tmpDiagram).length > 0) {
                var tmpWebLink = PZ.JQ(tmpDiagram).children("a").attr("href");
                if (tmpWebLink != undefined) {
                    eval(tmpWebLink);
                }
            }
        }
    }
});

//ADDITIONAL CONTENT FOR TOGGLING FUNCTIONALITY IN NAVIGATION AND DETAIL CONTENT

PZ.JQ(function () {
    PZ.JQ('#ToggleNavigation').toggle(function () {
        PZ.JQ('#NavContentPanel').animate({ width: 36 });
        PZ.JQ('#ToggleNavigationNavIcon').removeClass("ui-icon-triangle-1-w ToggleNavigationNavIconOpened");
        PZ.JQ('#ToggleNavigationNavIcon').addClass("ui-icon-triangle-1-e ToggleNavigationNavIconClosed");
        PZ.JQ('.ToggleNavigationText').fadeOut("fast");
        PZ.JQ("#NAVIGATIONCOLLAPSED").val("true");
    }, function () {
        PZ.JQ('#NavContentPanel').animate({ width: 240 });
        PZ.JQ('#ToggleNavigationNavIcon').removeClass("ui-icon-triangle-1-e ToggleNavigationNavIconClosed");
        PZ.JQ('#ToggleNavigationNavIcon').addClass("ui-icon-triangle-1-w ToggleNavigationNavIconOpened");
        PZ.JQ('.ToggleNavigationText').fadeIn("fast");
        PZ.JQ("#NAVIGATIONCOLLAPSED").val("false");
    }
        );

    PZ.JQ('#ToggleDetailContentPanel').toggle(function () {
        PZ.JQ('#DetailContentPanel').animate({ width: 36 });
        PZ.JQ('#ToggleDetailContentPanelDetailIcon').removeClass("ui-icon-triangle-1-e ToggleDetailContentPanelDetailIconOpened");
        PZ.JQ('#ToggleDetailContentPanelDetailIcon').addClass("ui-icon-triangle-1-w ToggleDetailContentPanelDetailIconClosed");
        PZ.JQ("#ToggleDetailContentPanelLabel").fadeOut("fast");
        PZ.JQ('.ToggleDetailContentPanelLabel').css("display", "none");
        PZ.JQ('#Details').css("display", "none");
        PZ.JQ('.ToggleDetailContentPanelText').css("display", "none");
    }, function () {
        PZ.JQ('#DetailContentPanel').animate({ width: 340 });
        PZ.JQ('#ToggleDetailContentPanelDetailIcon').removeClass("ui-icon-triangle-1-w ToggleDetailContentPanelDetailIconClosed");
        PZ.JQ('#ToggleDetailContentPanelDetailIcon').addClass("ui-icon-triangle-1-e ToggleDetailContentPanelDetailIconOpened");
        PZ.JQ('.ToggleDetailContentPanelLabel').css("display", "inline");
        PZ.JQ('#Details').css("display", "inline");
        PZ.JQ('.ToggleDetailContentPanelText').css("display", "inline");
        PZ.JQ("#DETAILSCOLLAPSED").val("false");
    }
);
});