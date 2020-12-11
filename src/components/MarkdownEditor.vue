<template>
  <div class="markdown-editor">
    <div class="markdown-editor__tools">
      <button @click="imageModalVisible = true">Image</button>
      <button @click="videoModalVisible = true">Video</button>
      <button @click="insert('\ntype', 4)">Description</button>
      <button @click="insert('\n> quote...', 8)">Quote</button>
      <button @click="insertFootnote">Footnote</button>
      <button @click="insert('[link](https://google.com)', 19, 1)">Link</button>
      <button @click="fileModalVisible = true">File</button>
      <button @click="insertTwoColumns">2 columns</button>
      <button @click="insertTable">Table</button>
      <button @click="insertTableRow">Table row</button>
    </div>
    <div>
      <textarea
          class="markdown-editor__textarea"
          ref="input"
          placeholder="Type here"
          :value="value"
          @input="onInput"
      ></textarea>
    </div>
    <ImageModal :visible.sync="imageModalVisible" @change="insert($event)"/>
    <VideoModal :visible.sync="videoModalVisible" @change="insert($event)"/>
    <FileModal :visible.sync="fileModalVisible" @change="insert($event)"/>
  </div>
</template>

<script>
import ImageModal from '@/components/ImageModal'
import VideoModal from '@/components/VideoModal'
import FileModal from '@/components/FileModal'

export default {
  name: 'MarkdownEditor',
  components: { FileModal, VideoModal, ImageModal },
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      imageModalVisible: false,
      videoModalVisible: false,
      fileModalVisible: false,
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    insertFootnote() {
      const results = this.value.matchAll(/\[\^(\d+)]/g)

      let maxNum = Math.max(...Array.from(results).map(el => +el[1]))

      if (maxNum < 0) maxNum = 0

      this.insert(`[^${maxNum + 1}]`)

      this.$nextTick(() => {
        this.append(`\n[^${maxNum + 1}]: note`, 3)
      })
    },
    insertTable() {
      const t = '\n| First Header | Second Header |\n' +
          '| --- | --- |\n' +
          '| Content Cell | Content Cell |\n'

      this.insert(t, 77, 65)
    },
    insertTableRow() {
      const t = '\n| Content Cell | Content Cell |\n'

      this.insert(t, 30, 18)
    },
    insertTwoColumns() {
      const t = '::: row [col-left]left[/col-left][col-right]right[/col-right]\n:::'

      this.insert(t, 47, 43)
    },
    insert(text, startOffset = 0, endOffset = 0) {
      const i = this.$refs.input.selectionStart
      let oldVal = this.value
      let newVal = oldVal.slice(0, i) + text + oldVal.slice(i)

      this.$emit('input', newVal)

      this.$nextTick(() => {
        this.$refs.input.focus()
        this.scrollTextarea(this.$refs.input, i + 1)

        this.$refs.input.setSelectionRange(i + text.length - startOffset, i + text.length - endOffset)
      })
    },
    append(text, startOffset = 0, endOffset = 0) {
      let oldVal = this.value
      let newVal = oldVal + text

      this.$emit('input', newVal)

      this.$nextTick(() => {
        this.$refs.input.focus()
        this.scrollTextarea(this.$refs.input, oldVal.length + 1)

        this.$refs.input.setSelectionRange(newVal.length - 1 - startOffset, newVal.length - endOffset)
      })
    },
    scrollTextarea(textarea, position) {
      textarea.selectionEnd = textarea.selectionStart = position
      textarea.blur()
      textarea.focus()
    },
  },
}
</script>

<style scoped lang="scss">
.markdown-editor {
  border: 1px solid #e0e2e3;
  padding: 10px 16px 16px;
  border-radius: 3px;
  margin-bottom: 0.5rem;
}

.markdown-editor__tools {
  border-bottom: 1px solid #e0e2e3;
  padding-bottom: 10px;
  margin-bottom: 16px;

  button {
    color: #999ea2;
    outline: none;
    transition: color .2s ease-in;
    margin-right: 20px;

    &:hover {
      color: #535855;
    }

    &[disabled] {
      background: #ececec;
    }
  }
}

.markdown-editor__textarea {
  width: 100%;
  min-height: 200px;
  resize: vertical;
  outline: none;
}
</style>