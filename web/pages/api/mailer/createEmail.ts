export const createHtmlEmail = (values) => {
  let emailHtml = `
    <html> 
      <h3>Form submission from ${values.contact.email || "unknown"}</h3>
      <hr />
     
      `;
  const { contact, ...otherValues } = values;

  const {
    email,
    firstName,
    lastName,
    streetAddress,
    city,
    state,
    zip,
    phone,
  } = contact;

  emailHtml += `
    <h3>Contact Info</h3>
    <h2>${firstName} ${lastName}</h2>
    <p>${email}</p>
    <p>${streetAddress || "no address"}</p>
    <p>${city || "no city"}, ${state || "no state"}</p>
    <p>${zip || "no zip"}</p>
    <p>phone: ${phone || "no phone"}</p>
    <hr />
  `;

  emailHtml += `
  <div style="margin-top: 1rem; display: grid; grid-template-columns: repeat(2,max-content); grid-gap: 5px;">
  `;
  Object.entries(otherValues).forEach(([question, answer]) => {
    emailHtml += `
          <div><b>${question}:</b></div>
          <div>${answer}</div>
        `;
  });
  emailHtml += `</div></html>`;
  return emailHtml;
};

export const createTextEmail = (values) => {
  const { contact, ...otherValues } = values;
  let emailText = `Form entry received from ${contact.email || "unknown"} \n\n`;
  Object.entries(otherValues).forEach(([question, answer]) => {
    emailText += `${question}:  ${answer} \n\n`;
  });
  return emailText;
};
