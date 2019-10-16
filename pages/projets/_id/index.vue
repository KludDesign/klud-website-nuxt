<template lang="html">
  <v-container class="container-cards" fluid fill-height>
    <v-layout>
      <v-flex>
        <v-toolbar class="projetpage" flat>
          <v-btn to="/projets" icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Retour aux projets</v-toolbar-title>
        </v-toolbar>
        <v-layout class="layout-projet" row wrap>
          <v-flex
            xs12
            sm6
            md6
          >
            <v-card class="card-projet" flat>
              <blockquote class="blockquote blockquote-projet">
                <h1>{{ titre }}</h1></br>
                <p>{{ description }}</p>
              </blockquote>
            </v-card>
          </v-flex>
          <v-flex
           class="image-flex"
            xs12
            sm6
            md6
          >
            <v-img
              v-for="image in images"
              :src="image.src"
              :lazy-src="image.src"
              class="grey lighten-2 image-galerie"
            />
            <!-- <v-carousel
              :cycle="false"
              height="100%"
              hide-delimiters
            >
              <v-carousel-item
                v-for="image in images"
                :src="image.src"
              ></v-carousel-item>
            </v-carousel> -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import projets from '~/assets/content/articles.json';

export default {
  head () {
    return {
      title: "KLUD Design | Description d'un des projets",
      meta: [
        { hid: 'description', name: 'description', content: "Description d'un des projets." }
      ]
    }
  },

  data() {
    return {
      id: '',
      titre: '',
      description: '',
      images: []
    }
  },

  methods: {
   findId: function() {
     var currentId = this.$route.params.id;

     for (var i = 0; i < projets.length; i++) {
       if (projets[i].id == currentId) {
         return (
           this.titre = projets[i].titre,
           this.description = projets[i].description,
           this.images =  projets[i].images
         );
       }
     }
    }
 },

  mounted () {
    this.findId()
  }


  // async asyncData({ params }) {
  //   // We can use async/await ES6 feature
  //   const { data } = await axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
  //   return { post: data }
  // }
}
</script>

<style lang="css">

@media (max-width: 600px) {
  .container-cards{
    padding: 0 0 0 0;
  }

  .blockquote-projet{
    padding-right: 24px;
  }
}

@media (min-width: 600px) {
  .container-cards{
    padding: 0 0 0 80px;
  }

  .blockquote{
    padding: 16px 16px 16px 24px;
  }
}

.blockquote-projet p{
  text-align: justify;
}

.projetpage .v-toolbar__content{
  background-color: #FEC503;
}

.layout-projet{
  height: calc(100% - 65px);
}

.v-carousel{
  box-shadow: none;
}

.image-flex{
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  direction: rtl;
}

.image-galerie{
  direction: rtl;
}

.card-projet{
  height: 100%;
}

</style>
