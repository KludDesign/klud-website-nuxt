<template lang="html">
  <v-toolbar class="nav-mobile" flat>
    <v-menu offset-y>
      <v-btn
        slot="activator"
        flat
      >
        <v-toolbar-side-icon color="#FEC503"></v-toolbar-side-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="item.text"
          :to="item.to"
        >
          <v-list-tile-title><v-icon v-html="item.icon" slot="activator" />{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <span>KLUD DESIGN</span>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'home', title: '  Accueil', to: '/' },
        { icon: 'fingerprint', title: '  Pitch', to: '/pitch' },
        { icon: 'remove_red_eye', title: '  Projets', to: '/projets' },
        { icon: 'account_box', title: '  Contact', to: '/contact' }
      ],
    }
  }
}
</script>

<style lang="css">

.nav-mobile{
  z-index: 1;
  height: 60px;
}

.nav-mobile .v-toolbar__content{
  width: 100%;
}

.nav-mobile .v-menu__activator .v-btn{
  height: auto;
  width: auto;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0;
}

.nav-mobile .v-toolbar__content{
  background-color: #000;
  height: 60px !important;
}

.nav-mobile .v-toolbar__content span{
  margin-left: auto;
  margin-right: 18px;
  font-size: 18px;
  color: #FEC503;
}

</style>
