/// <summary>
/// This module implements the Symbol-based mouse event-handlers.
/// </summary>

var svgChosen = false;
var vmlChosen = false;

var SymbolHighlightFillColor = "";
var SymbolHighlightStrokeColor = "";
var SymbolHighlightTextColor = "";

var SymbolHoverFillColor = "";
var SymbolHoverStrokeColor = "";
var SymbolHoverTextColor = "";

var SymbolInactiveFillColor = "";
var SymbolInactiveStrokeColor = "";
var SymbolInactiveTextColor = "";

var __lastNavigateDeeperContextMenu = null;

//Marked as obsolete. Will be removed in next version.
function __BlurLastNavigateDeeperContextMenu() {
    try {
        if (__lastNavigateDeeperContextMenu != null) {
            __lastNavigateDeeperContextMenu.parentNode.removeChild(__lastNavigateDeeperContextMenu);
            __lastNavigateDeeperContextMenu = null;
        }
    }
    catch (e) {
    }
}

//JK: 2013-07-29: Now expects __lastNavigateDeeperContextMenu to be a jquery object.
function BlurLastNavigateDeeperContextMenu() {
    try {
        if (__lastNavigateDeeperContextMenu != null) {
            __lastNavigateDeeperContextMenu.remove();
        }
    }
    catch (e) {
    }
}

function CreateNavigateDeeperContextMenuEntry(text, mainUrl, detailUrl) {
    this.Text = text;
    this.MainUrl = mainUrl;
    this.DetailUrl = detailUrl;

    this.toString = function () {
        return "<div class=\"NavigateDeeperContextMenuEntry\" onmouseover=\"this.className='NavigateDeeperContextMenuEntry_OnMouseOver';\" onmouseout=\"this.className='NavigateDeeperContextMenuEntry';\"><a href=\"javascript:Symbol_DoubleClick(this, '" + this.MainUrl + "', '" + this.DetailUrl + "');\">" + this.Text + "</a></div>";
    }
}

function CreateNavigateDeeperContextMenuEntry2(text, mainUrl, detailUrl) {
    this.Text = text;
    this.MainUrl = mainUrl;
    this.DetailUrl = detailUrl;

    this.toString = function () {
        return "<div class=\"NavigateDeeperContextMenuEntry\" onmouseover=\"this.className='NavigateDeeperContextMenuEntry_OnMouseOver';\" onmouseout=\"this.className='NavigateDeeperContextMenuEntry';\"><a href=\"javascript:PagingListItem_NavToDiagram(this,'" + this.MainUrl + "', '" + this.DetailUrl + "');\">" + this.Text + "</a></div>";
    }
}

function Symbol_DoubleClickEx(sender, doubleClickExHeader, doubleClickExData) {
    BlurLastNavigateDeeperContextMenu();

    var temp = "";
    if (doubleClickExHeader != null && doubleClickExHeader != "") {
        temp = "<div class=\"NavigateDeeperContextMenuHeaderText\"><span>" + doubleClickExHeader + "&nbsp;</span>" +
                "<span class=\"NavigateDeeperContextMenuHeaderCloser\" onclick=\"javascript:BlurLastNavigateDeeperContextMenu();\">&times;&nbsp;</span></div>\n";
    }

    for (var i = 0; i < doubleClickExData.length; i++) {
        temp += doubleClickExData[i] + "\n";
    }

    // constansts
    // the minimal offset of the PopUp Div to the left/right border of the window
    var MinOffsetX = 25;
    //  var MinOffsetY = 25;
    // the margin of the PopUp Div to the object
    // var MarginBottom = 25;
    var MarginRight = 20;

    var isSVG = false;

    //JK 27-11-13: Changed attribute for svg detection due to inconsistent behaviour.
    isSVG = (sender.ownerSVGElement ? true : false);

    var posx = 0; posy = 0; var objectWidth = 0; var objectHeight = 0;
    if (isSVG) {
        try {
            var bb = sender.getBBox();
            posx = bb.x;
            posy = bb.y;
            objectWidth = bb.width;
            objectHeight = bb.height;
        }
        catch (e) {
        }
    }
    else {
        $sender = PZ.JQ(sender);
        posx = parseFloat($sender.offset().left);
        posy = parseFloat($sender.offset().top);
        objectWidth = sender.clientWidth;
        objectHeight = sender.clientHeight;
    }
    posx = posx - PZ.JQ("#Viewport").scrollLeft();
    posy = posy - PZ.JQ("#Viewport").scrollTop();

    var popUpDiv = document.createElement("div");

    popUpDiv.className = "NavigateDeeperContextMenu";
    popUpDiv.innerHTML = temp;
    popUpDiv.style.position = "absolute";
    popUpDiv.style.zIndex = "100000";

    popUpDiv = PZ.JQ(popUpDiv);

    PZ.JQ('body').append(popUpDiv);
    var offsetX = posx + (objectWidth + MarginRight);
    var ViewportWidth = PZ.JQ("#Viewport").innerWidth();
    if (offsetX + popUpDiv.outerWidth() + MinOffsetX >= ViewportWidth &&/*left area > than right area? */ ViewportWidth - (posx + objectWidth) < posx) {
        var offsetRight = PZ.JQ("#Viewport").innerWidth() - (posx - MarginRight);
        popUpDiv.css({ right: offsetRight });
        if (offsetRight + popUpDiv.outerWidth() + 5 >= ViewportWidth) {
            popUpDiv.css({ maxWidth: popUpDiv.outerWidth() - MinOffsetX });
        }
    }
    else {
        popUpDiv.offset({ left: offsetX });
        if (offsetX + popUpDiv.outerWidth() + 5 >= ViewportWidth) {
            popUpDiv.css({ maxWidth: popUpDiv.outerWidth() - MinOffsetX });
        }
    }
    var offsetY = posy + PZ.JQ('#Viewport').offset().top + objectHeight / 2 - (popUpDiv.outerHeight() / 2);
    //  offsetY = offsetY >= MinOffsetY ? offsetY : MinOffsetY;
    popUpDiv.offset({ top: offsetY });
    popUpDiv.show();

    //============================================================

    __lastNavigateDeeperContextMenu = popUpDiv;
}

//Marked as obsolete. Will be removed in next version.
function __Symbol_DoubleClickEx(sender, doubleClickExHeader, doubleClickExData) {
    BlurLastNavigateDeeperContextMenu();

    var top = "";
    var left = "";
    var right = "";
    var bottom = "";

    try {
        var bodyTag = document.getElementsByTagName("body")[0];

        clientY = clientY + document.getElementById("Content_BreadcrumbDiv").offsetHeight;
        if (bodyTag.clientHeight - clientY < clientY) bottom = (bodyTag.clientHeight - clientY) + "px";
        else top = clientY + "px";

        if (bodyTag.clientWidth - clientX < clientX) left = (bodyTag.clientWidth - clientX) + "px";
        else left = clientX + "px";
    }
    catch (e) {
        var cutTop = event.clientY - document.getElementById("Content_BreadcrumbDiv").offsetHeight;
        top = cutTop + "px";
        left = event.clientX + "px";
        right = "";
        bottom = "";
    }

    var temp = "";
    if (doubleClickExHeader != null && doubleClickExHeader != "") {
        temp = "<div class=\"NavigateDeeperContextMenuHeaderText\"><span>" + doubleClickExHeader + "&nbsp;</span>" +
                "<span class=\"NavigateDeeperContextMenuHeaderCloser\" onclick=\"javascript:BlurLastNavigateDeeperContextMenu();\">&times;&nbsp;</span></div>\n";
    }

    for (var i = 0; i < doubleClickExData.length; i++) {
        temp += doubleClickExData[i] + "\n";
    }

    var div = document.createElement("div");
    div.className = "NavigateDeeperContextMenu";
    div.innerHTML = temp;
    div.style.position = "absolute";
    div.style.zIndex = "100000";
    div.style.top = top;
    div.style.left = left;
    div.style.bottom = bottom;

    var spanner = document.getElementById("Viewport");
    spanner.appendChild(div);
    __lastNavigateDeeperContextMenu = div;
}

