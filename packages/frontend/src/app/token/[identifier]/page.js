import Token from './Token'

export async function generateMetadata ({ params }) {
  return {
    title: 'Token #' + params.identifier + ' — Explorer',
    description: `Explore detailed information about Token ${params.identifier} on Dash Platform blockchain. View token balance, transaction history, transfers, associated documents, and related data contracts all in one place.`,
    keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'Token', 'Identifier'],
    applicationName: 'Explorer'
  }
}

function TokenRoute ({ params }) {
  return <Token identifier={params.identifier}/>
}

export default TokenRoute
