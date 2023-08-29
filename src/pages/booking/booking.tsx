import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./booking.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const options = [
   { value: "12:00:00", label: "12:00" },
   { value: "18:00:00", label: "18:00" },
];

const today = new Date();

export default function Booking() {
   const [choosenDate, setChoosenDate] = useState<Value>(new Date());
   const [choosenHour, setChoosenHour] = useState(options[0].value);
   const [error, setError] = useState("");

   useEffect(() => {
      if (choosenDate instanceof Date && choosenHour)
         console.log(choosenDate.toDateString() + " " + choosenHour);
   }, [choosenDate]);

   return (
      <div className={classNames(styles.container, "fullFlexContainer")}>
         <form className={styles.inputForm}>
            <div className={styles.inputsContainer}>
               <label>სახელი</label>
               <input type="text"></input>
               <label>ტელეფონის ნომერი</label>
               <input type="tel"></input>
            </div>
            <div>
               <Calendar
                  onChange={setChoosenDate}
                  value={choosenDate}
                  minDate={today}
               />
               <Select
                  onChange={(e) => {
                     if (e) setChoosenHour(e.value);
                     else
                        setError(
                           "უი, რაღაც შეცდომა მოხდა საათის არჩევისას! გთხოვთ აირჩიოთ თავიდან ან გადატვირთოთ გვერდი!"
                        );
                  }}
                  options={options}
                  defaultValue={options[0]}
               />
            </div>
         </form>
         <span className="error">
            უი, რაღაც შეცდომა მოხდა საათის არჩევისას! გთხოვთ აირჩიოთ თავიდან ან
            გადატვირთოთ გვერდი!{error}
         </span>
      </div>
   );
}