function Symbol_DoubleClickEx2(sender, clientX, clientY, doubleClickExHeader, doubleClickExData) {
    BlurLastNavigateDeeperContextMenu();

    var temp = "";
    if (doubleClickExHeader != null && doubleClickExHeader != "") {
        temp = "<div class=\"NavigateDeeperContextMenuHeaderText\"><span>" + doubleClickExHeader + "&nbsp;</span>" +
                "<span class=\"NavigateDeeperContextMenuHeaderCloser\" onclick=\"javascript:BlurLastNavigateDeeperContextMenu();\">&times;&nbsp;</span></div>\n";
    }

    for (var i = 0; i < doubleClickExData.length; i++) {
        temp += doubleClickExData[i] + "\n";
    }

    // constansts
    // the minimal offset of the PopUp Div to the left/right border of the window
    var MinOffsetX = 25;
    //  var MinOffsetY = 25;
    // the margin of the PopUp Div to the object
    // var MarginBottom = 25;
    var MarginRight = 20;

    var isSVG = false;

    //JK 27-11-13: Changed attribute for svg detection due to inconsistent behaviour.
    isSVG = (sender.ownerSVGElement ? true : false);

    var posx = 0; posy = 0; var objectWidth = 0; var objectHeight = 0;
    if (isSVG) {
        try {
            var bb = sender.getBBox();
            posx = bb.x;
            posy = bb.y;
            objectWidth = bb.width;
            objectHeight = bb.height;
        }
        catch (e) {
        }
    }
    else {
        $sender = PZ.JQ(sender);

        posx = parseFloat($sender.offset().left);
        posy = parseFloat($sender.offset().top);
        objectWidth = sender.clientWidth;
        objectHeight = sender.clientHeight;
    }
    posx = posx - PZ.JQ("#Viewport").scrollLeft();
    posy = posy - PZ.JQ("#Viewport").scrollTop();

    var popUpDiv = document.createElement("div");

    popUpDiv.className = "NavigateDeeperContextMenu";
    popUpDiv.innerHTML = temp;
    popUpDiv.style.position = "absolute";
    popUpDiv.style.zIndex = "100000";

    popUpDiv = PZ.JQ(popUpDiv);

    PZ.JQ('body').append(popUpDiv);
    var offsetX = posx + (objectWidth + MarginRight);
    var ViewportWidth = PZ.JQ("#Viewport").innerWidth();
    if (offsetX + popUpDiv.outerWidth() + MinOffsetX >= ViewportWidth &&/*left area > than right area? */ ViewportWidth - (posx + objectWidth) < posx) {
        var offsetRight = PZ.JQ("#Viewport").innerWidth() - (posx - MarginRight);
        popUpDiv.css({ right: offsetRight });
        if (offsetRight + popUpDiv.outerWidth() + 5 >= ViewportWidth) {
            popUpDiv.css({ maxWidth: popUpDiv.outerWidth() - MinOffsetX });
        }
    }
    else {
        popUpDiv.offset({ left: offsetX });
        if (offsetX + popUpDiv.outerWidth() + 5 >= ViewportWidth) {
            popUpDiv.css({ maxWidth: popUpDiv.outerWidth() - MinOffsetX });
        }
    }
    var offsetY = posy + PZ.JQ('#Viewport').offset().top + objectHeight / 2 - (popUpDiv.outerHeight() / 2);
    //  offsetY = offsetY >= MinOffsetY ? offsetY : MinOffsetY;
    popUpDiv.offset({ top: offsetY });
    popUpDiv.show();

    //============================================================

    __lastNavigateDeeperContextMenu = popUpDiv;
}

//Marked as obsolete. Will be removed in next version.
function __Symbol_DoubleClickEx2(sender, clientX, clientY, doubleClickExHeader, doubleClickExData) {
    BlurLastNavigateDeeperContextMenu();

    var top = "";
    var left = "";
    var right = "";
    var bottom = "";
    try {
        var bodyTag = document.getElementsByTagName("body")[0];

        clientY = clientY + document.getElementById("Content_BreadcrumbDiv").offsetHeight;
        if (bodyTag.clientHeight - clientY < clientY) bottom = (bodyTag.clientHeight - clientY) + "px";
        else top = clientY + "px";

        if (bodyTag.clientWidth - clientX < clientX) left = (bodyTag.clientWidth - clientX) + "px";
        else left = clientX + "px";
    }
    catch (e) {
        top = clientY + "px";
        left = clientX + "px";
        right = "";
        bottom = "";
    }

    var temp = "";
    if (doubleClickExHeader != null && doubleClickExHeader != "") {
        temp = "<div class=\"NavigateDeeperContextMenuHeaderText\"><span>" + doubleClickExHeader + "&nbsp;</span>" +
                "<span class=\"NavigateDeeperContextMenuHeaderCloser\" onclick=\"javascript:BlurLastNavigateDeeperContextMenu();\">&times;&nbsp;</span></div>\n";
    }

    for (var i = 0; i < doubleClickExData.length; i++) {
        temp += doubleClickExData[i] + "\n";
    }

    var div = document.createElement("div");
    div.className = "NavigateDeeperContextMenu";
    div.innerHTML = temp;
    div.style.position = "absolute";
    div.style.zIndex = "100000";
    div.style.top = top;
    div.style.left = left;
    div.style.bottom = bottom;

    var spanner = document.getElementById("Viewport");
    spanner.appendChild(div);
    __lastNavigateDeeperContextMenu = div;
}
// can be used in IE and FF, if position of mouse is determined by 'getMouse' function
// at the moment the function is used in ListViews, since ListViews are the same for IE and FF in contrast to DiagramViews
function Symbol_DoubleClickExUniversal(sender, doubleClickExHeader, doubleClickExData) {
    if (typeof (posx) == "number" && typeof (posy) == "number");

    BlurLastNavigateDeeperContextMenu();

    var top = "";
    var left = "";
    var right = "";
    var bottom = "";
    try {
        var bodyTag = document.getElementsByTagName("body")[0];

        if (bodyTag.clientHeight - posy < posy) bottom = (bodyTag.clientHeight - posy) + "px";
        else top = posy + "px";

        if (bodyTag.clientWidth - posx < posx) left = (bodyTag.clientWidth - posx) + "px";
        else left = posx + "px";
    }
    catch (e) {
        top = posy + "px";
        left = posx + "px";
        right = "";
        bottom = "";
    }

    var temp = "";
    if (doubleClickExHeader != null && doubleClickExHeader != "") {
        temp = "<div class=\"NavigateDeeperContextMenuHeaderText\"><span>" + doubleClickExHeader + "&nbsp;</span>" +
                "<span class=\"NavigateDeeperContextMenuHeaderCloser\" onclick=\"javascript:BlurLastNavigateDeeperContextMenu();\">&times;&nbsp;</span></div>\n";
    }

    for (var i = 0; i < doubleClickExData.length; i++) {
        temp += doubleClickExData[i] + "\n";
    }

    var div = document.createElement("div");
    div.className = "NavigateDeeperContextMenu";
    div.style.position = "absolute";
    div.style.top = top;
    div.style.left = left;
    div.style.right = right;
    div.style.bottom = bottom;
    div.innerHTML = temp;
    //div.onmouseout = function () { self.setTimeout("BlurLastNavigateDeeperContextMenu();", 100); };

    document.body.appendChild(div);
    __lastNavigateDeeperContextMenu = div;
}

