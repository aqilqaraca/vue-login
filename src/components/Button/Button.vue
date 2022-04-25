<template>
    <button @click="onClick">
        {{nameUppercase}}
    </button>
</template>

<script>
export default {
    props : {
        name : {
            type : String,
            required : true
        },
        onClick : {
            required : false
        }
    },
    computed: {
        nameUppercase(){
            return this.name.toUpperCase()
        }
    }
}
</script>

<style scoped>
button{
    border-radius: 15px;
    background-color: #247ffc;
    padding: 12px 30px;
    color: white;
    cursor: pointer;
}
</style>