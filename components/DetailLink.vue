<template>
  <a
    class="box-border flex flex-row justify-center items-center px-[1rem] py-[0.5rem] gap-2 h-9 border border-gray-300 rounded-md"
    :href="href"
    target="_blank"
  >
    <img src="/assets//image/export.png" alt="Detail Icon" />
    <span class="text-[0.75rem] lg:text-[0.875rem]">{{ text }}</span>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
