
export const getDaysDateDiff = (date1, date2) => {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY) + 1;
    return diffDays;
}


export const formatter = (lang = "en-US", style = "currency", currency = "USD") => {
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    return new Intl.NumberFormat(lang, {
        style: style,
        currency: currency
    })

}

export const formatter2 = (num, lang = "en-US", style = "currency", currency = "USD") => {
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

    return num.toLocaleString(lang, {
        style: currency,
        currency: currency
    }); /* $2,500.00 */
}

export const formatMoney = ({ amount, decimalCount = 2, decimal = ".", thousands = "," }) => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        /* lunghezza stringa completa di decimali ma arrotondata agli interi, quindi non prende  decimali
           non ho capito ancora perchè li inserisce */
        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();

        /* se stringa >3 cercxa il resto di 3 altrimenti 0 */
        let j = (i.length > 3) ? i.length % 3 : 0;

        /* se j>0 (e cmq <3) mette la ","" in testa poi procede a mettere una vigola ogni gruppo di 
           3 cifre seguito da un altra cifra (?=\d). Se le cercavo seguite da una "q" avrei inserito 
           (?=\q). La sostituzione avviene solo sulle 3 cifre. la cifra seguente
           poi ovviamente potra' fare parte di un altro gruppo di 3 cifre a cui aggiungere la "," etc etc... */
        return negativeSign +
            (j ? i.substr(0, j) + thousands : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +

            /* infine dalla cifra con decimali sottraggo la cifra a stringa senza i decimali
               ottenendo esempio tipo 0.213213123, li fixo a decimalCount e con slice(2)
               elimino "0."  */
            (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

