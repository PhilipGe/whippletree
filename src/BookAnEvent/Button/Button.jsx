/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes, { number } from "prop-types";
import React from "react";
import "./style.css";

function sendPostRequest(){
  const url = 'http://localhost:3000/book_an_event_notification'

  let notes = document.getElementById('note-area').value;
  let phone_number = document.getElementById('phone-number').value;
  let email_address = document.getElementById('email-address').value;
  let number_of_persons = document.getElementById('number-of-persons').value;
  let name = document.getElementById('your-name').value;

  let data = {
    your_name: name,
    email_address: email_address,
    number_of_person: number_of_persons,
    phone_number: phone_number,
    notes: notes
  }

  console.log(data)

  fetch(url,
    {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      // mode: 'no-cors',
      body: JSON.stringify(data)
    }
  ).then(
    res => console.log(`Request complete! Response: ${res}`)
  )
}

export const Button = ({ type, size, icon, className, divClassName, text = "Large" }) => {
  return (
    <button className={`button ${size} ${type} icon-${icon} ${className}`} onClick={sendPostRequest}>
      {icon && (
        <>
          <div className="div">
            {size === "extra-small" && <>Extra Small</>}

            {size === "small" && <>Small</>}

            {size === "medium" && <>Medium</>}

            {size === "large" && <>{text}</>}

            {size === "extra-large" && <>Extra Large</>}
          </div>
        </>
      )}

      {!icon && (
        <div className={`extra-small-2 ${divClassName}`}>
          {size === "extra-small" && <>Extra Small</>}

          {size === "small" && <>Small</>}

          {size === "medium" && <>Medium</>}

          {size === "large" && <>{text}</>}

          {size === "extra-large" && <>Extra Large</>}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["large", "extra-large", "extra-small", "small", "medium"]),
  icon: PropTypes.bool,
  text: PropTypes.string,
};
