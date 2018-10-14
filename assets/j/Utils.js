export default class Utils {

  static loadJSAsync (e, n, o) {
      const el = document.createElement("script"),
      r = document.getElementsByTagName(el)[0];
      el.src = "//" + e, n && i.addEventListener("load", function (e) {
      n(null, e)
    }, !1), o && i.addEventListener("error", function (e) {
      o(e)
    }, !1), r.parentNode.insertBefore(i, r)
  }

}

