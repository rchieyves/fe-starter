(function () {
  'use strict';

  // 1. Fetch Data
  fetch("/api/dashboard")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      // 2. Render the Data








    });

})();
