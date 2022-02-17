console.log(1);

// 1. Fetch Data
fetch("/api/dashboard")
  .then((response) => response.json())
  .then((data) => {
    // 2. Render the Data
    console.log(data);
  });

console.log(2);
