<template>
    <div>
        <div id="add-btn-wrapper">
            <button data-bs-toggle="modal" data-bs-target="#modal-form">+&nbsp; ADD NEW</button>
        </div>
        <div id="category-btns-wrapper">
            <button>emails</button>
            <button>investment</button>
            <button>banking</button>
            <button>others</button>
        </div>
        <hr>

        <div id="content-wrapper">
            <ul>
                <li>
                    <div class="grid-item">
                        <div class="main-text name "><strong>AUB Credit Card</strong></div>
                    </div>
                    <div class="grid-item">
                        <div class="main-text username">billjustin15</div>
                    </div>
                    <div class="grid-item">
                        <div class="main-text password">billjustin15</div>
                    </div>
                    <div class="grid-item">
                        <div class="main-text actions">
                            <i class='bx bx-edit'></i>
                            <i class='bx bx-trash' data-bs-toggle="modal" data-bs-target="#modal-delete"></i>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="grid-item">
                        <div class="main-text name "><strong>AUB Credit Card</strong></div>
                    </div>
                    <div class="grid-item">
                        <div class="main-text username">billjustin15</div>
                    </div>
                    <div class="grid-item">
                        <div class="main-text password">billjustin15</div>
                    </div>
                    <div class="grid-item">
                        <div class="main-text actions">
                            <i class='bx bx-edit'></i>
                            <i class='bx bx-trash' data-bs-toggle="modal" data-bs-target="#modal-delete" ></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <CreateAccountForm />
        <DeleteConfirmation message="Do you really want to delete this account?" />

    </div>

</template>

<script setup>
import DeleteConfirmation from "@/components/action-modals/DeleteConfirmation.vue"
import CreateAccountForm from "@/components/forms/modals/CreateAccountForm.vue"

</script>

<style scoped lang="css">

* {
    font-family: "Lora";
}

button {
    border: 0;
}

#add-btn-wrapper, #category-btns-wrapper {
    width: 100%;
    text-align: right;
}

#add-btn-wrapper button {
    width: 100px;
    height: 30px;
    background: #3F52FF;
    border-radius: 8px;
    color: white;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    margin-right: 20px;
}

#category-btns-wrapper {
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
}

#category-btns-wrapper button {
    width: 80px;
    height: 25px;
    background: #CDCCCC;
    border-radius: 5px;
    font-size: 9px;
    font-weight: bold;
    text-transform: uppercase;
    color: #7A7A7A;
    cursor: pointer;
}
#category-btns-wrapper button.active {
    background: #2EA80F;
    color: #fff;
}
hr {
    width: 350px;
    margin: 0 auto;
    color: #DDDDDD;
}

#content-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

ul li {
    width: 400px;
    height: 40px;
    background: #fff;
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
    height: 40px;
    margin-bottom: 2px;
}
ul li .grid-item {
    color: #414141;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 10px;
}

ul li .grid-item .main-text {
    font-size: 11px;
    position: relative;
}

ul li .grid-item .main-text.name::before {
    content: "NAME";
    font-size: 6px;
    color: #8D8D8D;
    position: absolute;
    top: -5px;
}
ul li .grid-item .main-text.username::before {
    content: "USERNAME";
    font-size: 6px;
    color: #8D8D8D;
    position: absolute;
    top: -5px;
}
ul li .grid-item .main-text.password::before {
    content: "PASSWORD";
    font-size: 6px;
    color: #8D8D8D;
    position: absolute;
    top: -5px;
}
ul li .grid-item .main-text.actions {
    text-align: right;
}
ul li .grid-item .main-text.actions i {
    margin: 3px;
    cursor: pointer;
}
ul li .grid-item .main-text.actions i:first-of-type {
    color: #2EA80F;
    margin-right: 5px;
}
ul li .grid-item .main-text.actions i:last-of-type {
    color: #DE0404;
}
</style>
