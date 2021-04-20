import { FormattedDate } from "./index"

export default {
  title: "Elements/FormattedDate",
  component: FormattedDate,
}

export const Base = () => <FormattedDate date={new Date()} />
