<script setup>
defineProps({
  to: { type: String, required: true },
  imgSrc: { type: String, required: true },
  altText: { type: String, default: "Image" },
  name: { type: String, required: true },
});

const handleImageError = (event) => {
  event.target.src = image;
};
</script>

<template>
  <NuxtLink :to="to" class="block w-full">
    <article
      class="box-border flex flex-col items-start p-4 gap-4 w-full min-w-[20rem] min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto hover:shadow-lg transition-shadow"
      aria-labelledby="item-name"
    >
      <img
        class="w-full object-fill h-[29.31rem] bg-[#999C9F52] rounded-[.5rem]"
        :src="imgSrc || '/assets/image/Frame.png'"
        :alt="altText"
        @error="handleImageError"
      />
      <p class="text-[1rem] pr-[1rem]" id="item-name">{{ name }}</p>
    </article>
  </NuxtLink>
</template>
