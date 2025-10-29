import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts"
import { BrokenFunction } from "../functons/broken/def.ts"

const BrokenWorkflow = DefineWorkflow({
  callback_id: "broken_workflow",
  title: "Broken Workflow",
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
      user_id: {
        type: Schema.slack.types.user_id,
      },
    },
    required: [
      "interactivity",
      "channel_id",
      "user_id",
    ],
  },
})

export default BrokenWorkflow