function Symbol_DoubleClick(sender, mainUrl, detailUrl) {
    BlurLastNavigateDeeperContextMenu();

    if (parent && parent.Link && parent._nm) {
        var links = new Array();
        if (mainUrl) {
            var _mainUrl = mainUrl;
            var _oldMainUrl = mainUrl;
            /* if (!document.all) {
            var strHref = _mainUrl;
            var indexOfPoint = strHref.indexOf('.');
            var indexTemp = strHref.indexOf('.', (indexOfPoint + 1));
            if (indexTemp != -1) {
            indexOfPoint = indexTemp;
            }
            var strLcId = strHref.substring(indexOfPoint - 4, indexOfPoint);
            var strHrefFirst = strHref.substring(0, indexOfPoint - 4);
            var strHrefLast = strHref.substring(indexOfPoint, strHref.length);
            var _mainUrl = strHrefFirst + 'FF_' + strLcId + strHrefLast;
            }
            var link = new parent.Link("MainContent", _mainUrl);*/

            //var id = '#' + mainUrl.substring(2, (mainUrl.length - 10));
            //parent.document.getElementById('TREENODEID').value = id;

            if (_mainUrl != null && _mainUrl.indexOf("M_") != -1) {
                var diagramViewCookieValue = PZ.JQ.cookie("DiagramViewMode");
                //Check, if extension is a valid view mode extension.
                if (diagramViewCookieValue != null && diagramViewCookieValue.length > 0) {
                    _mainUrl = _mainUrl.replace(".html", "." + diagramViewCookieValue + ".html");
                }
            }

            var link = new parent.Link("Main", _oldMainUrl);

            PZ.JQ.get(_mainUrl)
			.done(function () {
			    link = new parent.Link("Main", _mainUrl);
			    link.SaveLastSite = true;
			    links.push(link);
			    if (detailUrl) {
			        var link = new parent.Link("Details", detailUrl);
			        link.SaveLastSite = true;
			        links.push(link);
			    }
			    parent._nm.Navigate(links);
			}).fail(function () {
			    var link = new parent.Link("Main", _oldMainUrl);
			    link.SaveLastSite = true;
			    links.push(link);
			    if (detailUrl) {
			        var link = new parent.Link("Details", detailUrl);
			        link.SaveLastSite = true;
			        links.push(link);
			    }
			    parent._nm.Navigate(links);
			})
        }
    }
    //parent.document.getElementById('TREENODEID').onchange();
}

//Added for forwarding to Symbol_Click function (compatibility).
function Symbol_ClickEx(sender, detailUrl) {
    Symbol_Click(sender, detailUrl);
}

function Symbol_Click(sender, detailUrl) {
    BlurLastNavigateDeeperContextMenu();

    // blur favorites
    if (parent) {
        var myFavoritPopup = parent.document.getElementById("FavoritPopup");
        if (myFavoritPopup != null) {
            myFavoritPopup.style.display = "none";
        }
    }

    if (parent && parent.Link && parent._nm) {
        var links = new Array();
        if (detailUrl) {
            //alert("entered: " + detailUrl);

            //var id = '#' + detailUrl.substring(2, (detailUrl.length - 10));
            //alert(id);
            //parent.document.getElementById('TREENODEID').value = id;

            var link = new parent.Link("Details", detailUrl);
            link.SaveLastSite = true;

            links.push(link);
        }
        parent._nm.Navigate(links);
    }
    Symbol_Highlight(sender);
    //parent.document.getElementById('TREENODEID').onchange();
}

var __currentHighlights = new Array();

function Symbol_Highlight(sender) {
    for (var i = 0; i < __currentHighlights.length; i++) {
        __currentHighlights[i].isHighlight = false;
        Symbol_MouseOut(__currentHighlights[i]);
    }

    __currentHighlights = new Array();

    // expected sender.id-format:
    //     G{render-number}_{guid}_{item-shape-number}
    //
    // render-number is fixed within a diagram view
    // guid is the item guid
    // item-shape-number is the increasing shape index of item
    //
    var senderId = (sender.id ? sender.id : "") + "__";
    var idParts = senderId.split("_");

    var baseId = idParts[0] + "_" + idParts[1] + "_";

    var failedLookupCount = 0;
    for (var itemShapeCount = 0; itemShapeCount < 1000; itemShapeCount++) {
        if (failedLookupCount > 3) break;

        var lookupId = baseId + itemShapeCount;
        var child = sender.ownerDocument.getElementById(lookupId);

        if (child == null) {
            failedLookupCount++;
            continue;
        }

        failedLookupCount = 0;

        Symbol_MouseOut(child); // remove any hover effects

        if (!child.isHighlight) {
            child.isHighlight = true;
            __currentHighlights.push(child);
            if (sender.nodeName != "DIV") {
                var isSVG = (child.previousElementSibling ? true : false);

                var symbolGroup = (isSVG ? child.previousElementSibling : child.previousSibling);
                if (symbolGroup != null) {
                    if (SymbolHighlightFillColor != "") {
                        var fillChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("fill"));
                        if (fillChildren != null) {
                            for (var i = 0; i < fillChildren.length; i++) {
                                if (isSVG && fillChildren[i].nodeType == fillChildren[i].ELEMENT_NODE && Number(fillChildren[i].style.getPropertyValue("fill-opacity")) > 0 && fillChildren[i].getAttribute("puz:tag") != "shadow") {
                                    if (fillChildren[i].originalFillColor == undefined) fillChildren[i].originalFillColor = String(fillChildren[i].style.getPropertyValue("fill") != undefined ? fillChildren[i].style.getPropertyValue("fill") : "");
                                    fillChildren[i].style.setProperty("fill", SymbolHighlightFillColor, "");
                                }
                                else if (!isSVG && Number(fillChildren[i].opacity) > 0 && fillChildren[i].parentNode.parentNode.tag != "shadow") {
                                    if (fillChildren[i].originalColor == undefined) fillChildren[i].originalColor = String(fillChildren[i].color != undefined ? fillChildren[i].color : "");
                                    if (fillChildren[i].originalColor2 == undefined) fillChildren[i].originalColor2 = String(fillChildren[i].color2 != undefined ? fillChildren[i].color2 : "");

                                    fillChildren[i].color = SymbolHighlightFillColor;
                                    fillChildren[i].color2 = SymbolHighlightFillColor;
                                }
                            }
                        }
                    }

                    if (SymbolHighlightStrokeColor != "") {
                        var strokeChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("stroke"));
                        if (strokeChildren != null) {
                            for (var i = 0; i < strokeChildren.length; i++) {
                                if (isSVG && strokeChildren[i].nodeType == strokeChildren[i].ELEMENT_NODE && Number(strokeChildren[i].style.getPropertyValue("stroke-opacity")) > 0 && strokeChildren[i].getAttribute("puz:tag") != "shadow") {
                                    if (strokeChildren[i].originalStrokeColor == undefined) strokeChildren[i].originalStrokeColor = String(strokeChildren[i].style.getPropertyValue("stroke") != undefined ? strokeChildren[i].style.getPropertyValue("stroke") : "");
                                    strokeChildren[i].style.setProperty("stroke", SymbolHighlightStrokeColor, "");
                                }
                                else if (!isSVG && Number(strokeChildren[i].opacity) > 0 && strokeChildren[i].parentNode.parentNode.tag != "shadow") {
                                    if (strokeChildren[i].originalColor == undefined) strokeChildren[i].originalColor = String(strokeChildren[i].color != undefined ? strokeChildren[i].color : "");
                                    strokeChildren[i].color = SymbolHighlightStrokeColor;
                                }
                            }
                        }
                    }

                    if (SymbolHighlightTextColor != "") {
                        var textChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("textbox"));
                        if (textChildren != null) {
                            for (var i = 0; i < textChildren.length; i++) {
                                var tmpFillPropertyValue = "";
                                var tmpFontFamilyPropertyValue = "";
                                if (isSVG) {
                                    if (textChildren[i].style && (textChildren[i].style.getPropertyValue("fill") != null) && (textChildren[i].style.getPropertyValue("font-family") != null)) {
                                        tmpFillPropertyValue = textChildren[i].style.getPropertyValue("fill");
                                        tmpFontFamilyPropertyValue = textChildren[i].style.getPropertyValue("font-family");
                                    }
                                }
                                if ((isSVG && textChildren[i].nodeType == textChildren[i].ELEMENT_NODE) && (tmpFillPropertyValue.length > 0) && (tmpFontFamilyPropertyValue.length > 0)) {
                                    if (textChildren[i].originalTextColor == undefined) textChildren[i].originalTextColor = String(textChildren[i].style.getPropertyValue("fill") != undefined ? textChildren[i].style.getPropertyValue("fill") : "");
                                    textChildren[i].style.setProperty("fill", SymbolHighlightTextColor, "");
                                }
                                else if (!isSVG) {
                                    if (textChildren[i].originalColor == undefined) textChildren[i].originalColor = String(textChildren[i].style.getAttribute("color") != undefined ? textChildren[i].style.getAttribute("color") : "");
                                    textChildren[i].style.setAttribute("color", SymbolHighlightTextColor);
                                }
                            }
                        }
                    }
                }
            } else {
                if (SymbolHighlightFillColor != "") {
                    if (child.originalColor == undefined) child.originalColor = String(child.style.background != undefined ? child.style.background : "");
                    child.style.background = SymbolHighlightFillColor;
                }

                if (SymbolHighlightStrokeColor != "") {
                    if (child.originalSymbolWidth != undefined) child.style.width = child.originalSymbolWidth;
                    if (child.originalSymbolHeight != undefined) child.style.height = child.originalSymbolHeight;
                    if (child.originalBorderColor == undefined) child.originalBorderColor = String(child.style.borderColor != undefined ? child.style.borderColor : "");
                    if (child.originalBorderWidth == undefined) child.originalBorderWidth = String(child.style.borderWidth != undefined ? child.style.borderWidth : "");
                    if (child.originalSymbolWidth == undefined) child.originalSymbolWidth = String(child.style.width);
                    if (child.originalSymbolHeight == undefined) child.originalSymbolHeight = String(child.style.height);
                    if (child.originalBorderStyle == undefined) child.originalBorderStyle = String(child.style.borderStyle != undefined ? child.style.borderStyle : "");
                    var newWidth = child.style.width.substr(0, child.style.width.length - 2) - 2;
                    var newHeight = child.style.height.substr(0, child.style.height.length - 2) - 2;
                    child.style.width = newWidth + "px";
                    child.style.height = newHeight + "px";
                    child.style.borderColor = SymbolHighlightStrokeColor;
                    child.style.borderWidth = "1px";
                    child.style.borderStyle = "solid";
                }
                if (SymbolHighlightTextColor != "") {
                    child.style.color = child.originalTextColor;
                }
            }
        }
    }
}

