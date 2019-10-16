<template lang="html">
  <nuxt-link
    :to="{ name: 'projets-id', params: { id: id }}"
    >
    <v-hover>
      <v-card
        slot-scope="{ hover }"
        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
      >
        <v-img
          :aspect-ratio="4/3"
          :key="id"
          :src="img"
          :alt="alt"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              {{ text }}
            </div>
          </v-expand-transition>
        </v-img>
      </v-card>
    </v-hover>
  </nuxt-link>
</template>

<script>
export default {
  props: ['id', 'img', 'text', 'alt']
}
</script>

<style lang="css">

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
  background-color: #FFF;
  font-size: 2.2vw;
  font-family: 'Poiret One', cursive;
}

</style>
