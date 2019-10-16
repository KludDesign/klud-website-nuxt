<template>
  <v-container fluid fill-height>

    <vue-particles
    color="#000"
    :particleOpacity="1"
    :particlesNumber="100"
    shapeType="circle"
    :particleSize="3"
    linesColor="#FEC503"
    :linesWidth="2"
    :lineLinked="true"
    :lineOpacity="0.5"
    :linesDistance="300"
    :moveSpeed="1"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
  ></vue-particles>

    <v-layout class="cont" align-center justify-center>
      <v-flex text-xs-center>
        <p class="hello1"></p>
        <vue-typer
          v-if="hello1 === true"
          class="hello1"
          text="Hello World!"
          :repeat='0'
          :shuffle='true'
          initial-action='typing'
          :pre-type-delay='2000'
          :type-delay='60'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue-typer>
        <vue-typer
          v-if="hello2 === true"
          class="hello2"
          text="I'm Vincent,"
          :repeat='0'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='2000'
          :type-delay='60'
          :pre-erase-delay='3000000000000'
          :erase-delay='1000'
          erase-style='clear'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue-typer>
        <vue-typer
          v-if="hello3 === true"
          class="hello3"
          text="designer and web developer."
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='2000'
          :type-delay='60'
          :pre-erase-delay='3000000000000'
          :erase-delay='1000'
          erase-style='clear'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue-typer>

        <klud-logo/>

        <blockquote class="blockquote">
          <h1 class="">KLUD DESIGN</h1>
        </blockquote>
      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
import KludLogo from '~/components/KludLogo.vue'

export default {

  head () {
    return {
      title: "KLUD Design | Bureau d'étude design, ingénierie générale, conception de produit, et d'application web en freelance",
      meta: [
        { hid: 'description', name: 'description', content: "KLUD design est ingénieur designer en freelance dans le design, la conception de produit industriel et le développement d’application, de site web et mobile. Mes domaines d'activité sont le design produit, la mécanique, l'électronique, l'informatique et le numérique." }
      ]
    }
  },

  data(){
    return{
      hello1: false,
      hello2: false,
      hello3: false
    }
  },

  components: {
    KludLogo
  },

  mounted (){
    this.$nextTick(function() {
      setTimeout( () => this.hello1 = true, 1000);
      setTimeout( () => this.hello2 = true, 4500);
      setTimeout( () => this.hello3 = true, 8000);
    })
  }
}

</script>

<style media="screen">
.logo-klud .v-image{
  position: absolute;
  width: 250px;
  right: 30px;
  bottom: 30px;
}

@media (min-width: 600px) {
  #particles-js{
    position: absolute;
    height: 99%;
    width: calc(100% - 80px);
  }

  .vue-typer{
    font-size: 30px;
  }

  .hello1{
    position: absolute;
    bottom: 110px;
    left: 120px;
  }

  .hello2{
    position: absolute;
    bottom: 70px;
    left: 120px;
  }

  .hello3{
    position: absolute;
    bottom: 30px;
    left: 120px;
  }
}

@media (max-width: 600px) {
  #particles-js{
    position: absolute;
    height: 99%;
    width: calc(100% - 20px);
  }

  .vue-typer{
    font-size: 20px;
  }

  .hello1{
    position: absolute;
    bottom: 70px;
    left: 20px;
  }

  .hello2{
    position: absolute;
    bottom: 45px;
    left: 20px;
  }

  .hello3{
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
}

.blockquote{
  width: 98%;
}

</style>
