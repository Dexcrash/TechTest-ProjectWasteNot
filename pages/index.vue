<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo d-flex justify-center">
        <PhotoBase />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Camilo Sanchez Salamanca
        </v-card-title>
        <v-card-text>
          <p>
            I am a software engineer with five years of experience in the
            industry. I focus on building reliable and scalable features that
            impact as many people as possible. And I seek to stay ahead by
            learning new technologies and polishing my soft skills to support
            my team in the best way. Empathy and respect for people are of
            utmost importance to me.
          </p>
          <hr class="my-3">
          <a
            href="https://www.linkedin.com/in/dexcrash/"
            target="_blank"
            rel="LinkedIn"
          >
            LinkedIn
          </a>
          <br>
          <a
            href="https://github.com/Dexcrash"
            target="_blank"
            rel="Github"
          >
            GitHub
          </a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PhotoBase from '~/components/PhotoBase.vue'

export default {
  name: 'IndexPage',
  components: { PhotoBase }
}
</script>
