import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFromatter.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
}

let docOne = addUID({ name: 'you', age: 39 });

console.log(docOne.name);

interface Resource<T> {
  uid: number;
  resName: string;
  data: T
}

const docThree: Resource<string> = {
  uid: 1,
  resName: 'person',
  data: 'hi'
}

const docFour: Resource<number[]> = {
  uid: 3,
  resName: 'person',
  data: [2, 3, 5]
}
