import ContestedResource from './ContestedResource'
import contestedResources from '../../../util/contestedResources'

export async function generateMetadata ({ params }) {
  const resourceValue = decodeURIComponent(params.resourceValue)
  const decodedValue = contestedResources.decodeValue(resourceValue)
  const readableValue = contestedResources.getResourceValue(decodedValue)

  return {
    title: `${readableValue} — Contested Resource — Explorer`,
    description: `Detailed view of contested resource "${readableValue}" on the Dash Platform. Track current dispute status, masternode voting breakdown, creation date, and resolution outcome in the Explorer`,
    keywords: [
      'Dash',
      'platform',
      'explorer',
      'blockchain',
      'contested resource',
      readableValue,
      'DPNS',
      'name service',
      'masternodes',
      'voting',
      'dispute',
      'resource registry',
      'data contract'
    ],
    applicationName: 'Explorer'
  }
}

function ContestedResourceRoute ({ params }) {
  return <ContestedResource resourceValue={params.resourceValue}/>
}

export default ContestedResourceRoute
