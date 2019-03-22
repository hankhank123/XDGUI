jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ZXDGUI_S0011LS_UI5Set in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"ztest100/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ztest100/test/integration/pages/App",
	"ztest100/test/integration/pages/Browser",
	"ztest100/test/integration/pages/Master",
	"ztest100/test/integration/pages/Detail",
	"ztest100/test/integration/pages/Create",
	"ztest100/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ztest100.view."
	});

	sap.ui.require([
		"ztest100/test/integration/MasterJourney",
		"ztest100/test/integration/NavigationJourney",
		"ztest100/test/integration/NotFoundJourney",
		"ztest100/test/integration/BusyJourney",
		"ztest100/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});