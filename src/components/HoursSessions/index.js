import {HoursButton,PrintStyle } from "./style";
import SessionTimes from "../SessionTimes";

export default function HoursSessions({ weekday, date, showtimes }){
    return(
      <>
      <PrintStyle> {weekday} - {date}</PrintStyle>
      <HoursButton>
        {
          showtimes.map(showtime => (
            <SessionTimes key={showtime.id} {...showtime} />
          ))
        }
      </HoursButton>
      </>
    );
}

