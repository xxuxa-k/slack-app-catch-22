import type { Trigger } from "deno-slack-sdk/types.ts"
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts"
import WorkingWorkflow from "../workflows/working.ts"

const WorkingTrigger: Trigger<typeof WorkingWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Working Trigger",
  workflow: `#/workflows/${WorkingWorkflow.definition.callback_id}`,
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

export default WorkingTrigger
