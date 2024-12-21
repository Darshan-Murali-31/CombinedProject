function sendData() {
    const id = document.getElementById("ID").value;
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const department = document.getElementById("Department").value;
    const salary = document.getElementById("Salary").value;

    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, name, email, department, salary })
    })
    .then(response => { 
        if (response.ok) {
            alert("Data submitted successfully!");
            // Clear the form fields
            document.getElementById("ID").value = "";
            document.getElementById("Name").value = "";
            document.getElementById("Email").value = "";
            document.getElementById("Department").value = "";
            document.getElementById("Salary").value = "";
        } else {
            alert("Failed to submit data!");
        }
    })
    .catch(error => {
        console.error("Error:", error); 
        alert("An error occurred while submitting the data.");
    });
}
