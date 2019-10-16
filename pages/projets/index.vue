<template>
    <v-container class="container-album">
       <v-layout class="layout-album" row wrap>
         <v-toolbar class="filter" flat>
           <v-switch
            v-for="item in items"
            v-model="selectedCategory"
            :label="item.labels"
            :value="item.values"
          >
          </v-switch>
        </v-toolbar>

        <v-flex
          v-for="projet in filteredProjects"
          :key="projet.id"
          class="album"
          xs12
          sm6
          md4
        >
          <data-sort
            :id="projet.id"
            :img="projet.img"
            :text="projet.titre"
            :alt="projet.alt"
          >
          </data-sort>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
import DataSort from '~/components/DataSort.vue';
import axios from 'axios';
import projets from '~/assets/content/articles.json';

export default {
  components: {
    DataSort
  },

  head () {
    return {
      title: "KLUD Design | Présentation des projets Klud design",
      meta: [
        { hid: 'description', name: 'description', content: "Présentation des projets Klud Design en design de produit, en developpement web, application numérique, mécanique, mécatronique et ingénierie générale." }
      ]
    }
  },

  data() {
    return {
      projets,
      items: [
        {labels: "All", values: "all"},
        {labels: "Web", values: "web"},
        {labels: "Meuble", values: "furniture"},
        {labels: "Produit", values: "design"},
        {labels: "Numérique", values: "digital"},
        {labels: "Ingénierie", values: "engineering"}
      ],
      selectedCategory: "all"
    }
  },

  computed: {
  filteredProjects: function() {

    var category = this.selectedCategory;

    if(category === "all") {
      return projets.sort(function(){return 0.5 - Math.random()});
    } else {
      return projets.filter(function(project) {
        return project.tag === category;
      });
    }
  }
}

  // Depuis un serveur ave Axios

  // asyncData ({ params, error }) {
  //   return axios.get('https://jsonplaceholder.typicode.com/photos')
  //     .then ((res) => {
  //       return {
  //         projets: res.data.slice(0, 10)
  //       }
  //     })
  //     .catch((e) => {
  //     error({ statusCode: 404, message: 'Post not found' })
  //   })
  // }
}
</script>

<style>

.container-album{
  padding: 0;
  margin: 0;
  max-width: 100%;
}

.container-album .v-input__slot{
  margin-top: 25px;
}

@media (min-width: 600px) {
  .layout-album{
    padding-left: 80px;
  }
}

@media (max-width: 600px) {
  .filter{
    display: none;
  }
}

.filter .v-toolbar__content{
  background-color: #FEC503;
  padding-right: 0px;
}

.filter .v-toolbar__title{
  margin-right: 40px;
}

</style>
