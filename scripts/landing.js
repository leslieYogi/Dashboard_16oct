$(function () {
	$("#landing-gauge").dxBarGauge({
		startValue: -50,
		endValue: 50,
		baseValue: 0,
		values: [-41.3, 34.8, -30.9, 45.2],
		label: {
			visible: false
		},
		"export": {
			enabled: false
		},
		palette: "ocean"
	});

	$("#landing-monthGauge").dxLinearGauge({
		scale: {
			startValue: 0,
			endValue: 100,
			tickInterval: 10,
		},
		tick: {
			color: "#4c92ce"
		},
		label: {
			indentFromTick: -5
		},
		valueIndicator: {
			type: 'rangebar',
			color: '#4c92ce'
		},
		subvalueIndicator: {
			offset: -20
		},

		value: 72,
		subvalues: 72,
		title: {
			text: "Heartland ECSI Gives Back - 2017 Annual Giving",
			font: {
				size: 16
			}
		}
	});
});
