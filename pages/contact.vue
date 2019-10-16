<template>
  <v-container class="container-cards" fluid fill-height>
    <v-layout class="layout-contact" row wrap>
      <v-flex
        xs12
        sm12
        md6
      >
        <v-card class="card-contact">
            <img class="animated infinite pulse delay-10s contact" src="~/assets/img/mail.png" alt="Mail" />
          <blockquote class="blockquote blockquote-contact">
            Vincent GILLIBERT</br>
            <a href="mailto:vincentgillibert@gmail.com">vincentgillibert@gmail.com</a></br>
            <a href="tel:+33671767134">+33 (0)6.71.76.71.34</a>
          </blockquote>
        </v-card>
      </v-flex>

      <v-flex
        class="map-contact"
        xs12
        sm12
        md6
      >
      <div id="map"></div>
        <!-- <iframe src="https://www.google.com/maps/d/embed?mid=1waqr-XSTge0V1i24jvQhogJOS2QELO2M" width="100%" height="100%"></iframe> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script type="text/javascript">
import Temps from '~/components/Temps.vue'

export default {

  head () {
    return {
      title: "KLUD Design | Contact Klud Design pour des missions freelance",
      meta: [
        { hid: 'description', name: 'description', content: "Contacter Klud Design pour des missions freelance en design, developpement web ou ingénierie." }
      ],
      script: [
        { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCbysSFu2JzOapnygFIYLkFF3dzKEejU6I&callback=initMap', async: true, defer: true },
        { src: '../js/map.js' }
      ]
    }
  },

  components: {
    Temps
  }
}
</script>

<style>
@media (max-width: 600px) {
  .map-contact{
    height: calc(50% - 4px);
  }

  .card-contact{
    height: 100%;
  }

  .container-cards{
    padding: 0 0 0 0;
  }

  #map {
    width: 100%;
    height: 100%;
  }

  .layout-contact .flex{
    height: 50%;
  }

  .blockquote-contact{
    padding-left: 0px;
    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
  }

  .contact{
    position: absolute;
    margin-left: 42%;
    height: 10vh;
    top: 25%;
    text-align: center;
  }
}

@media (min-width: 600px) {
  .map-contact{
    height: calc(100% - 4px);
  }

  .card-contact{
    height: 100%;
  }

  .container-cards{
    padding: 0 0 0 80px;
  }

  #map {
    width: 100%;
    height: 100%;
  }

  .blockquote-contact{
    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
  }

  .contact{
    position: absolute;
    margin-left: 47%;
    height: 10vh;
    top: 35%;
    text-align: center;
  }
}

.layout-contact{
  height: 100%;
}

.svg-contact{
  position: absolute;
  display: inline-block;
  left: 45%;
  top: 30%;
}

svg#ux-skill {
  height: 150px;
  width: 150px;
}

</style>
