export const FormattedDate = ({ date, className = "" }: FormattedDateProps) => {
  const ISODate = date.toISOString()
  const formatedDate = date.toLocaleDateString("de", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  return (
    <time dateTime={ISODate} className={className}>
      {formatedDate}
    </time>
  )
}

type FormattedDateProps = {
  date: Date
  className?: string
}
