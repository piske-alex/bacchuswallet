(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/intl-tel-input.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/intl-tel-input.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Variables declared here can be overridden by consuming applications, with\r\n * the help of the `!default` flag.\r\n *\r\n * @example\r\n *     // overriding $hoverColor\r\n *     $hoverColor: rgba(red, 0.05);\r\n *\r\n *     // overriding image path\r\n *     $flagsImagePath: \"images/\";\r\n *\r\n *     // import the scss file after the overrides\r\n */\r\n.intl-tel-input {\r\n    position: relative;\r\n    display: inline-block; }\r\n.intl-tel-input * {\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box; }\r\n.intl-tel-input .hide {\r\n    display: none; }\r\n.intl-tel-input .v-hide {\r\n    visibility: hidden; }\r\n.intl-tel-input input, .intl-tel-input input[type=text], .intl-tel-input input[type=tel] {\r\n    position: relative;\r\n    z-index: 0;\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n    padding-right: 36px;\r\n    margin-right: 0; }\r\n.intl-tel-input .flag-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 1px; }\r\n.intl-tel-input .selected-flag {\r\n    z-index: 1;\r\n    position: relative;\r\n    width: 36px;\r\n    height: 100%;\r\n    padding: 0 0 0 8px; }\r\n.intl-tel-input .selected-flag .iti-flag {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto; }\r\n.intl-tel-input .selected-flag .iti-arrow {\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -2px;\r\n    right: 6px;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 3px solid transparent;\r\n    border-right: 3px solid transparent;\r\n    border-top: 4px solid #555; }\r\n.intl-tel-input .selected-flag .iti-arrow.up {\r\n    border-top: none;\r\n    border-bottom: 4px solid #555; }\r\n.intl-tel-input .country-list {\r\n    position: absolute;\r\n    z-index: 2;\r\n    list-style: none;\r\n    text-align: left;\r\n    padding: 0;\r\n    margin: 0 0 0 -1px;\r\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\r\n    background-color: white;\r\n    border: 1px solid #CCC;\r\n    white-space: nowrap;\r\n    max-height: 200px;\r\n    overflow-y: scroll; }\r\n.intl-tel-input .country-list.dropup {\r\n    bottom: 100%;\r\n    margin-bottom: -1px; }\r\n.intl-tel-input .country-list .flag-box {\r\n    display: inline-block;\r\n    width: 20px; }\r\n@media (max-width: 500px) {\r\n    .intl-tel-input .country-list {\r\n        white-space: normal; } }\r\n.intl-tel-input .country-list .divider {\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    background-color: transparent;\r\n    margin-top: 0;\r\n    border-bottom: 1px solid #CCC; }\r\n.intl-tel-input .country-list .country {\r\n    padding: 5px 10px; }\r\n.intl-tel-input .country-list .country .dial-code {\r\n    color: #999; }\r\n.intl-tel-input .country-list .country.highlight {\r\n    background-color: rgba(0, 0, 0, 0.05); }\r\n.intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name, .intl-tel-input .country-list .dial-code {\r\n    vertical-align: middle; }\r\n.intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name {\r\n    margin-right: 6px; }\r\n.intl-tel-input.allow-dropdown input, .intl-tel-input.allow-dropdown input[type=text], .intl-tel-input.allow-dropdown input[type=tel], .intl-tel-input.separate-dial-code input, .intl-tel-input.separate-dial-code input[type=text], .intl-tel-input.separate-dial-code input[type=tel] {\r\n    padding-right: 6px;\r\n    padding-left: 52px;\r\n    margin-left: 0; }\r\n.intl-tel-input.allow-dropdown .flag-container, .intl-tel-input.separate-dial-code .flag-container {\r\n    right: auto;\r\n    left: 0; }\r\n.intl-tel-input.allow-dropdown .selected-flag, .intl-tel-input.separate-dial-code .selected-flag {\r\n    width: 46px; }\r\n.intl-tel-input.allow-dropdown .flag-container:hover {\r\n    cursor: pointer; }\r\n.intl-tel-input.allow-dropdown .flag-container:hover .selected-flag {\r\n    background-color: rgba(0, 0, 0, 0.05); }\r\n.intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover {\r\n    cursor: default; }\r\n.intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover .selected-flag, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover .selected-flag {\r\n    background-color: transparent; }\r\n.intl-tel-input.separate-dial-code .selected-flag {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n    display: table; }\r\n.intl-tel-input.separate-dial-code .selected-dial-code {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    padding-left: 28px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-2 input, .intl-tel-input.separate-dial-code.iti-sdc-2 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-2 input[type=tel] {\r\n    padding-left: 66px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-2 .selected-flag {\r\n    width: 60px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 input[type=tel] {\r\n    padding-left: 76px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-2 .selected-flag {\r\n    width: 70px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-3 input, .intl-tel-input.separate-dial-code.iti-sdc-3 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-3 input[type=tel] {\r\n    padding-left: 74px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-3 .selected-flag {\r\n    width: 68px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 input[type=tel] {\r\n    padding-left: 84px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-3 .selected-flag {\r\n    width: 78px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-4 input, .intl-tel-input.separate-dial-code.iti-sdc-4 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-4 input[type=tel] {\r\n    padding-left: 82px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-4 .selected-flag {\r\n    width: 76px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 input[type=tel] {\r\n    padding-left: 92px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-4 .selected-flag {\r\n    width: 86px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-5 input, .intl-tel-input.separate-dial-code.iti-sdc-5 input[type=text], .intl-tel-input.separate-dial-code.iti-sdc-5 input[type=tel] {\r\n    padding-left: 90px; }\r\n.intl-tel-input.separate-dial-code.iti-sdc-5 .selected-flag {\r\n    width: 84px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 input, .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 input[type=text], .intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 input[type=tel] {\r\n    padding-left: 100px; }\r\n.intl-tel-input.separate-dial-code.allow-dropdown.iti-sdc-5 .selected-flag {\r\n    width: 94px; }\r\n.intl-tel-input.iti-container {\r\n    position: absolute;\r\n    top: -1000px;\r\n    left: -1000px;\r\n    z-index: 1060;\r\n    padding: 1px; }\r\n.intl-tel-input.iti-container:hover {\r\n    cursor: pointer; }\r\n.iti-mobile .intl-tel-input.iti-container {\r\n    top: 30px;\r\n    bottom: 30px;\r\n    left: 30px;\r\n    right: 30px;\r\n    position: fixed; }\r\n.iti-mobile .intl-tel-input .country-list {\r\n    max-height: 100%;\r\n    width: 100%; }\r\n.iti-mobile .intl-tel-input .country-list .country {\r\n    padding: 10px 10px;\r\n    line-height: 1.5em; }\r\n.iti-flag {\r\n    width: 20px; }\r\n.iti-flag.be {\r\n    width: 18px; }\r\n.iti-flag.ch {\r\n    width: 15px; }\r\n.iti-flag.mc {\r\n    width: 19px; }\r\n.iti-flag.ne {\r\n    width: 18px; }\r\n.iti-flag.np {\r\n    width: 13px; }\r\n.iti-flag.va {\r\n    width: 15px; }\r\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\r\n    .iti-flag {\r\n        background-size: 5630px 15px; } }\r\n.iti-flag.ac {\r\n    height: 10px;\r\n    background-position: 0px 0px; }\r\n.iti-flag.ad {\r\n    height: 14px;\r\n    background-position: -22px 0px; }\r\n.iti-flag.ae {\r\n    height: 10px;\r\n    background-position: -44px 0px; }\r\n.iti-flag.af {\r\n    height: 14px;\r\n    background-position: -66px 0px; }\r\n.iti-flag.ag {\r\n    height: 14px;\r\n    background-position: -88px 0px; }\r\n.iti-flag.ai {\r\n    height: 10px;\r\n    background-position: -110px 0px; }\r\n.iti-flag.al {\r\n    height: 15px;\r\n    background-position: -132px 0px; }\r\n.iti-flag.am {\r\n    height: 10px;\r\n    background-position: -154px 0px; }\r\n.iti-flag.ao {\r\n    height: 14px;\r\n    background-position: -176px 0px; }\r\n.iti-flag.aq {\r\n    height: 14px;\r\n    background-position: -198px 0px; }\r\n.iti-flag.ar {\r\n    height: 13px;\r\n    background-position: -220px 0px; }\r\n.iti-flag.as {\r\n    height: 10px;\r\n    background-position: -242px 0px; }\r\n.iti-flag.at {\r\n    height: 14px;\r\n    background-position: -264px 0px; }\r\n.iti-flag.au {\r\n    height: 10px;\r\n    background-position: -286px 0px; }\r\n.iti-flag.aw {\r\n    height: 14px;\r\n    background-position: -308px 0px; }\r\n.iti-flag.ax {\r\n    height: 13px;\r\n    background-position: -330px 0px; }\r\n.iti-flag.az {\r\n    height: 10px;\r\n    background-position: -352px 0px; }\r\n.iti-flag.ba {\r\n    height: 10px;\r\n    background-position: -374px 0px; }\r\n.iti-flag.bb {\r\n    height: 14px;\r\n    background-position: -396px 0px; }\r\n.iti-flag.bd {\r\n    height: 12px;\r\n    background-position: -418px 0px; }\r\n.iti-flag.be {\r\n    height: 15px;\r\n    background-position: -440px 0px; }\r\n.iti-flag.bf {\r\n    height: 14px;\r\n    background-position: -460px 0px; }\r\n.iti-flag.bg {\r\n    height: 12px;\r\n    background-position: -482px 0px; }\r\n.iti-flag.bh {\r\n    height: 12px;\r\n    background-position: -504px 0px; }\r\n.iti-flag.bi {\r\n    height: 12px;\r\n    background-position: -526px 0px; }\r\n.iti-flag.bj {\r\n    height: 14px;\r\n    background-position: -548px 0px; }\r\n.iti-flag.bl {\r\n    height: 14px;\r\n    background-position: -570px 0px; }\r\n.iti-flag.bm {\r\n    height: 10px;\r\n    background-position: -592px 0px; }\r\n.iti-flag.bn {\r\n    height: 10px;\r\n    background-position: -614px 0px; }\r\n.iti-flag.bo {\r\n    height: 14px;\r\n    background-position: -636px 0px; }\r\n.iti-flag.bq {\r\n    height: 14px;\r\n    background-position: -658px 0px; }\r\n.iti-flag.br {\r\n    height: 14px;\r\n    background-position: -680px 0px; }\r\n.iti-flag.bs {\r\n    height: 10px;\r\n    background-position: -702px 0px; }\r\n.iti-flag.bt {\r\n    height: 14px;\r\n    background-position: -724px 0px; }\r\n.iti-flag.bv {\r\n    height: 15px;\r\n    background-position: -746px 0px; }\r\n.iti-flag.bw {\r\n    height: 14px;\r\n    background-position: -768px 0px; }\r\n.iti-flag.by {\r\n    height: 10px;\r\n    background-position: -790px 0px; }\r\n.iti-flag.bz {\r\n    height: 14px;\r\n    background-position: -812px 0px; }\r\n.iti-flag.ca {\r\n    height: 10px;\r\n    background-position: -834px 0px; }\r\n.iti-flag.cc {\r\n    height: 10px;\r\n    background-position: -856px 0px; }\r\n.iti-flag.cd {\r\n    height: 15px;\r\n    background-position: -878px 0px; }\r\n.iti-flag.cf {\r\n    height: 14px;\r\n    background-position: -900px 0px; }\r\n.iti-flag.cg {\r\n    height: 14px;\r\n    background-position: -922px 0px; }\r\n.iti-flag.ch {\r\n    height: 15px;\r\n    background-position: -944px 0px; }\r\n.iti-flag.ci {\r\n    height: 14px;\r\n    background-position: -961px 0px; }\r\n.iti-flag.ck {\r\n    height: 10px;\r\n    background-position: -983px 0px; }\r\n.iti-flag.cl {\r\n    height: 14px;\r\n    background-position: -1005px 0px; }\r\n.iti-flag.cm {\r\n    height: 14px;\r\n    background-position: -1027px 0px; }\r\n.iti-flag.cn {\r\n    height: 14px;\r\n    background-position: -1049px 0px; }\r\n.iti-flag.co {\r\n    height: 14px;\r\n    background-position: -1071px 0px; }\r\n.iti-flag.cp {\r\n    height: 14px;\r\n    background-position: -1093px 0px; }\r\n.iti-flag.cr {\r\n    height: 12px;\r\n    background-position: -1115px 0px; }\r\n.iti-flag.cu {\r\n    height: 10px;\r\n    background-position: -1137px 0px; }\r\n.iti-flag.cv {\r\n    height: 12px;\r\n    background-position: -1159px 0px; }\r\n.iti-flag.cw {\r\n    height: 14px;\r\n    background-position: -1181px 0px; }\r\n.iti-flag.cx {\r\n    height: 10px;\r\n    background-position: -1203px 0px; }\r\n.iti-flag.cy {\r\n    height: 13px;\r\n    background-position: -1225px 0px; }\r\n.iti-flag.cz {\r\n    height: 14px;\r\n    background-position: -1247px 0px; }\r\n.iti-flag.de {\r\n    height: 12px;\r\n    background-position: -1269px 0px; }\r\n.iti-flag.dg {\r\n    height: 10px;\r\n    background-position: -1291px 0px; }\r\n.iti-flag.dj {\r\n    height: 14px;\r\n    background-position: -1313px 0px; }\r\n.iti-flag.dk {\r\n    height: 15px;\r\n    background-position: -1335px 0px; }\r\n.iti-flag.dm {\r\n    height: 10px;\r\n    background-position: -1357px 0px; }\r\n.iti-flag.do {\r\n    height: 13px;\r\n    background-position: -1379px 0px; }\r\n.iti-flag.dz {\r\n    height: 14px;\r\n    background-position: -1401px 0px; }\r\n.iti-flag.ea {\r\n    height: 14px;\r\n    background-position: -1423px 0px; }\r\n.iti-flag.ec {\r\n    height: 14px;\r\n    background-position: -1445px 0px; }\r\n.iti-flag.ee {\r\n    height: 13px;\r\n    background-position: -1467px 0px; }\r\n.iti-flag.eg {\r\n    height: 14px;\r\n    background-position: -1489px 0px; }\r\n.iti-flag.eh {\r\n    height: 10px;\r\n    background-position: -1511px 0px; }\r\n.iti-flag.er {\r\n    height: 10px;\r\n    background-position: -1533px 0px; }\r\n.iti-flag.es {\r\n    height: 14px;\r\n    background-position: -1555px 0px; }\r\n.iti-flag.et {\r\n    height: 10px;\r\n    background-position: -1577px 0px; }\r\n.iti-flag.eu {\r\n    height: 14px;\r\n    background-position: -1599px 0px; }\r\n.iti-flag.fi {\r\n    height: 12px;\r\n    background-position: -1621px 0px; }\r\n.iti-flag.fj {\r\n    height: 10px;\r\n    background-position: -1643px 0px; }\r\n.iti-flag.fk {\r\n    height: 10px;\r\n    background-position: -1665px 0px; }\r\n.iti-flag.fm {\r\n    height: 11px;\r\n    background-position: -1687px 0px; }\r\n.iti-flag.fo {\r\n    height: 15px;\r\n    background-position: -1709px 0px; }\r\n.iti-flag.fr {\r\n    height: 14px;\r\n    background-position: -1731px 0px; }\r\n.iti-flag.ga {\r\n    height: 15px;\r\n    background-position: -1753px 0px; }\r\n.iti-flag.gb {\r\n    height: 10px;\r\n    background-position: -1775px 0px; }\r\n.iti-flag.gd {\r\n    height: 12px;\r\n    background-position: -1797px 0px; }\r\n.iti-flag.ge {\r\n    height: 14px;\r\n    background-position: -1819px 0px; }\r\n.iti-flag.gf {\r\n    height: 14px;\r\n    background-position: -1841px 0px; }\r\n.iti-flag.gg {\r\n    height: 14px;\r\n    background-position: -1863px 0px; }\r\n.iti-flag.gh {\r\n    height: 14px;\r\n    background-position: -1885px 0px; }\r\n.iti-flag.gi {\r\n    height: 10px;\r\n    background-position: -1907px 0px; }\r\n.iti-flag.gl {\r\n    height: 14px;\r\n    background-position: -1929px 0px; }\r\n.iti-flag.gm {\r\n    height: 14px;\r\n    background-position: -1951px 0px; }\r\n.iti-flag.gn {\r\n    height: 14px;\r\n    background-position: -1973px 0px; }\r\n.iti-flag.gp {\r\n    height: 14px;\r\n    background-position: -1995px 0px; }\r\n.iti-flag.gq {\r\n    height: 14px;\r\n    background-position: -2017px 0px; }\r\n.iti-flag.gr {\r\n    height: 14px;\r\n    background-position: -2039px 0px; }\r\n.iti-flag.gs {\r\n    height: 10px;\r\n    background-position: -2061px 0px; }\r\n.iti-flag.gt {\r\n    height: 13px;\r\n    background-position: -2083px 0px; }\r\n.iti-flag.gu {\r\n    height: 11px;\r\n    background-position: -2105px 0px; }\r\n.iti-flag.gw {\r\n    height: 10px;\r\n    background-position: -2127px 0px; }\r\n.iti-flag.gy {\r\n    height: 12px;\r\n    background-position: -2149px 0px; }\r\n.iti-flag.hk {\r\n    height: 14px;\r\n    background-position: -2171px 0px; }\r\n.iti-flag.hm {\r\n    height: 10px;\r\n    background-position: -2193px 0px; }\r\n.iti-flag.hn {\r\n    height: 10px;\r\n    background-position: -2215px 0px; }\r\n.iti-flag.hr {\r\n    height: 10px;\r\n    background-position: -2237px 0px; }\r\n.iti-flag.ht {\r\n    height: 12px;\r\n    background-position: -2259px 0px; }\r\n.iti-flag.hu {\r\n    height: 10px;\r\n    background-position: -2281px 0px; }\r\n.iti-flag.ic {\r\n    height: 14px;\r\n    background-position: -2303px 0px; }\r\n.iti-flag.id {\r\n    height: 14px;\r\n    background-position: -2325px 0px; }\r\n.iti-flag.ie {\r\n    height: 10px;\r\n    background-position: -2347px 0px; }\r\n.iti-flag.il {\r\n    height: 15px;\r\n    background-position: -2369px 0px; }\r\n.iti-flag.im {\r\n    height: 10px;\r\n    background-position: -2391px 0px; }\r\n.iti-flag.in {\r\n    height: 14px;\r\n    background-position: -2413px 0px; }\r\n.iti-flag.io {\r\n    height: 10px;\r\n    background-position: -2435px 0px; }\r\n.iti-flag.iq {\r\n    height: 14px;\r\n    background-position: -2457px 0px; }\r\n.iti-flag.ir {\r\n    height: 12px;\r\n    background-position: -2479px 0px; }\r\n.iti-flag.is {\r\n    height: 15px;\r\n    background-position: -2501px 0px; }\r\n.iti-flag.it {\r\n    height: 14px;\r\n    background-position: -2523px 0px; }\r\n.iti-flag.je {\r\n    height: 12px;\r\n    background-position: -2545px 0px; }\r\n.iti-flag.jm {\r\n    height: 10px;\r\n    background-position: -2567px 0px; }\r\n.iti-flag.jo {\r\n    height: 10px;\r\n    background-position: -2589px 0px; }\r\n.iti-flag.jp {\r\n    height: 14px;\r\n    background-position: -2611px 0px; }\r\n.iti-flag.ke {\r\n    height: 14px;\r\n    background-position: -2633px 0px; }\r\n.iti-flag.kg {\r\n    height: 12px;\r\n    background-position: -2655px 0px; }\r\n.iti-flag.kh {\r\n    height: 13px;\r\n    background-position: -2677px 0px; }\r\n.iti-flag.ki {\r\n    height: 10px;\r\n    background-position: -2699px 0px; }\r\n.iti-flag.km {\r\n    height: 12px;\r\n    background-position: -2721px 0px; }\r\n.iti-flag.kn {\r\n    height: 14px;\r\n    background-position: -2743px 0px; }\r\n.iti-flag.kp {\r\n    height: 10px;\r\n    background-position: -2765px 0px; }\r\n.iti-flag.kr {\r\n    height: 14px;\r\n    background-position: -2787px 0px; }\r\n.iti-flag.kw {\r\n    height: 10px;\r\n    background-position: -2809px 0px; }\r\n.iti-flag.ky {\r\n    height: 10px;\r\n    background-position: -2831px 0px; }\r\n.iti-flag.kz {\r\n    height: 10px;\r\n    background-position: -2853px 0px; }\r\n.iti-flag.la {\r\n    height: 14px;\r\n    background-position: -2875px 0px; }\r\n.iti-flag.lb {\r\n    height: 14px;\r\n    background-position: -2897px 0px; }\r\n.iti-flag.lc {\r\n    height: 10px;\r\n    background-position: -2919px 0px; }\r\n.iti-flag.li {\r\n    height: 12px;\r\n    background-position: -2941px 0px; }\r\n.iti-flag.lk {\r\n    height: 10px;\r\n    background-position: -2963px 0px; }\r\n.iti-flag.lr {\r\n    height: 11px;\r\n    background-position: -2985px 0px; }\r\n.iti-flag.ls {\r\n    height: 14px;\r\n    background-position: -3007px 0px; }\r\n.iti-flag.lt {\r\n    height: 12px;\r\n    background-position: -3029px 0px; }\r\n.iti-flag.lu {\r\n    height: 12px;\r\n    background-position: -3051px 0px; }\r\n.iti-flag.lv {\r\n    height: 10px;\r\n    background-position: -3073px 0px; }\r\n.iti-flag.ly {\r\n    height: 10px;\r\n    background-position: -3095px 0px; }\r\n.iti-flag.ma {\r\n    height: 14px;\r\n    background-position: -3117px 0px; }\r\n.iti-flag.mc {\r\n    height: 15px;\r\n    background-position: -3139px 0px; }\r\n.iti-flag.md {\r\n    height: 10px;\r\n    background-position: -3160px 0px; }\r\n.iti-flag.me {\r\n    height: 10px;\r\n    background-position: -3182px 0px; }\r\n.iti-flag.mf {\r\n    height: 14px;\r\n    background-position: -3204px 0px; }\r\n.iti-flag.mg {\r\n    height: 14px;\r\n    background-position: -3226px 0px; }\r\n.iti-flag.mh {\r\n    height: 11px;\r\n    background-position: -3248px 0px; }\r\n.iti-flag.mk {\r\n    height: 10px;\r\n    background-position: -3270px 0px; }\r\n.iti-flag.ml {\r\n    height: 14px;\r\n    background-position: -3292px 0px; }\r\n.iti-flag.mm {\r\n    height: 14px;\r\n    background-position: -3314px 0px; }\r\n.iti-flag.mn {\r\n    height: 10px;\r\n    background-position: -3336px 0px; }\r\n.iti-flag.mo {\r\n    height: 14px;\r\n    background-position: -3358px 0px; }\r\n.iti-flag.mp {\r\n    height: 10px;\r\n    background-position: -3380px 0px; }\r\n.iti-flag.mq {\r\n    height: 14px;\r\n    background-position: -3402px 0px; }\r\n.iti-flag.mr {\r\n    height: 14px;\r\n    background-position: -3424px 0px; }\r\n.iti-flag.ms {\r\n    height: 10px;\r\n    background-position: -3446px 0px; }\r\n.iti-flag.mt {\r\n    height: 14px;\r\n    background-position: -3468px 0px; }\r\n.iti-flag.mu {\r\n    height: 14px;\r\n    background-position: -3490px 0px; }\r\n.iti-flag.mv {\r\n    height: 14px;\r\n    background-position: -3512px 0px; }\r\n.iti-flag.mw {\r\n    height: 14px;\r\n    background-position: -3534px 0px; }\r\n.iti-flag.mx {\r\n    height: 12px;\r\n    background-position: -3556px 0px; }\r\n.iti-flag.my {\r\n    height: 10px;\r\n    background-position: -3578px 0px; }\r\n.iti-flag.mz {\r\n    height: 14px;\r\n    background-position: -3600px 0px; }\r\n.iti-flag.na {\r\n    height: 14px;\r\n    background-position: -3622px 0px; }\r\n.iti-flag.nc {\r\n    height: 10px;\r\n    background-position: -3644px 0px; }\r\n.iti-flag.ne {\r\n    height: 15px;\r\n    background-position: -3666px 0px; }\r\n.iti-flag.nf {\r\n    height: 10px;\r\n    background-position: -3686px 0px; }\r\n.iti-flag.ng {\r\n    height: 10px;\r\n    background-position: -3708px 0px; }\r\n.iti-flag.ni {\r\n    height: 12px;\r\n    background-position: -3730px 0px; }\r\n.iti-flag.nl {\r\n    height: 14px;\r\n    background-position: -3752px 0px; }\r\n.iti-flag.no {\r\n    height: 15px;\r\n    background-position: -3774px 0px; }\r\n.iti-flag.np {\r\n    height: 15px;\r\n    background-position: -3796px 0px; }\r\n.iti-flag.nr {\r\n    height: 10px;\r\n    background-position: -3811px 0px; }\r\n.iti-flag.nu {\r\n    height: 10px;\r\n    background-position: -3833px 0px; }\r\n.iti-flag.nz {\r\n    height: 10px;\r\n    background-position: -3855px 0px; }\r\n.iti-flag.om {\r\n    height: 10px;\r\n    background-position: -3877px 0px; }\r\n.iti-flag.pa {\r\n    height: 14px;\r\n    background-position: -3899px 0px; }\r\n.iti-flag.pe {\r\n    height: 14px;\r\n    background-position: -3921px 0px; }\r\n.iti-flag.pf {\r\n    height: 14px;\r\n    background-position: -3943px 0px; }\r\n.iti-flag.pg {\r\n    height: 15px;\r\n    background-position: -3965px 0px; }\r\n.iti-flag.ph {\r\n    height: 10px;\r\n    background-position: -3987px 0px; }\r\n.iti-flag.pk {\r\n    height: 14px;\r\n    background-position: -4009px 0px; }\r\n.iti-flag.pl {\r\n    height: 13px;\r\n    background-position: -4031px 0px; }\r\n.iti-flag.pm {\r\n    height: 14px;\r\n    background-position: -4053px 0px; }\r\n.iti-flag.pn {\r\n    height: 10px;\r\n    background-position: -4075px 0px; }\r\n.iti-flag.pr {\r\n    height: 14px;\r\n    background-position: -4097px 0px; }\r\n.iti-flag.ps {\r\n    height: 10px;\r\n    background-position: -4119px 0px; }\r\n.iti-flag.pt {\r\n    height: 14px;\r\n    background-position: -4141px 0px; }\r\n.iti-flag.pw {\r\n    height: 13px;\r\n    background-position: -4163px 0px; }\r\n.iti-flag.py {\r\n    height: 11px;\r\n    background-position: -4185px 0px; }\r\n.iti-flag.qa {\r\n    height: 8px;\r\n    background-position: -4207px 0px; }\r\n.iti-flag.re {\r\n    height: 14px;\r\n    background-position: -4229px 0px; }\r\n.iti-flag.ro {\r\n    height: 14px;\r\n    background-position: -4251px 0px; }\r\n.iti-flag.rs {\r\n    height: 14px;\r\n    background-position: -4273px 0px; }\r\n.iti-flag.ru {\r\n    height: 14px;\r\n    background-position: -4295px 0px; }\r\n.iti-flag.rw {\r\n    height: 14px;\r\n    background-position: -4317px 0px; }\r\n.iti-flag.sa {\r\n    height: 14px;\r\n    background-position: -4339px 0px; }\r\n.iti-flag.sb {\r\n    height: 10px;\r\n    background-position: -4361px 0px; }\r\n.iti-flag.sc {\r\n    height: 10px;\r\n    background-position: -4383px 0px; }\r\n.iti-flag.sd {\r\n    height: 10px;\r\n    background-position: -4405px 0px; }\r\n.iti-flag.se {\r\n    height: 13px;\r\n    background-position: -4427px 0px; }\r\n.iti-flag.sg {\r\n    height: 14px;\r\n    background-position: -4449px 0px; }\r\n.iti-flag.sh {\r\n    height: 10px;\r\n    background-position: -4471px 0px; }\r\n.iti-flag.si {\r\n    height: 10px;\r\n    background-position: -4493px 0px; }\r\n.iti-flag.sj {\r\n    height: 15px;\r\n    background-position: -4515px 0px; }\r\n.iti-flag.sk {\r\n    height: 14px;\r\n    background-position: -4537px 0px; }\r\n.iti-flag.sl {\r\n    height: 14px;\r\n    background-position: -4559px 0px; }\r\n.iti-flag.sm {\r\n    height: 15px;\r\n    background-position: -4581px 0px; }\r\n.iti-flag.sn {\r\n    height: 14px;\r\n    background-position: -4603px 0px; }\r\n.iti-flag.so {\r\n    height: 14px;\r\n    background-position: -4625px 0px; }\r\n.iti-flag.sr {\r\n    height: 14px;\r\n    background-position: -4647px 0px; }\r\n.iti-flag.ss {\r\n    height: 10px;\r\n    background-position: -4669px 0px; }\r\n.iti-flag.st {\r\n    height: 10px;\r\n    background-position: -4691px 0px; }\r\n.iti-flag.sv {\r\n    height: 12px;\r\n    background-position: -4713px 0px; }\r\n.iti-flag.sx {\r\n    height: 14px;\r\n    background-position: -4735px 0px; }\r\n.iti-flag.sy {\r\n    height: 14px;\r\n    background-position: -4757px 0px; }\r\n.iti-flag.sz {\r\n    height: 14px;\r\n    background-position: -4779px 0px; }\r\n.iti-flag.ta {\r\n    height: 10px;\r\n    background-position: -4801px 0px; }\r\n.iti-flag.tc {\r\n    height: 10px;\r\n    background-position: -4823px 0px; }\r\n.iti-flag.td {\r\n    height: 14px;\r\n    background-position: -4845px 0px; }\r\n.iti-flag.tf {\r\n    height: 14px;\r\n    background-position: -4867px 0px; }\r\n.iti-flag.tg {\r\n    height: 13px;\r\n    background-position: -4889px 0px; }\r\n.iti-flag.th {\r\n    height: 14px;\r\n    background-position: -4911px 0px; }\r\n.iti-flag.tj {\r\n    height: 10px;\r\n    background-position: -4933px 0px; }\r\n.iti-flag.tk {\r\n    height: 10px;\r\n    background-position: -4955px 0px; }\r\n.iti-flag.tl {\r\n    height: 10px;\r\n    background-position: -4977px 0px; }\r\n.iti-flag.tm {\r\n    height: 14px;\r\n    background-position: -4999px 0px; }\r\n.iti-flag.tn {\r\n    height: 14px;\r\n    background-position: -5021px 0px; }\r\n.iti-flag.to {\r\n    height: 10px;\r\n    background-position: -5043px 0px; }\r\n.iti-flag.tr {\r\n    height: 14px;\r\n    background-position: -5065px 0px; }\r\n.iti-flag.tt {\r\n    height: 12px;\r\n    background-position: -5087px 0px; }\r\n.iti-flag.tv {\r\n    height: 10px;\r\n    background-position: -5109px 0px; }\r\n.iti-flag.tw {\r\n    height: 14px;\r\n    background-position: -5131px 0px; }\r\n.iti-flag.tz {\r\n    height: 14px;\r\n    background-position: -5153px 0px; }\r\n.iti-flag.ua {\r\n    height: 14px;\r\n    background-position: -5175px 0px; }\r\n.iti-flag.ug {\r\n    height: 14px;\r\n    background-position: -5197px 0px; }\r\n.iti-flag.um {\r\n    height: 11px;\r\n    background-position: -5219px 0px; }\r\n.iti-flag.us {\r\n    height: 11px;\r\n    background-position: -5241px 0px; }\r\n.iti-flag.uy {\r\n    height: 14px;\r\n    background-position: -5263px 0px; }\r\n.iti-flag.uz {\r\n    height: 10px;\r\n    background-position: -5285px 0px; }\r\n.iti-flag.va {\r\n    height: 15px;\r\n    background-position: -5307px 0px; }\r\n.iti-flag.vc {\r\n    height: 14px;\r\n    background-position: -5324px 0px; }\r\n.iti-flag.ve {\r\n    height: 14px;\r\n    background-position: -5346px 0px; }\r\n.iti-flag.vg {\r\n    height: 10px;\r\n    background-position: -5368px 0px; }\r\n.iti-flag.vi {\r\n    height: 14px;\r\n    background-position: -5390px 0px; }\r\n.iti-flag.vn {\r\n    height: 14px;\r\n    background-position: -5412px 0px; }\r\n.iti-flag.vu {\r\n    height: 12px;\r\n    background-position: -5434px 0px; }\r\n.iti-flag.wf {\r\n    height: 14px;\r\n    background-position: -5456px 0px; }\r\n.iti-flag.ws {\r\n    height: 10px;\r\n    background-position: -5478px 0px; }\r\n.iti-flag.xk {\r\n    height: 15px;\r\n    background-position: -5500px 0px; }\r\n.iti-flag.ye {\r\n    height: 14px;\r\n    background-position: -5522px 0px; }\r\n.iti-flag.yt {\r\n    height: 14px;\r\n    background-position: -5544px 0px; }\r\n.iti-flag.za {\r\n    height: 14px;\r\n    background-position: -5566px 0px; }\r\n.iti-flag.zm {\r\n    height: 14px;\r\n    background-position: -5588px 0px; }\r\n.iti-flag.zw {\r\n    height: 10px;\r\n    background-position: -5610px 0px; }\r\n.iti-flag {\r\n    width: 20px;\r\n    height: 15px;\r\n    box-shadow: 0px 0px 1px 0px #888;\r\n    background-image: url(\"flags.png\");\r\n    background-repeat: no-repeat;\r\n    background-color: #DBDBDB;\r\n    background-position: 20px 0; }\r\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\r\n    .iti-flag {\r\n        background-image: url(\"flags@2x.png\"); } }\r\n.iti-flag.np {\r\n    background-color: transparent; }\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/intl-tel-input.css":
/*!********************************!*\
  !*** ./src/intl-tel-input.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./intl-tel-input.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/intl-tel-input.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************************************!*\
  !*** multi ./src/styles.css ./src/intl-tel-input.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\user\bacchuswallet\src\styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! C:\Users\user\bacchuswallet\src\intl-tel-input.css */"./src/intl-tel-input.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map