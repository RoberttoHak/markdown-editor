<template>
  <v-app>
    <v-main>
      <HomeComponent/>
    </v-main>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent'

export default {
  name: 'App',
  components: {
    HomeComponent,
  },
}
</script>

<style lang="scss">
blockquote {
  border-left: 3px solid #dbdbdb;
  padding-left: 16px;
}

/* Center tables for demo */
/*table {
  margin: 0 auto;
}*/

/* Default Table Style */
table {
  color: #333;
  background: white;
  border: 1px solid grey;
  font-size: 12pt;
  border-collapse: collapse;
}

table caption {
  padding: .5em;
}

table th,
table td {
  padding: .5em;
  border: 1px solid lightgrey;
}

.editor-row {
  display: flex;
  margin: 1rem 0;

  & > div {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #dcdcdc;

    &:last-child {
      border-right: none;
    }
  }
}
</style>
