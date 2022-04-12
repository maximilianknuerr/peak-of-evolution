<template>
  <v-footer class="bottom-footer" app bottom absolute>
    <v-container class="pt-0 pb-0 pl-0 pr-0 text-right" fluid>
        <v-row class="pt-0 pb-0 pl-0 pr-0" >
            <v-col class="pt-0 pb-0 pl-0 pr-1" cols="12">
                <Toggle class="toggler" v-model="language" on-label="DT" off-label="EN"/>
            </v-col>
        </v-row>
    </v-container>          
  </v-footer>
</template>
<script>
import Toggle from '@vueform/toggle'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'BottomFooter',

    components: {
      Toggle,
    },
    computed: {
        ...mapState({storedLanguage: 'language'}),
        language: {
            get () {
                return this.storedLanguage
            },
            set (value) {
                this.updateLanguage(value)
            }
        }
    },
    methods: {
        ...mapMutations(['updateLanguage']),
    },
    
}
</script>
<style src="@vueform/toggle/themes/default.css"></style>

<style>
.bottom-footer {
    background-color: #FF5808;
    position: absolute;
    height: 40px;
    width: 100%;
    bottom: 0;
}
.toggle-handle{
    width: 1.3rem;
    height: 1.3rem;
    margin: 2px;
}
.toggle-handle-on{
    left: 93%;
}
.toggler {
    --toggle-width: 3.2rem;
    --toggle-height: 1.5rem;
    --toggle-border: 0.125rem;
    --toggle-font-size: 0.75rem;
    --toggle-duration: 150ms;
    --toggle-bg-on: #FF5808;
    --toggle-bg-off: #FF5808;
    --toggle-bg-on-disabled: #d1d5db;
    --toggle-bg-off-disabled: #e5e7eb;
    --toggle-border-on: #EBE5D2;
    --toggle-border-off: #EBE5D2;
    --toggle-border-on-disabled: #EBE5D2;
    --toggle-border-off-disabled: #EBE5D2;
    --toggle-text-on: #EBE5D2;
    --toggle-text-off: #EBE5D2;
    --toggle-text-on-disabled: #EBE5D2;
    --toggle-text-off-disabled: #EBE5D2;
    --toggle-handle-enabled: #ffffff;
    --toggle-handle-disabled: #f3f4f6;
}

</style>