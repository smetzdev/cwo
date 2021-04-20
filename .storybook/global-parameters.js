import { customViewports } from "./custom-viewports"

export const globalParameters = {
  /* layout - possible values:
   * centered: center the component horizontally and vertically in the Canvas
   * fullscreen: allow the component to expand to the full width and height of the Canvas
   * padded: Add extra padding around the component
   */
  layout: "padded",
  // storybook/addon-viewports
  viewport: {
    viewports: customViewports,
  },
}
