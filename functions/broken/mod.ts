import { SlackFunction } from "deno-slack-sdk/mod.ts"
import { BrokenFunction } from "./def.ts"

export default SlackFunction(
  BrokenFunction,
  async (ctx) => {
  },
)
