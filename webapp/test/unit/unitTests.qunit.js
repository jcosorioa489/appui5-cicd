/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cominchcape/appui5-cicd/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
