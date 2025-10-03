import Identity from './Identity'

export async function generateMetadata ({ params }) {
  return {
    title: 'Identity #' + params.identifier + ' — Explorer',
    description: 'Identity #' + params.identifier + ' on Dash Platform. The Identifier, Balance, Transactions, Transfers, Documents, Data contracts',
    keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'Identity', 'Identifier', 'Balance', 'Transactions', 'Transfers', 'Documents', 'Data contracts'],
    applicationName: 'Explorer'
  }
}

function IdentityRoute ({ params }) {
  return <Identity identifier={params.identifier}/>
}

export default IdentityRoute
