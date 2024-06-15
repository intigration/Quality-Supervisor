function SupportsSvg() {
    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
}

function Vml() {
    parent.SetZoomValue(parent, false);
}

function SynchronizeHeaderScrolling(sender) {
    var verticalHeader = document.getElementById("VerticalHeader");
    var horizontalHeader = document.getElementById("HorizontalHeader");
    var horizontalSpacer = document.getElementById("HorizontalSpacer");
    var viewport = document.getElementById("Viewport");
                
    if (viewport.scrollHeight > viewport.clientHeight) {
        PZ.JQ(verticalHeader).css("margin-right", "17px");
    }
    else {
        PZ.JQ(verticalHeader).css("margin-right", "0");
    }
    
    if (verticalHeader != null) {
        verticalHeader.scrollLeft = sender.scrollLeft;
    }

    if (viewport.scrollWidth > viewport.clientWidth && !PZ.JQ(horizontalHeader).hasClass("MarginSet")) {
        PZ.JQ(horizontalHeader).addClass("MarginSet");
        PZ.JQ(horizontalHeader).css("margin-bottom", "17px");
        var currentHeight = PZ.JQ(horizontalHeader).outerHeight();
        PZ.JQ(horizontalHeader).css("height", currentHeight - 17 + "px");
        
        PZ.JQ(horizontalSpacer).addClass("MarginSet");
        var currentSpacerHeight = PZ.JQ(horizontalSpacer).outerHeight();
        PZ.JQ(horizontalSpacer).css("height", currentSpacerHeight - 17 + "px");
    }
    else {
        PZ.JQ(horizontalHeader).css("margin-right", "0");
        PZ.JQ(horizontalHeader).css("margin-bottom", "0");
    }
    
    if (horizontalHeader != null) {
        horizontalHeader.scrollTop = sender.scrollTop;
    }
}

function SupportsVml() {
    if (typeof SupportsVml.Supported == "undefined") {
        var aDiv = document.body.appendChild(document.createElement("div"));
        aDiv.innerHTML = '<vml:shape id="vmlshapeid" adj="1" />';

        var aShape = aDiv.firstChild;
        aShape.style.behavior = "url(#default#VML)";

        SupportsVml.Supported = aShape ? typeof aShape.adj == "object" : true;
        aDiv.parentNode.removeChild(aDiv);
    }

    return SupportsVml.Supported
}

PZ.JQ(function () {
    var currentViewExtension = PZ.JQ("#Content_CurrentViewExtension").val();
    UpdateViewport(currentViewExtension);
});

function IntialResizeForHSL()
{
    if (PZ.JQ("#HorizontalHeader").length > 0) {					
        var scrollHeightToSubtract = 0;
        if (PZ.JQ("#Viewport")[0].scrollWidth > PZ.JQ("#Viewport")[0].clientWidth) {
            scrollHeightToSubtract = 17;
            PZ.JQ("#HorizontalHeader").addClass("MarginSet");
        }
        
        PZ.JQ("#Viewport").css('margin-bottom', PZ.JQ('#Viewport').outerHeight() * -1 + 'px');
        PZ.JQ("#HorizontalHeader").css('height', (PZ.JQ(window).height() - (PZ.JQ("#Content_BreadcrumbDiv").outerHeight() + scrollHeightToSubtract)) + 'px');
        PZ.JQ("#HorizontalSpacer").css('height', (PZ.JQ(window).height() - (PZ.JQ("#Content_BreadcrumbDiv").outerHeight() + scrollHeightToSubtract)) + 'px');
    }
}

function buildViewSelectionControls()
{
    var currentViewExtension = PZ.JQ("#Content_CurrentViewExtension").val();
    var viewExtensions = PZ.JQ("#Content_ViewExtensions").val().split("|");
    var list = "";
    if (viewExtensions.length > 1) {
            list = PZ.JQ("<span id='ChooseDiagramRendererSpan' />");

        var activeIndex = -1;
        var viewNames = PZ.JQ("#Content_ViewNames").val().split("|");

        for (var i = 0; i < viewExtensions.length; i++) {
            if (currentViewExtension == viewExtensions[i]) activeIndex = i;
            var extension = viewExtensions[i];
            if(extension != "") 
                list.append("<input class='ChooseDiagramRendererButton' type='radio'" + (activeIndex == i ? " checked='checked'" : "") + " id='AlternativeView-" + extension + "' /><label for='AlternativeView-" + extension + "'>" + viewNames[i] + "</label>");
            else
                list.append("<input class='ChooseDiagramRendererButton' type='radio'" + (activeIndex == i ? " checked='checked'" : "") + " id='AlternativeView' /><label for='AlternativeView'>" + viewNames[i] + "</label>");
        }

    }

    return list;
}

PZ.JQ(".ChooseDiagramRendererButton").live("click", function () {
    var extension = "";
    if (PZ.JQ(this).attr("id").indexOf ("AlternativeView-") == 0) {
        extension = PZ.JQ(this).attr("id").substring("AlternativeView-".length);
    }

    var imageFileName = PZ.JQ("#Content_ImageFileName").val();
    if (extension != null && extension != "" && extension.length > 0) imageFileName += "." + extension;

    document.location.href = imageFileName + ".html";
});