//
// -- GROUP HIDING LOGIC --
//

var __currentHtmlGroupStates = new Object(); // groupid --> int : 1 = visible / -1 or undefined = hidden

var __currentGroupStates = new Object(); // groupid --> int : 1 = hidden
var __desiredGroupStates = new Object(); // groupid --> int : 1 = to be hidden

var __currentHidings = new Object(); //                            groupid --> int : 1 = hidden
var __currentMovings = new Object(); // elementid-and-move-causing-groupid --> int : 1 = moved

function Symbol_CloseAllGroups(sender) {
    var isSVG = (sender.previousElementSibling ? true : false);

    var controlledAreaBounds = (isSVG ? sender.ownerDocument.defaultView.eval("__controlledAreaBounds") : eval("__controlledAreaBounds"));
    if (controlledAreaBounds) {
        var allGroupIds = new Array();

        for (var groupId in controlledAreaBounds) {
            allGroupIds.push(groupId);
        }

        Symbol_PrepareMultiToggle(allGroupIds);

        for (var groupId in controlledAreaBounds) {
            var bounds = controlledAreaBounds[groupId];

            __Symbol_GroupToggleClickEx(sender, groupId, bounds["x"], bounds["y"], bounds["width"], bounds["height"], true);
        }
    }
}

function Symbol_PrepareMultiToggle(groupIdArray) {
    var allHidden = true;
    for (var i = 0; i < groupIdArray.length; i++) {
        if (__currentGroupStates[groupIdArray[i]] == 1) allHidden &= true;
        else allHidden &= false;
    }

    for (var i = 0; i < groupIdArray.length; i++) {
        if (allHidden) __desiredGroupStates[groupIdArray[i]] = 0;
        else __desiredGroupStates[groupIdArray[i]] = 1;
    }
}

function Symbol_GroupToggleClick(sender, groupId, controlledX, controlledY, controlledWidth, controlledHeight) {
    __Symbol_GroupToggleClickEx(sender, groupId, controlledX, controlledY, controlledWidth, controlledHeight, false);
}

function __HtmlGroupToggleClick(sender) {
    if (sender != null && sender.parentNode != null) {
        var isSVG = (sender.parentNode.nextElementSibling ? true : false);

        // We aren't interested in the groupElement that invoked the function (because this groupElement remains unchanged)
        // but in the next sibling groupElement (which can be a subordinated groupElement or an indipendend new elemnet groupElement).
        var groupElement = (isSVG ? sender.parentNode.nextElementSibling : sender.parentNode.nextSibling);
        if (groupElement != null) {
            var groupRang = PZ.JQ(groupElement).attr("data-pz-grouprang");

            // Process all sibling groupElements and toggle visibility.
            do {
                // Get current visibility and toggle.
                //var displayValue = (isSVG ? groupElement.style.getProperty("display") : groupElement.style.display);
                var displayValue = groupElement.style.display;
                var newDisplayValue = displayValue == "none" ? "block" : "none";

                // Process sibling groupElements of the same groupRang value --- toggle them.
                if (PZ.JQ(groupElement).attr("data-pz-grouprang") == groupRang) {
                    var currentHtmlGroupState = displayValue == "none" ? "1" : "-1";
                    if (isSVG) {
                        groupElement.style.display = newDisplayValue;
                    }
                    else {
                        groupElement.style.display = newDisplayValue;
                    }
                    // Remember visibility of current groupElement (1 = hidden / -1 = visible).
                    __currentHtmlGroupStates[groupElement.id] = currentHtmlGroupState;
                }
                    // Process sibling groupElements of a higher groupRang value --- set them visible.
                else {
                    // show only "opened" sub groups of another rang
                    if (newDisplayValue == "block" && __currentHtmlGroupStates[groupElement.id] == 1 || newDisplayValue == "none") {
                        if (isSVG) {
                            groupElement.style.display = newDisplayValue;
                        }
                        else {
                            groupElement.style.display = newDisplayValue;
                        }
                    }
                }

                groupElement = (isSVG ? groupElement.nextElementSibling : groupElement.nextSibling);
            } while (groupElement != null && PZ.JQ(groupElement).attr("data-pz-grouprang") >= groupRang)
        }
    }
}

