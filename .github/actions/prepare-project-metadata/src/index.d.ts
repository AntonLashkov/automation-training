declare module 'template-file' {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  function renderString(template: string, data: any): string
  function renderTemplateFile(
    filepath: string | Buffer | URL,
    data: any
  ): Promise<string>
}
