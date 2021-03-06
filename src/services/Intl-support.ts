/**
 * ANGULAR 2 LOCALIZATION
 * An Angular 2 library to translate messages, dates and numbers.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular2localization
 */

/**
 * IntlSupport class.
 * Provides the methods to check if Intl is supported.
 * 
 * @author Roberto Simonetti
 */
export class IntlSupport {

    /**
     * Support for dates.
     * 
     * @param defaultLocale The default locale
     * @return True if the browser supports locales for dates, otherwise false.
     */
    public static DateTimeFormat(defaultLocale: string): boolean {

        // Checking for support.
        try {

            new Intl.DateTimeFormat(defaultLocale).format(new Date());

        } catch (e) {

            return false;

        }

        return true;

    }

    /**
     * Support for numbers.
     * 
     * @param defaultLocale The default locale
     * @return True if the browser supports locales for numbers, otherwise false.
     */
    public static NumberFormat(defaultLocale: string): boolean {

        // Checking for support.
        try {

            var n: number = 0;

            new Intl.NumberFormat(defaultLocale).format(n);

        } catch (e) {

            return false;

        }

        return true;

    }

    /**
     * Support for Collator.
     * 
     * @param lang The current language code
     * @return True if the browser supports Collator, otherwise false.
     */
    public static Collator(lang: string): boolean {

        // Checking for support.
        try {

            var value1: string = "a";
            var value2: string = "b";

            new Intl.Collator(lang).compare(value1, value2);

        } catch (e) {

            return false;

        }

        return true;

    }

}
