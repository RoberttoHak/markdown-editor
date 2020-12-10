<template>
  <div class="pa-4">
    <MarkdownEditor v-model="content"/>

    <p class="text-caption grey--text">
      **Bold** *Italic* _Underline_ - List with bullets # H1 ## H2 ### H3 #### H4 ##### H5 ###### H6
    </p>

    <h3>Preview:</h3>
    <div v-html="renderedContent"></div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import MarkdownIt from 'markdown-it'
import Footnote from 'markdown-it-footnote'
import MarkdownContainer from 'markdown-it-container'
import HtmlEmbed from 'markdown-it-html5-embed-hazaker'

const md = new MarkdownIt()
    .use(Footnote)
    .use(HtmlEmbed, { html5embed: { useImageSyntax: true } })
    .use(MarkdownContainer, 'row', {
      validate(params) {
        return params.trim().match(/^row\s+(.*)$/)
      },
      render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^row\s+(.*)$/)

        if (tokens[idx].nesting === 1) {
          let text = md.utils.escapeHtml(m[1])
              .replace('[col-left]', '<div>')
              .replace('[/col-left]', '</div>')
              .replace('[col-right]', '<div>')
              .replace('[/col-right]', '</div>')

          return '<div class="editor-row">' + text
        } else {
          return '</div>\n'
        }
      },
    })

export default {
  name: 'HomeComponent',
  components: {
    MarkdownEditor,
  },
  data() {
    return {
      content: '',
      renderedContent: '',
      debouncedUpdate: null,
    }
  },
  created() {
    this.debouncedUpdate = this.$_.debounce(val => {
      this.renderedContent = md.render(val)
    }, 1000)
  },
  watch: {
    content(val) {
      this.debouncedUpdate(val)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
