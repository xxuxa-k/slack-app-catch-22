import { Manifest } from "deno-slack-sdk/mod.ts"

export default Manifest({
  name: "slack-app-catch-22",
  description: "A blank template for building Slack apps with Deno",
  icon: "icon.png",
  workflows: [],
  botScopes: [
    "commands",
  ],
})
