import module1 from "./modules/module-1";
import module2 from "./modules/module-2";
import get_json from "./modules/Jesse";
import generate_cards from "./modules/Jesse1";

function init() {
  module1();
  module2();
  get_json().then((data)=>
  generate_cards(data))
}

init();

