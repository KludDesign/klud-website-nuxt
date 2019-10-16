<template>
  <v-container class="pitch" fluid fill-height>
    <v-layout>
      <v-flex class="flex-pitch">
        <v-tabs
          slot="extension"
          v-model="tab"
          color="#FEC503"
          grow
        >
          <v-tabs-slider color="#000"></v-tabs-slider>

          <v-tab
            v-for="article in pitchs"
            :key="article.tab"
          >
            {{ article.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items
          v-model="tab"
        >
          <v-tab-item
            v-for="article in pitchs"
            :key="article.tab"
            :style="article.backImg"
          >
            <v-card flat>
              <v-card-title primary-title>
                <div>
                  <h1>{{article.titre}}</h1>
                </div>
              </v-card-title>
              <v-card-text v-for="text in article.texts" class="animated zoomIn fast">
                {{ text.p1 }}
                {{ text.p2 }}
                {{ text.p3 }}
              </v-card-text>
              <div
                v-if="article.tab === 'Numérique'"
                class="web-logo"
              >
              <div
                v-for="img in imgs"
                :class="img.delay"
              >
                <img :src="img.src" :alt="img.alt" />
              </div>
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import pitchs from '~/assets/content/pitchArticles.json';
import imgs from '~/assets/content/pitchImgs.json';

  export default {
    head () {
      return {
        title: "KLUD Design | Description des activités freelance de Klud Design",
        meta: [
          { hid: 'description', name: 'description', content: "Les activités freelance de Klud Design sont le design, l'ingénierie et le numérique" }
        ]
      }
    },

    data () {
      return {
        tab: null,
        pitchs,
        imgs
      }
    }
  }
</script>

<style>
.pitch{
  padding-top: 0px;
  padding-right: 0px;
}

@media (min-width: 600px) {
  .web-logo{
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    bottom: 10px;
    overflow: hidden;
  }

  .pitch .flex-pitch.flex{
    height: calc(100% - 48px);
    width: calc(100% - 80px);
    position: absolute;
  }

  .pitch .flex-pitch.flex .v-window, .pitch .v-window__container, .pitch .v-window-item{
    display: flex;
    height: 100%;
    width: 100%;
  }

  .pitch .v-card{
    width: 100%;
    display: block;
    margin-top: 15vh;
    margin-bottom: 15vh;
    margin-left: 6vw;
    margin-right: 6vw;
    background-color: rgba(255,255,255,.5);
  }
}

@media (max-width: 600px) {
  .pitch{
    padding-left: 0px;
  }

  .pitch .flex-pitch.flex{
    width: 100% !important;
  }

  .web-logo{
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .pitch .v-card{
    width: 100%;
    margin-top: 0vh;
    margin-left: 0vw;
    margin-right: 0vw;
    background-color: rgba(255,255,255,.5);
  }

  .pitch .v-window-item{
    padding-bottom: 5vh;
    height: 100%;
  }
}

.pitch .v-window-item{
  background-repeat: repeat;
  background-color: #fff;
}

.web-logo div{
  margin: auto;
}

.web-logo img{
  margin: auto;
  max-width: 10vw;
  max-height: 10vh
}

.v-card__text{
  font-family: 'Quicksand', cursive;
  font-size: 1.5em;
  padding-bottom: 0px;
  text-align: justify;
}
</style>
