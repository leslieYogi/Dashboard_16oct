"use strict";

$(function () {
    SalesDashboard.themes = [
        {
            name: "SalesDashboardMobileTheme",
            chart: {
                commonAxisSettings: {
                    placeholderSize: 30,
                    grid: {
                        visible: true,
                        color: '#526b2b'
                    },
                    label: {
                        indentFromAxis: 5,
                        font: {
                            color: '#fff',
                            opacity: 0.75,
                            size: 10
                        }
                    }

                },
                commonPaneSettings: {
                    border: {
                        visible: true,
                        color: '#78a03f'
                    }
                },
                commonSeriesSettings: {
                    point:  {
                        border: { color: "#fff", visible: true, width: 2 },
                        size: 2,
                        hoverStyle: {
                            border: { color: "#fff", visible: true, width: 2 },
                            color: "#526b2b",
                            size: 4
                        }
                    },
                    border: {
                        color: '#fff',
                        width: 3,
                        visible: true
                    }
                },
                tooltip: {
                    color: "#fff",
                    font: {
                        color: '#f15a24',
                        opacity: 1,
                        size: 20,
                        weight: 700
                    },
                    shadow: {
                        opacity: 0.25,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3
                    }
                },
                legend: {
                    visible: false
                },
                loadingIndicator: {
                    backgroundColor: "#cf5777",
                    font: {color: "#fff"}
                },
                valueAxis: {
                    label: {
                        indentFromAxis: 3
                    }
                }
            }
        },
        {
            name: "SalesDashboardTabletTheme",
            chart: {
                commonAxisSettings: {
                    placeholderSize: 30,
                    grid: {
                        visible: true,
                        color: '#d3d3d3'
                    },
                    label: {
                        indentFromAxis: 5,
                        font: {
                            color: '#373737',
                            opacity: 0.75,
                            size: 10
                        }
                    }

                },
                commonPaneSettings: {
                    border: {
                        visible: true,
                        color: '#d3d3d3'
                    }
                },
                tooltip: {
                    border: { color: "#f15a24" },
                    color: "#f15a24",
                    font: {
                        color: "#fff",
                        opacity: 1,
                        size: 14
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3
                    }
                },
                valueAxis: {
                    label: {
                        indentFromAxis: 3
                    }
                }
            }
        },
        {
            name: "CriteriaSalesMobileTheme",
            chart: {
                commonAxisSettings: {
                    label: {
                        font: {
                            color: "#fff",
                            opacity: 0.75,
                            size: 10
                        },
                        indentFromAxis: 5
                    }

                },
                commonPaneSettings: {
                    border: {
                        visible: true,
                        color: "#78a03f"
                    }
                },
                commonSeriesSettings: {
                    label: {
                        font: {
                            color: '#526b2b'
                        }
                    }
                },
                valueAxis: {
                    grid: {
                        visible: true,
                        color: "#526b2b"
                    },
                    label: {
                        indentFromAxis: 3
                    }
                },
                tooltip: {
                    color: "#fff",
                    font: {
                        color: "#526b2b"
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3
                    }
                },
                loadingIndicator: {
                    backgroundColor: "#cf5777",
                    font: { color: "#fff" }
                }
            }
        },
        {
            name: "CriteriaSalesTabletTheme",
            chart: {
                commonAxisSettings: {
                    label: {
                        font: {
                            color: "#373737",
                            opacity: 0.75,
                            size: 10
                        },
                        indentFromAxis: 5
                    }

                },
                commonPaneSettings: {
                    border: {
                        visible: true,
                        color: "#d3d3d3"
                    }
                },
                commonSeriesSettings: {
                    label: {
                        font: {
                            color: '#ffffff'
                       }
                    }
                },
                valueAxis: {
                    grid: {
                        visible: true,
                        color: "#d3d3d3"
                    },
                    label: {
                        indentFromAxis: 3
                    }
                },
                tooltip: {
                    border: { color: "#526b2b" },
                    color: "#526b2b",
                    font: {
                        color: "#fff"
                    },
                    shadow: {
                        opacity: 0.15,
                        blur: 0,
                        color: "#000000",
                        offsetX: 3,
                        offsetY: 3
                    }
                }
            }
        },
        {
            name: "ChannelsMobileTheme",
            pie: {
                legend: {
                    verticalAlignment: 'bottom',
                    paddingTopBottom: 0,
                    paddingLeftRight: 0,
                    horizontalAlignment: "center",
                    itemTextPosition: "bottom",
                    orientation: "horizontal",
                    font: {
                        color: 'white',
                        size: 12,
                        opacity: 1
                    },
                    rowCount: 1
                },
                loadingIndicator: {
                    backgroundColor: "#cf5777",
                    font: { color: "#fff" }
                }
            }
        },
        {
            name: "ChannelsTabletTheme",
            pie: {
                legend: {
                    margin: { top: 60, left: 2 },
                    paddingTopBottom: 10,
                    paddingLeftRight: 10,
                    columnCount: 1,
                    border: {
                        visible: true,
                        color: '#d2d2d2',
                        opacity: 1
                    },
                    font: {
                        color: '#373737',
                        size: 12,
                        opacity: 1
                    }
                }
            }
        }

    ];
    
    DevExpress.viz.registerPalette(SalesDashboard.tabletPalette, {
        simpleSet: ["#14487e", "#057dc2", "#4c92ce", "#78a03f", "#526b2b", "#f15a24"],
        indicatingSet: ['#78a03f', '#eeba69', '#526b2b'],
        gradientSet: [ "#78a03f","#b0324f"]
    });
    DevExpress.viz.registerPalette(SalesDashboard.mobilePalette, {
        simpleSet: ["#f6da80", "#85e3fb", "#ecaaf0", "#ffa97f", "#b3c5ff", "#ff98a2", "#ff98a2", "#bed9ad"],
        indicatingSet: ['#90ba58', '#eeba69', '#a37182'],
        gradientSet: ['#78b6d9', '#eeba69']
    });
    $.each(SalesDashboard.themes, function (_, theme) {
        DevExpress.viz.registerTheme(theme);
    });
});