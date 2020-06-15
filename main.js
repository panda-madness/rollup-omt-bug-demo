import { wrap } from "comlink";

async function init() {
  const worker = new Worker("./worker.js");
  const api = wrap(worker);

  const result = await api.add(40, 2);
  alert(`Result: ${result}`);
}
init();
