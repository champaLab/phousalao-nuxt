// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "ວັດພູສາເຫຼົ້າ",
            charset: "utf-8",
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: "description", content: "ພຣະໃຫຍ່ພູສ່າເຫລົ້າ ພະເມດຕາຂອງຊາວນະຄອນປາກເຊ, ແຂວງຈຳປາສັກ" },
                { name: "keywords", content: "ພະໃຫຍ່ພູສ່າເຫລົ້າ, ພະເມດຕາຂອງຊາວນະຄອນປາກເຊ, ແຂວງຈຳປາສັກ" }
            ]
        }
    },
    runtimeConfig: {
        apiBasePath: 'https://node-monpity.onrender.com/api/v1',
        public: {}
    },
    components: {
        global: true,
        dirs: ['~/components']
    },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
