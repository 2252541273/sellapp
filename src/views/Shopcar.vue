<template>
    <div class="shopCar">
        <div class="infos" v-for="v in shopcargoods" :key="v.name">
            <Row>
                <i-col span="10">
                    <h3>{{v.name}}</h3>
                </i-col>
                <i-col span="10">
                    <span>￥{{v.price*v.num}}</span>
                </i-col>
                <i-col span="4">
                    <p>
                        <Icon v-show="v.num > 0" type="md-remove-circle" @click="clickNumChange(v.name,1)" />
                        <span v-show="v.num > 0">{{v.num}}</span>
                        <Icon type="md-add-circle" @click="clickNumChange(v.name,1)" />
                    </p>
                </i-col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            clickNumChange(name, val){
                this.$store.commit('changeGoodsNum', {
                    name,
                    val
                })
            }
        },
        computed:{
            shopcargoods() {
                return this.$store.getters.getShopCarGoods;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>