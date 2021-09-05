import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function AddEvent() {
  const [allUser, setAllUser] = useState([]);
  const [filteredRegion, setFilteredRegion] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [region, setRegion] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    getAllUser();
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      title: title,
      description: description,
      region: region,
      eventDate: date,
      createdBy: localStorage.getItem("email"),
    };
    console.log(formData);
    axios
      .post("http://localhost:8001/events", formData)
      .then((response) => response.data)
      .then((data) => {
        alert(data);
        console.log("Event added succesfully!");
        window.location.href = "/user/dashboard";
      })
      .catch((error) => {
        alert("Event added Failed!!!");
        console.log("Event added Failed!!!");
      });
  };
  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit} style={{ padding: 60 }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ width: 350, paddingBottom: 10 }}
          >
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ width: 350 }}
          >
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ width: 350 }}
          >
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group
            className=""
            controlId="formBasicEmail"
            style={{ width: 350, marginTop: -12 }}
          >
            <label type="select" />
            <select
              class="form-control "
              name="region"
              value={region}
              onChange={(event) => {
                setRegion(event.target.value);
              }}
            >
              <option value="select">Select</option>
              {filteredRegion.map((e, key) => {
                return (
                  <>
                    <option key={key} value={e}>
                      {e}
                    </option>
                  </>
                );
              })}
            </select>
          </Form.Group>
          <Button
            type="submit"
            variant="success"
            size="md"
            style={{ width: 150 }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddEvent;
