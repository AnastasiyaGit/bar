export const localeStorageFunc = (lang)=>{
   const setLang = (lang)=>{
    // console.log(lang)
    localStorage.setItem("lang", lang);
  }
   const getLang = ()=>{
    // console.log(localStorage.getItem("lang"))
    return localStorage.getItem("lang") || 'ru';
  }
   const removeLang = (lang)=>{
    localStorage.removeItem("lang");
  }
  return{
    setLang,
    getLang,
    removeLang
  }
}