function __Symbol_GroupToggleClickEx(sender, groupId, controlledX, controlledY, controlledWidth, controlledHeight, isInitialHidingCall) {
    if (sender != null) {
        var isVerticalToggle;
        if (controlledWidth == 0 && controlledHeight > 0) isVerticalToggle = true;
        else if (controlledHeight == 0 && controlledWidth > 0) isVerticalToggle = false;
        else return false; // invalid input values

        var isSVG = (sender.previousElementSibling ? true : false);

        var needsToggle = true;
        if (__currentGroupStates[groupId] && (__currentGroupStates[groupId] == __desiredGroupStates[groupId])) needsToggle = false;
        else __desiredGroupStates[groupId] = -1; // invalidate entry

        var needsMoving = false;

        if (needsToggle) {
            if (__currentGroupStates[groupId] == 1) __currentGroupStates[groupId] = 0; // hidden            --> visible
            else __currentGroupStates[groupId] = 1;                                    // visible/undefined --> hidden

            //
            // toggle group member visibility
            //

            var group = (isSVG ? sender.ownerDocument.defaultView.eval(groupId) : eval(groupId));
            for (var i = 0; i < group.length; i++) {
                var clickAreaId = group[i];
                var clickArea = sender.ownerDocument.getElementById(clickAreaId);

                if (clickArea != null) {
                    var symbol = (isSVG ? clickArea.previousElementSibling : clickArea.previousSibling);
                    if (symbol != null) {
                        if (!isSVG && isVerticalToggle) {
                            var prevElem = symbol.previousSibling;
                            if (prevElem != null && prevElem.nodeName == "image") {
                                symbol = prevElem;
                            }
                        }
                        var extendedId = clickAreaId + "_" + groupId;

                        if (__currentHidings[extendedId] == 1) {
                            __currentHidings[extendedId] = 0;
                            if (__currentHidings[clickAreaId] > 0) __currentHidings[clickAreaId] -= 1;
                            else __currentHidings[clickAreaId] = 0;

                            if (__currentHidings[clickAreaId] == 0) needsMoving = true;
                        }
                        else {
                            __currentHidings[extendedId] = 1;
                            if (__currentHidings[clickAreaId] >= 0) __currentHidings[clickAreaId] += 1;
                            else __currentHidings[clickAreaId] = 1;

                            if (__currentHidings[clickAreaId] == 1) needsMoving = true;
                        }

                        var newValue = (__currentHidings[clickAreaId] > 0 ? "none" : "");

                        if (isSVG) symbol.style.setProperty("display", newValue, "");
                        else symbol.style.display = newValue;

                        if (isSVG) clickArea.style.setProperty("display", newValue, "");
                        else clickArea.style.display = newValue;
                    }
                }
            }

            //
            // adjust element positions to the south (isVerticalToggle) or east (!isVerticalToggle) of the controlled area
            //

            var symbolBounds = (isSVG ? sender.ownerDocument.defaultView.eval("__symbolBounds") : eval("__symbolBounds"));
            if (symbolBounds != null && (needsMoving || isInitialHidingCall)) {
                var referencePosition = (isVerticalToggle ? controlledY + controlledHeight : controlledX + controlledWidth);

                for (var addressableAreaId in symbolBounds) {
                    var bounds = symbolBounds[addressableAreaId];

                    var symbolPosition = (isVerticalToggle ? bounds["y"] + bounds["height"] : bounds["x"] + bounds["width"]);
                    if (symbolPosition >= referencePosition) {
                        var addressableArea = sender.ownerDocument.getElementById(addressableAreaId);

                        var symbol = (isSVG ? addressableArea.previousElementSibling : addressableArea.previousSibling);
                        if (symbol != null) {
                            if (!isSVG && isVerticalToggle) {
                                var prevElem = symbol.previousSibling;
                                if (prevElem != null && prevElem.nodeName == "image") {
                                    symbol = prevElem;
                                }
                            }

                            var extendedId = addressableAreaId + "_" + groupId;

                            var offset = 0;
                            if (newValue == "" > 0) {
                                offset += (isVerticalToggle ? controlledHeight : controlledWidth) / 254.0 /* 0.1mm per inch */ * 72.0 /* dpi */;
                            }
                            else {
                                offset -= (isVerticalToggle ? controlledHeight : controlledWidth) / 254.0 /* 0.1mm per inch */ * 72.0 /* dpi */;
                            }

                            if (!needsMoving && isInitialHidingCall) offset = 0;

                            ChangePosition(symbol, offset, isVerticalToggle, isSVG);
                            ChangePosition(addressableArea, offset, isVerticalToggle, isSVG);
                        }
                    }
                }
            }
        }
    }
}

function ChangePosition(symbol, offset, isVerticalToggle, isSVG) {
    var currentPosition = (isVerticalToggle ? symbol.realTop : symbol.realLeft);
    if (isNaN(currentPosition)) currentPosition = (isSVG ? 0 : parseFloat(isVerticalToggle ? symbol.style.top : symbol.style.left));

    currentPosition += offset;

    if (isSVG) {
        if (isVerticalToggle) {
            symbol.realTop = currentPosition;
            symbol.setAttributeNS(null, "transform", "translate(0, " + currentPosition + ")");
        }
        else {
            symbol.realLeft = currentPosition;
            symbol.setAttributeNS(null, "transform", "translate(" + currentPosition + ", 0)");
        }
    }
    else {
        if (isVerticalToggle) {
            symbol.realTop = currentPosition;
            symbol.style.top = (currentPosition) + "px";
        }
        else {
            symbol.realLeft = currentPosition;
            symbol.style.left = (currentPosition) + "px";
        }
    }
}

function Symbol_HtmlMouseOver(sender) {
    if (sender != null && !sender.isHighlight) {
        if (SymbolHoverFillColor != "") {
            if (sender.originalColor == undefined) sender.originalColor = String(sender.style.background != undefined ? sender.style.background : "");
            sender.style.background = SymbolHoverFillColor;
        }

        if (SymbolHoverStrokeColor != "") {
            if (sender.originalSymbolWidth != undefined) sender.style.width = sender.originalSymbolWidth;
            if (sender.originalSymbolHeight != undefined) sender.style.height = sender.originalSymbolHeight;
            if (sender.originalBorderColor == undefined) sender.originalBorderColor = String(sender.style.borderColor != undefined ? sender.style.borderColor : "");
            if (sender.originalBorderWidth == undefined) sender.originalBorderWidth = String(sender.style.borderWidth != undefined ? sender.style.borderWidth : "");
            if (sender.originalSymbolWidth == undefined) sender.originalSymbolWidth = String(sender.style.width);
            if (sender.originalSymbolHeight == undefined) sender.originalSymbolHeight = String(sender.style.height);
            if (sender.originalBorderStyle == undefined) sender.originalBorderStyle = String(sender.style.borderStyle != undefined ? sender.style.borderStyle : "");
            var newWidth = sender.style.width.substr(0, sender.style.width.length - 2) - 2;
            var newHeight = sender.style.height.substr(0, sender.style.height.length - 2) - 2;
            sender.style.width = newWidth + "px";
            sender.style.height = newHeight + "px";
            sender.style.borderColor = SymbolHoverStrokeColor;
            sender.style.borderWidth = "1px";
            sender.style.borderStyle = "solid";
        }

        //if (SymbolHoverTextColor != "") {
        if (sender.originalColor != undefined) sender.originalColor = String(sender.style.color != undefined ? sender.style.color : "");
        //}
    }
}

