import dayjs from "dayjs";
interface DateTitleProps {
  INVITATION_TIME: string;
}

export default function DateTitle({ INVITATION_TIME }: DateTitleProps) {
  const invitationDate = dayjs(INVITATION_TIME);
  return (
    <div className="day-date flex flex-col items-center gap-7 text-[var(--point-color)]">
      <p className="day-date-year text-sm">{invitationDate.format("YYYY")}</p>

      <h2 className="day-date-main m-0 flex items-center justify-center gap-7 p-0 [&_span]:text-base">
        <span className="day-date-month">{invitationDate.format("MMMM")}</span>

        <strong className="block h-[33px] text-[53px] leading-none font-medium">
          {invitationDate.format("DD")}
        </strong>

        <span className="day-date-weekday">
          {invitationDate.format("dddd")}
        </span>
      </h2>

      <p className="day-date-time text-sm">{invitationDate.format("A h:mm")}</p>
    </div>
  );
}
