//
// New commented cookie functions
//

function WriteCookie(name, value, days) {
    var expires = null;
    if (days) {
        expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    }
    __SetCookie(name, value, expires);
}

function ReadCookie(name) {
    return __GetCookie(name);
}

function DeleteCookie(name) {
    WriteCookie(name, "", -1);
}

//
// Implementations
//

function __SetCookie(name, value, expires, path, domain, secure) {
    // WRITING: this works due to document.cookie not really being a string
    document.cookie = name + "=" + escape(value)
        + ((expires) ? "; expires=" + expires.toGMTString() : "")
        + ((path) ? "; path=" + path : "")
        + ((domain) ? "; domain=" + domain : "")
        + ((secure) ? "; secure" : "");
}

function __GetCookie(name) {
    // READING: now document.cookie can be treated as a string of all cookies
    try {
        var results = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");

        if (results)
            return unescape(results[2]);
        else
            return null;
    }
    catch (e) {
        return null;
    }
}

// Favorite functions (using cookies)
//

var __favorites = null;

function GetFavoriteData() {
    return __favorites;
}

function AddFavorite(processGuid) {
    var favorites = GetFavorites();
    for (var index in favorites) {
        if (favorites[index] == processGuid) return;
    }

    favorites.push(processGuid);
    while (favorites.length > 10) {
        favorites.shift();
    }
    SetFavorites(favorites);
}

// <summary> Create a favorite etry tp browser's internal favorite list. </summary>
function CreateBrowserFavorite() {
    if (parent && typeof parent.CreateBrowserFavorite == "function" && parent._nm && typeof parent._nm.GetActiveLCID == "function") {
        var regex = /.+_([0-9a-fA-F-]+_[0-9]+)\..+/;
        regex.exec(location.href);
        // Let customer's default page do customer specifics.
        parent.CreateBrowserFavorite(RegExp.$1, document.getElementById("Content_DiagramName").value);
    }
    else {
        AddFavorite(document.getElementById("Content_Guid").value);
    }
}

function SetFavorites(favorites) {
    var value = "";
    try {
        value = favorites.join(",");
    }
    catch (e) {
    }
    WriteCookie("MY_FAVORITES", value, 365);
}

function GetFavorites() {
    favorites = new Array();
    try {
        favorites = ReadCookie("MY_FAVORITES").split(",");
    }
    catch (e) {
    }
    return favorites;
}

//
// Content of Default.js
//

//========================================================================
// Please ADD comments
//========================================================================

noScrollingNow = false;

function Body_OnLoad(sender) {
    Inithistory();

    //    if (!document.all) {
    //        document.getElementById('Main').scrolling = "yes";
    //        //document.getElementById('DetailContent').scrolling = "yes";
    //    }

    if (_nm) {
        // LCID aus Seite holen und in NavigationManager eintragen.
        var strLcid = document.getElementById("LCID");
        if (strLcid) {
            _nm.SetActiveLCID(strLcid.value);
        }
    }

    if (__favorites == null && _nm) {
        var favoriteFile = "Favorite_" + _nm.GetActiveLCID() + ".json.txt";
        PZ.JQ.getJSON(favoriteFile)
						.success(function (data, textStatus, jqXHR) {
						    __favorites = data
						});
    }
    //if (typeof UpdateFrames == "function") {
    //    UpdateFrames();
    //}

    if (typeof loadRoleData == "function") {
        loadRoleData();
    }
}

function ShowDetailContent(sender, showDC) {
    if (!document.all) {
        if (!noScrollingNow) {
            document.getElementById('Main').scrolling = "yes";
            // document.getElementById('DetailContent').scrolling = "yes";
        }
        else {
            document.getElementById('Main').scrolling = "no";
            noScrollingNow = false;
        }
    }
    if (sender) {
        var mctd = document.getElementById("RightSplitter");
        var dctd = document.getElementById("DetailContentPanel");

        if (mctd && dctd) {
            if (showDC == "true") {
                mctd.style.display = "";
                dctd.style.display = "";
            }
            else {
                mctd.style.display = "none";
                dctd.style.display = "none";
            }
        }
    }
}

function ShowOnlyMainContent() {
    var rstd = document.getElementById("RightSplitter");
    var dctd = document.getElementById("DetailContentPanel");

    if (rstd && dctd) {
        rstd.style.display = "none";
        dctd.style.display = "none";
    }

    var lstd = document.getElementById("LeftSplitter");
    var nctd = document.getElementById("NavContentPanel");
    var tr1 = document.getElementById("Tr1");
    var tr2 = document.getElementById("Tr2");
    var td2 = document.getElementById("Td2");

    if (tr1 && lstd && nctd) {
        tr1.style.display = "none";
        lstd.style.display = "none";
        nctd.style.display = "none";
    }
    // in SharePoint not exist
    if (tr2 && td2) {
        tr2.style.display = "none";
        td2.style.display = "none";
    }
}

function ShowAllContents() {
    var tr1 = parent.document.getElementById("Tr1");
    var tr2 = parent.document.getElementById("Tr2");
    var td2 = parent.document.getElementById("Td2");
    var lstd = parent.document.getElementById("LeftSplitter");
    var nctd = parent.document.getElementById("NavContentPanel");

    if (tr1 && lstd && nctd) {
        tr1.style.display = "";
        lstd.style.display = "";
        nctd.style.display = "";
    }
    // in SharePoint not exist
    if (tr2 && td2) {
        tr2.style.display = "";
        td2.style.display = "";
    }
}

/*TODO: CHECK IF OBSOLETE*/
/*USED IN SHAREPOINT-TEMPLATE; CHECK WHY*/
function UpdateFrames() {
    if (location.search != null && location.search != "") {
        var params = location.search.substr(1).split("&");
        var foundTailoring = false;
        var foundDisplayText = false;
        for (var i = 0; i < params.length; i++) {
            if (params[i].indexOf("search=") == 0) {
                var searchParameter = decodeURIComponent(params[i].split("=")[1]);
                var content = document.getElementById("ToolbarContent");
                if (searchParameter != "" && content != null) {
                    var tbs = content.contentWindow.document.getElementById("TextBoxSearch");
                    if (tbs != null) {
                        tbs.value = searchParameter;
                        if (typeof content.contentWindow.DoSearch == "function") {
                            content.contentWindow.DoSearch('AdvancedSearch', null, searchParameter);
                            tbs.onblur();
                        }
                    }
                }
            }
            if (params[i].indexOf("nav=") == 0) {
                document.getElementById("NavContent").src = decodeURIComponent(params[i].split("=")[1]);
            }
            else if (params[i].indexOf("main=") == 0) {
                var contentLink = decodeURIComponent(params[i].split("=")[1]);
                /* if (!document.all && contentLink.match("^M_") == "M_" && contentLink.indexOf("_FF_") == -1) {
                var strHref = contentLink;
                var indexOfPoint = strHref.indexOf('.');
                var indexTemp = strHref.indexOf('.', (indexOfPoint + 1));
                while (indexTemp != -1) {
                indexOfPoint = indexTemp;
                indexTemp = strHref.indexOf('.', (indexOfPoint + 1));
                }
                var strHrefFirst = strHref.substring(0, indexOfPoint - 4);
                var strHrefLast = strHref.substring(indexOfPoint - 4, strHref.length);
                contentLink = strHrefFirst + 'FF_' + strHrefLast;
                }*/
                document.getElementById("Main").src = contentLink;
            }
            else if (params[i].indexOf("detail=") == 0) {
                document.getElementById("Details").src = decodeURIComponent(params[i].split("=")[1]);
            }
            else if (params[i].indexOf("tailoring=") == 0) {
                CookieWertSetzen("tailoring", decodeURIComponent(params[i].split("=")[1]), 31536000000);
            }
            else if (params[i].indexOf("displaytext=") == 0) {
                CookieWertSetzen("displaytext", decodeURIComponent(params[i].split("=")[1]), 31536000000);
            }
        }
    }
}

var currentSplitter = null;
var overlay = null;
var shadow = null;
var navContentWidth = null;
var detailContentWidth = null;

function startSplitting(splitter) {
    if (currentSplitter != null) {
        stopSplitting();
    }
    currentSplitter = splitter;
    overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "0px";
    overlay.style.left = "0px";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "10000";
    overlay.style.cursor = "e-resize";
    overlay.onmouseup = stopSplitting;

    document.body.appendChild(overlay);

    if (!isNetscape()) {
        overlay.setCapture();
    }

    var splitter = document.getElementById("SplitterShadow");
    splitter.style.top = PZ.JQ(currentSplitter).position().top + "px";
    splitter.style.display = "block";
    updateSplitting();
}

