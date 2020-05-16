import axios from 'axios'

const backend_api_host = 'http://3.228.13.3:4059'

export const listLeads = (cb) => {
  axios.get(`${backend_api_host}/api/leads/?location_string=India`)
  .then((response) => {
    // handle success
    console.log(response);
    cb(null, response.data)
   
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

export const addLead = (data, cb) => {
  axios.post(`${backend_api_host}/api/leads/`, data)
  .then((response) => {
    // handle success
    console.log("addLead", response);
    cb(null, response.data)
   
  })
  .catch((error) => {
    // handle error
    console.log("addLead", error);
  })
  .finally(function () {
    // always executed
  });
}


export const updateLead = (id, data, cb) => {

  console.log("id >>>", id, data)

  axios.put(`${backend_api_host}/api/mark_lead/${id}`, data)
  .then((response) => {
    // handle success
    console.log("updateLead", response);
    cb(null, response.data)
   
  })
  .catch((error) => {
    // handle error
    console.log("updateLead", error);
  })
  .finally(function () {
    // always executed
  });
}

export const deleteLead = (id, cb) => {
    axios.delete(`${backend_api_host}/api/leads/${id}/`)
    .then((response) => {
      // handle success
      console.log("deleteLead", response);
      cb(null, response.data)
     
    })
    .catch((error) => {
      // handle error
      console.log("deleteLead", error);
    })
    .finally(function () {
      // always executed
    });
  }