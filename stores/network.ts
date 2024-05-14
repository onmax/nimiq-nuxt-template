import init, { Client, ClientConfiguration, type ConsensusState } from '@nimiq/core-web/web'

export const useNimiqNetwork = defineStore('network', () => {
  const client = ref<Client>()

  onMounted(async () => {
    // Remove the comment from the next line to see the bug
    // await init()
    // const config = new ClientConfiguration()
    // config.network('devalbatross')
    // client.value = await Client.create(config.build())
    // initListeners()
  })

  // const head = ref<string>()
  // const consensus = ref<ConsensusState>('connecting')

  // function initListeners() {
  //   client.value?.addConsensusChangedListener(newConsensus => consensus.value = newConsensus)
  //   client.value?.addHeadChangedListener(newHead => head.value = newHead)
  // }

  return {
    client: 'banana',
    consensus: 'connecting',
    head: '-1',
  }
})
