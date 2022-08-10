export default {
    data() {
        return {
            livros: null,
        }
    },

    methods: {
        fetchLivros(url) {
            this.loading = true
            fetch(url)
                .then(r => r.json())
                .then(r => {
                    this.livros = r
                })
        },
    }
}