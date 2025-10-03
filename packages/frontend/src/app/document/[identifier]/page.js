import Document from './Document'

export async function generateMetadata ({ params }) {
  return {
    title: 'Document #' + params.identifier + ' — Explorer',
    description: 'Document ' + params.identifier + ' on Dash Platform. The Data, Identifier, Revision.',
    keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'document', 'Data', 'Identifier', 'Revision'],
    applicationName: 'Explorer'
  }
}

function DocumentRoute ({ params }) {
  return <Document identifier={params.identifier}/>
}

export default DocumentRoute
