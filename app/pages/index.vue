<script setup lang="ts">
const { consensus, head } = storeToRefs(useNimiqNetwork())

const { share } = useShare()
function startShare() {
  share({
    title: 'Hello',
    text: 'Hello my friend!',
    url: location.href,
  })
}

defineOgImage({ url: '/sharing-banner-dark.webp' })
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <WelcomeItem icon="i-nimiq:icons-lg-browsermesh">
    <template #heading>
      Documentation
    </template>

    <p class="text-neutral-800">
      Nimiq's
      <a href="https://onmax.github.io/nimiq-developer-center/" target="_blank" rel="noopener">official
        documentation</a>
      provides you with all information you need to get started.
    </p>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:nodes" mt-40>
    <template #heading>
      Web Client
    </template>

    <div>
      <div flex="~ gap-12">
        <span flex="~ gap-4" w-max capitalize nq-ghost-btn>
          <div v-if="consensus !== 'established'" i-nimiq:spinner />
          {{ consensus }}
        </span>
        <span v-if="head" nq-ghost-btn>{{ head?.slice(0, 8) }}...{{ head?.slice(-8) }}</span>
      </div>

      <p class="text-neutral-800" mt-12>
        Ready to connect to the network. You can check the <a
          href="https://onmax.github.io/nimiq-developer-center/build/web-client/index" target="_blank"
          rel="noopener"
        >web
          client</a> to see the network in action.
      </p>
    </div>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:icons-lg-palette" mt-40>
    <template #heading>
      UI
    </template>

    <p class="text-neutral-800">
      Preinstalled with <a href="https://onmax.github.io/nimiq-ui/" target="_blank" rel="noopener">Nimiq CSS</a> and
      Nimiq
      Icons. For example using <code>
        &lt;div class="i-nimiq:spinner"&gt;&lt;/div&gt;
      </code> will render <span class="i-nimiq:spinner" inline-block />
    </p>
  </WelcomeItem>

  <WelcomeItem icon="i-nimiq:icons-lg-high-five" mt-40>
    <template #heading>
      You are ready to go!
    </template>

    <p class="text-neutral-800">
      If you have any questions, feel free to ask in GitHub, Telegram group or Nimiq Discord.
    </p>
  </WelcomeItem>

  <button mx-auto mt-32 nq-pill-lg nq-pill-blue @click="startShare">
    Share it
  </button>
</template>
