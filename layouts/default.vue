<template>
  <div>
    <nav class="test">
      <div class="container mx-auto flex justify-between">
        <div class="text-white">
          <h1 class="text-lg font-bold">My App</h1>
        </div>
        <div>
          <ul class="flex space-x-4">
            <li>
              <nuxt-link to="/" class="text-white hover:underline"
                >Home</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/character/45" class="text-white hover:underline"
                >Characters</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mx-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.test {
  /* Frame 12215 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 88px 120px 24px;
  gap: 36px;
  isolation: isolate;

  width: 100%;
  height: 192px;

  background: linear-gradient(90deg, #2c2e30 -0.76%, #0e0e0e 50%);

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.test {
  /* Header */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 156px;
  gap: 10px;

  position: absolute;
  width: 1920px;
  height: 56px;
  left: 0px;
  top: 0px;

  /* Inside auto layout */
  flex: none;
  order: 5;
  flex-grow: 0;
  z-index: 5;
}
</style>
