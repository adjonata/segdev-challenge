<script setup lang="ts"></script>

<template>
  <div class="home">
    <h2>Resumo</h2>
    <p>
      Aplicação desenvolvida como teste técnico para vaga na empresa
      <a href="https://www.segdev.com.br/" target="_blank">SegDev</a>,<br />
      no cargo de Desenvolvedor Front-End Pleno.
    </p>
    <p>
      O código da aplicação está disponível neste<a
        href="https://github.com/adjonata/segdev-challenge"
      >
        repositório</a
      >.
    </p>

    <h2>Tecnologias utilizadas:</h2>
    <ul>
      <li>Vue 3 + Vite</li>
      <li>Composition API</li>
      <li>Typescript</li>
      <li>Axios</li>
      <li>Vue Router</li>
      <li>Pinia + PiniaPersistedState</li>
      <li>Sass</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home {
  text-align: center;

  h2 {
    margin-top: 20px;
  }
  a {
    color: $green;
  }
  ul {
    li {
      &::before {
        content: "- ";
      }
    }
  }
}
</style>
