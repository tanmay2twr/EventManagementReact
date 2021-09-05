import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAlert } from "react-alert";

const Cards = ({ product, calledFrom, user }) => {
  const cardId = product.id;
  const cartTitle = product ? product.title : "Default Title";
  const cartDescrption = product ? product.description : "Default description";
  const [date, setDate] = useState();
  const [expired, setExpired] = useState(true);

  useEffect(() => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
    compareDates();
  }, []);
  useEffect(() => {}, [date]);

  const compareDates = () => {
    var g1 = new Date();
    var g2 = new Date(product.eventDate);
    if (g1.getTime() < g2.getTime()) {
      setExpired(true);
    } else {
      axios.delete(`http://localhost:8001/events/${product.id}`).then(() => {
        console.log("Event deleted due to expire date");
        console.log(g1 + g2);
        alert.show("false");
      });
      setExpired(false);
    }
  };
  const alert = useAlert();

  const registerEvent = (id) => {
    console.log(id);
    user.myEvents.push(id);
    let formData = {
      name: user.name,
      myEvents: user.myEvents,
      password: user.password,
      region: user.region,
    };
    console.log(formData);
    axios
      .put(`http://localhost:8000/user/${user.email}`, formData)
      .then((response) => response.data)
      .then((data) => {
        alert.show(
          "Event Registered succesfully!" +
          (
            <div>
              <input
                type="button"
                class="btn"
                onClick={() => {
                  window.location.href = "/myevents";
                }}
              />
            </div>
          )
        );
        console.log("Event Registered succesfully!");
        window.location.href = "/myevents";
      })
      .catch((error) => {
        alert("Event Registration Failed!!!");
        console.log("Event Registration Failed!!!");
      });
  };

  const unregisterEvent = (id) => {
    const myEvents = user.myEvents.filter((item) => item !== id);
    let formData = {
      name: user.name,
      myEvents: myEvents,
      password: user.password,
      region: user.region,
    };
    console.log(formData);
    axios
      .put(`http://localhost:8000/user/${user.email}`, formData)
      .then((response) => response.data)
      .then((data) => {
        alert.show("Event Unregistered succesfully!");
        window.location.href = "/myevents";
        console.log("Event Unregistered succesfully!");
      })
      .catch((error) => {
        alert("Event Unregistered Failed!!!");
        console.log("Event Unregistered Failed!!!");
      });
  };
  const deleteEvent = (id) => {
    if (product.createdBy === localStorage.getItem("email")) {
      axios.delete(`http://localhost:8001/events/${id}`).then(() => {
        alert("Event Deleted");
        window.location.href = "/user/dashboard";
      });
    } else {
      alert("You are not authorised to delete this event!!!");
    }
  };

  return (
    <>
      {expired && (
        <Card
          className="text-white bg-dark border border-info mx-2 my-2"
          style={{ height: "200px", width: "24rem" }}
        >
          <Card.Body>
            <Card.Title>
              {cartTitle}{" "}
              <DeleteForeverRoundedIcon
                style={{ float: "right" }}
                value="Delete"
                onClick={() => deleteEvent(cardId)}
              />
            </Card.Title>
            <Card.Text class="mt-3" style={{ textAlign: "justify" }}>
              &#8226;&nbsp; {cartDescrption}
            </Card.Text>
            {calledFrom === "dashboard" ? (
              <Button
                variant="success"
                onClick={() => registerEvent(product.id)}
              >
                Register
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => unregisterEvent(product.id)}
              >
                Unregister
              </Button>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Cards;
