<template>
  <div class="flex flex-col items-center w-full h-full bg-[#2C2E30]">
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
    <main
      class="px-[1rem] md:px-[6rem] lg:px-[9.75rem] mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-full h-full bg-[#2C2E30] rounded-[16px] p-4"
      aria-label="Content Grid"
    >
      <ItemCard
        v-for="character in characters?.data?.results"
        :key="character.id"
        :to="`/character/${character.id}`"
        :imgSrc="character.thumbnail.path + '.' + character.thumbnail.extension"
        :altText="character.name"
        :name="character.name"
      />
    </main>

    <footer
      class="px-[1rem] md:px-[6rem] lg:px-[9.75rem] mt-[1.5rem] mb-[4rem] gap-6 w-full h-full bg-[#2C2E30] rounded-[16px]"
      aria-label="Pagination Controls"
    >
      <Paginator
        @page="handlePageChange"
        :rows="10"
        :totalRecords="120"
      ></Paginator>
    </footer>
  </div>
</template>

<script setup>
import { useMarvelApi } from "~/composables/useApi";
import { ref } from "vue";
import { useRouter } from "vue-router";
const characters = ref();
const searchQuery = ref("");
const router = useRouter();

const handleInputChange = (event) => {
  searchQuery.value = event.target.value;
};

const handleSearch = (event) => {
  event.preventDefault();
  initialRequest(12, 0, searchQuery.value);
};

// const { data, pending, error } = await useMarvelApi("characters", {
//   query: {
//     limit: 12,
//     offset: 0,
//   },
// });

// const { data, pending, error } = await useAsyncData("search-characters", () =>
//   useMarvelApi("characters", { query: { nameStartsWith: "ca" } })
// );

const initialRequest = async (limit = 12, offset = 0, searchQuery = "") => {
  const { data } = await useAsyncData("search-characters", () =>
    useMarvelApi("characters", {
      query: {
        limit: limit || 11,
        offset: offset || 0,
        ...(searchQuery && { nameStartsWith: searchQuery }),
      },
    })
  );

  characters.value = data.value; // Extract the actual data
};

const handlePageChange = async (page) => {
  const offset = page?.page * 12;
  const limit = (page?.page + 1) * 12;
  initialRequest(limit, offset);
};

initialRequest();
</script>

<style>
.p-paginator {
  background: transparent !important;
  font-size: 1rem;
}
.p-paginator-page.p-paginator-page-selected {
  background: #dc2626 !important;
}
:root {
  --p-paginator-gap: 0.5rem;
}
</style>
