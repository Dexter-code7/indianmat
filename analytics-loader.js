(function () {
  var hasLoaded = false;

  function loadScript(src, onload) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    if (onload) {
      script.onload = onload;
    }
    document.head.appendChild(script);
  }

  function loadAnalytics() {
    if (hasLoaded) {
      return;
    }
    hasLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    loadScript("https://www.googletagmanager.com/gtag/js?id=G-71HKSKRPNM", function () {
      window.gtag("js", new Date());
      window.gtag("config", "G-71HKSKRPNM");
    });

    if (!window.fbq) {
      window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      if (!window._fbq) {
        window._fbq = window.fbq;
      }
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq.queue = [];
    }

    loadScript("https://connect.facebook.net/en_US/fbevents.js", function () {
      window.fbq("init", "1191711879716916");
      window.fbq("track", "PageView");
    });
  }

  function scheduleAnalytics() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
      return;
    }

    window.setTimeout(loadAnalytics, 1800);
  }

  if (document.readyState === "complete") {
    scheduleAnalytics();
  } else {
    window.addEventListener("load", scheduleAnalytics, { once: true });
  }
})();
