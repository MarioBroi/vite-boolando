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
                    <ul>
                        <li class="product-brand">{{ modalContent.brand }}</li>
                        <li class="product-description">{{ modalContent.description }}</li>
                        <li class="product-price">
                            <span v-if="modalContent.discount !== null">{{ (modalContent.price -
                    (modalContent.price
                        * Math.abs(parseInt(modalContent.discount))) / 100).toFixed(2) }}&euro;</span>
                            <span v-else>{{ modalContent.price }}&euro;</span>
                            <butto class="btn-cart">🛒</butto>
                        </li>                                              
                    </ul>

                </div>
                <!-- /.modal-right -->

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
    width: 850px;
    height: 900px;
    background-color: rgb(211, 211, 211);
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

            .modal-left {
                padding: 0.5rem;

                & img {
                    width: 610px;
                }
            }

            .modal-right {
                padding: 0.5rem 3rem 0.5rem 0;

                & ul {
                    list-style: none;

                    .product-brand {
                        padding: 1rem 0;
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: 30px;
                        border-bottom: 2px solid rgba(150, 150, 150, 0.3);
                    }

                    .product-description {
                        text-transform: uppercase;
                        font-weight: bolder;
                        font-size: 20px;
                        padding: 1rem 0;
                        border-bottom: 2px solid rgba(150, 150, 150, 0.3);
                    }

                    .product-price {
                        font-size: 20px;
                        padding: 1rem 0;
                        color: rgba(255, 0, 0, 1);
                    }

                    .btn-cart {
                        font-size: 25px;
                        cursor: pointer;
                        margin-left: 4rem;
                        padding: 0.3rem;
                        border: none;
                        border-radius: 20%;
                        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
                    }

                    .size {
                        border: 1px solid grey;
                        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
                        padding: 0.2rem;
                        display: flex;
                        justify-content: space-between;
                        margin: 1rem auto;
                    }
                }

            }
        }
    }
}
</style>