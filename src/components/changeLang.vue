<template>
  <el-row :gutter="20">
    <el-col :md="12"><span @click="changeLanguage('ru')">ru</span></el-col>
    <el-col :md="12"><span @click="changeLanguage('en')">en</span></el-col>
  </el-row>
</template>

<script setup>
import {localeStorageFunc} from "@/storage/localeStorage.js";
import { useI18n } from "vue-i18n";



const{setLang}=localeStorageFunc()
const { locale } = useI18n();


//const elementLocale = inject("elementLocale");

const changeLanguage = (lang) => {
  setLang(lang);
  locale.value = lang; // Меняем язык в i18n
};
</script>

<style scoped>

</style>
