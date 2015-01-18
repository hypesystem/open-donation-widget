requirejs.config({
    baseUrl: '../node_modules',
    paths: {
        script: '../examples/script',
        local: '..'
    }
});

requirejs.config(["script"], function() {});
