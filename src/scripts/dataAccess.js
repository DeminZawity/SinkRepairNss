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



