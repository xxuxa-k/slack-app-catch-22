import { SlackFunction } from "deno-slack-sdk/mod.ts"
import { BrokenFunction } from "./def.ts"

export default SlackFunction(
  BrokenFunction,
  async ({ client }) => {
    await client.views.open({
      type: "modal",
      callback_id: "first_view",
      notify_on_close: false,
      title: {
        type: "plain_text",
        text: "Working Modal",
      },
      // submit: {
      //   type: "plain_text",
      //   text: "Next",
      // },
      // close: {
      //   type: "plain_text",
      //   text: "Cancel",
      // },
      blocks: [
        {
          type: "input",
          block_id: "input_block",
          label: {
            type: "plain_text",
            text: "text input",
          },
          element: {
            type: "plain_text_input",
            action_id: "input_action",
          },
        }
      ],
    })
    return {
      completed: false,
    }
  },
)
.addViewSubmissionHandler(
  "first_view",
  async({ client, body, view }) => {
    const stateValues = view.state.values
    await client.views.push({
      interactivity: body.interactivity.interactivity_pointer,
      view: {
        type: "modal",
        callback_id: "second_view",
        notify_on_close: false,
        title: {
          type: "plain_text",
          text: "Working Modal",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `stateValues: ${JSON.stringify(stateValues || {})}`,
            },
          },
        ],
      },
    })
  },
)
