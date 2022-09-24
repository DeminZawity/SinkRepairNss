const API = "http://localhost:8088"

const applicationState = {
  requests: [],
}

export const fetchRequests = async () => {
  const dataFetch = await fetch(`${API}/requests`)
  const serviceRequests= await dataFetch.json()
  // Store the external state in application state
  applicationState.requests = serviceRequests
}

export const getRequests = () => {
  return applicationState.requests.map((a) => ({ ...a }))
};

export const sendRequest = async (userServiceRequest) => {
  const fetchOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userServiceRequest)
  }

  const response = await fetch(`${API}/requests`, fetchOptions)
  const responseJson = await response.json()
  return responseJson
}