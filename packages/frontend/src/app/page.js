import Home from './home/Home'

export const metadata = {
  title: 'Dashboard — Explorer',
  description: 'Dashboard of Dash Platform. The Last Transactions, Blocks, Data contracts, Documents, Transfers, Average block time.',
  keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'Transactions', 'Blocks', ' Data contracts', 'Documents', 'Transfers', 'platform dash money'],
  applicationName: 'Explorer'
}

async function HomeRoute () {
  return <Home/>
}

export default HomeRoute
