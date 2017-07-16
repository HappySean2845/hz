function size() {
  var _screenWidth = document.documentElement.clientWidth < 300 ? 300 : document.documentElement.clientWidth,
    _UIWidth = 750,
    _fontSize = _screenWidth / _UIWidth * 100;
  document.documentElement.style.fontSize = _fontSize + 'px';
}
size();
window.onresize = function () {
  size();
}