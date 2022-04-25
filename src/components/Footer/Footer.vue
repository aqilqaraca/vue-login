<template>
    <footer>
        <div class="container">
            <div class="footer_wrapper">
                <div class="contact_us">
                    <Button :name="'CONTACT US'"/>
                    <p>Infinte Talent Group 2022</p>
                </div>
                <div class="content">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>WHS Statement</li>
                        <li>Modern Slavery</li>
                        <li>Human Rights Statement</li>
                    </ul>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>WHS Statement</li>
                        <li>Modern Slavery</li>
                        <li>Human Rights Statement</li>
                    </ul>
                </div>
                <div class="icons">
                    <Icons :name="'facebook'" :iconColor="'#247ffc'" :bg="'white'"  :hoverColor="'#2b3c63'"/>
                    <Icons :name="'twitter'" :iconColor="'#247ffc'" :bg="'white'"  :hoverColor="'#2b3c63'"/>
                    <Icons :name="'linkedin'" :iconColor="'#247ffc'" :bg="'white'"  :hoverColor="'#2b3c63'"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Button from '../Button/Button.vue'
import Icons from '../SocialMediaIcons/Icons.vue'
export default {
    components : {
        Button,
        Icons
    }
}
</script>

<style scoped>
footer{
    height: 200px;
    display: flex;
    align-items: center;
}
.container{
    padding: 0 100px;
    width: 100%;
}
.contact_us p{
    margin-top: 20px;
    font-size: .7vw;
}
.footer_wrapper{
    display: flex;
    justify-content: space-between;
}
.icons{
    display: flex;
    gap: 10px;
}
.content{
    display: flex;
    gap: 40px;
}
ul li{
    margin: 15px 0;
}
</style>