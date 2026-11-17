import dayjs from "dayjs";
import Calendar, { type CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const INVITATION_DATE = "2027-12-11";

const InvitationCalendar = () => {
  const invitationDate = dayjs(INVITATION_DATE).toDate();

  const renderTileContent: CalendarProps["tileContent"] = ({ date, view }) => {
    if (view !== "month") return null;

    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    if (formattedDate === INVITATION_DATE) {
      return (
        <span className="invitation-heart">
          <span>11</span>
        </span>
      );
    }

    return null;
  };

  return (
    <div className="invitation-calendar">
      <Calendar
        value={invitationDate}
        defaultActiveStartDate={invitationDate}
        formatDay={(_, date) => dayjs(date).format("D")}
        tileContent={renderTileContent}
        prev2Label={null}
        next2Label={null}
        showNeighboringMonth={false}
        locale="en-US"
        navigationLabel={({ date }) => dayjs(date).format("MMMM YYYY")}
        prevLabel="‹"
        nextLabel="›"
      />
    </div>
  );
};

export default InvitationCalendar;
