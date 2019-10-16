<template>
  <v-navigation-drawer
    :mini-variant="mini"
    v-model="drawer"
    hide-overlay
    stateless
    fixed
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <nuxt-link to="/"><img src="~/assets/img/logo-klud.png"></nuxt-link>
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="navbar">
      <v-divider></v-divider>
      <v-list-tile
        v-for="(item, i) in items"
        :to="item.to"
        :key="i"
        router
        exact
      >
        <v-list-tile-action>
          <v-tooltip right>
            <v-icon v-html="item.icon" slot="activator" />
            <span>{{item.title}}</span>
          </v-tooltip>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <div class="media">
  <v-tooltip right>
      <a href="https://www.linkedin.com/in/vincent-gillibert-56a79197/" target="_blank" rel="noopener" class="linkedin-share" slot="activator">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </i>
      </a>
      <span>Linkedin</span>
    </v-tooltip>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      mini: true,
      right: null,
      drawer: true,
      items: [
        { icon: 'home', title: 'Accueil', to: '/' },
        { icon: 'fingerprint', title: 'Pitch', to: '/pitch' },
        { icon: 'remove_red_eye', title: 'Projets', to: '/projets' },
        { icon: 'account_box', title: 'Contact', to: '/contact' }
      ],
    }
  }
}
</script>

<style lang="css">

.navbar.v-list{
  position: absolute;
  top: 50%;
  margin-top: -100px;
}

.media{
  position: absolute;
  bottom: 10px;
  width: 100%;
}

.media a{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: 30%;
  margin-top: auto;
  margin-bottom: auto;
}

.opennavbar, .opennavbar:hover{
  position: absolute;
  margin: 0;
  z-index: 1;
  padding: 0;
  background-color: #FEC503;
}

.v-list__tile__avatar .v-avatar a {
  height: inherit;
  width: inherit;
}

</style>
