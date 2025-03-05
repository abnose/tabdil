<template>
  <div class="flex flex-col items-center w-full h-full bg-[#2C2E30]">
    <header
      class="w-full h-[36rem] md:h-[27rem] px-[1rem] md:px-[9.75rem] bg-gradient-to-r from-[#2c2e30] to-[#0e0e0e] overflow-hidden relative"
    >
      <nav class="h-[3.5rem] py-[0.6rem]">
        <img src="/assets/image/logo & logotype.png" alt="logo" />
      </nav>
      <div
        class="w-full h-[30.43rem] md:h-[23.5rem] pt-[3.5rem] md:pt-[2rem] pb-[1.5rem] flex justify-center items-center"
      >
        <div
          class="bg-amber-200 w-full h-[25.93rem] flex-col lg:flex-row lg:h-[15rem] flex justify-start"
        >
          <img
            class="bg-red-100 min-w-[11.25rem] min-h-[11.25rem] max-w-[11.25rem] max-h-[11.25rem] lg:min-w-[15rem] lg:min-h-[15rem] lg:max-w-[15rem] lg:max-h-[15rem]"
            src=""
            alt="test"
          />
          <div
            class="flex flex-col items-start my-[2.375rem] mt-[1rem] ml-[0rem] lg:ml-[3rem] gap-[1rem] h-[10.25rem] bg-blue-700"
          >
            <h1 class="text-[1.5rem] lg:text-[2rem] font-medium">Thor</h1>
            <p
              class="lg:text-[0.87rem] font-normal lg:leading-[1.36rem] text-[0.75rem] leading-[1.17rem]"
            >
              As the Norse God of thunder and lightning, Thor wields one of the
              greatest weapons ever made, the enchanted hammer Mjolnir. While
              others have described Thor as an over-muscled, oafish imbecile,
              he's quite smart and compassionate. He's self-assured, and he
              would never, ever stop fighting for a worthwhile cause.
            </p>
            <div class="flex gap-[1rem]">
              <a
                class="box-border flex flex-row justify-center items-center p-2 gap-2 w-24 h-9 border border-gray-300 rounded-md"
                href=""
              >
                <span class="text-[0.75rem] lg:text-[0.875]">Details</span>
                <img src="/assets//image/export.png" alt="Link"
              /></a>
              <a
                class="box-border flex flex-row justify-center items-center p-2 gap-2 w-24 h-9 border border-gray-300 rounded-md"
                href=""
                ><span class="text-[0.75rem] lg:text-[0.875]">Wiki</span>
              </a>
              <a
                class="box-border flex flex-row justify-center items-center p-2 gap-2 w-24 h-9 border border-gray-300 rounded-md"
                href=""
              >
                <span class="text-[0.75rem] lg:text-[0.875]">ComicLink</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute w-[200px] h-[152px] left-[10%] md:left-[294px] lg:left-[494px] top-[113px] bg-red-600/32 blur-[80px] z-[1]"
        ></div>
      </div>
    </header>
    <main
      class="px-[1rem] md:px-[6rem] lg:px-[9.75rem] mt-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-full h-full bg-[#2C2E30] rounded-[16px] p-4"
      aria-label="Content Grid"
    >
      <article
        class="box-border flex flex-col items-start p-4 gap-4 w-full min-w-[20rem] min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto"
        aria-labelledby="item1-title"
      >
        <img
          class="w-full h-[29.31rem] p-[1rem] bg-amber-200 rounded-[.5rem]"
          src=""
          alt="image"
        />
        <p class="text-[1rem] pr-[1rem]">Description for item 1.</p>
      </article>

      <article
        class="box-border flex flex-col items-center p-4 gap-4 w-full min-w-[20rem] min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto"
        aria-labelledby="item2-title"
      >
        <h2 id="item2-title" class="text-lg font-semibold">Item 2 Title</h2>
        <p>Description for item 2.</p>
      </article>

      <article
        class="box-border flex flex-col items-center p-4 gap-4 w-full min-w-[20rem] min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto"
        aria-labelledby="item3-title"
      >
        <h2 id="item3-title" class="text-lg font-semibold">Item 3 Title</h2>
        <p>Description for item 3.</p>
      </article>

      <article
        class="box-border flex flex-col items-center p-4 gap-4 w-full min-w-[20rem] min-h-[29rem] max-h-[33.8rem] border border-[#404244] rounded-[16px] mx-auto"
        aria-labelledby="item4-title"
      >
        <h2 id="item4-title" class="text-lg font-semibold">Item 4 Title</h2>
        <p>Description for item 4.</p>
      </article>
    </main>

    <!-- <footer
      class="px-[1rem] md:px-[6rem] lg:px-[9.75rem] mt-[1.5rem] mb-[4rem] gap-6 w-full h-full bg-[#2C2E30] rounded-[16px]"
      aria-label="Pagination Controls"
    >
      <Paginator :rows="10" :totalRecords="120"></Paginator>
    </footer> -->
  </div>
</template>

<script setup>
import { useMarvelApi } from "~/composables/useApi";
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

// const { data, pending, error } = await useAsyncData("characters", () =>
//   useMarvelApi("comics")
// );

// const { data, pending, error } = await useAsyncData("search-characters", () =>
//   useMarvelApi("characters", { query: { nameStartsWith: "ca" } })
// );
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
