document.getElementById("job-form").addEventListener("submit", addApplication);

function addApplication(e) {
  e.preventDefault();

  const company = document.getElementById("company").value;
  const position = document.getElementById("position").value;
  const dateApplied = document.getElementById("date-applied").value;
  const status = document.getElementById("status").value;

  const application = {
    company,
    position,
    dateApplied,
    status,
  };

  let applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications.push(application);
  localStorage.setItem("applications", JSON.stringify(applications));

  displayApplication(application);
  document.getElementById("job-form").reset();
}

function displayApplication(application) {
  const applicationList = document.getElementById("application-list");
  const li = document.createElement("li");
  li.innerHTML = `
        <strong>${application.company}</strong> - ${application.position} <br>
        Date Applied: ${application.dateApplied} <br>
        Status: ${application.status}
    `;
  applicationList.appendChild(li);
}

function loadApplications() {
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications.forEach((application) => {
    displayApplication(application);
  });
}

document.addEventListener("DOMContentLoaded", loadApplications);
