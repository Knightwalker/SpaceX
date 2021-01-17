import './Launch.css';

const Launch = (props) => {
  let details = "";
  if (typeof props.details != "undefined" && typeof props.details === "string") {
    details = props.details;
    if (details.length >= 80) {
      details = details.substring(0, 80) + "...";
    }
  } else {
    details = "No Details";
  }

  let mission_status = "";
  let mission_status_color = "";
  if (props.success === true) {
    mission_status = "success";
    mission_status_color = "green";
  } else {
    mission_status = "fail";
    mission_status_color = "red";
  }

  let launch_date = props.date_utc.split("T")[0];

  return (
    <div className="Launch" key={props.id}>
      <div>
        <img className="Launch_img" src={props.img}></img>
        <div className="Launch_flight_number">Flight Number #{props.flight_number}</div>
        <div className="Launch_date">Date: {launch_date}</div>
      </div>
      <div className="Launch_details">
        <p className="Launch_details-head">{props.name}</p>
        <p className="Launch_details-body">{details}</p>
        <button class="custom_btn">
          <span class="custom_btn__inner">
            <span class="custom_btn__slide"></span>
            <span class="custom_btn__content">Learn More</span>
          </span>
        </button>
      </div>
      <div className="Launch_success" style={{backgroundColor: mission_status_color}}>{mission_status}</div>
    </div>
  );
}

export default Launch;