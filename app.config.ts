export default defineAppConfig({
  global: {
    name: 'The Merchant Marketplace Holdings Corp.'
  },
  ui: {
    primary: 'primary',
    secondary: 'secondary',
    gray: 'cool'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    global?: {
      /** Project name */
      name?: string
    }
  }
}
