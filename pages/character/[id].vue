<template>
  <div
    v-if="!characterError"
    class="flex flex-col items-center w-full h-full bg-[#2C2E30]"
  >
    <div
      v-if="characterPending"
      class="fixed flex justify-center items-center z-[5555] top-0 left-0 backdrop-blur-[5px] w-full h-[100vh]"
    >
      <img src="/assets/image/hero.gif" alt="Hero" />
    </div>
    <header
      class="w-full h-[36rem] md:h-[27rem] px-[1rem] md:px-[9.75rem] bg-gradient-to-r from-[#2c2e30] to-[#0e0e0e] overflow-hidden relative"
    >
      <CustomNavBar />
      <section
        class="w-full h-[30.43rem] md:h-[23.5rem] pt-[3.5rem] lg:pt-[2rem] pb-[1.5rem] flex justify-center items-center"
      >
        <article
          class="w-full h-[25.93rem] flex-col lg:flex-row lg:h-[15rem] flex justify-start"
        >
          <img
            class="min-w-[11.25rem] object-fill min-h-[11.25rem] max-w-[11.25rem] max-h-[11.25rem] lg:min-w-[15rem] lg:min-h-[15rem] lg:max-w-[15rem] lg:max-h-[15rem] rounded-lg"
            :src="
              characterList?.data?.results[0]?.thumbnail?.path +
              '.' +
              characterList?.data?.results[0]?.thumbnail?.extension
            "
            :alt="characterList?.data?.results[0]?.name"
            @error="handleImageError"
          />
          <div
            class="flex flex-col items-start my-[2.375rem] mt-[1rem] ml-[0rem] lg:ml-[3rem] gap-[1rem] h-[10.25rem]"
          >
            <h1 class="text-[1.5rem] lg:text-[2rem] font-medium">
              {{ characterList?.data?.results[0]?.name }}
            </h1>
            <p
              class="xl:text-[0.87rem] font-normal lg:leading-[1.36rem] md:text-[0.55rem] text-[0.75rem] leading-[1.17rem]"
            >
              {{ characterList?.data?.results[0]?.description }}
            </p>
            <div class="flex gap-[1rem]">
              <DetailLink
                v-for="link in characterList?.data?.results[0]?.urls"
                :key="link.type"
                :href="link.url"
                :text="link.type"
              />
            </div>
          </div>
        </article>
      </section>
      <div
        className="absolute w-[200px] h-[152px] left-[10%] md:left-[294px] lg:left-[494px] top-[113px] bg-red-600/32 blur-[80px] z-[5]"
      ></div>
    </header>
    <CardContainer title="Comics" :loading="comicsPending">
      <div v-for="comic in comicsList?.data?.results" :key="comic.id">
        <ComicCard
          v-if="comicsList?.data?.total"
          :imgSrc="comic?.thumbnail?.path + '.' + comic?.thumbnail?.extension"
          :altText="comic?.title"
          :name="comic?.title"
        />
      </div>
      <div v-if="!comicsList?.data?.total && !comicsPending" class="h-full">
        No Comic Found
      </div>
    </CardContainer>
    <CardContainer title="Stories" :loading="storiesPending">
      <div v-for="story in storiesList?.data?.results" :key="story.id">
        <ComicCard
          v-if="storiesList?.data?.total"
          :imgSrc="story?.thumbnail?.path + '.' + story?.thumbnail?.extension"
          :altText="story.title"
          :name="story.title"
        />
      </div>
      <div v-if="!storiesList?.data?.total && !storiesPending" class="h-full">
        No Story Found
      </div>
    </CardContainer>
  </div>
  <div
    v-else
    class="flex flex-col justify-center items-center w-full h-full bg-[#2C2E30]"
  >
    <p class="md:text-[1rem] xl:text-[5rem] absolute top-[40%]">
      Invalid Id or Network Error
    </p>
  </div>
</template>

<style></style>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const characterId = route.params.id;
import image from "@/assets/image/Frame.png";

const handleImageError = (event) => {
  event.target.src = image;
};

const {
  data: characterList,
  pending: characterPending,
  error: characterError,
} = useFetch(`/api/${characterId}`);

const {
  data: comicsList,
  pending: comicsPending,
  error: comicsError,
} = useFetch(`/api/${characterId}/comics`);

const {
  data: storiesList,
  pending: storiesPending,
  error: storiesError,
} = useFetch(`/api/${characterId}/stories`);
</script>
