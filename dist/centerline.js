(function() {
  'use strict';

  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<div class=\"centerLineDiv\"></div>');
  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<style type=\"text/css\">.centerLineDiv { content:\"\"; position: fixed; top: 0; bottom: 0; left: 50%; border-left: 2px dotted #444; z-index: 99999999; }</style>');
  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<style type=\"text/css\">.container { border-left: 1px solid red; border-right: 1px solid red; }</style>');
})();

