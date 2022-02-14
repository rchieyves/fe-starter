<<<<<<< HEAD
import module1 from "./modules/module-1";
import module2 from "./modules/module-2";
import module3 from "./modules/module-cbins13";
function init() {
  module1();
  module2();
}

init();

module1();
=======
// 1. Fetch Data
fetch("/api/dashboard")
  .then((response) => response.json())
  .then((data) => {
    // 2. Render the Data
    console.log(data);
  });
>>>>>>> origin/feature/joshuacerbito/server-setup
