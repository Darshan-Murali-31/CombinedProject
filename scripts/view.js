// Fetch data from the Spring Boot API
function loadEmployees() {
    fetch('/employees') // Replace with your Spring Boot endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector("#employeeTable tbody");
            tableBody.innerHTML = ""; // Clear existing rows

            data.forEach(employee => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching employees:", error);
            alert("Failed to load employees. Please try again later.");
        });
}

// Load employees when the page loads
document.addEventListener("DOMContentLoaded", loadEmployees);
