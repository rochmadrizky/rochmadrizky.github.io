<template>
  <div
    class="relative px-[5px] py-[5px]"
    @mouseover="showDropdown = true"
    @mouseleave="showDropdown = false"
  >
    <button
      class="flex items-center justify-center text-indigo-500 hover:text-indigo-600"
    >
      <img
        :src="`/flag/${activeFlag.code}.svg`"
        alt="language-flag"
        class="h-5 w-5"
      />
    </button>

    <div
      v-if="showDropdown"
      class="flex flex-col items-center justify-center w-14 h-20 absolute top-full right-0 bg-slate-50 dark:bg-gray-900 border-b-2 border-indigo-500 shadow-md rounded-md"
    >
      <button
        v-for="flag in locales"
        :key="flag.code"
        type="button"
        class="py-2 cursor-pointer flex items-center justify-center"
        @click="gantiFlag(flag.code)"
      >
        <img :src="`/flag/${flag.code}.svg`" class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
const { locales, setLocale, getLocaleCookie, setLocaleCookie } = useI18n();
const showDropdown = ref(false);

const activeFlag = computed(() => {
  let activeCode = getLocaleCookie() || "en";
  return locales.value.find((i) => i.code === activeCode);
});

// const availableLocales = computed(() => {
//   return locales.value.filter((i) => i.code !== getLocaleCookie());
// });

onMounted(() => {
  setLocale(getLocaleCookie() || "en");
});

const gantiFlag = (code) => {
  setLocaleCookie(code);
  setLocale(code);
  showDropdown.value = false;
};
</script>
