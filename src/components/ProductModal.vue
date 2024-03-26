<script>
export default {
    name: "ProductModal",
    props: {
        modalContent: Object
    },
    emits: ["closeModalWindow"],
    data() {
        return {
            changeImage: true
        }
    },
    methods: {
        changeActiveImage() {
            this.changeImage = !this.changeImage
        }
    }
}
</script>

<template>

    <div class="modal">

        <div class="modal-container">

            <div class="modal-top">
                <button type="button" class="close" @click="$emit('closeModalWindow')">
                    ✖
                </button>
            </div>
            <!-- /.modal-top -->

            <div class="modal-bottom">

                <div class="modal-left">

                    <div class="image">
                        <img :src="changeImage === true ? modalContent.image : modalContent.hoverImage" alt="">
                        <div class="buttons">
                        </div>
                    </div>
                    <!-- /.image -->

                </div>
                <!-- /.modal-left -->

                <div class="modal-right">
                    <div class="prod-brand"><strong>Marca: </strong>{{ modalContent.brand }}</div>
                    <div class="prod-name"><strong>Prodotto: </strong>{{ modalContent.description }}</div>
                    <div class="prod-price">
                        <strong>Prezzo: </strong>
                        <span v-if="modalContent.discount !== null">{{ (modalContent.price - (modalContent.price
                    * Math.abs(parseInt(modalContent.discount))) / 100).toFixed(2) }}&euro;</span>
                        <span v-else>{{ modalContent.price }}&euro;</span>
                    </div>
                </div>

            </div>
            <!-- /.modal-bottom -->

        </div>
        <!-- /.modal-container -->

    </div>
    <!-- /.modal -->

</template>

<style>
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 900px;
    background-color: rgba(211, 211, 211, 0.8);
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    z-index: 1000;

    .modal-container {
        flex-wrap: nowrap;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: row-reverse;


        .modal-top {

            & button {
                padding: 0.5rem;
                border: none;
                box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
            }

            .close {
                left: 0;
                top: 0;
                color: red;
                background-color: rgba(211, 211, 211, 0.8);
                font-size: 20px;

            }

        }

        .modal-bottom {
            display: flex;
            flex-direction: row;
            align-items: flex-end;

            .modal-left {
                padding: 0.5rem;

                & img {
                    width: 610px;
                }
            }

            .modal-right {
                padding: 0.5rem;
                font-size: 20px;
            }
        }
    }
}
</style>