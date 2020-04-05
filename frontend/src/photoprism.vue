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
        <div style="text-align: center">
            <img :src="imgUrl" width="200px" height="200px">
        </div>
        <p-photo-viewer></p-photo-viewer>
    </div>
</template>

<script>
    import "./css/app.css";
    import imgUrl from '../../assets/weixinok.png';




    export default {
        name: 'photoprism',
        computed: {},
        methods: {},
        data () {
            return {
                imgUrl: imgUrl,
            };
        }
    };
</script>
