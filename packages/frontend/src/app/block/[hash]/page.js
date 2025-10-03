import Block from './Block'

export async function generateMetadata ({ params }) {
  return {
    title: 'Block #' + params.hash + ' — Explorer',
    description: 'Dash Platform Block Hash ' + params.hash + '. The Timestamp, Transactions count, Block Version.',
    keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'block', 'Timestamp', 'Transactions', 'Block'],
    applicationName: 'Explorer'
  }
}

async function BlockRoute ({ params }) {
  return <Block hash={params.hash}/>
}

export default BlockRoute
