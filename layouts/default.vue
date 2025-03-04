<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const router = useRouter();

const handleInputChange = (event) => {
  searchQuery.value = event.target.value;
};

const handleSearch = (event) => {
  event.preventDefault();
  if (searchQuery.value.trim()) {
    router.push({ path: "/search", query: { q: searchQuery.value } });
  }
};
</script>

<template>
  <div>
    <header
      class="w-full h-[12rem] px-[1rem] md:px-[9.75rem] bg-gradient-to-r from-[#2c2e30] to-[#0e0e0e] overflow-hidden relative"
    >
      <nav class="h-[3.5rem] py-[0.6rem]">
        <img src="/assets/image/logo & logotype.png" alt="logo" />
      </nav>
      <div
        class="w-full h-[8.5rem] pt-[2rem] pb-[1.5rem] flex justify-center items-center"
      >
        <form
          class="flex flex-row justify-center items-center p-4 gap-4 w-full h-[5rem] bg-[#2c2e30] rounded-lg flex-none order-4 flex-grow-0 z-40"
          @submit="handleSearch"
        >
          <input
            type="search"
            id="search-input"
            name="search"
            placeholder="Search for characters..."
            aria-label="Search"
            class="flex text-[0.875rem] flex-row items-center p-[0.84rem_0.5rem_0.84rem_1rem] gap-[0.625rem] h-[3rem] placeholder-white placeholder:text-[0.875rem] bg-[#3B3D3F] rounded-[0.25rem] text-white flex-none order-0 flex-grow"
            :value="searchQuery"
            @input="handleInputChange"
          />
          <button
            type="submit"
            class="flex justify-center items-center cursor-pointer bg-[#DC2626] h-[3rem] gap-[0.5rem] text-white p-[1rem] rounded-[0.25rem]"
          >
            <img
              src="/assets/image/search-normal.png"
              width="14px"
              height="14px"
              alt="search"
            />
            <span class="text-[0.875rem] leading-[1.375rem] hidden md:block">
              Search
            </span>
          </button>
        </form>
        <div
          class="absolute hidden md:block w-[12.5rem] h-[9.5rem] left-[18.375rem] top-[3.3125rem] bg-red-600 bg-opacity-30 filter blur-[5rem] flex-none order-1 flex-grow-0 z-10"
        ></div>
      </div>
    </header>
    <NuxtPage />
  </div>
</template>