function stopSplitting() {
    var navigationCollapsed = "";
    var detailsCollapsed = "";

    if (document.getElementById("NAVIGATIONCOLLAPSED")) {
        navigationCollapsed = document.getElementById("NAVIGATIONCOLLAPSED").value;
    }

    if (document.getElementById("DETAILSCOLLAPSED")) {
        detailsCollapsed = document.getElementById("DETAILSCOLLAPSED").value;
    }

    if ((navContentWidth != null) && navigationCollapsed == "false") {
        document.getElementById("NavContentPanel").style.width = navContentWidth + "px";
    }
    if ((detailContentWidth != null) && detailsCollapsed == "false") {
        document.getElementById("DetailContentPanel").style.width = detailContentWidth + "px";
    }

    if (overlay != null) {
        if (!isNetscape()) {
            overlay.releaseCapture();
        }
        document.body.removeChild(overlay);
    }
    overlay = null;
    currentSplitter = null;

    var splitter = document.getElementById("SplitterShadow");
    splitter.style.display = "none";
}

function updateSplitting(evt) {
    try {
        evt = (evt) ? evt : ((window.event) ? window.event : "");
        var posX = (isNetscape() ? evt.pageX : event.clientX);
        posX = posX - PZ.JQ("#LayoutGrid").offset().left;

        var leftSplitter = document.getElementById("LeftSplitter");
        var rightSplitter = document.getElementById("RightSplitter");
        var splitter = document.getElementById("SplitterShadow");

        if (splitter != null) {
            if (currentSplitter == leftSplitter) {
                var navContent = document.getElementById("NavContentPanel");
                if (navContent) {
                    var updatedWidth = posX - leftSplitter.offsetWidth + (leftSplitter.offsetWidth / 2);
                    if (updatedWidth < 1) {
                        updatedWidth = 1;
                    }

                    navContentWidth = updatedWidth;
                }
            }
            else if (currentSplitter == rightSplitter) {
                var layoutGrid = document.getElementById("LayoutGrid");
                var detailContent = document.getElementById("DetailContentPanel");

                if (layoutGrid && detailContent) {
                    var updatedWidth = layoutGrid.offsetWidth - posX - rightSplitter.offsetWidth + (rightSplitter.offsetWidth / 2);
                    if (updatedWidth < 1) {
                        updatedWidth = 1;
                    }

                    detailContentWidth = updatedWidth;
                }
            }

            var splitterPosition = posX - splitter.offsetWidth + (splitter.offsetWidth / 2);
            splitter.style.left = splitterPosition + "px";
        }
    }
    catch (e) { }
}

function isNetscape() {
    return navigator.appName == "Netscape";
}

document.onmousemove = updateSplitting;

var savedDetailContentWidth = null;

function ToggleDetailContentWidth() {
    startSplitting();
    if (savedDetailContentWidth == null) {
        savedDetailContentWidth = detailContentWidth;
        detailContentWidth = 1;
    }
    else {
        detailContentWidth = savedDetailContentWidth;
        savedDetailContentWidth = null;
    }
    stopSplitting();
}

