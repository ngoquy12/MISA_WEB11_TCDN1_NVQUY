<template>
    <div class="input-wrapper" :class="inputWidth" >
        <label v-if="inputLabel" class="input-label" :title="labelTooltip">{{inputLabel}}<span v-if="validateType=='required'" class="m-input-title-require">*</span></label>
        <input :type="inputType" :value="modelValue" class="input" :class="{'m-input-error':errorMess,'input-date':inputType=='date','input-with-icon':icon}"
                @input="$emit('update:modelValue',$event.target.value)" :tabindex="tabIndex"
                :placeholder="placeHolder" v-on:keyup="$emit('keyup')" :title="errorMess">
        <div v-if="icon" class="icon" :class="icon"></div>
        <span v-if="errorMess" class="m-input-message-error">{{errorMess}}</span>
    </div>
</template>

<script>
export default {
    name:"BaseInput",
    props:["inputLabel","errorMess","inputWidth","validateType","modelValue","inputType","tabIndex","placeHolder","icon","labelTooltip"],
    emits:['update:modelValue','keyup'],
    data() {
        return {
            isError:false
        }
    }
}
</script>