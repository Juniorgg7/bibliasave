<template>
  <transition appear>
    <div class="livro">
      <section class="detalhes">
        <h2>Detalhes do Livro</h2>
        <ul>
          <li>
            Autor: <span>{{ biblia.author }}</span>
          </li>
          <li>
            Grupo: <span>{{ biblia.group }}</span>
          </li>
          <li>
            Testamento: <span>{{ biblia.testament }}</span>
          </li>
          <li>
            Capítulos: <span>{{ biblia.chapters }}</span>
          </li>
          <li>
            Abreviação: <span>{{ biblia.abbrev.pt }}</span>
          </li>
        </ul>
        <h3>Capítulos</h3>
        <div class="capitulos">
          
          <span
            v-for="cap in biblia.chapters"
            :key="cap"
            :value="cap"
            @click="mudarCapitulo(cap)"
            >{{ cap }}</span
          >
        </div>
      </section>
      <section class="versiculos">
        <h2>{{ biblia.name }} - {{ capitulo }}</h2>
        <div class="pag" v-for="livro in livros.verses" :key="livro.number">
          <span class="numero-versiculo">{{ livro.number }}</span>
          <p>{{ livro.text }}</p>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import fetchBiblia from "../mixins/fetchData.js";
import fetchLivros from "../mixins/fetchLivros.js";

export default {
  data() {
    return {
      capitulo: 1,
      url: window.location.href.slice(34, 37),
    };
  },
  name: "Livro",
  mixins: [fetchBiblia, fetchLivros],
  methods: {
    mudarCapitulo(cap) {
      this.capitulo = cap;
      this.fetchLivros(
        `https://www.abibliadigital.com.br/api/verses/acf/${this.url}/${this.capitulo}`
      );
      console.log(this.livro);
    },
  },
  created() {
    this.fetchBiblia(`https://www.abibliadigital.com.br/api/books/${this.url}`);
    this.fetchLivros(
      `https://www.abibliadigital.com.br/api/verses/acf/${this.url}/${this.capitulo}`
    );
  },
};
</script>

<style scoped>
.livro {
  display: grid;
  grid-template-columns: 30% 70%;
  width: 1020px;
  margin: 0 auto;
}

.livro section {
  padding: 20px 0;
}

.livro section h2 {
  font-size: 30px;
  color: #3c3939;
  margin-bottom: 10px;
}

.livro ul li {
  list-style: none;
  font-size: 18px;
  color: #3c3939;
}

.livro ul li span {
  color: #7d7d7d;
  font-size: 17px;
}

.detalhes {
}

.versiculos {
  background-color: #589a8d;
  margin-top: 40px;
  padding: 20px;
}

.livro .versiculos h2 {
  text-align: center;
  color: #fff;
  font-size: 40px;
}

.versiculos .pag {
  background-color: #0a3a40;
  color: #fff;
  margin: 20px;
  padding: 20px;
  font-size: 1.1rem;
}

.pag .numero-versiculo {
  display: inline-block;
  text-decoration: underline;
}

.capitulos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.capitulos span {
  display: inline-block;
  background-color: #0a3a40;
  text-align: center;
  color: #fff;
  height: 40px;
  width: 40px;
  margin: 10px 10px 10px 0;
  border-radius: 3px;
  cursor: pointer;
  font-size: 25px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

h3 {
  display: block; 
  text-align: center;
  margin: 10px 0;
  font-size: 1.3rem;
  color: #3c3939;
}
</style>
