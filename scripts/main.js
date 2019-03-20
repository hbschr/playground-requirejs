requirejs([
    'scripts/helper/util',
    'jquery',
], function(util, $) {
    console.log('main loading')
    util()
    console.log('global jquery version', jQuery.fn.jquery)
    console.log(util, $)
})
