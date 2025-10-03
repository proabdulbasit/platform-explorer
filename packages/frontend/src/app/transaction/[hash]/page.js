import Transaction from './TransactionPage'

export function generateMetadata ({ params }) {
  return {
    title: 'Transaction #' + params.hash + ' — Explorer',
    description: 'Transaction #' + params.hash + ' on dash platform. The Hash, Height, Type, Timestamp, Transaction data.',
    keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'Transaction', 'Hash', 'Height', 'Type', 'Timestamp', 'Data'],
    applicationName: 'Explorer'
  }
}

function TransactionRoute ({ params }) {
  return <Transaction hash={params.hash}/>
}

export default TransactionRoute
