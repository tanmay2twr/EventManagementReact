import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";

export default function Home() {
  const [regionalEvents, setRegionalEvents] = useState([]);
  const [region, setRegion] = useState();
  const [filteredRegion, setFilteredRegion] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [user, setUser] = useState([
    {
      name: "Tanmay",
      email: "",
      password: "",
      region: "",
      myEvents: [],
    },
  ]);
  useEffect(() => {
    getUser();
    setRegion(localStorage.getItem("region"));
    getRegionalEvents(localStorage.getItem("region"));
    getAllUser();
    getUser();
  }, []);

  useEffect(() => {
    filterRegion();
  }, [allUser]);
  const getAllUser = () => {
    axios
      .get("http://localhost:8000/user")
      .then((response) => response.data)
      .then((data) => {
        setAllUser(data);
      });
  };
  const getUser = () => {
    axios
      .get(`http://localhost:8000/user/${localStorage.getItem("email")}`)
      .then((response) => response.data)
      .then((data) => {
        setUser(data);
      });
  };
  const getRegionalEvents = (region) => {
    console.log(region);
    axios
      .get(`http://localhost:8001/events?region=${region}`)
      .then((response) => response.data)
      .then((data) => {
        setRegionalEvents(data);
        setFilterSearch(data);
        console.log(data);
      });
  };

  const filterRegion = () => {
    var outputArray = [];
    var count = 0,
      k,
      j;
    var start = false;

    for (j = 0; j < allUser.length; j++) {
      for (k = 0; k < outputArray.length; k++) {
        if (allUser[j].region == outputArray[k]) {
          start = true;
        }
      }
      count++;
      if (count == 1 && start == false) {
        outputArray.push(allUser[j].region);
      }
      start = false;
      count = 0;
    }

    setFilteredRegion(outputArray);
    console.log(filteredRegion);
  };

  const handleSearchChange = (query) => {
    console.log("in search function");
    const filteredSearch = regionalEvents.filter((eve) => {
      console.log(query);
      return eve.title.toLowerCase().includes(query.toLowerCase());
    });
    console.log(filteredSearch);
    setFilterSearch(filteredSearch);
  };

  return (
    <>
      <div>
        <div className="row" style={{ margin: 10 }}>
          <div className="col-4" style={{ paddingTop: 10 }}>
            <input
              class="form-control me-2 mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => {
                handleSearchChange(event.target.value);
              }}
            />
          </div>

          <div className="col-4">
            <h1>All Events</h1>
          </div>

          <div className="col-4 " style={{ marginTop: -14 }}>
            <label type="select" />
            <select
              class="form-control "
              name="country"
              value={region}
              onChange={(event) => {
                setRegion(event.target.value);
                getRegionalEvents(event.target.value);
              }}
            >
              {filteredRegion.map((e, key) => {
                return (
                  <option key={key} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="container-fluid" style={{ paddingBottom: "180px" }}>
          <div className="text-white p-3">
            <div className="row text-center">
              {filterSearch.length ? (
                filterSearch.map((product, index) => {
                  return (
                    <>
                      <div key={index} className="ml-2 mb-2">
                        <CardGroup>
                          <Cards product={product} calledFrom="dashboard" user={user}/>
                        </CardGroup>
                      </div>
                    </>
                  );
                })
              ) : (
                <div
                  class="alert alert-danger"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  No Events in this region!!!!!!!{" "}
                  {console.log("No event in Region")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
