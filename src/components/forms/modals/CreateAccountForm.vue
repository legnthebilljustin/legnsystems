<template>
    <div class="modal modal-blur fade" id="modal-form" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <form class="modal-content" @submit.prevent="submitForm">
                <div class="modal-body">
                    <div class="modal-title text-center">Add a new account</div>
                    <div class="form-item" v-for="(field, index) in formFields" :key="index">
                        <label class="form-label text-capitalize">{{ field }}</label>
                        <input type="text" class="form-control form-control-flush" autocomplete="off" :name="field" :placeholder="field">
                    </div>
                    <div class="form-item">
                        <label class="form-label">Account Type</label>
                        <div class="row mt-3">
                            <div class="col-3" v-for="(type, index) in accountTypes" :key="index">
                                <label class="form-check">
                                    <input type="radio" name="account_type" class="form-check-input" :value="type">
                                    <span class="form-check-label text-capitalize">{{ type }}</span>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link link-secondary me-auto" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-primary" id="submitbtn">Add Account</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const formFields = ["name", "username", "password"]
const accountTypes = ["email", "investment", "banking", "others"]

const submitForm = () => {
    const btn = document.getElementById("submitbtn")
    btn.classList.add("btn-loading")

    btn.classList.remove("btn-loading")
    document.getElementById("modal-form").classList.remove("show")
}
</script>

<style scoped>
label {
    margin-bottom: -10px !important;
    font-size: 10px;
}

input {
    margin-left: -10px;
}

.form-item {
    margin-bottom: -15px;
}

.note {
    font-size: 11px;
    font-style: italic;
    color: #3F52FF;
}

</style>
