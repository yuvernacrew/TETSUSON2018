'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  return {
    clean: {},
    html: {
      rules: {
        "tagname-lowercase": false,
        "attr-lowercase": false,
        "attr-value-double-quotes": false,
        "attr-value-not-empty": false,
        "attr-no-duplication": false,
        "doctype-first": false,
        "tag-pair": false,
        "tag-self-close": false,
        "spec-char-escape": false,
        "id-unique": false,
        "src-not-empty": false,
        "head-script-disabled": false,
        "img-alt-require": false,
        "doctype-html5": false,
        "id-class-value": false,
        "style-disabled": false,
        "space-tab-mixed-disabled": false,
        "id-class-ad-disabled": false,
        "href-abs-or-rel": false,
        "attr-unsafe-chars": false
      }
    },
    style: production ? {} : {},
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [],
    test: {}
  }
};
