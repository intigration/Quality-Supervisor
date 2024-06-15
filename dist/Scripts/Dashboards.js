PZ.JQ(function () {
    var totalAmountOfReleasedProcesses = PZ.JQ("#Content_JQTotalAmountOfReleasedProcesses").val();
    var totalAmountOfProcesses = PZ.JQ("#Content_JQTotalAmountOfProcesses").val();
    var totalAmountNewProcesses = PZ.JQ("#Content_JQTotalAmountNewProcesses").val();
    var totalAmountProcessesInProcess = PZ.JQ("#Content_JQTotalAmountProcessesInProcess").val();

    var int_totalAmountOfReleasedProcesses = parseInt(totalAmountOfReleasedProcesses);
    var int_totalAmountOfProcesses = parseInt(totalAmountOfProcesses);
    var int_totalAmountNewProcesses = parseInt(totalAmountNewProcesses);
    var int_totalAmountProcessesInProcess = parseInt(totalAmountProcessesInProcess);

    var chartSeriesColor = PZ.JQ("#Content_JQChartSeriesColor").val();
    var chartSeriesHoverColor = PZ.JQ("#Content_JQChartSeriesHoverColor").val();

    //
    //PZ.JQ(document).on("click", "*[data-pz-navigation]", function () {
    //    var tmpTargetContainerId = PZ.JQ(this).attr("data-pz-navigation");

    //});

    //Process age chart.
    PZ.JQ("#chartContainer").dxChart({
        equalBarWidth: false,
        dataSource: processAgeData,
        commonSeriesSettings: {
            argumentField: "Label",
            type: "bar"
        },
        series: [
			{ valueField: "Value", name: "Process Age", color: chartSeriesColor, hoverStyle: { color: chartSeriesHoverColor } }
        ],
        legend: {
            visible: false,
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        tooltip: {
            enabled: true
        },
        title: ""
    });

    //Gauge #1.
    PZ.JQ("#gaugeContainer").dxCircularGauge({
        preset: "preset1",
        geometry: {
            radius: 20
        },
        scale: {
            startValue: 0,
            endValue: int_totalAmountOfProcesses,
            label: {
                visible: false
            }
        },
        spindle: {
            visible: false
        },
        rangeContainer: {
            backgroundColor: "none"
        },
        commonRangeBarSettings: {
            size: 5,
            backgroundColor: "#F0F0F0"
        },
        rangeBars: [
            { value: int_totalAmountOfReleasedProcesses, offset: 1, color: "#A6C567", text: { indent: 2, format: "decimal" } }
        ]
    });

    //Gauge #2
    PZ.JQ("#gaugeContainer2").dxCircularGauge({
        preset: "preset2",
        geometry: {
            radius: 20
        },
        scale: {
            startValue: 0,
            endValue: int_totalAmountOfProcesses,
            label: {
                visible: false
            }
        },
        spindle: {
            visible: false
        },
        rangeContainer: {
            backgroundColor: "none"
        },
        commonRangeBarSettings: {
            size: 5,
            backgroundColor: "#F0F0F0"
        },
        rangeBars: [
            { value: int_totalAmountProcessesInProcess, offset: 8, color: "#679EC5", text: { indent: 2, format: "decimal" } }
        ]
    });

    //Gauge #3
    PZ.JQ("#gaugeContainer3").dxCircularGauge({
        preset: "preset3",
        geometry: {
            radius: 20
        },
        scale: {
            startValue: 0,
            endValue: int_totalAmountOfProcesses,
            label: {
                visible: false
            }
        },
        spindle: {
            visible: false
        },
        rangeContainer: {
            backgroundColor: "none"
        },
        commonRangeBarSettings: {
            size: 5,
            backgroundColor: "#F0F0F0"
        },
        rangeBars: [
            { value: int_totalAmountNewProcesses, offset: 15, color: "#AD79CE", text: { indent: 2, format: "decimal" } }
        ]
    });

});