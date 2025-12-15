import { SlackFunction } from "deno-slack-sdk/mod.ts"
import { WorkingFunction } from "./def.ts"

export default SlackFunction(
  WorkingFunction,
  async ({ client }) => {
    await client.views.open({
      type: "modal",
      callback_id: "first_view",
      notify_on_close: false,
      title: {
        type: "plain_text",
        text: "Working Modal",
      },
      submit: {
        type: "plain_text",
        text: "Next",
      },
      close: {
        type: "plain_text",
        text: "Cancel",
      },
      blocks: [
        {
          type: "input",
          label: {
            type: "plain_text",
            text: "text input",
          },
          element: {
            type: "plain_text_input",
          },
        }
      ],
    })
    return { completed: false }
  },
)
.addViewSubmissionHandler(
  "first_view",
  async({ client, body, view }) => {
    return {
      response_action: "push",
      view: {
        callback_id: "second_view",
      },
    }
  },
)
