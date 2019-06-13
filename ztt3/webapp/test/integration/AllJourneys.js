jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Authors in the list
// * All 3 Authors have at least one books

sap.ui.require([
	"sap/ui/test/Opa5",
	"ztt3/ztt3/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ztt3/ztt3/test/integration/pages/App",
	"ztt3/ztt3/test/integration/pages/Browser",
	"ztt3/ztt3/test/integration/pages/Master",
	"ztt3/ztt3/test/integration/pages/Detail",
	"ztt3/ztt3/test/integration/pages/Create",
	"ztt3/ztt3/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ztt3.ztt3.view."
	});

	sap.ui.require([
		"ztt3/ztt3/test/integration/MasterJourney",
		"ztt3/ztt3/test/integration/NavigationJourney",
		"ztt3/ztt3/test/integration/NotFoundJourney",
		"ztt3/ztt3/test/integration/BusyJourney",
		"ztt3/ztt3/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});