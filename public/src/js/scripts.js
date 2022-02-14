import module1 from "./modules/module-1";
import module2 from "./modules/module-2";
import get_json from "./modules/Jesse";
import add_trend from "./modules/Jesse";

function init() {
  module1();
  module2();
  var data = get_json();
  add_trend(data);
}

init();

