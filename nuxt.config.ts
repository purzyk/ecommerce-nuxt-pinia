import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/apollo',
        '@pinia/nuxt'
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://przyjazna.com.pl/graphql/',
            },
        },
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
                }
            ]
        }
    },

})
