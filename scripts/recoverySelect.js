// JavaScript Document
$(function(){
    var resolutionChart = $("#resolutionChart").dxChart({
        palette: "#057dc2",
        dataSource: schoolData,
        commonSeriesSettings: {
            argumentField: "dateMonthName",
            type: "line"
        },
        margin: {
            bottom: 10
        },
        argumentAxis: {
            valueMarginsEnabled: false,
            discreteAxisDivisionMode: "crossLabels",
            grid: {
                visible: true
            }
        },
        series: [
            { valueField: "amountPlacedWithEcsi", name: "Amount" },
        ],
        legend: {
            visible: false
        },
        title: { 
            text: ""
        },
        "export": {
            enabled: true
        },
		tooltip: {
                    paddingLeftRight: 10,
                    paddingTopBottom: 4,
                    enabled: true,
                    format: {
                        type: 'thousands',
                        precision: 2
                    },
                    customizeTooltip: function () {
                        return { text: 'Amount Resolved: $ ' + this.valueText + '\n' + 'Resolution Rate: 85.4%' }; //TODO: add resolution rate
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3
                    }
                },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                return {
                    text: "Resolution Rate: 83.2%" + '\n' + "Amount Resolved: $ " + arg.valueText
                };
            }
        }
    }).dxChart("instance");
    
});

$(function(){

    var tabsInstance = $("#recoveryTabs").dxTabs({
        dataSource: tabs,
        selectedIndex: 0,
        onItemClick: function(e) {
            selectBox.option("value", e.itemData.id);
        }
    }).dxTabs("instance");
    
    
});

$(function(){
    $("#resolutionRange-selector").dxRangeSelector({
        size: {
            height: 90
        },
        scale: {
            startValue: new Date(2016, 9),
            endValue: new Date(2017, 8),
            tickInterval: "month",
            minorTickInterval: "month",
			minorTick: {
                visible: false,
            }
        },
		behavior: {
			callValueChanged: "onMovingComplete",
			snapToTicks: true
		},
        sliderMarker: {
            format: "month",
			color: "#057dc2"
        },
		value: ["startValue", "endValue"]
		    });
    
});


$(function(){
    var detailDataGrid = $("#detailDataGrid").dxDataGrid({
        dataSource: schoolData,
        showColumnLines: false,
        showRowLines: true,
        rowAlternationEnabled: true,
        showBorders: true,
        columns: [
            {
              dataField: "dateYear",
              caption: " ",
              width: 50
            },
			{
              dataField: "dateMonthName",
			  filterRow: false,
              caption: "Date",
              width: 100
            },
            
            {
              dataField: "numberOfAccounts",
              caption: "Accounts Placed",
              dataType: "number",
			  width: 120
            },
            {
              caption: "Amount Placed",
			  dataField: "amountPlacedWithEcsi",
              dataType: "number",
			  format: "currency",
              width: 150
            },
            {
              dataField: "numberOfAccountsResolvedInFull",
              caption: "Amount Resolved",
              width: 150
            },
			{
              dataField: "amountResolved",
              caption: "Amount Placed",
              dataType: "number",
			  format: "currency",
              width: 150
            }
        ]
    }).dxDataGrid("instance");
    
});

var tabs = [
    {     
        id: 0,
        text: "Resolved Accounts" 
    },
    { 
        id: 1,
        text: "Active Inventory" 
    },
    { 
        id: 2,
        text: "Agency Inventory" 
    },
    { 
        id: 3,
        text: "Payment Plans" 
    }
];



