<template>
  <v-app light>

    <navigation-mobile class="nav-mobile" />

    <navigation class="nav-normal" />

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import Navigation from '~/components/Navigation.vue';
import NavigationMobile from '~/components/NavigationMobile.vue';

export default {
  components: {
    Navigation,
    NavigationMobile
  }
}
</script>

<style>

@media (max-width: 600px) {
  .v-content{
    width: 100%;
    height: calc(100% - 60px);
    position: absolute;
  }

  .nav-normal{
    display: none;
  }

  .v-content{
    margin-top: 60px;
  }
}

@media (min-width: 600px) {
  .v-content{
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .nav-mobile{
    display: none;
  }

  .container{
    padding-left: 80px;
  }
}

/* Scroll bar */

::-webkit-scrollbar-track
{
	background-color: #fff;
}

::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: #000;
}


</style>