//Set the zoom value adjusted in the slider dialog of the web.
function SetZoomValue(sender, closePopup) {
    var browserIsMSIE11 = BrowserIsMSIE("11") || BrowserIsMSIE("12");
    var browserIsChrome = BrowserIsChrome();
    content = document.getElementById("Main");
    if (content && content != null) {
        if (typeof content.contentWindow.SetViewScale == "function") {
            sliderTextBox = document.getElementById("zoomSliderValue");
            if (sliderTextBox) {
                var lastScale = _nm.ItemList["ZoomValue"];
                // undefined!
                if (lastScale == null || lastScale == "") {
                    lastScale = 100;
                }
                if (_nm && _nm != null) {
                    _nm.SaveItem("ZoomValue", sliderTextBox.value);
                }
                var scale = sliderTextBox.value / 100;
                //This if-clause determined between IE and other browsers, since their "document.all" was null.
                //Since IE 11 this checking for "document.all" is insufficient.}
                if (!document.all && !browserIsMSIE11 && !browserIsChrome) {
                    //A Div-Container named Viewport is filled with an <OBJECT>-object.
                    var svgElementContainer = content.contentWindow.document.getElementById("Viewport").childNodes[0];
                    var svgDocument = content.contentWindow.document.getElementById("Viewport").childNodes[0].getSVGDocument();

                    // Vertical Swimlane Header Handling
                    var verticalHeader = content.contentWindow.document.getElementById("VerticalHeader");
                    var svgElementContainer2 = verticalHeader != null ? verticalHeader.childNodes[0] : null;
                    var svgDocument2 = verticalHeader != null ? verticalHeader.childNodes[0].getSVGDocument() : null;

                    // Horizontal Swimlane Header Handling
                    var horizontalHeader = content.contentWindow.document.getElementById("HorizontalHeader");
                    var svgElementContainer3 = horizontalHeader != null ? horizontalHeader.childNodes[0] : null;
                    var svgDocument3 = horizontalHeader != null ? horizontalHeader.childNodes[0].getSVGDocument() : null;

                    var h = svgElementContainer.height / (svgDocument.documentElement.currentScale) * scale;
                    var h2 = h;
                    var h3 = h;
                    var division = svgElementContainer.height / (svgDocument.documentElement.currentScale);
                    var division2 = division;
                    var division3 = division;
                    var w = svgElementContainer.width / (svgDocument.documentElement.currentScale) * scale;
                    var w2 = w;
                    var w3 = w;

                    if (verticalHeader != null && svgElementContainer2 != null && svgDocument2 != null) {
                        h2 = svgElementContainer2.height / (svgDocument2.documentElement.currentScale) * scale;
                        division2 = svgElementContainer2.height / (svgDocument2.documentElement.currentScale);
                        w2 = svgElementContainer2.width / (svgDocument2.documentElement.currentScale) * scale;
                    }

                    if (horizontalHeader != null && svgElementContainer3 != null && svgDocument3 != null) {
                        h3 = svgElementContainer3.height / (svgDocument3.documentElement.currentScale) * scale;
                        division3 = svgElementContainer3.height / (svgDocument3.documentElement.currentScale);
                        w3 = svgElementContainer3.width / (svgDocument3.documentElement.currentScale) * scale;
                    }

                    var $verticalHeader = PZ.JQ(content).contents().find("#VerticalHeader");
                    var newVerticalHeight = svgDocument2 != null ? $verticalHeader.height() / (svgDocument2.documentElement.currentScale) * scale : 1;

                    var $horizontalHeader = PZ.JQ(content).contents().find("#HorizontalHeader");

                    if ($horizontalHeader.length > 0 && !$horizontalHeader.hasClass("ZoomSet")) {
                        var groups = PZ.JQ(svgDocument).find("g");
                        var widthSet = false;
                        PZ.JQ.each(groups, function (i) {
                            var $rect = PZ.JQ(PZ.JQ(groups[i]).find("rect"));
                            if ($rect.length > 0 && $rect.attr("id") == undefined && $rect.attr("x") == "0.5" && !widthSet) {
                                $horizontalHeader.width(parseInt($rect.attr("width")) * scale + 32);
                                $horizontalHeader.addClass("ZoomSet");
                                widthSet = true;
                            }
                        });
                    }

                    var newHorizontalWidth = svgDocument != null ? $horizontalHeader.width() / (svgDocument.documentElement.currentScale) * scale : 1;

                    svgDocument.documentElement.currentScale = scale;
                    svgDocument.documentElement.setAttribute("height", (100 / scale) + "%"); svgDocument.documentElement.setAttribute("width", (100 / scale) + "%");

                    if (svgDocument2 != null) {
                        svgDocument2.documentElement.currentScale = scale;
                        svgDocument2.documentElement.setAttribute("height", (100 / scale) + "%"); svgDocument2.documentElement.setAttribute("width", (100 / scale) + "%");
                    }

                    if (svgDocument3 != null) {
                        svgDocument3.documentElement.currentScale = scale;
                        svgDocument3.documentElement.setAttribute("height", (100 / scale) + "%"); svgDocument3.documentElement.setAttribute("width", (100 / scale) + "%");
                    }

                    svgElementContainer.setAttribute("height", h);
                    svgElementContainer.setAttribute("width", w);

                    if (svgElementContainer2 != null) {
                        svgElementContainer2.setAttribute("height", h2);
                        svgElementContainer2.setAttribute("width", w2);
                    }

                    if (svgElementContainer3 != null) {
                        svgElementContainer3.setAttribute("height", h3);
                        svgElementContainer3.setAttribute("width", w3);
                    }

                    $verticalHeader.height(newVerticalHeight);
                    $horizontalHeader.width(newHorizontalWidth);
                }
                else if (browserIsChrome) {
                    var $viewportObject = PZ.JQ(content).contents().find("#Viewport object");
                    var svgElementContainer = $viewportObject[0];
                    var svgDocument = svgElementContainer.getSVGDocument();

                    // Vertical Swimlane Header Handling
                    var $verticalHeaderObject = PZ.JQ(content).contents().find("#VerticalHeader object");
                    var svgElementContainer2 = $verticalHeaderObject.length > 0 ? $verticalHeaderObject[0] : null;
                    var svgDocument2 = svgElementContainer2 != null ? svgElementContainer2.getSVGDocument() : null;

                    // Horizontal Swimlane Header Handling
                    var $horizontalHeaderObject = PZ.JQ(content).contents().find("#HorizontalHeader object");
                    var svgElementContainer3 = $horizontalHeaderObject.length > 0 ? $horizontalHeaderObject[0] : null;
                    var svgDocument3 = svgElementContainer3 != null ? svgElementContainer3.getSVGDocument() : null;

                    // Chrome does not support currentScale
                    if (true) {
                        h = parseFloat(svgElementContainer.height) * Math.max(scale, 1);
                        w = parseFloat(svgElementContainer.width) * Math.max(scale, 1);
                        h2 = h;
                        h3 = h;
                        w2 = w;
                        w3 = w;

                        if (svgElementContainer2 != null) {
                            h2 = parseFloat(svgElementContainer2.height) * Math.max(scale, 1);
                            w2 = parseFloat(svgElementContainer2.width) * Math.max(scale, 1);
                        }
                        if (svgElementContainer3 != null) {
                            h3 = parseFloat(svgElementContainer3.height) * Math.max(scale, 1);
                            w3 = parseFloat(svgElementContainer3.width) * Math.max(scale, 1);
                        }

                        newScale = parseFloat(PZ.JQ(svgDocument.documentElement).attr('currentScale'));
                    } else {
                        var s = parseFloat(PZ.JQ(svgDocument.documentElement).attr('currentScale'));
                        h = PZ.JQ(svgElementContainer).height() / (isNaN(s) ? 1 : s) * Math.max(scale, 1);
                        w = PZ.JQ(svgElementContainer).width() / (isNaN(s) ? 1 : s) * Math.max(scale, 1);
                    }

                    PZ.JQ(svgDocument.documentElement).css('transform', "scale(" + scale + ")");
                    PZ.JQ(svgDocument.documentElement).attr("viewBox", "0 0 " + w + " " + h);
                    PZ.JQ(svgDocument.documentElement).attr('currentScale', Math.max(scale, 1));
                    PZ.JQ(svgElementContainer).height(h);
                    PZ.JQ(svgElementContainer).width(w);

                    if (svgElementContainer2 != null && svgDocument2 != null) {
                        PZ.JQ(svgDocument2.documentElement).css('transform', "scale(" + scale + ")");
                        PZ.JQ(svgDocument2.documentElement).attr("viewBox", "0 0 " + w2 + " " + h2);
                        PZ.JQ(svgDocument2.documentElement).attr('currentScale', Math.max(scale, 1));
                        PZ.JQ(svgElementContainer2).height(h2);
                        PZ.JQ(svgElementContainer2).width(w2);
                    }

                    if (svgElementContainer3 != null && svgDocument3 != null) {
                        PZ.JQ(svgDocument3.documentElement).css('transform', "scale(" + scale + ")");
                        PZ.JQ(svgDocument3.documentElement).attr("viewBox", "0 0 " + w3 + " " + h3);
                        PZ.JQ(svgDocument3.documentElement).attr('currentScale', Math.max(scale, 1));
                        PZ.JQ(svgElementContainer3).height(h3);
                        PZ.JQ(svgElementContainer3).width(w3);
                    }

                    var $verticalHeader = PZ.JQ(content).contents().find("#VerticalHeader");
                    var newVerticalHeight = $verticalHeader.height() / newScale * scale;

                    $verticalHeader.height(newVerticalHeight);

                    var $horizontalHeader = PZ.JQ(content).contents().find("#HorizontalHeader");

                    if ($horizontalHeader.length > 0 && !$horizontalHeader.hasClass("ZoomSet")) {
                        var groups = PZ.JQ(svgDocument).find("g");
                        var widthSet = false;
                        PZ.JQ.each(groups, function (i) {
                            var $rect = PZ.JQ(PZ.JQ(groups[i]).find("rect"));
                            if ($rect.length > 0 && $rect.attr("id") == undefined && $rect.attr("x") == "0.5" && !widthSet) {
                                $horizontalHeader.width(parseInt($rect.attr("width")) * scale + 32);
                                $horizontalHeader.addClass("ZoomSet");
                                widthSet = true;
                            }
                        });
                    }

                    var newHorizontalWidth = $horizontalHeader.width() / newScale * scale;

                    $horizontalHeader.width(newHorizontalWidth);
                }
                else {
                    if (content.contentWindow.SupportsSvg()) {
                        //A Div-Container named Viewport is filled with an <OBJECT>-object.
                        var svgElementContainer = content.contentWindow.document.getElementById("Viewport").childNodes[0];
                        var svgDocument = content.contentWindow.document.getElementById("Viewport").childNodes[0].getSVGDocument();
                        var h = svgElementContainer.height / (svgDocument.documentElement.currentScale) * scale;
                        var h2 = h;
                        var h3 = h;
                        var division = svgElementContainer.height / (svgDocument.documentElement.currentScale);
                        var division2 = division;
                        var division3 = division;
                        var w = svgElementContainer.width / (svgDocument.documentElement.currentScale) * scale;
                        var w2 = w;
                        var w3 = w;

                        var verticalHeader = content.contentWindow.document.getElementById("VerticalHeader");
                        var svgElementContainer2 = verticalHeader != null ? verticalHeader.childNodes[0] : null;
                        var svgDocument2 = verticalHeader != null ? verticalHeader.childNodes[0].getSVGDocument() : null;

                        var horizontalHeader = content.contentWindow.document.getElementById("HorizontalHeader");
                        var svgElementContainer3 = horizontalHeader != null ? horizontalHeader.childNodes[0] : null;
                        var svgDocument3 = horizontalHeader != null ? horizontalHeader.childNodes[0].getSVGDocument() : null;

                        //VERIFY
                        if (false) {
                            h2 = svgElementContainer.height / (svgDocument.documentElement.currentScale) * scale;
                            division2 = svgElementContainer.height / (svgDocument.documentElement.currentScale);
                            w2 = svgElementContainer.width / (svgDocument.documentElement.currentScale) * scale;
                        }

                        if (false) {
                            h3 = svgElementContainer3.height / (svgDocument3.documentElement.currentScale) * scale;
                            division3 = svgElementContainer3.height / (svgDocument3.documentElement.currentScale);
                            w3 = svgElementContainer3.width / (svgDocument3.documentElement.currentScale) * scale;
                        }

                        var $verticalHeader = PZ.JQ(content).contents().find("#VerticalHeader");
                        var newVerticalHeight = $verticalHeader.height() / (svgDocument.documentElement.currentScale) * scale;

                        var $horizontalHeader = PZ.JQ(content).contents().find("#HorizontalHeader");

                        if ($horizontalHeader.length > 0 && !$horizontalHeader.hasClass("ZoomSet")) {
                            var groups = PZ.JQ(svgDocument).find("g");
                            var widthSet = false;
                            PZ.JQ.each(groups, function (i) {
                                var $rect = PZ.JQ(PZ.JQ(groups[i]).find("rect"));
                                if ($rect.length > 0 && $rect.attr("id") == undefined && $rect.attr("x") == "0.5" && !widthSet) {
                                    $horizontalHeader.width(parseInt($rect.attr("width")) * scale + 32);
                                    $horizontalHeader.addClass("ZoomSet");
                                    widthSet = true;
                                }
                            });
                        }

                        var newHorizontalWidth = $horizontalHeader.width() / (svgDocument.documentElement.currentScale) * scale;

                        //svgDocument.documentElement.currentScale = scale;

                        //svgElementContainer - The <object>-Element in the diagram page.
                        //svgDocument - The document containing the svgDocument
                        //svgDocument.documentElement - The code within the svg file, beginning with <svg ....>

                        svgDocument.documentElement.setAttribute('currentScale', scale);
                        if (svgDocument2 != null) {
                            svgDocument2.documentElement.setAttribute('currentScale', scale);
                        }

                        if (svgDocument3 != null) {
                            svgDocument3.documentElement.setAttribute('currentScale', scale);
                        }

                        if (browserIsMSIE11) {
                            svgDocument.documentElement.setAttribute("viewBox", "0 0 " + w + " " + h);
                            if (svgDocument2 != null) {
                                svgDocument2.documentElement.setAttribute("viewBox", "0 0 " + w2 + " " + h2);
                            }
                            if (svgDocument3 != null) {
                                svgDocument3.documentElement.setAttribute("viewBox", "0 0 " + w3 + " " + h3);
                            }
                        }

                        svgElementContainer.setAttribute("height", h);
                        svgElementContainer.setAttribute("width", w);

                        if (svgElementContainer2 != null) {
                            svgElementContainer2.setAttribute("height", h2);
                            svgElementContainer2.setAttribute("width", w2);
                        }
                        if (svgElementContainer3 != null) {
                            svgElementContainer3.setAttribute("height", h3);
                            svgElementContainer3.setAttribute("width", w3);
                        }

                        $verticalHeader.height(newVerticalHeight);
                        $horizontalHeader.width(newHorizontalWidth);
                    }
                    else {
                        content.contentWindow.SetViewScale(sliderTextBox.value / 100);
                        try {
                            PZ.JQ('#Viewport').css('height', (PZ.JQ(window).height() - (PZ.JQ('.Toolbar').outerHeight() + PZ.JQ('.EmptyBar').outerHeight() + PZ.JQ('#Main').contents().find('div[class=Breadcrumb]').outerHeight())) + 'px');
                        }
                        catch (ex) { }
                    }
                }
            }
        }
    }

    if (closePopup) {
        sender.parentNode.style.display = 'none';
    }
}

