import DataContract from './DataContract'

export async function generateMetadata ({ params }) {
  return {
    title: 'Data Contract #' + params.identifier + ' — Explorer',
    description: 'Data Contract ' + params.identifier + 'on Dash Platform. The Schema, Documents, Date of Creation, Revision, Transaction.',
    keywords: ['Dash', 'platform', 'explorer', 'blockchain', 'data contract', 'datacontract', 'Schema', 'Documents', 'Date of Creation', 'Revision', 'Transaction'],
    applicationName: 'Explorer'
  }
}

function DataContractRoute ({ params }) {
  return <DataContract identifier={params.identifier}/>
}

export default DataContractRoute
