import type { Trigger } from "deno-slack-sdk/types.ts"
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts"
import BrokenWorkflow from "../workflows/broken.ts"

const BrokenTrigger: Trigger<typeof BrokenWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Working Trigger",
  workflow: `#/workflows/${BrokenWorkflow.definition.callback_id}`,
  inputs: {
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
    channel_id: {
      value: TriggerContextData.Shortcut.channel_id,
    },
    user_id: {
      value: TriggerContextData.Shortcut.user_id,
    },
  },
}

export default BrokenTrigger
