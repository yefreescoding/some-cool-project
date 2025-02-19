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
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${application.company}</td>
        <td>${application.position}</td>
        <td>${application.dateApplied}</td>
        <td class="status" data-status="${application.status}">
          <span class="status-dot"></span>
          ${application.status}
        </td>
    `;
  applicationList.appendChild(tr);
}

function loadApplications() {
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications.forEach((application) => {
    displayApplication(application);
  });
}

document.addEventListener("DOMContentLoaded", loadApplications);
