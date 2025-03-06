<template>
  <div class="flex flex-col items-center w-full h-full bg-[#2C2E30]">
    <div
      v-if="pending"
      class="fixed flex justify-center items-center z-[5555] top-0 left-0 backdrop-blur-[5px] w-full h-[100vh]"
    >
      <img src="/assets/image/hero.gif" alt="Hero" />
    </div>
    <header
      class="w-full h-[12rem] px-[1rem] md:px-[9.75rem] bg-gradient-to-r from-[#2c2e30] to-[#0e0e0e] overflow-hidden relative"
    >
      <CustomNavBar />
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
            v-model="search"
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
      <div v-for="character in data?.data?.results" :key="character.id">
        <LinkCard
          v-if="data?.data?.total"
          :to="`/character/${character.id}`"
          :imgSrc="
            character.thumbnail.path + '.' + character.thumbnail.extension
          "
          :altText="character.name"
          :name="character.name"
        />
      </div>
      <div v-if="!data?.data?.total && !pending" class="h-full">
        No Character Found
      </div>
    </main>
    <footer
      class="px-[1rem] md:px-[6rem] lg:px-[9.75rem] mt-[1.5rem] mb-[4rem] gap-6 w-full h-full bg-[#2C2E30] rounded-[16px]"
      aria-label="Pagination Controls"
    >
      <Paginator
        v-if="data?.data?.total"
        :first="(page - 1) * 12"
        :currentPage="page - 1"
        @page="handlePageChange"
        :rows="12"
        :totalRecords="data?.data?.total"
      ></Paginator>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const searchQuery = ref(route.query.search || "");
const search = ref(route.query.search || "");
const page = ref(+route.query.page || 1);
const router = useRouter();

const handleSearch = (event) => {
  event.preventDefault();
  searchQuery.value = search.value;
  page.value = 1;
  router.push({ query: { page: page.value, search: searchQuery.value } });
};

const handlePageChange = async (event) => {
  page.value = +event?.page + 1;
  router.push({ query: { page: page.value, search: searchQuery.value } });
  handleScrollTop();
};

watch(
  () => route.query.page,
  (newValue) => {
    page.value = +newValue;
    handleScrollTop();
  }
);

const { data, pending, error, refresh } = useFetch("/api/marvel", {
  params: { page, searchQuery },
  watch: [page?.value, searchQuery?.value],
});
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
