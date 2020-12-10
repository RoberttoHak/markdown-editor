<template>
  <v-dialog :value="visible" @input="$emit('update:visible', $event)" width="600">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Choose an image
      </v-card-title>

      <v-card-text>
        <v-list three-line>
          <v-list-item @click="onImageSelect(i)" v-for="i in 3" :key="i">
            <v-list-item-icon>
              <v-img max-width="150" :src="`${publicPath}images/sample-${i}.png`"></v-img>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-html="`sample-${i}.jpg`"/>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <h3>Upload:</h3>

        <v-file-input
            truncate-length="15"
            @change="onImageChange"
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
  name: 'ImageModal',
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
    onImageSelect(i) {
      const path = `images/sample-${i}.png`
      this.$emit('change', `\n![text](${this.publicPath + path})`)

      this.$emit('update:visible', false)
    },
    onImageChange(e) {
      if (!e) return

      this.uploadFile(e).then(path => {
        this.$emit('change', `\n![text](${this.publicPath + path})`)

        this.$emit('update:visible', false)
      }).catch(() => {
        alert('unsupported file name')
      })
    },
  },
}
</script>
