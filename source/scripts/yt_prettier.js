'use srtict';

const YT_Prettier = () => {
    let scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/4bbf8bdb\/www-widgetapi.vflset\/www-widgetapi.js';
    try {
        var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", {
            createScriptURL: (x) => x
        });
        scriptUrl = ttPolicy.createScriptURL(scriptUrl)
    } catch (e) { }

    let YT;
    if (!window["YT"]) YT = { loading: 0, loaded: 0 };

    let YTConfig;
    if (!window["YTConfig"]) YTConfig = { "host": "https://www.youtube.com" };

    if (!YT.loading) {
        YT.loading = 1;
        (() => {
            let l = [];
            YT.ready = callback => {
                if (YT.loaded) callback();
                else l.push(callback)
            };
            window.onYTReady = () => {
                YT.loaded = 1;
                for (var i = 0; i < l.length; i++)
                    try {
                        l[i]()
                    } catch (e$0) { }
            };
            YT.setConfig = config => {
                for (var k in config)
                    if (config.hasOwnProperty(k))
                        YTConfig[k] = config[k]
            };
            let a = document.createElement("script");
            a.type = "text/javascript";
            a.id = "www-widgetapi-script";
            a.src = scriptUrl;
            a.async = true;

            let c = document.currentScript;
            if (c) {
                let n = c.nonce || c.getAttribute("nonce");
                if (n) a.setAttribute("nonce", n)
            }
            let b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        })()
    };
};

export default YT_Prettier;