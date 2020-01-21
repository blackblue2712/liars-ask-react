export const debounce = (fn, delay, immediate) => {
    let timeout;

    return function executedFn() {
        let context = this;
        let args = arguments;
        console.log(this, arguments);

        let later = function () {
            timeout = null;
            if(!immediate) fn.apply(context, args);
        }

        clearTimeout(timeout);
        let callNow = immediate && !timeout;

        setTimeout(later, delay);

        if(callNow) fn.apply(context, args);
    }

}