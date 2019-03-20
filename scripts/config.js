require.config({
    paths: {
        'jquery': 'node_modules/jquery/dist/jquery',
        'jquery-private': 'scripts/jquery-private',
        'jquery-perf': 'scripts/jquery-perf-1.8.3',
    },
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