function UpdateViewport(extension) {
    var imageFileName = PZ.JQ("#Content_ImageFileName").val();
    var width = PZ.JQ("#Content_Width").val();
    var height = PZ.JQ("#Content_Height").val();
    var format = "";
    var isCustomHtmlMatch = false;
    if (format && format != "") {
        format = format.toLowerCase();
    }
    if (!isCustomHtmlMatch) {
    if (format != "htm") {
        if (imageFileName != null) {
            if (extension != null && extension != "" && extension.length > 0) imageFileName += "." + extension;

            if (SupportsSvg()) {
                svgChosen = true;
                PZ.JQ("#Viewport").html(
                            '<object onload="javascript:parent.SetZoomValue(parent, false);javascript:IntialResizeForHSL();" data="' + imageFileName + '.svg" type="image/svg+xml" width="' + width + '" height="' + height + '" style="margin-left: 32px" />'
                );
                PZ.JQ("#Viewport").attr("style", "overflow: auto;");
                PZ.JQ("#VerticalHeader").html(
                            '<object onload="javascript:parent.SetZoomValue(parent, false);javascript:IntialResizeForHSL();" data="' + imageFileName + '.svg" type="image/svg+xml" width="' + width + '" height="' + height + '" style="margin-left: 32px" />'
                );
                PZ.JQ("#VerticalHeader").attr("style", "overflow: auto;");
                PZ.JQ("#HorizontalHeader").html(
                            '<object onload="javascript:parent.SetZoomValue(parent, false);javascript:IntialResizeForHSL();" data="' + imageFileName + '.svg" type="image/svg+xml" width="' + width + '" height="' + height + '" style="margin-left: 32px" />'
                );
                PZ.JQ("#HorizontalHeader").attr("style", "overflow: auto;");
            } else if (SupportsVml()) {
                vmlChosen = true;
                PZ.JQ.get(imageFileName + ".vml", function (vmlContent) {
                    PZ.JQ("#Viewport").html(
                        '<vml:group coordsize="1000,1000" coordorigin="0,0" style="position:absolute; left:0px; top:0px; width:1000px; height:1000px;">' + vmlContent + '</vml:group>'
                    );
                    PZ.JQ("#Viewport").addClass("ScrollableMainContent");
                    //JK 2013-09-05: Changed due to native zoom function problems in IE8 when using css expressions (which only IEs do support).
                    parent.ResizeViewport();
                    if (vmlChosen) { Vml(); }
                }, 'Text');
            } else {
                PZ.JQ("#Viewport").html(
                    '<img alt="" src="' + imageFileName + '.png" />'
                );
            }

            PZ.JQ("#Viewport").css('height', (PZ.JQ(window).height() - PZ.JQ("#Content_BreadcrumbDiv").outerHeight()) + 'px');
            
            if (PZ.JQ("#VerticalHeader").length > 0) {
                PZ.JQ("#Viewport").css('margin-bottom', PZ.JQ('#Viewport').outerHeight() * -1 + 'px');
            }

            RefreshTree(imageFileName, extension);
        }
    }
    else {
        if (imageFileName != null) {
            if (extension != null && extension != "" && extension.length > 0) imageFileName += "." + extension;
            PZ.JQ("#Content_Viewport_Html").css('height', (PZ.JQ(window).height() - PZ.JQ("#Content_BreadcrumbDiv").outerHeight()) + 'px');
            if (!SupportsSvg()) {
                PZ.JQ("#Content_Viewport_Html").addClass("ScrollableMainContent_Html");
            }
            RefreshTree(imageFileName, extension);
        }
    }
    }
    else {
        if (imageFileName != null) {
            if (extension != null && extension != "" && extension.length > 0) imageFileName += "." + extension;
            PZ.JQ("#Content_Viewport_Html").css('height', (PZ.JQ(window).height() - PZ.JQ("#Content_BreadcrumbDiv").outerHeight()) + 'px');
            RefreshTree(imageFileName, extension);
        }
    }
}

PZ.JQ(window).load(function () {
     PZ.JQ("body").css("overflow", "hidden");
    // highlight corresponding accordion list entry, if not already happened
    var fileName = document.location.href.substr(document.location.href.lastIndexOf("/") + 1);
    if (fileName) {
        fileName = fileName.substr(0, fileName.lastIndexOf("."));
    }

    var listElement = parent.document.getElementById(fileName);
    var details = parent.document.getElementById('Details');
    if ((PZ.JQ(listElement) != null) && (PZ.JQ(listElement).attr("class") == "AccordionListLink") && (PZ.JQ(listElement).parent(".AccordionListLinkContainer")) && !(PZ.JQ(listElement).parent(".AccordionListLinkContainer").hasClass("ClickedAccordionListLinkContainer ui-corner-all"))) {
        PZ.JQ(listElement).parent(".AccordionListLinkContainer").addClass("ClickedAccordionListLinkContainer ui-corner-all");
        PZ.JQ(listElement).addClass("ClickedAccordionListLink");
        // fade in detail content on load
        if (PZ.JQ(".List").find(".ClickedSearchEntries").attr("id") != undefined) {
            details.style.display = "inline";
        }
    }

    if ((PZ.JQ(listElement) != null) && (PZ.JQ(listElement).attr("class") == "AccordionListSubLink") && (PZ.JQ(listElement).parent(".AccordionListSubLinkContainer")) && !(PZ.JQ(listElement).parent(".AccordionListSubLinkContainer").hasClass("ClickedAccordionListSubLinkContainer ui-corner-all"))) {
        PZ.JQ(listElement).parent(".AccordionListSubLinkContainer").addClass("ClickedAccordionListSubLinkContainer ui-corner-all");
        PZ.JQ(listElement).addClass("ClickedAccordionListSubLink");
        // fade in detail content on load
        if (PZ.JQ(".List").find(".ClickedSearchEntries").attr("id") != undefined) {
            details.style.display = "inline";
        }
    }
});

