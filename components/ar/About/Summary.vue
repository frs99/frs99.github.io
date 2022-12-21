<template>
  <div class="text-color05 w-4/5 sm:w-3/5">
    
    <h1>فارس<br>جفافلية</h1>
    <br>

    <p>السلام عليكم، اسمي <strong>فارس</strong> وعمري 23 و احب المنطق و التحليل،
    <strong>تقني في شبكات الاتصال</strong>، <strong>مطور مواقع الويب</strong>، ومهتم بتصميم UX/UI واحب التعلم و طرح مشاريع مفتوحة المصدر.</p>
    <p>كذلك مهتم جدا بعلوم الشريعة وأقسامها.</p>

    <br>
    
    <p>عملت سنتين لدى &quot;<strong><a  target="_blank" href="https://www.algerietelecom.dz/ar">اتصالات الجزائر</a></strong>&quot;، و أول موقع إلكتروني ابرمجه كان منذ حوالي 3 سنوات.</p>
    <br>

    <p>اجيد استخدام الكمبيوتر و الانترنت في عدة اشياء، أغلبها في البرمجة و التصميم، واجيد لغات البرمجة الأساسية لاجل مطور ويب الواجهة الامامية، واجيد استخدام إطار العمل <strong><a  target="_blank" href="https://vuejs.org/">Vue.js@</a></strong> و <strong><a  target="_blank" href="https://nuxt.com/">Nuxt.js@</a></strong> و <strong><a  target="_blank" href="https://tailwindcss.com/">TailwindCSS@</a></strong></p>
    <br>

    <p>حاليا أعمل على عدة مشاريع ومن بينها <strong><a  target="_blank" href="https://github.com/esaturn">ESaturn@</a></strong> و هو مختبر أنشئ فيه أدوات تدعم وتساعد مطوري الويب، و اعمل على <strong><a  target="_blank" href="https://github.com/gheyth">@غيث</a></strong> و محتواه لخدمة الإسلام، ومشاريع اخرى عديدة تجدها في صفحة <strong><NuxtLink to="/portfolio/">أعمالي</NuxtLink></strong>.</p>
    <br>

    <p>مستقبلا اخطط لتعلم تطوير الواجهة الخلفية للمواقع والدخول الى عالم <strong><a  target="_blank" href="https://flutter.dev/">flutter</a></strong></p>
    <br>

    <p>من اجل سيرتي الذاتية أو معرفة المزيد عني يمكنك إرسال <strong><a  target="_blank" href="mailto:frs99.me@gmail.com">بريد إلكتروني</a></strong>.
    <br>

    يمكنك أن تجدني في <strong><a  target="_blank" href="https://twitter.com/_frs99">Twitter</a></strong> او <strong><a  target="_blank" href="https://github.com/frs99">Github</a></strong> او <strong><a  target="_blank" href="https://www.facebook.com/frsdje">Facebook</a></strong> .</p>
    <br>

    <p class="font-light text-sm text-left"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> FARES {{year}}</p>
    <div class="mt-5">
      <NuxtLink class="float-right inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:mr-1" to="/" aria-label="link">/رجوع</NuxtLink>
      <NuxtLink class="float-left inline-block bg-color04 text-color01 font-medium px-6 py-2 rounded-md mt-3 transition-all hover:ml-1" to="/portfolio/" aria-label="link">/أعمالي</NuxtLink>
    </div>
  </div>
</template>

<script setup>
  let d = new Date
  let year = d.getFullYear()
</script>

<style scoped>
  h1{
    font-size: 38px;
    font-weight: bold;
  }
  strong a{
    text-decoration: revert;
    padding: 0 2px 0 2px;
    transition: all 0.5s;
    border-radius: 3px;
    
  } strong a:hover{background-color: #C9ADA7; color: #22223B;}
</style>