function Symbol_HtmlMouseOut(sender) {
    if (sender != null && !sender.isHighlight) {
        if (SymbolHoverFillColor != "") {
            sender.style.background = sender.originalColor;
        }

        if (SymbolHoverStrokeColor != "") {
            sender.style.borderColor = sender.originalBorderColor;
            sender.style.borderWidth = sender.originalBorderWidth;
            sender.style.borderStyle = sender.originalBorderStyle;
            sender.style.width = sender.originalSymbolWidth;
            sender.style.height = sender.originalSymbolHeight;
        }
        //if (SymbolHoverTextColor != "") {
        sender.style.color = sender.originalColor;
        //}
    }
}

function Symbol_HtmlMouseOverEx(sender) {
    if (sender != null && !sender.children != null) {
        for (var i = 0; i < sender.children.length; i++) {
            var childElement = sender.children[i];
            if (childElement.nodeName == "DIV") Symbol_MouseOver(childElement);
        }
    }
}

function Symbol_HtmlMouseOutEx(sender) {
    if (sender != null && !sender.children != null) {
        for (var i = 0; i < sender.children.length; i++) {
            var childElement = sender.children[i];
            if (childElement.nodeName == "DIV") Symbol_MouseOut(childElement);
        }
    }
}

function ShowAttributeTypeValue(sender) {
    // constansts
    // the minimal offset of the PopUp Div to the left/right border of the window
    var MinOffsetX = 25;
    //  var MinOffsetY = 25;
    // the margin of the PopUp Div to the object
    // var MarginBottom = 25;
    var MarginRight = 40;

    // try to remove last description
    PZ.JQ('#AttributeTypeValueDiv').remove();

    var isSVG = false;

    //What does this mean? Why does the current sender's type dependend on the previous element sibling?
    isSVG = (sender.previousElementSibling ? true : false);

    var posx = 0; posy = 0; var objectWidth = 0; var objectHeight = 0;
    if (isSVG) {
        try {
            var bb = sender.getBBox();
            posx = bb.x;
            posy = bb.y;
            objectWidth = bb.width;
            objectHeight = bb.height;
        }
        catch (e) {
        }
    }
    else {
        posx = parseFloat(sender.style.left);
        posy = parseFloat(sender.style.top);
        objectWidth = sender.clientWidth;
        objectHeight = sender.clientHeight;
    }
    posx = posx - PZ.JQ("#Viewport").scrollLeft();
    posy = posy - PZ.JQ("#Viewport").scrollTop()
    var expr1 = new RegExp('[_].+[_]');
    var expr2 = new RegExp('[^_]+');
    var objectId = expr2.exec(expr1.exec(sender.id));
    if (objectId != null && objectId != "") {
        var attributeTypeValue = PZ.JQ("#" + objectId).val();
        var attributeTypeDisplayName = PZ.JQ("#Content_ObjectsAttributeTypeDisplayName").val();
        if (attributeTypeValue != null && attributeTypeValue != "") {
            var popUpDiv = PZ.JQ("<div id=\"AttributeTypeValueDiv\" class=\"PopUpAttributeTypeValue\" style=\"display:none;\">").append(
				   "<div class=\"PopUpAttributeTypeValueHeader\">" + attributeTypeDisplayName + "</div>" +
                   "<div>" + attributeTypeValue + "</div>"
            );
            PZ.JQ('body').append(popUpDiv);
            var offsetX = posx + (objectWidth + MarginRight);
            var ViewportWidth = PZ.JQ("#Viewport").innerWidth();
            if (offsetX + popUpDiv.outerWidth() + MinOffsetX >= ViewportWidth &&/*left area > than right area? */ ViewportWidth - (posx + objectWidth) < posx) {
                var offsetRight = PZ.JQ("#Viewport").innerWidth() - (posx - MarginRight);
                popUpDiv.css({ right: offsetRight });
                if (offsetRight + popUpDiv.outerWidth() + 5 >= ViewportWidth) {
                    var difference = (offsetRight + popUpDiv.outerWidth() + 5) - ViewportWidth;
                    popUpDiv.css({ right: offsetRight - (difference + MinOffsetX) });
                }
            }
            else {
                var offsetLeft = offsetX;
                popUpDiv.css({ left: offsetLeft });
                if (offsetLeft + popUpDiv.outerWidth() + 5 >= ViewportWidth) {
                    var difference = (offsetLeft + popUpDiv.outerWidth() + 5) - ViewportWidth;
                    popUpDiv.css({ left: offsetLeft - (difference + MinOffsetX) });
                }
            }

            var offsetY = posy + PZ.JQ('#Viewport').offset().top + objectHeight / 2 - (popUpDiv.outerHeight() / 2);
            offsetY = Math.max(offsetY, 0);
            var difference = 0;

            offsetY = Math.min(offsetY, PZ.JQ('#Viewport').outerHeight() + objectHeight + -popUpDiv.outerHeight());

            var topValue = offsetY;
            popUpDiv.css({ top: topValue });
            popUpDiv.show();
        }
    }
}

function RemoveAttributeTypeValue(sender) {
    PZ.JQ('#AttributeTypeValueDiv').remove();
}

