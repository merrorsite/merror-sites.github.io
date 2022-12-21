"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./stitches.config.js
var stitches_config = __webpack_require__(584);
;// CONCATENATED MODULE: ./styles/global.js

const globalStyles = (0,stitches_config/* global */.CO)({
  body: {
    backgroundColor: '$black',
    color: '$white',
    fontFamily: '$sans',
    margin: 0,
    padding: 0,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  '*': {
    boxSizing: 'border-box'
  },
  '.toast-container': {
    bottom: 20
  }
});
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "fathom-client"
const external_fathom_client_namespaceObject = require("fathom-client");
;// CONCATENATED MODULE: ./data/hooks/analytics.js



const useAnalytics = () => {
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    external_fathom_client_namespaceObject.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['ui-snippets.dev'],
      url: 'https://leopard.ui-snippets.dev/script.js'
    });

    function onRouteChangeComplete() {
      external_fathom_client_namespaceObject.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
// EXTERNAL MODULE: ./components/Container/index.js + 1 modules
var Container = __webpack_require__(589);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Header/Header.js





const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    as: "header",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {
      href: "/",
      children: "UI Snippets"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinksWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
        href: "https://twitter.com/emilkowalski_",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          fill: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M8.66 20c6.793 0 10.508-6.156 10.508-11.495 0-.175 0-.349-.01-.522A7.943 7.943 0 0021 5.892a6.883 6.883 0 01-2.121.635c.77-.504 1.348-1.298 1.624-2.234a7.03 7.03 0 01-2.346.98c-1.144-1.331-2.963-1.657-4.437-.794-1.473.862-2.234 2.699-1.856 4.48-2.97-.164-5.736-1.698-7.611-4.222-.98 1.846-.48 4.208 1.143 5.393a3.428 3.428 0 01-1.676-.506v.052c0 1.923 1.24 3.58 2.963 3.96a3.38 3.38 0 01-1.668.07c.484 1.645 1.87 2.772 3.45 2.805-1.307 1.124-2.923 1.734-4.586 1.733-.294-.001-.587-.02-.879-.059C4.689 19.371 6.654 20 8.66 19.997"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
        href: "https://github.com/emilkowalski/ui-snippets",
        target: "_blank",
        children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          fill: "currentColor",
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 3c-4.973 0-9 4.13-9 9.228 0 4.083 2.576 7.532 6.154 8.754.45.081.618-.196.618-.438 0-.22-.01-.946-.01-1.719-2.262.427-2.847-.565-3.027-1.084-.101-.265-.54-1.084-.923-1.303-.315-.173-.764-.6-.01-.612.708-.011 1.214.67 1.383.946.81 1.396 2.104 1.004 2.621.762.079-.6.315-1.004.574-1.235-2.003-.23-4.095-1.026-4.095-4.556 0-1.003.349-1.834.922-2.48-.09-.23-.404-1.176.09-2.445 0 0 .754-.242 2.475.946a8.159 8.159 0 012.25-.312c.765 0 1.53.104 2.25.312 1.722-1.2 2.475-.946 2.475-.946.495 1.269.18 2.215.09 2.445.574.646.923 1.465.923 2.48 0 3.541-2.104 4.326-4.106 4.556.326.289.607.842.607 1.707 0 1.235-.011 2.227-.011 2.538 0 .242.169.53.619.438a9.036 9.036 0 004.439-3.366A9.402 9.402 0 0021 12.228C21 7.129 16.973 3 12 3z"
          })
        })
      })]
    })]
  });
};

const Wrapper = (0,stitches_config/* styled */.zo)(Container/* default */.Z, {
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
const Logo = (0,stitches_config/* styled */.zo)('a', {
  background: 'linear-gradient(118deg, rgba(106,225,255,1) 0%, rgba(194,158,218,1) 80%, rgba(91,105,230,1) 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontSize: '20px',
  fontWeight: '$bold',
  display: 'inline-block'
});
const Link = (0,stitches_config/* styled */.zo)('a', {
  color: '$white',
  opacity: 0.6,
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 1
  }
});
const LinksWrapper = (0,stitches_config/* styled */.zo)('div', {
  display: 'flex',
  gap: 20
});
/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./components/Header/index.js

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Head/Head.js



const ogImage = 'https://ui-snippets.dev/thumbnail.jpg';

const Head = ({
  title = 'UI Snippets',
  description = 'A collection of UI Snippets',
  image = ogImage,
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
  children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
    children: title
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "og:title",
    content: title
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "og:description",
    content: description
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:image",
    content: ogImage
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "og:image",
    content: ogImage
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "og:url",
    content: "https://ui-snippets.dev/"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    httpEquiv: "Content-Language",
    content: "en"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:site",
    content: "@emilkowalski_"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "author",
    content: "Emil Kowalski"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileColor",
    content: "#847EE2"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "theme-color",
    content: "#847EE2"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "shortcut icon",
    href: "favicon.ico"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "apple-touch-icon.png"
  }), children]
});

/* harmony default export */ const Head_Head = (Head);
;// CONCATENATED MODULE: ./components/Head/index.js

;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  globalStyles();
  useAnalytics();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Head_Head, {}), /*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 459:
/***/ ((module) => {

module.exports = require("@stitches/react");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [589], () => (__webpack_exec__(223)));
module.exports = __webpack_exports__;

})();