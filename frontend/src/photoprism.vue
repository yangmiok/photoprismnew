<template>
    <div id="photoprism">

        <p-loading-bar height="4"></p-loading-bar>

        <p-notify></p-notify>

        <v-app>
            <p-navigation></p-navigation>

            <v-content>
                <router-view></router-view>
            </v-content>
        </v-app>

            <img src="https://inews.gtimg.com/newsapp_bt/0/11542288517/1000" width="200px" height="200px">

        <p-photo-viewer></p-photo-viewer>
    </div>
</template>

<script>
    import "./css/app.css";
    export default {
        name: 'photoprism',
        computed: {},
        methods: {},
    };
</script>
