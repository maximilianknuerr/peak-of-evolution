<template>
    <v-list class="list">
        <v-list-item class="list-item">
            <v-btn to="/about" class="list-menu-btn" @click.stop="onClickButton" elevation=0>
            ABOUT
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="list-item">
            <v-btn to="/facts" class="list-menu-btn" @click.stop="onClickButton" elevation=0>
            FACTS
            </v-btn>
        </v-list-item>
        
        <v-divider></v-divider>

        <v-list-item class="list-item">
            <v-btn to="/team" class="list-menu-btn" @click.stop="onClickButton" elevation=0>
            TEAM
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="list-item">
            <v-btn to="/trailer" class="list-menu-btn" @click.stop="onClickButton" elevation=0>
            TRAILER
            </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="list-item">
            <v-btn to="/contact" class="list-menu-btn" @click.stop="onClickButton" elevation=0>
            CONTACT
            </v-btn>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
  name: 'ListMenu',
  data: () => ({
    //
  }),
  methods: {
    onClickButton () {
      this.$emit('clicked')
    }
  }
}
</script>
<style>
.list{
top: 100px;
background-color: #EBE5D2;


}

.list-item{
height: 80px;
justify-content: center;
}

.list-menu-btn{
background-color: #EBE5D2;
font-size: 30px;
}

.v-divider {
    border: 0.8px solid #FF5808 !important;
}
</style>