import { getRequests } from "./dataAccess.js";

// export const Requests = () => {
//     const requests = getRequests()

//     let html = `
//         <ul>
//             ${ requests.map().join("")}
// 		</ul>
//     `

//     return html
// }

export const Requests = () => {
  const requests = getRequests();

  let html = `<ul>`;
  for (const request of requests) {
    html += `
      <li>
        ${request.description}
        </li>
        `;
  }
  html += `</ul>`;

  return html;
};

// <button class="request__delete" id="request--${request.id}">
//   Delete
// </button>

// In the following code, you will need to define the function that will be passed to the `map()` method.

// The function you write will convert each service request object into HTML representations. Since it is wrapped with a `<ul>` element, make each one an `<li>` element showing only the description of the request to start.

// 1. The function should define 1 parameter *(value will be each object in the array)*
// 2. The description of the service request should be interpolated inside the `<li>` HTML representation.
// 3. The function should return the HTML representation.

// For example, if you write a function named `convertRequestToListElement`, then you would update the code below to the following...

// `requests.map(convertRequestToListElement).join("")`