function Symbol_MouseOver(sender, event) {
    if (sender != null && !sender.isHighlight) {
        if (sender.nodeName != "DIV") {
            var isSVG = (sender.previousElementSibling ? true : false);

            var symbolGroup = (isSVG ? sender.previousElementSibling : sender.previousSibling);
            if (symbolGroup != null) {
                if (SymbolHoverFillColor != "") {
                    var fillChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("fill"));
                    if (fillChildren != null) {
                        for (var i = 0; i < fillChildren.length; i++) {
                            if (isSVG && fillChildren[i].nodeType == fillChildren[i].ELEMENT_NODE && Number(fillChildren[i].style.getPropertyValue("fill-opacity")) > 0 && fillChildren[i].getAttribute("puz:tag") != "shadow") {
                                if (fillChildren[i].originalFillColor == undefined) fillChildren[i].originalFillColor = String(fillChildren[i].style.getPropertyValue("fill") != undefined ? fillChildren[i].style.getPropertyValue("fill") : "");
                                fillChildren[i].style.setProperty("fill", SymbolHoverFillColor, "");
                            }
                            else if (!isSVG && Number(fillChildren[i].opacity) > 0 && fillChildren[i].parentNode.parentNode.tag != "shadow") {
                                if (fillChildren[i].originalColor == undefined) fillChildren[i].originalColor = String(fillChildren[i].color != undefined ? fillChildren[i].color : "");
                                if (fillChildren[i].originalColor2 == undefined) fillChildren[i].originalColor2 = String(fillChildren[i].color2 != undefined ? fillChildren[i].color2 : "");

                                fillChildren[i].color = SymbolHoverFillColor;
                                fillChildren[i].color2 = SymbolHoverFillColor;
                            }
                        }
                    }
                }

                if (SymbolHoverStrokeColor != "") {
                    var strokeChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("stroke"));
                    if (strokeChildren != null) {
                        for (var i = 0; i < strokeChildren.length; i++) {
                            if (isSVG && strokeChildren[i].nodeType == strokeChildren[i].ELEMENT_NODE && Number(strokeChildren[i].style.getPropertyValue("stroke-opacity")) > 0 && strokeChildren[i].getAttribute("puz:tag") != "shadow") {
                                if (strokeChildren[i].originalStrokeColor == undefined) strokeChildren[i].originalStrokeColor = String(strokeChildren[i].style.getPropertyValue("stroke") != undefined ? strokeChildren[i].style.getPropertyValue("stroke") : "");
                                strokeChildren[i].style.setProperty("stroke", SymbolHoverStrokeColor, "");
                            }
                            else if (!isSVG && Number(strokeChildren[i].opacity) > 0 && strokeChildren[i].parentNode.parentNode.tag != "shadow") {
                                if (strokeChildren[i].originalColor == undefined) strokeChildren[i].originalColor = String(strokeChildren[i].color != undefined ? strokeChildren[i].color : "");
                                strokeChildren[i].color = SymbolHoverStrokeColor;
                            }
                        }
                    }
                }
                if (SymbolHoverTextColor != "") {
                    var textChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("textbox"));
                    if (textChildren != null) {
                        for (var i = 0; i < textChildren.length; i++) {
                            var tmpFillPropertyValue = "";
                            var tmpFontFamilyPropertyValue = "";
                            if (isSVG) {
                                if (textChildren[i].style && (textChildren[i].style.getPropertyValue("fill") != null) && (textChildren[i].style.getPropertyValue("font-family") != null)) {
                                    tmpFillPropertyValue = textChildren[i].style.getPropertyValue("fill");
                                    tmpFontFamilyPropertyValue = textChildren[i].style.getPropertyValue("font-family");
                                }
                            }
                            if ((isSVG && textChildren[i].nodeType == textChildren[i].ELEMENT_NODE) && (tmpFillPropertyValue.length > 0) && (tmpFontFamilyPropertyValue.length > 0)) {
                                if (textChildren[i].originalTextColor == undefined) textChildren[i].originalTextColor = String(textChildren[i].style.getPropertyValue("fill") != undefined ? textChildren[i].style.getPropertyValue("fill") : "");
                                textChildren[i].style.setProperty("fill", SymbolHighlightTextColor, "");
                            }
                            else if (!isSVG) {
                                if (textChildren[i].originalColor == undefined) textChildren[i].originalColor = String(textChildren[i].style.getAttribute("color") != undefined ? textChildren[i].style.getAttribute("color") : "");
                                textChildren[i].style.setAttribute("color", SymbolHoverTextColor);
                            }
                        }
                    }
                    /*if (textChildren != null) {
                    for (var i = 0; i < textChildren.length; i++) {
                    alert("svg");
                    if ((isSVG && textChildren[i].nodeType == textChildren[i].ELEMENT_NODE) && (Number(textChildren[i].style.getPropertyValue("fill").length) > 0) && (Number(textChildren[i].style.getPropertyValue("font-family").length) > 0)) {
                    if (textChildren[i].originalTextColor == undefined) textChildren[i].originalTextColor = String(textChildren[i].style.getPropertyValue("fill") != undefined ? textChildren[i].style.getPropertyValue("fill") : "");
                    textChildren[i].style.setProperty("fill", SymbolHighlightTextColor, "");
                    }
                    else if (!isSVG) {
                    if (textChildren[i].originalColor == undefined) textChildren[i].originalColor = String(textChildren[i].style.getAttribute("color") != undefined ? textChildren[i].style.getAttribute("color") : "");
                    textChildren[i].style.setAttribute("color", SymbolHighlightStrokeColor);
                    }
                    }
                    }*/
                }
            }
        }
        else {
            if (SymbolHoverFillColor != "") {
                if (sender.originalColor == undefined) {
                    sender.originalColor = String(sender.style.background != undefined ? sender.style.background : "");
                }
                sender.style.background = SymbolHoverFillColor;
            }

            if (SymbolHoverStrokeColor != "") {
                if (sender.originalSymbolWidth != undefined) sender.style.width = sender.originalSymbolWidth;
                if (sender.originalSymbolHeight != undefined) sender.style.height = sender.originalSymbolHeight;
                if (sender.originalBorderColor == undefined) sender.originalBorderColor = String(sender.style.borderColor != undefined ? sender.style.borderColor : "");
                if (sender.originalBorderWidth == undefined) sender.originalBorderWidth = String(sender.style.borderWidth != undefined ? sender.style.borderWidth : "");
                if (sender.originalSymbolWidth == undefined) sender.originalSymbolWidth = String(sender.style.width);
                if (sender.originalSymbolHeight == undefined) sender.originalSymbolHeight = String(sender.style.height);
                if (sender.originalBorderStyle == undefined) sender.originalBorderStyle = String(sender.style.borderStyle != undefined ? sender.style.borderStyle : "");
                var newWidth = sender.style.width.substr(0, sender.style.width.length - 2) - 2;
                var newHeight = sender.style.height.substr(0, sender.style.height.length - 2) - 2;
                sender.style.width = newWidth + "px";
                sender.style.height = newHeight + "px";
                sender.style.borderColor = SymbolHoverStrokeColor;
                sender.style.borderWidth = "1px";
                sender.style.borderStyle = "solid";
            }
            if (SymbolHoverTextColor != "") {
                if (sender.originalHoverTextColor != undefined) {
                    sender.originalHoverTextColor = String(sender.style.color != undefined ? sender.style.color : "");
                }
            }
        }
    }

    if (sender != null) ShowAttributeTypeValue(sender);
}

function Symbol_MouseOut(sender) {
    if (sender != null && !sender.isHighlight) {
        if (sender.nodeName != "DIV") {
            var isSVG = (sender.previousElementSibling ? true : false);

            var symbolGroup = (isSVG ? sender.previousElementSibling : sender.previousSibling);
            if (symbolGroup != null) {
                if (SymbolHoverFillColor != "" || SymbolHighlightFillColor != "") {
                    var fillChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("fill"));
                    if (fillChildren != null) {
                        for (var i = 0; i < fillChildren.length; i++) {
                            if (isSVG && fillChildren[i].nodeType == fillChildren[i].ELEMENT_NODE && Number(fillChildren[i].style.getPropertyValue("fill-opacity")) > 0 && fillChildren[i].originalFillColor != undefined) {
                                fillChildren[i].style.setProperty("fill", fillChildren[i].originalFillColor, "");
                            }
                            else if (!isSVG && Number(fillChildren[i].opacity) > 0 && fillChildren[i].originalColor != undefined) {
                                fillChildren[i].color = fillChildren[i].originalColor;
                                fillChildren[i].color2 = fillChildren[i].originalColor2;
                            }
                        }
                    }
                }

                if (SymbolHoverStrokeColor != "" || SymbolHighlightStrokeColor != "") {
                    var strokeChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("stroke"));
                    if (strokeChildren != null) {
                        for (var i = 0; i < strokeChildren.length; i++) {
                            if (isSVG && strokeChildren[i].nodeType == strokeChildren[i].ELEMENT_NODE && Number(strokeChildren[i].style.getPropertyValue("stroke-opacity")) > 0 && strokeChildren[i].originalStrokeColor != undefined) {
                                strokeChildren[i].style.setProperty("stroke", strokeChildren[i].originalStrokeColor, "");
                            }
                            else if (!isSVG && Number(strokeChildren[i].opacity) > 0 && strokeChildren[i].originalColor != undefined) {
                                strokeChildren[i].color = strokeChildren[i].originalColor;
                            }
                        }
                    }
                }
                //if (SymbolHoverTextColor != "") {
                var textChildren = (isSVG ? symbolGroup.childNodes : symbolGroup.getElementsByTagName("textbox"));
                if (textChildren != null) {
                    for (var i = 0; i < textChildren.length; i++) {
                        var tmpFillPropertyValue = "";
                        var tmpFontFamilyPropertyValue = "";
                        if (isSVG) {
                            if (textChildren[i].style && (textChildren[i].style.getPropertyValue("fill") != null) && (textChildren[i].style.getPropertyValue("font-family") != null)) {
                                tmpFillPropertyValue = textChildren[i].style.getPropertyValue("fill");
                                tmpFontFamilyPropertyValue = textChildren[i].style.getPropertyValue("font-family");
                                //alert(tmpFillPropertyValue + Number(tmpFillPropertyValue) + " " + tmpFontFamilyPropertyValue + Number(tmpFontFamilyPropertyValue));
                            }
                        }
                        if ((isSVG && textChildren[i].nodeType == textChildren[i].ELEMENT_NODE) && (tmpFillPropertyValue.length > 0) && (tmpFontFamilyPropertyValue.length > 0) && textChildren[i].originalTextColor != undefined) {
                            textChildren[i].style.setProperty("fill", textChildren[i].originalTextColor, "");
                        }
                        else if (!isSVG && textChildren[i].originalColor != undefined) {
                            textChildren[i].style.setAttribute("color", textChildren[i].originalColor);
                        }
                    }
                }
                //}
            }
        }
        else {
            if (sender.originalColor) {
                if (SymbolHoverFillColor != "") {
                    sender.style.background = sender.originalColor;
                }
                if (SymbolHoverStrokeColor != "") {
                    sender.style.borderColor = sender.originalBorderColor;
                    sender.style.borderWidth = sender.originalBorderWidth;
                    sender.style.borderStyle = sender.originalBorderStyle;
                    sender.style.width = sender.originalSymbolWidth;
                    sender.style.height = sender.originalSymbolHeight;
                }
                //if (SymbolHoverTextColor != "") {
                sender.style.color = sender.originalTextColor;
                //}
            }
        }
    }

    if (sender != null) RemoveAttributeTypeValue(sender);
}

