<template>
    <div class="wrapper">
        <div class="title">Enter Code</div>
        <input type="text" name="" id="" maxlength="16">
        <div class="subtitle">your unique personal code</div>

        <div class="invitation">Doesn't have a code? <span>Request an invitation.</span></div>
        <div class="forgot-code">Forgot your code?</div>
    </div>
</template>

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
    margin-bottom: 200px;
}

.invitation {
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
}

input, input:focus {
    border: 0;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    transition: 0.5s ease-in-out;
    width: 80%;
    margin: 30px 0 10px 0;
}
input:focus {
    border-bottom: 1px solid rgb(194, 194, 194) !important;
}
</style>>
