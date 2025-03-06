<script setup>
defineProps({
  to: { type: String, required: true },
  imgSrc: { type: String, required: true },
  altText: { type: String, default: "Image" },
  name: { type: String, required: true },
});
import image from "@/assets/image/Frame.png";

const handleImageError = (event) => {
  event.target.src = image;
};
</script>

<template>
  <NuxtLink :to="to" class="block w-full">
    <article
      class="box-border flex flex-col items-start p-4 gap-4 w-full min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto hover:shadow-lg transition-shadow"
      aria-labelledby="item-name"
    >
      <img
        class="w-full object-fill h-[29.31rem] rounded-[.5rem]"
        :src="imgSrc || '/assets/image/Frame.png'"
        :alt="altText"
        loading="lazy"
        @error="handleImageError"
      />
      <p class="text-[1rem] pr-[1rem]" id="item-name">{{ name }}</p>
    </article>
  </NuxtLink>
</template>