//========================================================================
// Tailoring
//========================================================================
function Symbol_ActivateTailoring(tailoringId) {
    var groupElements = document.getElementsByTagName("group");
    var cntGrpElm = 0;

    if (groupElements) {
        for (var cntGrp = 0; cntGrp < groupElements.length; cntGrp++) {
            if (groupElements[cntGrp].id.substring(0, 7) == "ISGGRP_") {
                var tailAttr = groupElements[cntGrp].getAttribute("tailoring");

                if (tailAttr) {
                    if (tailAttr.indexOf(tailoringId) >= 0) {
                        // Pointer + Onclick von Overlay Element entfernen
                        var overlayElem = document.getElementById("OLGRP_" + groupElements[cntGrp].id.substring(7));
                        if (overlayElem) {
                            overlayElem.style.cursor = "default";
                            overlayElem.onclick = "";
                            overlayElem.onmouseover = "";
                            overlayElem.onmouseout = "";
                        }

                        // Farbe vom Objekt ändern
                        var children = groupElements[cntGrp].childNodes;
                        for (var c = 0; c < children.length; c++) {
                            var child = children.item(0);
                            if (child) {
                                // Fill Color
                                if (SymbolInactiveFillColor != "") {
                                    var fillElems = child.getElementsByTagName("fill");
                                    if (fillElems) {
                                        for (var cntFillElem = 0; cntFillElem < fillElems.length; cntFillElem++) {
                                            if (fillElems[cntFillElem].opacity != "0") {
                                                fillElems[cntFillElem].color = SymbolInactiveFillColor;
                                            }
                                        }
                                    }
                                }

                                // Border Color
                                if (SymbolInactiveStrokeColor != "") {
                                    var strokeElems = child.getElementsByTagName("stroke");
                                    if (strokeElems) {
                                        for (var cntStrokeElem = 0; cntStrokeElem < strokeElems.length; cntStrokeElem++) {
                                            if (strokeElems[cntStrokeElem].opacity != "0") {
                                                strokeElems[cntStrokeElem].color = SymbolInactiveStrokeColor;
                                            }
                                        }
                                    }
                                }

                                // Text Color
                                if (SymbolInactiveStrokeColor != "") {
                                    var textRectElems = child.getElementsByTagName("rect");
                                    if (textRectElems) {
                                        for (var cntTextRectElem = 0; cntTextRectElem < textRectElems.length; cntTextRectElem++) {
                                            var textBoxElems = textRectElems[cntTextRectElem].getElementsByTagName("textbox")
                                            if (textBoxElems) {
                                                for (var cntTextBoxElem = 0; cntTextBoxElem < textBoxElems.length; cntTextBoxElem++) {
                                                    textBoxElems[cntTextBoxElem].style.color = SymbolInactiveTextColor;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return;
}

//========================================================================
// External Highlighting
//========================================================================
function RefreshHighlight(sender, itemGuid, runWasSuccessful) {
    // expected id-format:
    //     G{render-number}_{guid}_{item-shape-number}
    //
    // render-number is fixed within a diagram view, and here it should be 1
    // guid is the item guid
    // item-shape-number is the increasing shape index of item
    //

    if (!runWasSuccessful) {
        setTimeout(function () {
            var svgElem = null;
            //  var svgDoc = null;
            var success = false;

            if (!document.all || svgChosen) {
                //var svgViewport = document.getElementById("ctl00_ContentPlaceHolder1_SvgViewport");
                var svgViewport = document.getElementById("Viewport");
                if (svgViewport == null)
                    return;

                var svgElem = svgViewport.childNodes[0];
            }

            var baseId = "G1_" + itemGuid + "_";

            var failedLookupCount = 0;
            for (var itemShapeCount = 0; itemShapeCount < 1000; itemShapeCount++) {
                if (failedLookupCount > 3) break;

                var lookupId = baseId + itemShapeCount;
                var child = null;
                if (!document.all || svgChosen) {
                    //var svgElem = document.getElementById("ctl00_ContentPlaceHolder1_SvgViewport").childNodes[0];
                    var svgElem = document.getElementById("Viewport").childNodes[0];
                    if (svgElem != null) {
                        try {
                            var svgDoc = svgElem.getSVGDocument();

                            if (svgDoc != null) {
                                child = svgDoc.getElementById(lookupId);
                            }
                        }
                        catch (e) {
                            //svgElem is not null, but still invalid.
                        }
                    }
                }
                else {
                    child = document.getElementById(lookupId);
                }

                if (child != null) {
                    success = true;
                }

                if (child == null) {
                    failedLookupCount++;
                    continue;
                }
                else {
                    success = true;
                    Symbol_Highlight(child); // let this method do the rest...
                    return;
                }
            }

            if (!success) {
                RefreshHighlight(sender, itemGuid, success);
            }
        }, 100);
    }
}

function RefreshHtmlGroups() {
    var vp = document.getElementById("ctl00_ContentPlaceHolder1_Viewport");

    if (vp != null) {
        elements = vp.getElementsByTagName("DIV");
        if (elements != null) {
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];

                if (element.isHighlight) {
                    do {
                        element = element.parentNode;
                    } while (element.groupRang == undefined && element != null)

                    if (element != null) {
                        if (element.style.display == "none" && element.groupRang > 1) {
                            var isSVG = (element.previousElementSibling ? true : false);

                            var middleElement = null;

                            var origElement = element;
                            while (element != null && element.groupRang > 1) {
                                element = (isSVG ? element.previousElementSibling : element.previousSibling);
                                if (element.groupRang == 2 && middleElement == null) middleElement = element;
                            }

                            if (element != null && element.children != null) {
                                __HtmlGroupToggleClick(element.children[0]);
                                if (origElement.groupRang == 3 && middleElement != null && middleElement.children != null) {
                                    __HtmlGroupToggleClick(middleElement.children[0]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}