jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ztest100/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ztest100/test/integration/pages/App",
	"ztest100/test/integration/pages/Browser",
	"ztest100/test/integration/pages/Master",
	"ztest100/test/integration/pages/Detail",
	"ztest100/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ztest100.view."
	});

	sap.ui.require([
		"ztest100/test/integration/NavigationJourneyPhone",
		"ztest100/test/integration/NotFoundJourneyPhone",
		"ztest100/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});