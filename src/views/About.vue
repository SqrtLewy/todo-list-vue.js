<template>
    <div class="wrapper">
        <div class="about">
            <h2>Contact me!</h2>
            <a href="https://github.com/SqrtLewy" target="_blank" class="link_contact">
                <figure class="item_contact">
                    <img src="../assets/github.png" alt="GitHub logo" class="img_contact">
                    <figcaption class="caption_contact">GitHub</figcaption>
                </figure>
            </a>
            <a href="https://www.linkedin.com/in/arkadiusz-lewicki-66b243171/" target="_blank" class="link_contact">
                <figure class="item_contact">
                    <img src="../assets/linkedin.png" alt="LinkedIn logo" class="img_contact">
                    <figcaption class="caption_contact">LinkedIn</figcaption>
                </figure>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
    };
</script>

<style lang="scss" scoped>
    .about{
        width:100%;
        height:100%;
    }
    a:hover{
        text-decoration: none;
        color:green;
    }
    .link_contact{
        display:inline-block;
    }
    .img_contact{
        height: 80px;
    }
    .caption_contact{
        text-align: center;
    }
    h2{
        text-align: center;
		font-family: 'New Rocker', cursive;
    }
</style>
