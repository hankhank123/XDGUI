jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ztt3/ztt3/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ztt3/ztt3/test/integration/pages/App",
	"ztt3/ztt3/test/integration/pages/Browser",
	"ztt3/ztt3/test/integration/pages/Master",
	"ztt3/ztt3/test/integration/pages/Detail",
	"ztt3/ztt3/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ztt3.ztt3.view."
	});

	sap.ui.require([
		"ztt3/ztt3/test/integration/NavigationJourneyPhone",
		"ztt3/ztt3/test/integration/NotFoundJourneyPhone",
		"ztt3/ztt3/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});