<template>
    <div class="shopCar">
        <ul class="infos" v-for="(v,i) in foodList" :key="i">
            <li>
                <Row>
                    <i-col span="10">
                        <h3>{{v.name}}</h3>
                    </i-col>
                    <i-col span="10">
                        <span>￥{{v.price*v.num}}</span>
                    </i-col>
                    <i-col span="4">
                        <p>
                            <Icon v-show="child.num > 0" type="md-remove-circle" @click="sub(v.name)" />
                            <span v-show="child.num > 0">{{child.num}}</span>
                            <Icon type="md-add-circle" @click="add(v.name)" />
                        </p>
                    </i-col>
                </Row>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods:{
            sub(name){
                this.$store.commit('subNum',name)
            },
            add(name){
                this.$store.commit('addNum',name)
            }
        },
        computed:{
            foodList(){
                return this.$store.getters.getGoods;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>