// animation du logo
(function(){
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    /**
     * Setup your Lazy Line element.
     * see README file for more settings
     */

    let el = document.querySelector('#logoklud-sansfond');
    let myAnimation = new LazyLinePainter(el, {
      "ease" : "easeLinear",
      "strokeWidth" : 3,
      "strokeOpacity" : 1,
      "strokeColor":"#000",
      "reverse" : true,
      "strokeCap":"square"
    });

    myAnimation.paint();
  }
}
})();