// important Legacy-Functions for Handling of VML
var __DiagramViewer = new DV();

function DV() {
    this.scale = "100%";
    this.GetPercentScaleString = function () {
        return this.scale;
    }
}

function SetViewScale(scale) {
    var vp = document.getElementById("Viewport");
    if (vp != null) {
        vp.firstChild.coordsize = (1000 / scale) + "," + (1000 / scale);
        __DiagramViewer.scale = (scale * 100) + "%";
    }
    var vh = document.getElementById("VerticalHeader");
    if (vh != null) {
        vh.firstChild.coordsize = (1000 / scale) + "," + (1000 / scale);
        __DiagramViewer.scale = (scale * 100) + "%";
    }
    var hh = document.getElementById("HorizontalHeader");
    if (hh != null) {
        hh.firstChild.coordsize = (1000 / scale) + "," + (1000 / scale);
        __DiagramViewer.scale = (scale * 100) + "%";
    }
}

function RefreshTree(imageFileName, extension) {
    var tmpExtension = "";
    if (extension && extension != "") {
        tmpExtension = extension;
    }
    var id = (tmpExtension != "") ? imageFileName.substring(2, (imageFileName.length - 5 - (tmpExtension.length + 1))) : imageFileName.substring(2, (imageFileName.length - 5));
    parent.document.getElementById('TREENODEID').value = id;
    parent.document.getElementById('TREENODEID').onchange();
}


PZ.JQ(function () {
    var tmpNavContentPanel = parent.document.getElementById("NavContentPanel");
    var tmpNavigationCollapsed = parent.document.getElementById("NAVIGATIONCOLLAPSED");
    if ((tmpNavContentPanel != null) && (tmpNavigationCollapsed != null)) {
        PZ.JQ('#ToggleNavigationContainer').toggle(function () {
            PZ.JQ(tmpNavContentPanel).animate({ width: 32 });
            PZ.JQ('#ToggleNavigationIcon').removeClass("ui-icon-triangle-1-w ToggleNavigationIconOpened");
            PZ.JQ('#ToggleNavigationIcon').addClass("ui-icon-triangle-1-e ToggleNavigationIconClosed");
            PZ.JQ(tmpNavigationCollapsed).val("true");
        }, function () {
            PZ.JQ(tmpNavContentPanel).animate({ width: 240 });
            PZ.JQ('#ToggleNavigationIcon').removeClass("ui-icon-triangle-1-e ToggleNavigationIconClosed");
            PZ.JQ('#ToggleNavigationIcon').addClass("ui-icon-triangle-1-w ToggleNavigationIconOpened");
            PZ.JQ(tmpNavigationCollapsed).val("false");
        });
    }

    var tmpDetailContentPanel = parent.document.getElementById("DetailContentPanel");
    var tmpDetailIFrame = parent.document.getElementById("Details");
    var tmpDetailsCollapsed = parent.document.getElementById("DETAILSCOLLAPSED");
    if ((tmpDetailContentPanel != null) && (tmpDetailIFrame != null) && (tmpDetailsCollapsed != null)) {
        PZ.JQ('#ToggleDetailsContainer').toggle(function () {
            PZ.JQ(tmpDetailContentPanel).animate({ width: 36 });
            PZ.JQ('#ToggleDetailContentPanelIcon').removeClass("ui-icon-triangle-1-e ToggleDetailContentPanelIconOpened");
            PZ.JQ('#ToggleDetailContentPanelIcon').addClass("ui-icon-triangle-1-w ToggleDetailContentPanelIconClosed");
            PZ.JQ(tmpDetailIFrame).css("display", "none");
            PZ.JQ(tmpDetailsCollapsed).val("true");
        }, function () {
            PZ.JQ(tmpDetailContentPanel).animate({ width: 340 });
            PZ.JQ('#ToggleDetailContentPanelIcon').removeClass("ui-icon-triangle-1-w ToggleDetailContentPanelIconClosed");
            PZ.JQ('#ToggleDetailContentPanelIcon').addClass("ui-icon-triangle-1-e ToggleDetailContentPanelIconOpened");
            PZ.JQ(tmpDetailIFrame).css("display", "inline");
            PZ.JQ(tmpDetailsCollapsed).val("false");
        });
    }
});