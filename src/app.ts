import { Invoice } from "./classes/invoice";

const invOne = new Invoice('mario', 'work', 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  );
});
