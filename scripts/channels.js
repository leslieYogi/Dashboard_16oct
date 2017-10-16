"use strict";

SalesDashboard.channelsModel = function () {
    var self = this,
        currentYear = SalesDashboard.rangeYear;

    self.dailySales = [];

    self.salesDate = SalesDashboard.getDate();

    self.updateDailyValues = function (value) {
        var fields = ["Retail"];

        var results = {
            dailyRetail: 0,
            
        };

        $.each(value, function () {
            var hourResult = this;
            $.each(fields, function () {
                results["daily" + this] = results["daily" + this] + hourResult[this];
            });
        });

        $.each(fields, function () {
            results.dailyTotal += results["daily" + this];
            $("#daily" + this).text('$' + (Math.round(results["daily" + this] / 100000)) / 10 + 'M');
        });

        $("#dailyTotal").text('$' + (Math.round(results.dailyTotal / 100000)) / 10 + 'M');
    };

    self.changeDay = function (offset, disableNext) {
        var salesDate = new Date(self.salesDate),
            tmp = SalesDashboard.getDate(),
            today = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());

        salesDate.setDate(salesDate.getDate() + offset);

        if (new Date(salesDate.getFullYear(), salesDate.getMonth(), salesDate.getDate()).getTime() > today.getTime()) {
            return;
        }
        self.salesDate = salesDate;
        self.getDaySales(salesDate);

        $("#nextDay").removeClass("disabled");
        if (new Date(salesDate.getFullYear(), salesDate.getMonth(), salesDate.getDate()).getTime() == today.getTime() || disableNext)
            $("#nextDay").addClass("disabled");
    };

    self.getDaySales = function (salesDate) {

        function parseData(data) {
            $.each(data, function (i, val) {
                val.SaleDate = new Date(val.SaleDate);

                val.Retail = val.SalesByChannel.Retail || 0;
                

                delete val.SalesByChannel;
            });
            self.dailySales = data;
            if (self.dailySales.length < 5) {
                self.changeDay(-1, true);
                return;
            }
            $("#salesDate").text("(" + Globalize.formatDate(self.salesDate, { date: "medium" }) + ")");
            
            self.drawDailyChart();
        }

        SalesDashboard.loadData({ day: Globalize.formatDate(salesDate, { raw: 'yyyy-MM-dd' }) }, parseData, true);
    };

    self.salesRange = [];
    self.salesRangeSelectedRange = null;
    self.criteriaSalesByRange = [];
    self.salesByRange = function () {
        return $.map(self.criteriaSalesByRange, function (arg) {
            return arg.Sales;
        });
    };

    self.processCriteriaSalesData = function (data) {
        if (!data || !data.length) {
            return;
        }
        $.each(data, function (_, item) {
            var delimiter = SalesDashboard.isPhone ? "<br>" : " - ";
            item.Criteria = item.Criteria + delimiter + '$' + (item.Sales / 1000000).toFixed(0) + 'M';
        });
        self.criteriaSalesByRange = data;
        
        self.drawPieChart();
        if (!SalesDashboard.isPhone) {
            self.drawBarGauge();
        }
    };

    self.init = function () {
        $("#rangeYearName").text("(" + SalesDashboard.rangeYear + ")");

        self.drawDailyChart();
        self.changeDay(0);

        var range = SalesDashboard.initRangeSelector();

            range.onSelectionChanged.add(function (e) {
                SalesDashboard.loadData({
                    startDate: Globalize.formatDate(e.value[0], { raw: 'yyyy-MM-dd' }),
                    endDate: Globalize.formatDate(e.value[1], { raw: 'yyyy-MM-dd' })
                }, self.processCriteriaSalesData, true);
            });
        
        SalesDashboard.loadData({
            startDate: (Globalize.formatDate(SalesDashboard._currentDay, { raw: 'yyyy-01-01' })),
            endDate: (Globalize.formatDate(SalesDashboard._currentDay, { raw: 'yyyy-12-31' }))
        }, function (data) {
            if (data && data.length) {
                self.salesRangeSelectedRange = undefined;
                self.salesRange = data;
                if (!SalesDashboard.isPhone) range.load(0);
            }
        });

        $("#nextDay").click(function () {
            if (!$(this).hasClass("disabled"))
                SalesDashboard.currentModel.changeDay(1);
        });
        $("#prevDay").click(function () {
            if(!$(this).hasClass("disabled"))
                SalesDashboard.currentModel.changeDay(-1);
        });
    };

    self.drawDailyChart = function() {
        self.updateDailyValues(self.dailySales);
        var instance = $("#dailySalesChart").data("dxChart");
        if(instance) {
            instance.render();
            instance.option("dataSource", self.dailySales);
        } else {
            $("#dailySalesChart").dxChart({
                onIncidentOccurred: null,
                theme: SalesDashboard.isPhone ? "SalesDashboardMobileTheme" : "SalesDashboardTabletTheme",
                palette: SalesDashboard.getCurrentPaletteName(),
                dataSource: self.dailySales,

                argumentAxis: {
                    valueMarginsEnabled: false,
                    placeholderSize: 25,
                    argumentType: 'month',
               
                    tickInterval: { month: 12 },
                    label: {
                        overlappingBehavior: 'none',
                        format: 'month',

                    }
                },
				export: {
    	    enabled: true
    	},
                valueAxis: {
                    grid: {
                        visible: true
                    },
                    label: {
                        format: 'thousands'
                    }
                },
                commonSeriesSettings: {
                    type: 'line',
                    argumentField: 'SaleDate'
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
                        return { text: 'Amount Resolved: $ ' + this.valueText + '\n' + 'Resolution Rate: 85.4%' };
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3
                    }
                },
                series: [
                    {
                        valueField: 'Retail', name: 'Retail',
                        point: {
                            color: "#4c92ce",
                            border: { color:"#4c92ce"},
                            hoverStyle: {
                                border: {
                                    color: "#4c92ce"
                                }
                            }
                        }
                    },
                 
                ],
                legend: {
                    visible: false
                }
            });
        }
    };

 

 
    self.redrawGraph = function (id) {
        if (id == "#day") { 
            self.drawDailyChart();
        } else { 
            self.drawPieChart();
        }
    };
};


SalesDashboard.currentModel = new SalesDashboard.channelsModel();
SalesDashboard.currentModel.init();
