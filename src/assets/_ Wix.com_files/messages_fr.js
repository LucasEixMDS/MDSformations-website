"use strict";

try {
    angular.module("styleTranslations");
} catch (e) {
    angular.module("styleTranslations", [ "pascalprecht.translate" ]);
}

angular.module("styleTranslations").config([ "$translateProvider", function($translateProvider) {
    var translations = {
        general: {
            YO: "Bonjour"
        },
        calendar: {
            clear: "effacer"
        }
    };
    $translateProvider.translations("fr", translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
        $translateProvider.preferredLanguage("fr");
    }
} ]).value("preferredLanguage", "fr");