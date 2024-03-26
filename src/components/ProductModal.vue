<script>
export default {
    name: 'ProductModal',
    props: {
        singleProduct: Object,
        showModal: true
    },
    emit: ['closeModal']
}
</script>

<template>
    <div class="modal">
        <div class="image">
            <p>IMAGE TEST</p>
        </div>
        <div class="text">
            <h1>TEST</h1>
            <span @click="$emit('closeModal')">❌</span>
        </div>
    </div>
</template>

<style></style>