// You can ditch this...
var schoolData =
	[{"id":237,"clientCodeMonth":"A31201610","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"October","dateMonthNumber":10,"dateYear":2016,"numberOfAccounts":84,"amountPlacedWithEcsi":165379.54,"amountResolved":111631.24,"resolutionPercent":67.50,"numberOfCurrentAccounts":1,"currentBalance":10216.55,"percentOfPlacedStillActive":6.18,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":54,"amountResulvedInFull":112364.19,"percentResolvedInFull":67.94,"numberOfAccountsPlacedWithAgency":28,"amountPlacedWithAgency":43531.75,"amountResovlvedAtAgency":4195.91,"numberOfAccountsActiveAtAgency":23,"balanceWithAgency":39335.84,"percentGrandTotalResolution":68.78,"updated":"2017-09-19T16:34:18"},{"id":238,"clientCodeMonth":"A31201611","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"November","dateMonthNumber":11,"dateYear":2016,"numberOfAccounts":7,"amountPlacedWithEcsi":20506.13,"amountResolved":6116.81,"resolutionPercent":29.82,"numberOfCurrentAccounts":0,"currentBalance":0.00,"percentOfPlacedStillActive":0.00,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":2,"amountResulvedInFull":6116.81,"percentResolvedInFull":29.82,"numberOfAccountsPlacedWithAgency":5,"amountPlacedWithAgency":14389.32,"amountResovlvedAtAgency":7109.37,"numberOfAccountsActiveAtAgency":4,"balanceWithAgency":7279.95,"percentGrandTotalResolution":64.49,"updated":"2017-09-19T16:34:18"},{"id":239,"clientCodeMonth":"A31201701","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"January","dateMonthNumber":1,"dateYear":2017,"numberOfAccounts":191,"amountPlacedWithEcsi":378997.97,"amountResolved":211381.86,"resolutionPercent":55.77,"numberOfCurrentAccounts":4,"currentBalance":19655.89,"percentOfPlacedStillActive":5.19,"numberOfAccountsToPay":4,"projectedToPayOnPayPlan":19655.89,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":104,"amountResulvedInFull":186539.32,"percentResolvedInFull":49.21,"numberOfAccountsPlacedWithAgency":80,"amountPlacedWithAgency":149023.48,"amountResovlvedAtAgency":9338.11,"numberOfAccountsActiveAtAgency":71,"balanceWithAgency":139685.37,"percentGrandTotalResolution":57.84,"updated":"2017-09-19T16:34:18"},{"id":240,"clientCodeMonth":"A31201702","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"February","dateMonthNumber":2,"dateYear":2017,"numberOfAccounts":30,"amountPlacedWithEcsi":35367.73,"amountResolved":13004.14,"resolutionPercent":36.76,"numberOfCurrentAccounts":1,"currentBalance":10202.13,"percentOfPlacedStillActive":28.85,"numberOfAccountsToPay":1,"projectedToPayOnPayPlan":10202.13,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":18,"amountResulvedInFull":12626.14,"percentResolvedInFull":35.69,"numberOfAccountsPlacedWithAgency":11,"amountPlacedWithAgency":12161.46,"amountResovlvedAtAgency":584.67,"numberOfAccountsActiveAtAgency":10,"balanceWithAgency":11576.79,"percentGrandTotalResolution":38.42,"updated":"2017-09-19T16:34:18"},{"id":241,"clientCodeMonth":"A31201703","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"March","dateMonthNumber":3,"dateYear":2017,"numberOfAccounts":27,"amountPlacedWithEcsi":23938.66,"amountResolved":14660.21,"resolutionPercent":61.24,"numberOfCurrentAccounts":0,"currentBalance":0.00,"percentOfPlacedStillActive":0.00,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":19,"amountResulvedInFull":10751.21,"percentResolvedInFull":44.91,"numberOfAccountsPlacedWithAgency":8,"amountPlacedWithAgency":9278.45,"amountResovlvedAtAgency":1538.46,"numberOfAccountsActiveAtAgency":7,"balanceWithAgency":7739.99,"percentGrandTotalResolution":67.66,"updated":"2017-09-19T16:34:18"},{"id":242,"clientCodeMonth":"A31201704","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"April","dateMonthNumber":4,"dateYear":2017,"numberOfAccounts":79,"amountPlacedWithEcsi":91889.57,"amountResolved":27721.08,"resolutionPercent":30.16,"numberOfCurrentAccounts":21,"currentBalance":3779.51,"percentOfPlacedStillActive":4.11,"numberOfAccountsToPay":2,"projectedToPayOnPayPlan":757.22,"numberOfAccountsToPayNotOnPayPlan":1,"projectedToPayNotOnPayPlan":977.91,"numberOfAccountsResolvedInFull":27,"amountResulvedInFull":23362.96,"percentResolvedInFull":25.42,"numberOfAccountsPlacedWithAgency":31,"amountPlacedWithAgency":60388.98,"amountResovlvedAtAgency":3705.06,"numberOfAccountsActiveAtAgency":26,"balanceWithAgency":56683.92,"percentGrandTotalResolution":34.19,"updated":"2017-09-19T16:34:18"},{"id":243,"clientCodeMonth":"A31201705","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"May","dateMonthNumber":5,"dateYear":2017,"numberOfAccounts":7,"amountPlacedWithEcsi":23186.64,"amountResolved":22839.30,"resolutionPercent":98.50,"numberOfCurrentAccounts":0,"currentBalance":0.00,"percentOfPlacedStillActive":0.00,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":6,"amountResulvedInFull":22839.30,"percentResolvedInFull":98.50,"numberOfAccountsPlacedWithAgency":1,"amountPlacedWithAgency":347.34,"amountResovlvedAtAgency":0.00,"numberOfAccountsActiveAtAgency":1,"balanceWithAgency":347.34,"percentGrandTotalResolution":98.50,"updated":"2017-09-19T16:34:18"},{"id":244,"clientCodeMonth":"A31201706","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"June","dateMonthNumber":6,"dateYear":2017,"numberOfAccounts":111,"amountPlacedWithEcsi":94638.43,"amountResolved":54476.89,"resolutionPercent":57.56,"numberOfCurrentAccounts":21,"currentBalance":15941.43,"percentOfPlacedStillActive":16.84,"numberOfAccountsToPay":1,"projectedToPayOnPayPlan":4221.24,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":75,"amountResulvedInFull":54326.13,"percentResolvedInFull":57.40,"numberOfAccountsPlacedWithAgency":15,"amountPlacedWithAgency":24220.11,"amountResovlvedAtAgency":0.00,"numberOfAccountsActiveAtAgency":15,"balanceWithAgency":24220.11,"percentGrandTotalResolution":57.56,"updated":"2017-09-19T16:34:18"},{"id":245,"clientCodeMonth":"A31201707","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"July","dateMonthNumber":7,"dateYear":2017,"numberOfAccounts":111,"amountPlacedWithEcsi":163136.04,"amountResolved":32264.12,"resolutionPercent":19.77,"numberOfCurrentAccounts":64,"currentBalance":118498.06,"percentOfPlacedStillActive":72.64,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":41,"amountResulvedInFull":32264.12,"percentResolvedInFull":19.77,"numberOfAccountsPlacedWithAgency":6,"amountPlacedWithAgency":12373.86,"amountResovlvedAtAgency":0.00,"numberOfAccountsActiveAtAgency":6,"balanceWithAgency":12373.86,"percentGrandTotalResolution":19.77,"updated":"2017-09-19T16:34:18"},{"id":246,"clientCodeMonth":"A31201708","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"August","dateMonthNumber":8,"dateYear":2017,"numberOfAccounts":3,"amountPlacedWithEcsi":82.00,"amountResolved":82.00,"resolutionPercent":100.00,"numberOfCurrentAccounts":0,"currentBalance":0.00,"percentOfPlacedStillActive":0.00,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":3,"amountResulvedInFull":82.00,"percentResolvedInFull":100.00,"numberOfAccountsPlacedWithAgency":0,"amountPlacedWithAgency":0.00,"amountResovlvedAtAgency":0.00,"numberOfAccountsActiveAtAgency":0,"balanceWithAgency":0.00,"percentGrandTotalResolution":0.00,"updated":"2017-09-19T16:34:18"},{"id":247,"clientCodeMonth":"A31201709","clientCode":"A31","clientName":"THE UNIVERSITY OF ALABAMA","dateMonthName":"September","dateMonthNumber":9,"dateYear":2017,"numberOfAccounts":264,"amountPlacedWithEcsi":344117.72,"amountResolved":2285.00,"resolutionPercent":0.66,"numberOfCurrentAccounts":260,"currentBalance":336153.72,"percentOfPlacedStillActive":97.69,"numberOfAccountsToPay":0,"projectedToPayOnPayPlan":0.00,"numberOfAccountsToPayNotOnPayPlan":0,"projectedToPayNotOnPayPlan":0.00,"numberOfAccountsResolvedInFull":3,"amountResulvedInFull":2285.00,"percentResolvedInFull":0.66,"numberOfAccountsPlacedWithAgency":1,"amountPlacedWithAgency":5679.00,"amountResovlvedAtAgency":0.00,"numberOfAccountsActiveAtAgency":1,"balanceWithAgency":5679.00,"percentGrandTotalResolution":0.66,"updated":"2017-09-19T16:34:18"}]