<template>
    <div class="footer__container">
        <div class="footer__content">
            <div class="footer__media_links">
                <div class="footer__site_logo">
                    <code>
                        <span class="syntax__color_a">console</span><span class="syntax__color_b">.log</span><span class="syntax__color_b">(</span><span class="syntax__color_c">'luisFloresCoder'</span><span class="syntax__color_b">)</span>
                    </code>
                </div>
                <div class="footer__media_logo">
                    <div class="footer__media_item">
                        <a href="https://www.linkedin.com/in/luis-flores-33952297/">
                            <img src="@/assets/linkedin_logo_32x32.png" alt="linkedin logo">
                        </a>
                    </div>
                    <div class="footer__media_item">
                        <a href="https://github.com/luisflores189544">
                            <img src="@/assets/github_logo_32x32.png" alt="github logo">
                        </a>                        
                    </div>
                </div>
                
            </div>
            <div class="footer__site_links">
                <div class="footer__site_item">
                    <a href="#">Projects</a>
                </div>
                <div class="footer__site_item">
                    <a href="#">Blog</a>
                </div>
                <div class="footer__site_item">
                    <a href="#">Contact Me</a>
                </div>
                <div class="footer__site_item">
                    <a href="#">Hire Me</a>
                </div>
                <div class="footer__site_item">
                    <a href="#">Projects</a>
                </div>

            </div>
            
        </div>
    </div>
</template>

<script>

</script>
<style scoped>
.footer__container {
    background-color: rgb(227, 227, 235);
    height: 220px;
    /* bottom: 0; */
    position: relative;
    display: block;
}

.footer__content {
    display: flex;
    flex-flow: row;
    justify-content: center;
}

.footer__site_logo {
    text-align: center;
}

.footer__media_logo {
    display: inline-block;
    margin: 10px;
    width: 100%;
    text-align: center;
    
}

.footer__media_links{
    margin: 10px 10px;
}

.footer__media_item {
    display: inline;
    padding: 10px;
}

.footer__site_links {
    display: flex;
    flex-flow: row wrap;
    margin: 10px 10px;
    text-align: center;
}

.footer__site_item {
    width: 33%;
}

.footer__site_item a {
    color: rgb(44, 43, 43);
}

.footer__site_item a:hover {
    color: #2cdb9b;
}
@media all and (max-width: 470px) {
    .footer__content {
        flex-direction: column;
    }

    .footer__site_item {
        width: 50%;
        padding: 10px 0;
    }

    .footer__media_links {
        order: 2;
    }
}
</style>
