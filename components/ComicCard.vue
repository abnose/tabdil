<script setup>
defineProps({
  imgSrc: { type: String, required: false, default: "/assets/image/Frame.png" },
  altText: { type: String, default: "Image" },
  name: { type: String, required: true },
});

import image from "@/assets/image/Frame.png";

const handleImageError = (event) => {
  event.target.src = image;
};
</script>

<template>
  <article
    class="box-border flex flex-col items-start p-4 gap-4 w-full min-w-[20rem] min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto hover:shadow-lg transition-shadow"
    aria-labelledby="item-name"
  >
    <img
      class="w-full object-fill h-[29.31rem] bg-[#999C9F52] rounded-[.5rem]"
      :src="imgSrc"
      :alt="altText"
      @error="handleImageError"
    />
    <p class="text-[1rem] pr-[1rem]" id="item-name">{{ name }}</p>
  </article>
</template>
