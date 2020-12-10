export default {
  methods: {
    uploadFile(file, type = 'image') {
      return new Promise((res, rej) => {
        if (file.name.includes('error')) rej('error')

        let url

        switch (type) {
          case 'video':
            url = 'http://techslides.com/demos/sample-videos/small.webm'
            break
          case 'file':
            url = 'https://file-examples-com.github.io/uploads/2017/02/file-sample_1MB.docx'
            break
          default:
            url = 'https://picsum.photos/320/240'
            break
        }

        setTimeout(() => {
          res(url)
        }, 1000)
      })
    },
  },
}
