<script setup lang="ts">
const colorMode = useColorMode()
const toggleDark = () => colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
</script>

<template>
  <header flex="~ gap-32 col lg:row items-center" max-h-screen px-32 py-40 max-w-700 mx-auto>
    <!-- Change the color of the logo for dark mode! -->
    <div i-nimiq:logos-nimiq-vertical dark:i-nimiq:logos-nimiq-white-vertical text-90 />

    <div>
      <h1 font-bold text-32>
        You did it!
      </h1>

      <p text-18>
        You've successfully created a project with
        <NuxtLink to="https://nuxt.com/">Vue 3</NuxtLink> +
        <NuxtLink to="https://onmax.github.io/nimiq-developer-center/">Nimiq</NuxtLink>.
        What's next?
      </p>

      <nav flex="~ gap-32 wrap" mt-12>
        <NuxtLink to="/" arrow>
          Home
        </NuxtLink>
        <NuxtLink to="/about" arrow>
          About
        </NuxtLink>

        <button pill-blue pill-sm ml-auto @click="() => toggleDark()">
          Change theme
        </button>
      </nav>
    </div>
  </header>

  <main max-w-700 mx-auto pt-64 pb-92>
    <slot />
  </main>
</template>
