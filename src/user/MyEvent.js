import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../core/Cards";
import CardGroup from "react-bootstrap/CardGroup";
function MyEvent() {
  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      password: "",
      region: "",
      myEvents: [],
    }
  );
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    getUser();
    getAllEvents();
  }, []);

  const getUser = () => {
    axios
      .get(`http://localhost:8000/user/${localStorage.getItem("email")}`)
      .then((response) => response.data)
      .then((data) => {
        setUser(data);
      });
  };

  const getAllEvents = () => {
    axios
      .get(`http://localhost:8001/events`)
      .then((response) => response.data)
      .then((data) => {
        setAllEvent(data);
      });
  };
  return (
    <div>
      <div className="container-fluid" style={{ paddingBottom: "180px" }}>
        <div className="text-white p-3">
          <div className="row text-center">
            {allEvent.length &&
              allEvent.map((product, index) => {
                {
                  if (user.myEvents.length) {
                    let flag = 0;
                    for (let i = 0; i < user.myEvents.length; i++) {
                      if (user.myEvents[i] == product.id) {
                        flag = 1;
                      }
                    }
                    if (flag == 1)
                      return (
                        <>
                          <div key={index} className="ml-2 mb-2">
                            <CardGroup>
                              <Cards
                                product={product}
                                calledFrom="myevents"
                                user={user}
                              />
                            </CardGroup>
                          </div>
                        </>
                      );
                  } else {

                   return <div
                      class="alert alert-danger"
                      style={{ width: "100%", textAlign: "center" }}
                    >
                      No Events Registered!!!!!!!
                    </div>;
                  }
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEvent;
