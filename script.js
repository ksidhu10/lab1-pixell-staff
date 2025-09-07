// Execute after the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // 1. Display the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
  
    // 2. Import the employees.json file
    fetch("employees.json")
      .then(response => response.json())   
      .then(data => {
        const container = document.getElementById("employee-list"); 
  
        // 3. Go through each department one by one
        for (const department in data) {
          // Generate a section for every department
          const section = document.createElement("div");
          section.classList.add("department");
  
          // Section heading
          const heading = document.createElement("h4");
          heading.textContent = department;
          section.appendChild(heading);
  
          // Generate an employee list
          const ul = document.createElement("ul");
          data[department].forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            ul.appendChild(li);
          });
  
          // Insert the list into the department section
          section.appendChild(ul);
  
          // Insert the department section into the main page
          container.appendChild(section);
        }
      })
      .catch(err => console.error("Error loading employees:", err));
  });
  