function CopyToClipboard(s) {
    if (window.clipboardData && clipboardData.setData) {
        clipboardData.setData("Text", s);
    }
    else {
        netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);

        if (!clip) return;

        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans) return;

        trans.addDataFlavor('text/unicode');

        var str = new Object();
        var len = new Object();

        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

        var copytext = s;

        str.data = copytext;

        trans.setTransferData("text/unicode", str, copytext.length * 2);

        var clipid = Components.interfaces.nsIClipboard;

        if (!clip) return false;

        clip.setData(trans, null, clipid.kGlobalClipboard);
    }
}

var _bs = new ModStack();
var _fs = new ModStack();
var _nm = new NavigationManager();

function Inithistory() {
    _nm.GlobalStopId = _nm.GlobalStopId + 1;
    var lcid = _nm.GetActiveLCID();
    _bs.SetStopFlag();
    _fs.SetStopFlag();

    var TmpLink = new Link("NavContent", "NavContentProcess_" + lcid + ".html");
    TmpLink.StopId = _nm.GlobalStopId;
    _bs.ModPush(TmpLink);

    TmpLink = new Link("Main", "MainContentStart_" + lcid + ".html");
    TmpLink.StopId = _nm.GlobalStopId;
    _bs.ModPush(TmpLink);

    TmpLink = new Link("Details", "DetailContentStart_" + lcid + ".html");
    TmpLink.StopId = _nm.GlobalStopId;
    _bs.ModPush(TmpLink);
}

function CheckSecurity() {
    var lcid = document.getElementById("LCID").value;
    var systemExpireDateUS = document.getElementById("EXPIRATIONDATE").value;
    if (systemExpireDateUS != "NOEXPIREDATE") {
        var currentDate = new Date();

        if (Date.parse(systemExpireDateUS) < currentDate.getTime()) {
            // Date wrong
            this.location.href = "Failure_" + lcid + ".html?msg='Processweb is expired'";
            return;
        }
    }

    var systemPassowrd = document.getElementById("PASSWORD").value;
    if (systemPassowrd != "NOPASSWORD") {
        var passwordPromptText = document.getElementById("PASSWORDTEXT").value;
        var userPW = prompt(passwordPromptText, "");
        if (systemPassowrd != userPW) {
            // Password wrong
            this.location.href = "Failure_" + lcid + ".html?msg='Password is wrong'";
        }
    }
}

//
// Content of MainContent.js
//

// JScript-Datei

function Breadcrumb_OnClick(sender, strNavUrl, strNavUrlDetail) {
    if (parent) {
        var arrLinks = new Array();
        if (strNavUrl) {
            var _strNavUrl = strNavUrl;
            var _strOldNavUrl = strNavUrl;

            if (_strNavUrl != null && _strNavUrl.indexOf("M_") != -1) {
                var diagramViewCookieValue = PZ.JQ.cookie("DiagramViewMode");
                //Check, if extension is a valid view mode extension.
                if (diagramViewCookieValue != null && diagramViewCookieValue.length > 0) {
                    _strNavUrl = _strNavUrl.replace(".html", "." + diagramViewCookieValue + ".html");
                }
            }

            var link = new parent.Link("Main", _strOldNavUrl);

            PZ.JQ.get(_strNavUrl)
			.done(function () {
			    link = new parent.Link("Main", _strNavUrl);
			    link.SaveLastSite = true;
			    arrLinks.push(link);
			    if (strNavUrlDetail) {
			        var link = new parent.Link("Details", strNavUrlDetail);
			        link.SaveLastSite = true;
			        arrLinks.push(link);
			    }
			    parent._nm.Navigate(arrLinks);
			}).fail(function () {
			    link = new parent.Link("Main", _strOldNavUrl);
			    link.SaveLastSite = true;
			    arrLinks.push(link);
			    if (strNavUrlDetail) {
			        var link = new parent.Link("Details", strNavUrlDetail);
			        link.SaveLastSite = true;
			        arrLinks.push(link);
			    }
			    parent._nm.Navigate(arrLinks);
			})
        }
    }
}

function GetMainContentFeedbackEMail() {
    var strDiagramName = document.getElementById("Content_FeedbackEMail");
    if (strDiagramName) {
        return strDiagramName.value;
    }
    else {
        return "";
    }
}

function GetMainContentContactEMail() {
    var strDiagramName = document.getElementById("Content_ContactEMail");
    if (strDiagramName) {
        return strDiagramName.value;
    }
    else {
        return "";
    }
}
// function determines position of the mouse, can be used in IE and FF
function getMouse(e) {
    posx = 0; posy = 0;
    var ev = (!e) ? window.event : e; //IE:Moz
    if (ev.pageX) {//Moz
        posx = ev.pageX + window.pageXOffset;
        posy = ev.pageY + window.pageYOffset;
    }
    else if (ev.clientX) {//IE
        posx = ev.clientX + document.body.scrollLeft;
        posy = ev.clientY + document.body.scrollTop;
    }
    else { return false } //old browsers
    //document.getElementById('myspan').firstChild.data='X='+posx+' Y='+posy;
}
function GetMainContentDiagramName() {
    var strDiagramName = document.getElementById("Content_DiagramName");
    if (strDiagramName) {
        return strDiagramName.value;
    }
    else {
        return "";
    }
}

function GetMainContentDiagramGuid() {
    var strDiagramName = document.getElementById("Content_Guid");
    if (strDiagramName) {
        return strDiagramName.value;
    }
    else {
        return "";
    }
}

function PrintDiagram(processGuid, lcid) {
    var link = "M_" + processGuid + "_" + lcid + ".html"
    printWindow = window.open(link, '');
    printWindow.focus();
}

//NavToExternLink
function NavigateToExternLink(navUrl) {
    try {
        NewWin = window.open(navUrl, "NewWindow");
    }
    catch (e) { alert("Bei dem Versuch einen externen Link zu öffnen ist ein Fehler aufgetreten!"); }
}

//
// Content of NavigationManager.js
//

