<template lang="html">
  <svg version="1.1" id="logoklud-sansfond" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 315 310" style="enable-background:new 0 0 315 310;" xml:space="preserve" data-llp-composed="true" class="lazy-line-painter">
    <style type="text/css">
    .st0{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}
    .st1{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
    </style>
    <g>
    <path class="st0" d="M157.2,5.7c82.8,0,150,67.2,150,150c0,82.8-67.2,150-150,150c-82.8,0-150-67.2-150-150" data-llp-id="logoklud-sansfond-0" data-llp-duration="1300" data-llp-delay="0" fill-opacity="0" style=""/>
    <line class="st0" x1="83.7" y1="284.2" x2="83.7" y2="24.2" data-llp-id="logoklud-sansfond-1" data-llp-duration="1300" data-llp-delay="700" fill-opacity="0" style=""/>
    <line class="st1" x1="84.7" y1="155.7" x2="257.7" y2="43.7" data-llp-id="logoklud-sansfond-2" data-llp-duration="1300" data-llp-delay="1400" fill-opacity="0" style=""/>
    <line class="st1" x1="116.1" y1="135.4" x2="256.7" y2="268" data-llp-id="logoklud-sansfond-3" data-llp-duration="1300" data-llp-delay="2100" fill-opacity="0" style=""/>
    </g>
  </svg>
</template>

<script>
export default {
  head () {
    return {
      script: [
        { src: '../js/lazy-line-painter-1.9.6.min.js' },
        { src: '../js/logo-anime.js' }
      ]
    }
  }
}
</script>

<style lang="css">
@media (min-width: 600px) {
  #logoklud-sansfond {
    width: 20%;
    height: 20%;
    position: relative;
    overflow: visible;
  }
}

@media (max-width: 600px) {
  #logoklud-sansfond {
    width: 50%;
    height: 50%;
    position: relative;
    overflow: visible;
  }
}
</style>
