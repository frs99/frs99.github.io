<template>
  <section class="py-20 px-10 sm:container sm:my-0 sm:mx-auto md:max-w-3xl">
    <div>
      <h1 class="font-bold text-color03 text-3xl">My Personal Uses</h1>
      <p class="font-light text-color03 text-sm mt-2">Here, I share the most important and frequently used tools in the
        world of technology and computers.</p>
      <p class="font-light text-color05 bg-color02 p-3 rounded-lg text-sm mt-2">Everything mentioned here is based on my
        personal opinion and preferences, and it may not necessarily be the best choice for you.</p>
    </div>

    <div class="mt-8">
      <!-- brand -->
      <div>
        <h3 class="font-semibold text-3xl text-color03">Visuals and Design</h3>
        <ul class="mt-3">
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              For fonts, I use
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://fonts.google.com">Google Fonts</a>
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              As for colors, I use
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://coolors.co">Coolors</a>
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              When it comes to icons for programming or design, I like to use
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://etmami.github.io/flaticon-uicons/">Flaticon Uicons</a>
            </p>
          </li>
        </ul>
      </div>
      <!-- editor -->
      <div>
        <h3 class="font-semibold text-3xl text-color03">Editor</h3>
        <ul class="mt-3">
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              I use
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://code.visualstudio.com/">Visual Studio Code</a>
              by Microsoft
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              Theme
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=ziterz.codesandbox-black-theme">CodeSandbox
                Black</a>
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              Icons
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon
                Theme</a>
            </p>
          </li>
        </ul>
      </div>
      <!-- pc  -->
      <div>
        <h3 class="font-semibold text-3xl text-color03">Hardware and Software</h3>
        <ul class="mt-3">
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              I use a laptop
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://support.hp.com/th-en/document/c04029874">HP ProBook 650 G1 Notebook</a>
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              With a
              <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
                href="https://www.intel.com/content/www/us/en/products/sku/76347/intel-core-i54300m-processor-3m-cache-up-to-3-30-ghz/specifications.html">Intel®
                Core™ i5-4300M CPU @ 2.60GHz × 4</a>
              processor
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
            <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
            <p class="font-light text-color04 text-base">
              And 8.0 GiB RAM
            </p>
          </li>
          <li class="flex items-center text-lg mb-2">
          <i class="fi fi-sr-star-christmas text-color04 h-[18px] mr-2"></i>
          <p class="font-light text-color04 text-base">
            With the operating system
            <a class="text-color05 hover:text-color01 hover:bg-color03  px-1 rounded-sm transition-all" target="_blank"
              href="https://ubuntu.com/">Ubuntu 20.04 LTS</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
</template>

<script setup>
useHead({ title: 'Uses' })
definePageMeta({ layout: 'english' })
</script>

<style scoped>
a {
  transition: all 0.5s;
}
</style>