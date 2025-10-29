import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts"
import { WorkingFunction } from "../functons/working/def.ts"

const WorkingWorkflow = DefineWorkflow({
  callback_id: "working_workflow",
  title: "Working Workflow",
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

export default WorkingWorkflow