function ModStack() {
    this.stack = new Array();
    this.aktElem = 0;
    this.lastStopId = -1;

    this.Initialize = function () {
    }

    this.ModPush = function (link) {
        var firststop = false;

        for (var i = this.stack.length - 1; i >= 0; i--) {
            var cont = link.Target;
            //alert(cont);
            if (this.stack[i].StopFlag == false) {
                if (this.stack[i].Target == cont) {
                    if (this.stack[i].Href == link.Href) {
                        return;
                    }
                    else {
                        this.stack.push(link);
                        return;
                    }
                }
            }
        }

        this.stack.push(link);
        return;

        /*for (var i=this.stack.length-1; i>=0; i--)
        {
        if (firststop == false && this.stack[i].StopFlag == true)
        {
        //alert("FirstStop");
        var firststop = false;
        continue;
        }
        else if (firststop == true && this.stack[i].StopFlag == true)
        {
        //alert("SecondStop");
        break;
        }
        if (this.stack[i].Href != link.Href)
        {
        //alert("Cont");
        continue;
        }
        if (this.stack[i].Href == link.Href)
        {
        //alert("Equ");
        return;
        }
        }*/

        //this.aktElem = this.aktElem + 1;
    }
    this.SetStopFlag = function () {
        var TmpLink = new Link("xxx", "xxx");
        TmpLink.StopFlag = true;
        if (this.stack.length > 0) {
            if (this.ModPeek().StopFlag == false) {
                this.stack.push(TmpLink);
                // elem++
                //this.ModPush(TmpLink);
            }
        }
    }
    this.DeleteLastStopFlag = function () {
        if (this.stack[this.stack.length - 1] && this.stack[this.stack.length - 1].StopFlag == true) {
            this.stack.pop();
        }
    }
    this.ModPeek = function () {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
        return null;
    }
    this.ModMoveUp = function () {
        if (this.stack.length > this.aktElem) {
            this.aktElem = this.aktElem + 1;
        }
    }
    this.ModMoveDown = function () {
        if (this.aktElem > 0 && this.stack.length > 0) {
            this.aktElem = this.aktElem - 1;
        }
    }

    this.AlertStack = function () {
        var str = "--STACK--\n";
        for (var i = this.stack.length - 1; i >= 0; i--) {
            str = str + this.stack[i].Href + " StopID: " + this.stack[i].StopId + "\n";
        }
        alert(str);
    }

    this.ClearStack = function () {
        this.stack = new Array();
    }

    this.GoForward = function (href) {
        if (this.stack.length > 0) {
            for (var i = this.stack.length - 1; i >= 0; i--) {
                var elem = this.stack[i];
                //this.AlertStack();
                if (elem.StopFlag == false) {
                    //if (elem.Href == href)
                    //{
                    this.lastStopId = elem.StopId;
                    //TODO: AddToForwardStack

                    //Delete
                    //this.stack.splice(i, 1);
                    var lastElement = this.stack.pop();
                    if (_bs.stack.length > 0 && _bs.ModPeek().StopId != lastElement.StopId) {
                        _bs.SetStopFlag();
                    }
                    _bs.ModPush(lastElement);

                    for (var j = this.stack.length - 1; j >= 0; j--) {
                        if (elem.StopFlag == true) {
                            this.stack.splice(j, 1);
                            //_fs.SetStopFlag();
                            return;
                        }
                        if (this.stack[j].StopId == this.lastStopId) {
                            history.forward();
                            return;
                        }
                    }

                    //break;
                    //}
                }
                else {
                    //alert("StopFlag true");
                    this.stack.splice(i, 1);
                    //_fs.SetStopFlag();
                    break;
                }
            }
        }
    }

    this.GoBack = function (href) {
        if (this.stack.length > 0) {
            for (var i = this.stack.length - 1; i >= 0; i--) {
                var elem = this.stack[i];
                //this.AlertStack();
                if (elem.StopFlag == false) {
                    //if (elem.Href == href)
                    //{
                    this.lastStopId = elem.StopId;
                    //TODO: AddToForwardStack

                    //Delete
                    //this.stack.splice(i, 1);
                    var lastElement = this.stack.pop();
                    if (_fs.stack.length > 0 && _fs.ModPeek().StopId != lastElement.StopId) {
                        _fs.SetStopFlag();
                    }
                    _fs.ModPush(lastElement);

                    for (var j = this.stack.length - 1; j >= 0; j--) {
                        if (elem.StopFlag == true) {
                            this.stack.splice(j, 1);
                            //_fs.SetStopFlag();
                            return;
                        }
                        if (this.stack[j].StopId >= this.lastStopId) {
                            history.back();
                            return;
                        }
                    }

                    //break;
                    //}
                }
                else {
                    this.stack.splice(i, 1);
                    //_fs.SetStopFlag();
                    break;
                }
            }
        }
    }
    this.Initialize();
}

function GoBack(href) {
    //href = href.substr(href.lastIndexOf("\\")+1,href.length);
    _bs.GoBack(href);
}

function GoForward(href) {
    _fs.GoForward(href);
}

