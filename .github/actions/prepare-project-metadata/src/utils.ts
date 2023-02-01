import {renderTemplateFile} from 'template-file'
import {promises} from 'fs'

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface ConnectedAppRequest {
  data: any
  source: string
  destination?: string
}
export async function renderTemplate({
  data,
  source,
  destination
}: ConnectedAppRequest): Promise<void> {
  if (!data || !source) {
    throw new Error('Required parameters missing')
  }

  if (!destination) {
    destination = source
  }

  const renderedString = await renderTemplateFile(source, data)
  await promises.writeFile(destination, renderedString)
}
