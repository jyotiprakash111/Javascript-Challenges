const company = {
    name: "Tech Corp",
    location: "Bhubaneswar",
    departments: [
      {
        name: "Engineering",
        manager: "Alice",
        employees: [
          { name: "Bob", position: "Software Engineer", projects: ["Project A", "Project B"] },
          { name: "Charlie", position: "DevOps Engineer", projects: ["Project A", "Project C"] }
        ]
      },
      {
        name: "Marketing",
        manager: "David",
        employees: [
          { name: "Eve", position: "Content Creator", projects: ["Project D"] },
          { name: "Frank", position: "SEO Specialist", projects: ["Project E"] }
        ]
      }
    ],
    projects: [
      { name: "Project A", deadline: "2025-05-15" },
      { name: "Project B", deadline: "2025-06-01" },
      { name: "Project C", deadline: "2025-07-20" },
      { name: "Project D", deadline: "2025-08-30" },
      { name: "Project E", deadline: "2025-09-10" }
    ]
  };
  

  const {departments:[name]} = company

  console.log( name)