//========================================================================
// Link-Class Hilfsklasse für NavigationManager
//========================================================================
function Link(Target, Href) {
    this.Target = Target;
    this.Href = Href;
    this.StopId = -1;
    this.StopFlag = false;
    this.RefreshTree = true;
    this.SaveLastSite = false;
}
//========================================================================
// NavigationManager-Class
//========================================================================
function NavigationManager() {
    this.ActiveLCID = 0;
    this.LastSite = new Object();
    this.ItemList = null;
    this.GlobalStopId = 0;
    this.FileExtension = "html";
    ///====================================================================================
    /// Initialize NavigationManager-Class
    ///====================================================================================
    this.Initialize = function () {
        this.ItemList = new Object();
    }

    this.SaveItem = function (key, value) {
        this.ItemList[key] = value;
    }

    this.GetItem = function (key) {
        return this.ItemList[key];
    }

    ///====================================================================================
    /// SetZoom
    ///====================================================================================
    this.SetZoom = function () {
        alert("SetZoom called");
        content = document.getElementById(this.GetContent("Main"));
        if (content && content != null) {
            if (typeof content.contentWindow.SetViewScale == "function") {
                sliderTextBox = document.getElementById("zoomSliderValue");
                if (sliderTextBox) {
                    var zoval = this.ItemList["ZoomValue"];
                    if (zoval == null || zoval == "") {
                        zoval = 100;
                    }
                    var scale = zoval / 100;
                    if (!document.all) {
                        //A Div-Container named Viewport is filled with an <OBJECT>-object.
                        var svgElementContainer = content.contentWindow.document.getElementById("Viewport").childNodes[0];
                        var svgDocument = content.contentWindow.document.getElementById("Viewport").childNodes[0].getSVGDocument();

                        svgDocument.documentElement.currentScale = scale;

                        var h = svgElementContainer.height / (lastScale / 100) * scale;
                        var w = svgElementContainer.width / (lastScale / 100) * scale;

                        svgElementContainer.setAttribute("height", h);
                        svgElementContainer.setAttribute("width", w);
                    }
                    else {
                        if (content.contentWindow.SupportsSvg()) {
                            //A Div-Container named Viewport is filled with an <OBJECT>-object.
                            var svgElementContainer = content.contentWindow.document.getElementById("Viewport").childNodes[0];
                            var svgDocument = content.contentWindow.document.getElementById("Viewport").childNodes[0].getSVGDocument();

                            svgDocument.documentElement.currentScale = scale;

                            var h = svgElementContainer.height / (lastScale / 100) * scale;
                            var w = svgElementContainer.width / (lastScale / 100) * scale;

                            svgElementContainer.setAttribute("height", h);
                            svgElementContainer.setAttribute("width", w);
                        }
                        else {
                            content.contentWindow.SetViewScale(sliderTextBox.value / 100);
                        }
                    }
                }
            }
        }
    }

    ///====================================================================================
    /// Highlight Element
    ///====================================================================================
    this.Highlight = function (contentType, id) {
        var content = parent[contentType];
        var ElementList = content._ElementList;

        for (var i = 0; i <= ElementList.length - 1; i++) {
            if (ElementList[i].Value == id) {
                obj = container.document.getElementById(ElementIdArray[i].Key);
                if (obj) {
                    obj.ondblclick();
                }
            }
        }
    }

    ///====================================================================================
    /// Get Set ActiveLCID
    ///====================================================================================
    this.GetActiveLCID = function () {
        return this.ActiveLCID;
    }

    this.SetActiveLCID = function (lcid) {
        this.ActiveLCID = lcid;
    }

    ///====================================================================================
    /// Get FileExtension
    ///====================================================================================
    this.GetFileExtension = function () {
        return this.FileExtension;
    }

    //========================================================================
    // ChangeLanguage
    //========================================================================
    this.ChangeLanguage = function (langId) {
        if (langId) {
            var oldLCID = this.GetActiveLCID();
            this.SetActiveLCID(langId);
            var arrContents = new Array("ToolbarContent", "NavContent", "Main", "Details");
            var arrLinks = new Array();
            for (var i = 0; i < arrContents.length; i++) {
                var strContent = this.GetContent(arrContents[i]);
                if (strContent) {
                    var objContent = document.getElementById(strContent);
                    if (objContent) {
                        var strHref = objContent.contentWindow.location.href; // = links[i].Href;
                        var indexOfPoint = strHref.indexOf('.');
                        var indexTemp = strHref.indexOf('.', (indexOfPoint + 1));
                        while (indexTemp != -1) {
                            indexOfPoint = indexTemp;
                            var indexTemp = strHref.indexOf('.', (indexOfPoint + 1));
                        }
                        var strLcId = strHref.substring(indexOfPoint - 4, indexOfPoint);
                        if (isNaN(strLcId)) {
                            var strHrefFirst = strHref.substring(0, indexOfPoint);
                            var strHrefLast = strHref.substring(indexOfPoint, strHref.length);

                            var params = strHrefLast.substr(6).split("&");
                            var foundLcid = false;
                            for (var j = 0; j < params.length; j++) {
                                if (params[j].indexOf("lcid=") == 0) {
                                    foundLcid = true;
                                    break;
                                }
                            }

                            if (foundLcid) {
                                strHrefLast = strHrefLast.replace(oldLCID, langId);
                                strHref = strHrefFirst + strHrefLast;
                            }
                            else {
                                strHref = strHrefFirst + strHrefLast + "&lcid=" + langId;
                            }
                            arrLinks.push(new Link(arrContents[i], strHref));
                        }
                        else {
                            var strHrefFirst = strHref.substring(0, indexOfPoint - 4);
                            var strHrefLast = strHref.substring(indexOfPoint, strHref.length);
                            if (strLcId != langId) {
                                strHref = strHrefFirst + langId + strHrefLast;
                                arrLinks.push(new Link(arrContents[i], strHref));
                            }
                        }
                    }
                }
            }
            this.Navigate(arrLinks);
        }
    }

    //========================================================================
    // Refresh Nav Tree
    //========================================================================
    this.RefreshNavTree = function (objGuid, objParentGuid) {
        var strContent = this.GetContent("NavContent");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) // NavContent Exists
            {
                if (objContent.contentWindow && typeof objContent.contentWindow.RefreshTree == "function") {
                    objContent.contentWindow.RefreshTree(objGuid, objParentGuid);
                }
            }
        }
    }

    //========================================================================
    // Refresh Links in Nav Tree content
    //========================================================================
    var _timerId = 0;
    var _objID = 0;
    this.RefreshNavTreeForLinks = function (objID) {
        //return;
        // kill old Timer, if it is in infinite cycle
        if (_timerId != 0) {
            clearTimeout(_timerId);
        }
        _objID = objID
        var strContent = this.GetContent("NavContent");

        if (strContent) {
            var objContent = document.getElementById(strContent);

            if (objContent) // NavContent Exists
            {
                if (objContent.contentWindow) {
                    if (typeof objContent.contentWindow.RefreshTreeForLists == "function") {
                        if (!objContent.contentWindow.RefreshTreeForLists(objID)) {
                            _timerId = setTimeout("_nm.RepeatRefreshNavTreeForLinks()", 30);
                        }
                    }
                    else { _timerId = setTimeout("_nm.RepeatRefreshNavTreeForLinks()", 30); }
                }
            }
        }
    }

    this.RepeatRefreshNavTreeForLinks = function (objID) {
        clearTimeout(_timerId);
        var strContent = this.GetContent("NavContent");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) // NavContent Exists
            {
                if (objContent.contentWindow && objContent.document) {
                    if (typeof objContent.contentWindow.RefreshTreeForLists == "function") {
                        if (!objContent.contentWindow.RefreshTreeForLists(_objID)) {
                            _timerId = setTimeout("_nm.RepeatRefreshNavTreeForLinks()", 30);
                        }
                    }
                    else { _timerId = setTimeout("_nm.RepeatRefreshNavTreeForLinks()", 30); }
                }
            }
        }
    }

    //========================================================================
    // Refresh SymbolHighlight
    //========================================================================
    this.RefreshSymbolHighlight = function (sender, id) {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow && typeof objContent.contentWindow.RefreshHighlight == "function") {
                    objContent.contentWindow.RefreshHighlight(sender, id);
                }
            }
        }
    }

    //========================================================================
    // Get Feedback E-Mail
    //========================================================================
    this.GetFeedbackEMail = function () {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow && typeof objContent.contentWindow.GetMainContentFeedbackEMail == "function") {
                    return objContent.contentWindow.GetMainContentFeedbackEMail();
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Contact E-Mail
    //========================================================================
    this.GetContactEMail = function () {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow && typeof objContent.contentWindow.GetMainContentContactEMail == "function") {
                    return objContent.contentWindow.GetMainContentContactEMail();
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Diagram Name
    //========================================================================
    this.GetDiagramName = function () {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpDiagramName = tmpDocument.getElementById("Content_DiagramName");
                        if (tmpDiagramName && tmpDiagramName.getAttribute("value")) {
                            var tmpValue = tmpDiagramName.getAttribute("value");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Escaped Diagram Name
    //========================================================================
    this.GetEscapedDiagramName = function () {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpDiagramName = tmpDocument.getElementById("Content_EscapedDiagramName");
                        if (tmpDiagramName && tmpDiagramName.getAttribute("value")) {
                            var tmpValue = tmpDiagramName.getAttribute("value");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Stronger Escaped Diagram Name
    //========================================================================
    this.GetStrongerEscapedDiagramName = function () {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpDiagramName = tmpDocument.getElementById("Content_StrongerEscapedDiagramName");
                        if (tmpDiagramName && tmpDiagramName.getAttribute("value")) {
                            var tmpValue = tmpDiagramName.getAttribute("value");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Detail Name
    //========================================================================
    this.GetDetailName = function () {
        var strContent = this.GetContent("Details");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //DetailContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpDetailName = tmpDocument.getElementById("Content_DetailName");
                        if (tmpDetailName && tmpDetailName.getAttribute("value")) {
                            var tmpValue = tmpDetailName.getAttribute("value");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Diagram Guid
    //========================================================================
    this.GetDiagramGuid = function () {
        var strContent = this.GetContent("Main");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpGuid = tmpDocument.getElementById("Content_Guid");
                        if (tmpGuid && tmpGuid.getAttribute("value")) {
                            var tmpValue = tmpGuid.getAttribute("value");
                            tmpValue = tmpValue.replace("{data}/", "");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get Custom Diagram page attribute.
    //========================================================================
    this.GetCustomDiagramAttribute = function (attributeName) {
        var strContent = this.GetContent("Main");
        if (attributeName && strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //MainContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var element = tmpDocument.getElementById("Content_" + attributeName);
                        if (element && element.getAttribute("value")) {
                            var value = element.getAttribute("value");
                            return value;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get current Link
    //========================================================================
    this.GetFullLink = function () {
        if (window.frames.Main && window.frames.Details) {
            var linkMain = encodeURIComponent(window.frames.Main.location.href);
            var linkDetail = encodeURIComponent(window.frames.Details.location.href);
            var bookmarkurl;

            if (linkMain && linkDetail) {
                linkMain = "./" + linkMain.substring(linkMain.lastIndexOf("%2F") + 3, linkMain.length);
                linkDetail = "./" + linkDetail.substring(linkDetail.lastIndexOf("%2F") + 3, linkDetail.length);

                bookmarkurl = document.location.href.split("?")[0]
					+ "?main=" + linkMain
					+ "&detail=" + linkDetail

                return bookmarkurl;
            }
            return "";
        }
        return "";
    }

    //========================================================================
    // Get current diagram graphic filename
    //========================================================================
    this.GetDiagramGraphicFileName = function () {
        var imageFileName = PZ.JQ('#Main').contents().find('input[id=Content_ImageFileName]').val();
        var currentExtension = PZ.JQ('#Main').contents().find('input[id=Content_CurrentViewExtension]').val();

        if (imageFileName && imageFileName.length > 0) {
            if (currentExtension && currentExtension.length > 0) {
                var result = imageFileName + "." + currentExtension + ".png";
                return result;
            }
            else {
                var result = imageFileName + ".png";
                return result;
            }
        }

        return "";
    }

    //========================================================================
    // Get desired diagram attribute
    // USAGE: GetDiagramAttribute("ProcessManagerName", "Content_", true);
    //========================================================================
    this.GetDiagramAttribute = function (attributeId, attributePrefix, isPrefixed) {
        var tmpAttributeId = attributeId;
        var mainContent = PZ.JQ('#Main');
        var tmpAttributePrefix = "";
        var tmpIsPrefixed = isPrefixed;
        var tmpResult = "";
        if (attributePrefix && attributePrefix.length > 0) {
            tmpAttributePrefix = attributePrefix;
        }

        if (tmpAttributeId && tmpAttributeId.length > 0) {
            if (mainContent && mainContent.length > 0) {
                if (isPrefixed) {
                    tmpResult = PZ.JQ(mainContent).contents().find('input[id=' + tmpAttributePrefix + tmpAttributeId + ']').val();
                    return tmpResult;
                }
                else {
                    tmpResult = PZ.JQ(mainContent).contents().find('input[id=' + tmpAttributeId + ']').val();
                    return tmpResult;
                }
            }
        }

        return "";
    }

    //========================================================================
    // Get Guid From DetailContent
    //========================================================================
    this.GetDetailContentGuid = function () {
        var strContent = this.GetContent("Details");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //DetailContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpGuid = tmpDocument.getElementById("Content_Guid");
                        if (tmpGuid && tmpGuid.getAttribute("value")) {
                            var tmpValue = tmpGuid.getAttribute("value");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get PreferredMainContentGuid From DetailContent
    //========================================================================
    this.GetPreferredMainContentGuid = function () {
        var strContent = this.GetContent("Details");
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) //DetailContent Exists
            {
                if (objContent.contentWindow) {
                    var tmpDocument = objContent.contentWindow.document;
                    if (tmpDocument) {
                        var tmpGuid = tmpDocument.getElementById("Content_PreferredMainContentGuid");
                        if (tmpGuid && tmpGuid.getAttribute("value")) {
                            var tmpValue = tmpGuid.getAttribute("value");
                            return tmpValue;
                        }
                    }
                }
            }
        }
        return "";
    }

    //========================================================================
    // Get ElementByIdFromContent
    //========================================================================
    this.GetElementByIdFromContent = function (content, elementId) {
        var strContent = this.GetContent(content);
        if (strContent) {
            var objContent = document.getElementById(strContent);
            if (objContent) {
                if (objContent.contentWindow && objContent.contentWindow.document.getElementById(elementId)) {
                    return objContent.contentWindow.document.getElementById(elementId);
                }
            }
        }
        return "";
    }

    //========================================================================
    // Navigate
    //========================================================================
    this.Navigate = function (links) {
        if (links) {
            this.GlobalStopId = this.GlobalStopId + 1;
            var refTree = false;

            _bs.SetStopFlag();
            for (var i = 0; i < links.length; i++) {
                if (links[i]) {
                    /* if (links[i].Target == "MainContent" && links[i].RefreshTree)
                    {
                    refTree = true;
                    }*/
                    var strContent = this.GetContent(links[i].Target)
                    if (strContent) {
                        var content = document.getElementById(strContent);    //find Content
                        if (content == null && parent != null && parent.document != null) {
                            content = parent.document.getElementById(strContent);
                        }
                        if (content) //content is not null or empty
                        {
                            //TODO: Prüfen ob SaveSiteToStack existiert
                            //content.contentWindow.SaveSiteToStack(strContent,this.GlobalStopId);
                            links[i].StopId = this.GlobalStopId;
                            _bs.ModPush(links[i]);

                            try {
                                var strAktSite = "";

                                if (typeof (content.contentWindow.location) != "unknown" && typeof (content.contentWindow.location.href) != "unknown") {
                                    strAktSite = content.contentWindow.location.href;
                                }

                                // Die Seite MC wird immer neu geladen.
                                // Damit wird sichergestellt das das Highlight richtig gesetzt wird, welches beim MC-Loaded Event aufgerufen wird
                                //		    				    strAktSite = strAktSite.substring(strAktSite.lastIndexOf("/") + 1,strAktSite.length);
                                //		    				    if (strAktSite != links[i].Href)
                                //
                                var contentLink = links[i].Href;

                                if (links[i].SaveLastSite) {
                                    var tempLink = contentLink;
                                    var indexOfPoint = tempLink.indexOf('.');
                                    var indexTemp = tempLink.lastIndexOf('.', (indexOfPoint + 1));
                                    var strHrefFirst = tempLink.substring(0, indexOfPoint - 4);
                                    var strHrefLast = tempLink.substring(indexOfPoint, tempLink.length);
                                    tempLink = strHrefFirst + strHrefLast;
                                    this.LastSite[strContent] = tempLink;
                                }

                                content.contentWindow.location.href = contentLink; //Navigate to URL
                            }
                            catch (e) {
                                window.open(contentLink, link[i].target);
                            }
                        }
                    }
                }
            }

            /*if (refTree)
            {
            this.RefreshNavTree(links[i].Href);
            }*/

            _bs.DeleteLastStopFlag();
            _fs.ClearStack();
            _fs.SetStopFlag();
            //_bs.AlertStack();
        }
    }

    //========================================================================
    // Navigate overload
    //========================================================================
    this.VerifyNavigation = function (links) {
        var result = true;
        if (links) {
            for (var i = 0; i < links.length; i++) {
                var strContent = this.GetContent(links[i].Target)
                if (strContent) {
                    var content = document.getElementById(strContent);    //find Content
                    if (content == null && parent != null && parent.document != null) {
                        content = parent.document.getElementById(strContent);
                    }
                    if (content == null) {
                        result = false;
                        return result;
                    }
                }
            }
            if (result) {
                this.Navigate(links);
                return true;
            }
        }
        else {
            result = false;
        }

        return result;
    }

    //========================================================================
    // NavToExternLink
    //========================================================================
    this.NavigateToExternLink = function (navUrl) {
        try {
            navUrl = navUrl.replace(/#/g, "%23");

            if (navUrl.indexOf("\\") > -1 && navUrl.indexOf("/") == -1) {
                navUrl = navUrl.replace(/\\/g, "/");
                if (navUrl.indexOf("file:") != 0) {
                    if (navUrl.indexOf("/") != 0) navUrl = "file:///" + navUrl;      // e.g. C:/TEMP/some-document.pdf
                    else if (navUrl.indexOf("//") != 0) navUrl = "file://" + navUrl; // e.g. /C:/TEMP/some-document.pdf
                    else navUrl = "file:" + navUrl;                                  // e.g. //server/share/some-document.pdf
                }
            }

            //Check if link contains an url parameter. If so, it must be escaped properly.
            if (navUrl.indexOf("?url") > -1) {
                var urlParam = navUrl.substring(navUrl.indexOf("?url"), navUrl.length);
                urlParam = urlParam.replace(/&/g, "%26");
            }
            if (urlParam != undefined) {
                navUrl = navUrl.replace(navUrl.substring(navUrl.indexOf("?url"), navUrl.length), urlParam);
            }
            NewWin = window.open(navUrl, "_blank");
        }
        catch (e) {
            alert("Bei dem Versuch einen externen Link zu öffnen ist ein Fehler aufgetreten!");
        }
    }

    //========================================================================
    // Content Parser
    //========================================================================
    this.GetContent = function (contentAlias) {
        switch (contentAlias) {
            case "NavContent":
                return "NavContent";
                break;
            case "Main":
                return "Main";
                break;
            case "Details":
                return "Details";
                break;
            case "ToolbarContent":
                return "ToolbarContent";
                break;
            default:
                return null;
                break;
        }
        return null;
    }

    //========================================================================
    // Favorite functions (using cookies & aspx)
    //========================================================================
    this.AddFavorite = function (detailGuid, message, errorMessage, url, callback) {
        // callback function (is used as callback function for the function 'setFavorites')
        var setFavoritesCallback = function (parameter) {
            var passParameter = parameter["passParameter"];
            var message = null;
            var callback = null;
            var errorMessage = parameter["errorMessage"];
            if (passParameter != null) {
                // get input parameter (message & callback) of the function AddFovorite
                message = passParameter["message"];
                callback = passParameter["callback"];
            }
            var rCode = parameter["rCode"];
            var data = parameter["data"];

            if (message != null && message != "" && rCode > 0 && data != '0') {
                alert(message);
            }

            if (errorMessage != null && errorMessage != "" && rCode < 0) {
                alert(errorMessage);
            }

            if (callback != null) callback();
        }
        // callback function (is used as callback function for the function 'getFavorites')
        var getFavoritesCallback = function (parameter) {
            if (parameter["rCode"] > 0) {
                var favorites = parameter["data"];
                if (favorites == null) {
                    favorites = [];
                }
                // get pass paramter
                var passParameter = parameter["passParameter"];
                var favTuple = null;
                var url = null;
                var setFavoritesCallback = null;
                var setFavorites = null;
                if (passParameter != null) {
                    favTuple = passParameter["favTuple"];
                    url = passParameter["url"];
                    setFavoritesCallback = passParameter["setFavoritesCallback"];
                    setFavorites = passParameter["setFavorites"];
                }
                if (favorites != null && favTuple != null) {
                    for (var index in favorites) {
                        if (favorites[index][0] == favTuple[0] && favorites[index][1] == favTuple[1]) {
                            return;
                        }
                    }

                    favorites.push(favTuple);
                    while (favorites.length > 10) {
                        favorites.shift();
                    }
                    var newParameter = new Object();
                    newParameter["callback"] = setFavoritesCallback;
                    newParameter["data"] = favorites;
                    // pass the passparameter on the next callback function 'setFavoritesCallback'
                    newParameter["passParameter"] = passParameter;
                    // the functions calls the callback function 'setFavoritesCallback'
                    setFavorites(url, newParameter);
                }
            }
            else {
                var errorMessage = parameter["errorMessage"];
                if (errorMessage != null && errorMessage != "") {
                    alert(errorMessage);
                }
            }
        }

        if (callback == undefined) callback = null;

        var guid = this.GetDiagramGuid();
        if (guid == null || guid == "") {
            guid = this.GetPreferredMainContentGuid();
        }
        if (guid != null && guid != "") {
            var favTuple = [guid, detailGuid];
            if (url == "cookies") {
                var parameter = new Object();
                parameter["callback"] = getFavoritesCallback;
                // passparameter for the callback function
                var passParameter = new Object();
                passParameter["message"] = message;
                passParameter["errorMessage"] = errorMessage;
                passParameter["favTuple"] = favTuple;
                passParameter["callback"] = callback;
                passParameter["url"] = url;
                passParameter["setFavorites"] = this.SetFavorites;
                passParameter["setFavoritesCallback"] = setFavoritesCallback;
                parameter["passParameter"] = passParameter;
                // the functions calls the callback function 'getFavoritesCallback'
                this.GetFavorites(url, parameter);
            }
            else {
                var parameter = new Object();
                parameter["callback"] = setFavoritesCallback;
                parameter["data"] = [favTuple];
                var passParameter = new Object();
                passParameter["message"] = message;
                passParameter["errorMessage"] = errorMessage;
                passParameter["callback"] = callback;
                parameter["passParameter"] = passParameter;
                this.SetFavorites(url, parameter);
            }
        }
        else {
            alert(errorMessage);
        }
    }

    this.RemoveFavorite = function (url, parameter) {
        // callback function (is used as callback function for the function 'getFavorites')
        var getFavoritesCallback = function (parameter) {
            if (parameter["rCode"] > 0) {
                var favorites = parameter["data"];
                var passParameter = parameter["passParameter"];
                var favTuple = null;
                var callback = null;
                var setFavorites = null;
                var url = null;
                if (passParameter != null) {
                    favTuple = passParameter["favTuple"];
                    callback = passParameter["callback"];
                    setFavorites = passParameter["setFavorites"];
                    url = passParameter["url"];
                }
                if (favorites != null && favTuple != null) {
                    var deleteIndex = null;
                    for (var index in favorites) {
                        if (favorites[index][0] == favTuple[0] && favorites[index][1] == favTuple[1]) {
                            deleteIndex = index;
                        }
                    }

                    if (deleteIndex != null) {
                        favorites.splice(deleteIndex, 1);
                        var newParameter = new Object();
                        newParameter["data"] = favorites;
                        newParameter["callback"] = callback;

                        setFavorites(url, newParameter);
                    }
                }
            }
        }

        if (url == "cookies") {
            var newParameter = new Object();
            var favTuple = parameter["data"];
            var callback = parameter["callback"];
            var passParameter = new Object();
            passParameter["favTuple"] = favTuple;
            passParameter["callback"] = callback;
            passParameter["setFavorites"] = this.SetFavorites;
            passParameter["url"] = url;
            newParameter["passParameter"] = passParameter;
            newParameter["callback"] = getFavoritesCallback;
            // the functions calls the callback function 'getFavoritesCallback'
            this.GetFavorites(url, newParameter);
        }
        else {
            // the functions calls a callback function from parameter
            this.SetFavorites(url, parameter);
        }
    }
    // save favorites (see the function exportJsonData in WebApp.js)
    this.SetFavorites = function (url, parameter) {
        if (parameter != undefined && parameter != null) {
            if (parameter["cookiesName"] == null || parameter["cookiesName"] == undifined) {
                parameter["cookiesName"] = "MY_FAVORITES";
            }
            exportJSONData(url, parameter);
        }
    }
    // get favorites (see the function importJsonData in WebApp.js)
    this.GetFavorites = function (url, parameter) {
        if (parameter != undefined && parameter != null) {
            try {
                if (parameter["cookiesName"] == null || parameter["cookiesName"] == undifined) {
                    parameter["cookiesName"] = "MY_FAVORITES";
                }
                importJSONData(url, parameter);
            }
            catch (e) {
            }
        }
    }

    /// <summary> Create a favorite entry tp browser's internal favorite list. </summary>
    this.CreateBrowserFavorite = function () {
        if (parent && typeof parent.CreateBrowserFavorite == "function" && parent._nm && typeof parent._nm.GetActiveLCID == "function") {
            var regex = /.+_([0-9a-fA-F-]+_[0-9]+)\..+/;
            regex.exec(location.href);
            // Let customer's default page do customer specifics.
            parent.CreateBrowserFavorite(RegExp.$1, document.getElementById("Content_DiagramName").value);
        }
        else {
            AddFavorite(document.getElementById("Content_Guid").value, "", "");
        }
    }

    //Call Initilize Function to Raise this.Initialize()
    this.Initialize();
}

//
// Content of Toolbar.js
//

// JScript-Datei
var _Toolbar = null;            //ToolBar as Class

//========================================================================
// On_Load Event
//========================================================================
//function Body_OnLoad(sender) {
//    InitializeToolBar();            //Initialize treeView
//}

//========================================================================
// Initialize ToolBar
//========================================================================
function InitializeToolBar() {
    _Toolbar = new ToolBar('ToolbarButton', 'ToolbarButtonHover', 'ToolbarSearchBoxEmpty', 'ToolbarSearchBox');    //Create new CollapsibleMenu-Instance
}

//========================================================================
// ToolBarItem navt
//========================================================================
function ToolBarItem_OnClick(sender, url) {
    _Toolbar.Select(sender, url);
}

function GetContentElementById(elementId) {
    var strElementName = document.getElementById(elementId);
    if (strElementName) {
        return strElementName.firstChild.nodeValue;
    }
    else {
        return "";
    }
}

//========================================================================
// ToolBarItem Functions
//========================================================================
function DoSearch(baseUrl, serverSearchMarker, jQueryValSearchString) {
    var frmSearch_tbQueryStr = document.getElementById("ToolbarControl_TextBoxSearch");
    //alert('DoSearch called. baseUrl: ' + baseUrl + ' serverSearchMarker: ' + serverSearchMarker + ' frmSearch: ' + frmSearch_tbQueryStr + ' documentTitle: ' + document.title + " " + jQueryValSearchString);
    if (frmSearch_tbQueryStr != null) {
        frmSearch_tbQueryStr.focus();
        var searchText = jQueryValSearchString;
        frmSearch_tbQueryStr.value = "";

        //JK: 08-10-14: Try to retrieve parent.
        var _parent = null;
        var navigationManager = null;
        try {
            if (parent && parent != null && parent._nm && parent._nm != null) {
                _parent = parent;
            }
        }
        catch (e) {
            //Parent was not accessable.
        }

        if (_parent == null || _parent == undefined) {
            navigationManager = _nm;
        }

        if (navigationManager != null && navigationManager.GetActiveLCID() != 0) {
            var lcid = navigationManager.GetActiveLCID();
            var links = new Array();
            links[0] = new Object();
            links[0]["Target"] = "Main";

            // TODO: Replace .html with File extionsion from config
            if (serverSearchMarker == "ASPX") {
                links[0]["Href"] = baseUrl + ".aspx" + "?search=" + encodeURIComponent(searchText);
            }
            else if (serverSearchMarker == "PHP") {
                links[0]["Href"] = baseUrl + ".php" + "?search=" + encodeURIComponent(searchText);
            }
                /*else if (document.all) {
                links[0]["Href"] = baseUrl + "_IE_" + lcid + ".html" + "?search=" + encodeURIComponent(searchText);
                }
                else {
                links[0]["Href"] = baseUrl + "_FF_" + lcid + ".html" + "?search=" + encodeURIComponent(searchText);
                }*/
            else {
                links[0]["Href"] = "Search_" + lcid + ".html?search=" + encodeURIComponent(searchText);
            }
            navigationManager.Navigate(links);
        }
        else {
            var lcid = _nm.GetActiveLCID();
            var links = new Array();
            links[0] = new Object();
            links[0]["Target"] = "Main";

            // TODO: Replace .html with File extionsion from config
            if (serverSearchMarker == "ASPX") {
                links[0]["Href"] = baseUrl + ".aspx" + "?search=" + encodeURIComponent(searchText);
            }
            else if (serverSearchMarker == "PHP") {
                links[0]["Href"] = baseUrl + ".php" + "?search=" + encodeURIComponent(searchText);
            }
                /*else if (document.all) {
                links[0]["Href"] = baseUrl + "_IE_" + lcid + ".html" + "?search=" + encodeURIComponent(searchText);
                }
                else {
                links[0]["Href"] = baseUrl + "_FF_" + lcid + ".html" + "?search=" + encodeURIComponent(searchText);
                }*/
            else {
                links[0]["Href"] = "Search_" + lcid + ".html?search=" + encodeURIComponent(searchText);
            }
            _nm.Navigate(links);
        }
    }
}