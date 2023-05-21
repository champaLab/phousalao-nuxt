// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "ມົນພິທີ",
            charset: "utf-8",
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: "description", content: "ມົນພິທີ ເວັບໄຊ ສູນລວມ ຄວາມຮູ້ທາງສາສະໜາພຸດ" },
                { name: "keywords", content: "ມົນພິທີ, ເວັບໄຊ, ສູນລວມ,ຄວາມຮູ້ທາງສາສະໜາພຸດ, ສາສະໜາພຸດ" }
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
