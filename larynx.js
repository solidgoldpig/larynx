(function (moduleFactory) {
    if(typeof exports === "object") {
        module.exports = moduleFactory(require("handlebars.choice"), require("handlebars.filter"), require("handlebars.phrase"), require("handlebars.el"), require("handlebars.el.form"), require("handlebars.moment"), require("handlebars.numeral"));
    } else if (typeof define === "function" && define.amd) {
        define(["handlebars.choice", "handlebars.filter", "handlebars.phrase", "handlebars.el", "handlebars.el.form", "handlebars.moment", "handlebars.numeral"], moduleFactory);
    }
}(function (Choice, Filter, Phrase, ElHelper, ElFormHelper, MomentHelper, NumeralHelper) {
/**
 * @module larynx
 * @description  Convenience object providing a collection of Handlebars helper objects and some of their methods
 *
 *     var Larynx = require("larynx");
 *
 * @returns {object} Larynx instance
 */
    var locale = "default";

    var Larynx = {
        /**
         * @member {object} Choice
         * @static
         * @description Alias to handlebars.choice
         */
        Choice: Choice,
        /**
         * @member {object} Filter
         * @static
         * @description Alias to handlebars.filter
         */
        Filter: Filter,
        /**
         * @member {object} Phrase
         * @static
         * @description Alias to handlebars.phrase
         */
        Phrase: Phrase,
        /**
         * @member {object} El
         * @static
         * @description Alias to handlebars.el
         */
        El: ElHelper,
        /**
         * @member {object} ElForm
         * @static
         * @description ALias to handlebars.el.form
         */
        ElForm: ElFormHelper,
        /**
         * @member {object} Moment
         * @static
         * @description Alias to handlebars.moment
         */
        Moment: MomentHelper,
        /**
         * @member {object} Numeral
         * @static
         * @description Alias to handlebars.numeral
         */
        Numeral: NumeralHelper,
        /**
         * @method locale
         * @static
         * @param {string} [loc]
         * @description Get or set default locale used by Larynx
         *
         * If called without loc parameter, returns locale
         *
         * If called with loc parameter, sets locale for Larynx and
         *
         * - Larynx.Phrase
         * - Larynx.Choice
         * - Larynx.Filter
         *
         * @returns {string} Larynx’s locale
         */
        locale: function (loc) {
            if (loc) {
                locale = loc;
                this.Choice.locale(loc);
                this.Filter.locale(loc);
                this.Phrase.locale(loc);
            }
            return locale;
        },
        /**
         * @method setLanguages
         * @static
         * @param {object} [languages] Object of language phrases
         * @param {object} [options]
         * @param {boolean} [options.localefallback=false] Whether default language should provide missing values for other languages
         * @param {string} [options.penddelimiter=.] Delimiter to use when appending or prepending keys
         * @description Set languages object without which Phrase cannot work
         *
         * Clears any previously set languages
         *
         */
        setLanguages: function (languages, options) {
            this.Phrase.setLanguages(languages, options);
        },
        /**
         * @method addLanguages
         * @static
         * @param {object} [languages] Object of language phrases
         * @description Add keys to existing languages object
         *
         * Clears any previously cached strings or templates for languages passed
         */
        addLanguages: function (languages) {
            this.Phrase.addLanguages(languages);
        },
        /**
         * @method setLanguage
         * @static
         * @param {string} lang Language to be set
         * @param {object} phrases Phrases object for the language
         * @description Set language individually
         *
         * Clears any previously cached strings or templates for language
         *
         */
        setLanguage: function (lang, phrases) {
            this.Phrase.setLanguage(lang, phrases);
        },
        /**
         * @method addLanguage
         * @static
         * @param {string} lang Language to add to
         * @param {object} phrases Phrases object for the language
         * @description Add phrases to individual language
         *
         * Clears any previously cached strings or templates for language
         *
         */
        addLanguage: function (lang, phrases) {
            this.Phrase.addLanguage(lang, phrases);
        },
        /**
         * @method registerFilter
         * @static
         * @param {string} name Name of filter
         * @param {function} fn Filter function
         * @description Add filter to Filter
         */
        registerFilter: function (name, fn) {
            this.Filter.registerFilter(name, fn);
        },
        /**
         * @method unregisterFilter
         * @static
         * @param {string} name Name of filter
         * @description Remove filter from Filter
         */
        unregisterFilter: function (name) {
            this.Filter.unregisterFilter(name);
        },
        /**
         * @method registerHelpers
         * @static
         * @param {object} hbars Handlebars instance
         * @description Register Larynx helpers with Handlebars
         */
        registerHelpers: function (hbars) {
            this.Choice.registerHelpers(hbars);
            this.Filter.registerHelper(hbars);
            this.Phrase.registerHelper(hbars);
            this.El.registerHelper(hbars);
            this.ElForm.registerHelpers(hbars);
            this.Moment.registerHelpers(hbars);
            this.Numeral.registerHelpers(hbars);
        }
    };

    return Larynx;

}));