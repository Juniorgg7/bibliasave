<template>
  <transition appear>
    <section class="estante">
      <img src="../assets/estante.png" alt="Estante" usemap="#estante" />

      <map name="estante">
        <router-link
          v-for="(livro, index) in biblia"
          :key="livro.abbrev.pt"
          :to="{ path: '/livro', query: { livro: livrosAbre[index] } }"
        >
          <area
            shape="rect"
            :coords="coordenadas[index]"
            :alt="livro.name"
            v-bind:title="livro.name"
          />
        </router-link>
      </map>
    </section>
  </transition>
</template>

<script>
import fetchBiblia from "../mixins/fetchData.js";

export default {
  data() {
    return {
      coordenadas: [
        "30, 74, 45, 148",
        "45, 74, 60, 148",
        "60, 74, 75, 148",
        "75, 74, 90, 148",
        "90, 74, 105, 148",
        "115, 74, 130, 148",
        "130, 74, 145, 148",
        "145, 74, 160, 148",
        "160, 74, 175, 148",
        "175, 74, 190, 148",
        "190, 74, 205, 148",
        "205, 74, 220, 148",
        "220, 74, 235, 148",
        "235, 74, 250, 148",
        "250, 74, 265, 148",
        "265, 74, 280, 148",
        "280, 74, 295, 148",
        "305, 74, 320, 148",
        "320, 74, 335, 148",
        "335, 74, 350, 148",
        "350, 74, 365, 148",
        "365, 74, 380, 148",
        "67, 197, 80, 270",
        "82, 197, 95, 270",
        "97, 197, 110, 270",
        "112, 197, 125, 270",
        "127, 197, 140, 270",
        "188, 197, 200, 270",
        "203, 197, 215, 270",
        "218, 197, 230, 270",
        "233, 197, 245, 270",
        "248, 197, 260, 270",
        "263, 197, 275, 270",
        "278, 197, 290, 270",
        "293, 197, 305, 270",
        "308, 197, 320, 270",
        "323, 197, 335, 270",
        "338, 197, 350, 270",
        "353, 197, 365, 270",
        "38, 316, 53, 388",
        "53, 316, 68, 388",
        "68, 316, 83, 388",
        "83, 316, 98, 388",
        "136, 316, 150, 388",
        "180, 316, 195, 388",
        "195, 316, 210, 388",
        "210, 316, 225, 388",
        "225, 316, 240, 388",
        "240, 316, 255, 388",
        "255, 316, 270, 388",
        "270, 316, 285, 388",
        "285, 316, 300, 388",
        "300, 316, 315, 388",
        "315, 316, 330, 388",
        "330, 316, 345, 388",
        "345, 316, 360, 388",
        "360, 316, 375, 388",
        "82, 436, 95, 508",
        "97, 436, 110, 508",
        "112, 436, 125, 508",
        "127, 436, 140, 508",
        "142, 436, 155, 508",
        "142, 436, 170, 508",
        "157, 436, 185, 508",
        "172, 436, 200, 508",
        "230, 487, 322, 500",
      ],
      livrosAbre: [
        "gn",
        "ex",
        "lv",
        "nm",
        "dt",
        "js",
        "jz",
        "rt",
        "1sm",
        "2sm",
        "1rs",
        "2rs",
        "1cr",
        "2cr",
        "ed",
        "ne",
        "et",
        "job",
        "sl",
        "pv",
        "ec",
        "ct",
        "is",
        "jr",
        "lm",
        "ez",
        "dn",
        "os",
        "jl",
        "am",
        "ob",
        "jn",
        "mq",
        "na",
        "hc",
        "sf",
        "ag",
        "zc",
        "ml",
        "mt",
        "mc",
        "lc",
        "jo",
        "at",
        "rm",
        "1co",
        "2co",
        "gl",
        "ef",
        "fp",
        "cl",
        "1ts",
        "2ts",
        "1tm",
        "2tm",
        "tt",
        "fm",
        "hb",
        "tg",
        "1pe",
        "2pe",
        "1jo",
        "2jo",
        "3jo",
        "jd",
        "ap",
      ],
    };
  },
  name: "Estante",
  mixins: [fetchBiblia],

  created() {
    this.fetchBiblia("https://www.abibliadigital.com.br/api/books");
  },
};
</script>

<style scoped>
.estante {
  width: 100%;
  text-align: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
