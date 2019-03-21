require.config({
    map: {
        '*': {
            'jquery': 'jquery-private',
        },
        'jquery-private': {
            'jquery': 'jquery',
        },
        'jquery-perf': {
            'jquery': 'jquery',
        },
    }
})

require(['scripts/main'])
