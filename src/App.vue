<template>
    <div class="app">
        <link href="https://fonts.googleapis.com/css?family=New+Rocker&display=swap" rel="stylesheet">
        <div class="nav">
            <router-link to="/" class="homeButton">Home</router-link>
            &nbsp;
            <router-link to="/about" class="aboutButton">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss" scoped>
    $hoverColor: red;
    .app{
        text-align: center;
        background: #ccc ;
        border-radius: 15px;
        padding: 60px;
        font-family: 'New Rocker', cursive;
    }
    .nav{
        font-family: New Rocker;
        font-size: 20px;
        text-align: center;
    }
    .homeButton:hover{
        color: $hoverColor;
    }
    .aboutButton:hover{
        color: $hoverColor;
    }
</style>