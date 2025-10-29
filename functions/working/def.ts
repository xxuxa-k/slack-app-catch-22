import { DefineFunction, Schema } from "deno-slack-sdk/mod.ts"

export const WorkingFunction = DefineFunction({
  callback_id: "working_function",
  title: "Working Function",
  source_file: "functions/working/mod.ts",
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

