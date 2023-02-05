<template>
    <div class="wrapper">
        <div class="title">Credentials</div>
        <input type="text" v-model="name" minlength="4" maxlength="12" placeholder="name">
        <div class="subtitle">your name</div>
        <input type="password" v-model="password" minlength="4" maxlength="8">
        <div class="subtitle">your unique personal code</div>
        
        <button class="btn btn-primary mt-5" id="loginbtn" @click="submitForm">Login</button>
        <div class="invitation">Doesn't have an account? <span>Request an invitation.</span></div>
        <div class="forgot-code">Forgot your access?</div>
    </div>
</template>

<script setup>
import router from '@/router'
import { useUserStore } from '@/store/user-store'

    let name = '', password = ''
    const userStore = useUserStore()
    
    const submitForm = async () => {
        let button = document.getElementById('loginbtn')
        button.classList.add('btn-loading')

        await userStore.login({ name, password })
        router.push({ name: "Accounts" })
        
        button.classList.remove('btn-loading')
    }
</script>

<style lang="css" scoped>
* {
    font-family: 'Raleway';
}
.wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: white;
}
.title {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #484848;
}
.subtitle {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #BCBCBC;
}

.invitation {
    margin-top: 70px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-bottom: 10px;
}

.invitation span {
    color: #1C82F9 !important;
    cursor: pointer;
}

.forgot-code {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #8D8D8D;
    cursor: pointer;
    font-family: 'Lora';
}

input, input:focus {
    border: 0;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    transition: 0.5s ease-in-out;
    width: 70%;
    margin: 20px 0 10px 0;
}
input:focus {
    border-bottom: 1px solid rgb(194, 194, 194) !important;
}

input[type=password] {
    font-size: 20px;
    font-weight: bold;
}

button {
    display: block;
    width: 80%;
}
</style>>
