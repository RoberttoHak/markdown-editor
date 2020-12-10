<template>
  <v-dialog :value="visible" @input="$emit('update:visible', $event)" width="600">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Choose a file
      </v-card-title>

      <v-card-text>
        <v-list three-line>
          <v-list-item @click="onFileSelect(i)" v-for="i in 3" :key="i">
            <v-list-item-icon>
              <a :href="`${publicPath}files/sample-${i}.doc`"></a>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-html="`sample-${i}.doc`"/>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <h3>Upload:</h3>

        <v-file-input
            truncate-length="15"
            @change="onFileChange"
        ></v-file-input>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="primary"
            text
            @click="$emit('update:visible', false)"
        >
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import uploadFile from '@/mixins/uploadFile'

export default {
  name: 'FileModal',
  mixins: [uploadFile],
  props: {
    visible: {
      type: Boolean,
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    onFileSelect(i) {
      const path = `files/sample-${i}.doc`
      this.$emit('change', `\n[file](${this.publicPath + path})`)

      this.$emit('update:visible', false)
    },
    onFileChange(e) {
      if (!e) return

      this.uploadFile(e, 'file').then(path => {
        this.$emit('change', `\n[file](${this.publicPath + path})`)

        this.$emit('update:visible', false)
      }).catch(() => {
        alert('unsupported file name')
      })
    },
  },
}
</script>
