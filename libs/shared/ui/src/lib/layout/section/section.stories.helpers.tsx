import "twin.macro"

// Wrapper
export const withWrapper = (Story: CallableFunction) => (
  <div tw="bg-gray-600">{Story()}</div>
)

// Fake content
export const StoryContent = () => (
  <div tw="py-8 flex items-center justify-center bg-gray-700">Content</div>
)
