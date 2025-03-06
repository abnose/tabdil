<script setup>
defineProps({
  title: {
    type: String,
    required: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="w-full bg-[#2C2E30] rounded-[16px] p-4 px-[1rem] md:px-[6rem] lg:px-[9.75rem] mt-[2rem]"
  >
    <h1 v-if="title" class="text-[1.25rem] lg:text-[1.5rem] text-white">
      {{ title }}
    </h1>

    <main
      class="grid grid-cols-1 mt-[1rem] lg:mt-[1.5rem] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-full h-full"
      aria-label="Content Grid"
    >
      <template v-if="loading">
        <div v-for="n in 6" :key="n" class="bg-[#3A3D40] rounded-lg p-4">
          <p-skeleton width="80%" height="1.5rem" class="mb-2"></p-skeleton>
          <p-skeleton width="100%" height="1rem"></p-skeleton>
          <p-skeleton width="100%" height="1rem" class="mt-1"></p-skeleton>
        </div>
      </template>

      <slot v-else></slot>
    </main>
  </div>
</template>
