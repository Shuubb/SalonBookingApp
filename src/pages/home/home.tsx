import classNames from "classnames";
import styles from "./home.module.scss";

export default function Home() {
   return (
      <>
         <div
            className={classNames(styles.bookingContainer, "fullFlexContainer")}
         >
            <a href="/booking">
               <h1>დაჯავშნა</h1>
            </a>
            <div className="borderMask"></div>
         </div>

         <div
            className={classNames(
               styles.checkBookingContainer,
               "fullFlexContainer"
            )}
         >
            <a href="/checkbooking">
               <h1>ჯავშნის შემოწმება</h1>
            </a>
         </div>
      </>
   );
}
