// WebApp helper methods

function WebApp_Navigate(np) {
    var links = new Array();
    var navigationManager = null;
    //Check if current parent isn't undefined. If this is the case, check if the current document is the desired root document of Symbio Publishing.
    var parentElement = null;
    var parentDocument = null;
    if (!(typeof parent == 'undefined')) {
        //Check, if this is the correct parent.
        if (parent.PZ == undefined) {
            try {
                //The parent is incorrect. Check for iframes in this document.
                //First check the current window and document
                if (document != null && window != null && PZ.JQ(document.body).hasClass("VisiOneBody") && !(typeof window.Link == 'undefined')) {
                    parentElement = window;
                    parentDocument = document;
                }
                else if (parent.document != null) {
                    var iframes = parent.document.getElementsByTagName("iframe");
                    var found = false;
                    if (iframes != null && iframes.length > 0) {
                        for (var i = 0; i < iframes.length; i++) {
                            if (!found && iframes[i].contentDocument && iframes[i].contentDocument.body && PZ.JQ(iframes[i].contentDocument.body).hasClass("VisiOneBody")) {
                                parentElement = iframes[i].contentWindow;
                                parentDocument = iframes[i].contentDocument;
                                found = true;
                            }
                        }
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            parentElement = parent;
            parentDocument = parent.document;
        }
    }

    //Check existance of navigation manager
    if (!(typeof _nm == 'undefined')) {
        navigationManager = _nm;
    }
    else {
        if (!(typeof parent == 'undefined') && !(typeof parent._nm == 'undefined')) {
            navigationManager = parent._nm;
        }
    }

    if (typeof np["DetailUrl"] == "string" && np["DetailUrl"].length > 0) {
        if (navigationManager != null) {
            try {
                var link = new parentElement.Link("Details", np["DetailUrl"]);
                link.SaveLastSite = true;
                links.push(link);
                if (!navigationManager.VerifyNavigation(links)) {
                    window.open(np["DetailUrl"], "Details");
                }
            }
            catch (e) {
                window.open(np["DetailUrl"], "Details");
            }
        }
        else {
            window.open(np["DetailUrl"], "Details");
        }
    }

    if (typeof np["MainUrl"] == "string" && np["MainUrl"].length > 0) {
        var tmpIsInMovieMode = "";
        if (PZ.JQ("#ISINMOVIEMODE").length > 0) {
            tmpIsInMovieMode = PZ.JQ("#ISINMOVIEMODE").val();
        }
        if (tmpIsInMovieMode != "" && (tmpIsInMovieMode.toLowerCase() == "true")) {
            var tmpDetailWidth = 0;
            if (PZ.JQ("#SAVEDDETAILWIDTH").length > 0) {
                tmpDetailWidth = PZ.JQ("#SAVEDDETAILWIDTH").val();
                if (tmpDetailWidth > 0) {
                    var tmpDetails = PZ.JQ("#DetailContentPanel");
                    PZ.JQ(tmpDetails).animate({ width: tmpDetailWidth });
                }
            }
            PZ.JQ("#ISINMOVIEMODE").val("false");
            PZ.JQ("#ISINMOVIEMODE").change();
        }

        var oldMainUrl = np["MainUrl"];
        var mainUrl = np["MainUrl"];

        if (np["MainUrl"] != null && np["MainUrl"].indexOf("M_") != -1) {
            var diagramViewCookieValue = PZ.JQ.cookie("DiagramViewMode");
            //Check, if extension is a valid view mode extension.
            if (diagramViewCookieValue != null && diagramViewCookieValue.length > 0) {
                mainUrl = mainUrl.replace(".html", "." + diagramViewCookieValue + ".html");
            }
        }

        PZ.JQ.ajax({
            type: 'GET',
            url: mainUrl,
            data: {},
            success: function (data) {
                if (navigationManager != null) {
                    try {
                        var link = new parentElement.Link("Main", mainUrl);
                        link.SaveLastSite = true;
                        links.push(link);
                        if (!navigationManager.VerifyNavigation(links)) {
                            window.open(mainUrl, "Main");
                        }
                    }
                    catch (e) {
                        window.open(mainUrl, "Main");
                    }
                }
                else {
                    window.open(mainUrl, "Main");
                }
            }, error: function (jqXHR, textStatus, errorThrown) {
                PZ.JQ.ajax({
                    type: 'GET',
                    url: oldMainUrl,
                    data: {},
                    success: function (data) {
                        if (navigationManager != null) {
                            try {
                                var link = new parentElement.Link("Main", oldMainUrl);
                                link.SaveLastSite = true;
                                links.push(link);
                                if (!navigationManager.VerifyNavigation(links)) {
                                    window.open(oldMainUrl, "Main");
                                }
                            }
                            catch (e) {
                                window.open(oldMainUrl, "Main");
                            }
                        }
                        else {
                            window.open(oldMainUrl, "Main");
                        }
                    }, error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus + " " + errorThrown);
                        try {
                            var availableViewModeExtensions = (parentDocument != null) ? PZ.JQ(parentDocument).find("#JQAvailableViewModeExtensions").val() : "";
                            var viewModeExtensionArray = (availableViewModeExtensions != "") ? availableViewModeExtensions.split("|") : "";
                            //Try to retrieve the first available view extension
                            var urlMatch = "";
                            PZ.JQ.each(viewModeExtensionArray, function (key, value) {
                                var modifiedOldMainUrl = oldMainUrl.replace(".html", "." + value + ".html");
                                PZ.JQ.ajax({
                                    type: 'GET',
                                    url: modifiedOldMainUrl,
                                    data: {},
                                    success: function (data) {
                                        if (navigationManager != null) {
                                            try {
                                                var link = new parentElement.Link("Main", modifiedOldMainUrl);
                                                link.SaveLastSite = true;
                                                links.push(link);
                                                if (!navigationManager.VerifyNavigation(links)) {
                                                    urlMatch = modifiedOldMainUrl;
                                                }
                                            }
                                            catch (e) {
                                                urlMatch = modifiedOldMainUrl;
                                            }
                                        }
                                        else {
                                            urlMatch = modifiedOldMainUrl;
                                        }
                                        return false;
                                    }, error: function (jqXHR, textStatus, errorThrown) {
                                        console.log(textStatus + " " + errorThrown);
                                    },
                                    async: false
                                });
                            });
                            try {
                                window.open(urlMatch, "Main");
                            }
                            catch (e) {
                                //Do nothing.
                            }
                        }
                        catch (e) {
                            //Do nothing.
                        }
                    },
                    async: false
                });
            },
            async: false
        });
    }
}

// get url parameter
function GetURLParameter(name) {
    return decodeURIComponent(
        (location.search.match(RegExp("[?|&]" + name + '=(.+?)(&|$)')) || [, null])[1]
    );
}

function AddCurrentDetailsToFavorites(url) {
    var callback = function (parameter) {
        PZ.JQ("#FavoritesDialog").dialog("option", "show", null);
        PZ.JQ("#FavoritesDialog").dialog("option", "hide", null);
        PZ.JQ("#FavoritesDialog").dialog("close");

        PZ.JQ("#FavoritesDialog").dialog("open");
        PZ.JQ("#FavoritesDialog").dialog("option", "show", "blind");
        PZ.JQ("#FavoritesDialog").dialog("option", "hide", "blind");
    }

    if (url == undefined) url = "cookies";
    var tmpDetailGuid = "";

    if (PZ.JQ('#Details').css("display") != "none") {
        tmpDetailGuid = PZ.JQ('#Details').contents().find('input[id=Content_Guid]').val();
    }

    var text1 = PZ.JQ("#ADDFAVORITESUBMITTEXT").val();
    var text2 = PZ.JQ("#ADDFAVORITEERRORTEXT").val();
    this._nm.AddFavorite(tmpDetailGuid, text1.replace(/\\n/g, "\n"), text2.replace(/\\n/g, "\n"), url, callback);
}

function navigateFavorite(processGuid, detailGuid) {
    var lcid = _nm.GetActiveLCID();
    var mcPreLink;
    var dcPreLink;
    if (processGuid.toLowerCase().length < 30 || processGuid.toLowerCase().indexOf("list") >= 0) {
        mcPreLink = processGuid;
    }
    else {
        mcPreLink = "M_" + _processGuid;
    }

    if (detailGuid.toLowerCase().indexOf("detail") >= 0 || detailGuid.toLowerCase().indexOf("list") >= 0 || detailGuid == "") {
        dcPreLink = detailGuid;
    }
    else {
        dcPreLink = "D_" + _detailGuid;
    }
    PZ.JQ("#FavoritesDialog").dialog("close");
    PZ.JQ.cookie(processGuid + "_SelectedEntry", "All_" + detailGuid, { expires: 7 });
    PZ.JQ("#FAVORITETRIGGEREDCHANGE").val("true");
    dcPreLink = (dcPreLink == "") ? dcPreLink : dcPreLink + "_" + lcid + ".html";
    WebApp_Navigate({ 'MainUrl': mcPreLink + "_" + lcid + ".html", 'DetailUrl': dcPreLink });
}

function removeFavorite(url, mainGuid, detailGuid) {
    var callback = function (parameter) {
        PZ.JQ("#FavoritesDialog").dialog("option", "show", null);
        PZ.JQ("#FavoritesDialog").dialog("option", "hide", null);
        PZ.JQ("#FavoritesDialog").dialog("close");

        PZ.JQ("#FavoritesDialog").dialog("open");
        PZ.JQ("#FavoritesDialog").dialog("option", "show", "blind");
        PZ.JQ("#FavoritesDialog").dialog("option", "hide", "blind");
    }
    var parameter = new Object();
    parameter["callback"] = callback;
    parameter["data"] = [mainGuid, detailGuid];
    _nm.RemoveFavorite(url, parameter);
}

function removeAllFavorites() {
    _nm.SetFavorites(new Array());
    PZ.JQ("#FavoritesDialog").dialog("option", "show", null);
    PZ.JQ("#FavoritesDialog").dialog("option", "hide", null);
    PZ.JQ("#FavoritesDialog").dialog("close");
    PZ.JQ("#FavoritesDialog").dialog("open");
    PZ.JQ("#FavoritesDialog").dialog("option", "show", "blind");
    PZ.JQ("#FavoritesDialog").dialog("option", "hide", "blind");
}

var _controlId;
var _offsetX;
var _offsetY;

function openFavoriteDialog(controlId, offsetX, offsetY) {
    _controlId = "#" + controlId;
    _offsetX = offsetX;
    _offsetY = offsetY;

    openFavoriteDialog2();
}

function openFavoriteDialog2() {
    if (__favorites != null) {
        if (PZ.JQ("#FavoriteWaitingView").css("display") != "none") {
            PZ.JQ("#FavoriteWaitingView").hide();
        }
        var dialogX = PZ.JQ(_controlId).offset().left;
        var dialogY = PZ.JQ(_controlId).offset().top + PZ.JQ(_controlId).outerHeight();
        PZ.JQ('#FavoritesDialog').dialog('option', 'position', [dialogX + _offsetX, dialogY + _offsetY]);
        PZ.JQ("#FavoritesDialog").dialog("open");
    }
    else {
        if (PZ.JQ("#FavoriteWaitingView").css("display") == "none") {
            var offsetY = PZ.JQ(window).height() / 2 - PZ.JQ("#WaitingView").height() / 2;
            var offsetX = PZ.JQ(_controlId).offset().left + 50;
            offsetY = PZ.JQ(".EmptyBar").offset().top;
            PZ.JQ("#FavoriteWaitingView").offset({ top: offsetY + 20, left: offsetX })
            PZ.JQ("#FavoriteWaitingView").show();
        }
        setTimeout(openFavoriteDialog2, 100);
    }
}

// the function exportss JSON data into url('cookies' or aspx)
// input paramater:
// url: 'cookies' or aspx
// parameter(object):
// parameter["data"] : data to be exported
// parameter["callback"] : callback function
// parameter["passParameter"] : passParameter on the callback function
// output parameter is passed on the callbackfunction 'callback(callbackParameter)':
// callbackParameter["rCode"] : return code(1 on success, -1 otherwise)
// callbackParameter["data"] : the number of exported elements
// callbackParameter["errorMessage"] : error message (is relevant if rCode = -1)
function exportJSONData(url, parameter) {
    try {
        var jsonData = parameter["data"];
        var callback = parameter["callback"];
        var passParameter = parameter["passParameter"];
        var callbackParameter = new Object();
        callbackParameter["passParameter"] = passParameter;
        if (url == "cookies") {
            var jsonDataAsString = JSON.stringify(jsonData);
            WriteCookie(parameter["cookiesName"], jsonDataAsString, 365);
            if (callback != null && callback != undefined) {
                callbackParameter["rCode"] = 1;
                callbackParameter["data"] = 1;
                callback(callbackParameter);
            }
        }
        else {
            PZ.JQ.ajax({
                type: "POST",
                url: url,
                async: true,
                success: function (data) {
                    if (callback != null && callback != undefined) {
                        callbackParameter["rCode"] = 1;
                        callbackParameter["data"] = data;

                        callback(callbackParameter);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (callback != null && callback != undefined) {
                        parameter["errorMessage"] = jqXHR.responseText;
                        callbackParameter["rCode"] = -1;
                        callback(callbackParameter);
                    }
                },
                data: "data=" + JSON.stringify(jsonData)
            });
        }
    }
    catch (e) {
        // TODO: callback with error
    }
}
// the function imports JSON data from url('cookies' or aspx)
// input paramater:
// url: 'cookies' or aspx
// parameter(object):
// parameter["callback"] : callback function
// parameter["passParameter"] : passParameter on the callback function
// output parameter is passed on the callbackfunction 'callback(callbackParameter)':
// callbackParameter["rCode"] : return code(1 on success, -1 otherwise)
// callbackParameter["data"] : imported data
// callbackParameter["errorMessage"] : error message (is relevant if rCode = -1)
function importJSONData(url, parameter) {
    try {
        var callback = parameter["callback"];
        var passParameter = parameter["passParameter"];
        var callbackParameter = new Object();
        callbackParameter["passParameter"] = passParameter;
        if (callback != null && callback != undefined) {
            if (url == "cookies") {
                var jsonDataAsString = ReadCookie(parameter["cookiesName"]);
                callbackParameter["data"] = JSON.parse(jsonDataAsString);
                callbackParameter["rCode"] = 1;
                callback(callbackParameter);
            }
            else {
                PZ.JQ.ajaxSetup({ cache: false });
                PZ.JQ.getJSON(url)
					.success(function (data, textStatus, jqXHR) {
					    callbackParameter["data"] = data;
					    callbackParameter["rCode"] = 1;
					    callback(callbackParameter);
					})
					 .error(function (jqXHR, textStatus, errorThrown) {
					     parameter["errorMessage"] = jqXHR.responseText;
					     callbackParameter["rCode"] = -1;
					     callback(callbackParameter);
					 });

                PZ.JQ.ajaxSetup({ cache: true });
            }
        }
    }
    catch (e) {
        //  alert("Import exception");
    }
}

// Favorites functionality

// The function merge favorites with favoorites in SQL DB
// favorites - json array of guid tuples (main, dateil) in string format
// url: aspx site to process merging
// callback - the callback function, which will be called after merge
// important: favorites must be in string format to avoid error by pass of the parameter(use JSON.stringify)
function mergeFavorites(favorites, url, callback) {
    if (favorites != null) {
        var parameter = new Object();
        parameter["callback"] = callback;
        parameter["data"] = JSON.parse(favorites);
        exportJSONData(url, parameter);
    }
}

// Roles functionality

var __roles = null;

function loadRoleData() {
    if (__roles == null && _nm) {
        var roleAccessFile = "RoleAccess_" + _nm.GetActiveLCID() + ".json.txt";
        PZ.JQ.getJSON(roleAccessFile)
						.success(function (data, textStatus, jqXHR) {
						    __roles = data
						});
    }
}

function getRoleData() {
    return __roles;
}

var _roleDialogOffsetX, _roleDialogOffsetY;
var _callback;

// +show loading dialog if necessary
function waitRoleData(dialogOffsetX, dialogOffsetY, callback) {
    _roleDialogOffsetX = dialogOffsetX;
    _roleDialogOffsetY = dialogOffsetY;
    _callback = callback;
    waitRoleData2();
}

// helper function for waitRoleData
function waitRoleData2() {
    if (__roles != null) {
        if (PZ.JQ("#RolesWaitingView").css("display") != "none") {
            PZ.JQ("#RolesWaitingView").hide();
        }
        _callback();
    }
    else {
        if (PZ.JQ("#RolesWaitingView").css("display") == "none") {
            PZ.JQ("#RolesWaitingView").offset({ top: _roleDialogOffsetY, left: _roleDialogOffsetX })
            PZ.JQ("#RolesWaitingView").show();
        }
        setTimeout(waitAndGetRoleData2, 100);
    }
}

//plugin buttonset vertical
(function ($) {
    $.fn.buttonsetv = function () {
        $(':radio, :checkbox', this).wrap('<div class="VerticalButtonset"/>');
        $(this).buttonset();
        $('label:first', this).removeClass('ui-corner-left').addClass('ui-corner-top');
        $('label:last', this).removeClass('ui-corner-right').addClass('ui-corner-bottom');
        mw = 0; // max witdh
        $('label', this).each(function (index) {
            w = $(this).width();
            if (w > mw) mw = w;
        })
        $('label', this).each(function (index) {
            $(this).width(mw);
        })
    };
})(PZ.JQ);