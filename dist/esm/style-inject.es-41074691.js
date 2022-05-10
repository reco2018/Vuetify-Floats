var config = {
  defaultType: 'is-info',
  defaultToastType: 'is-info',
  defaultToastDuration: 2000,
  defaultToastPosition: null,
  defaultAlertOkVisible: true,
  defaultAlertOkText: 'OK',
  defaultAlertCancelVisible: true,
  defaultAlertCancelText: 'Cancel',
  defaultModalCanCancel: ['escape', 'x', 'outside', 'button']
};
var setVueInstance = function setVueInstance(Vue) {
  VueInstance = Vue;
};
var VueInstance;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

export { VueInstance as V, styleInject as a, config as c, setVueInstance as s };
