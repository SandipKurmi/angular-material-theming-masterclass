// Any vs unknown type
// in any type we can assign any value to it, but in unknown type we can't assign any value to it.
let anyValue: any;
let unknownValue: unknown;

anyValue = 'test';
anyValue = 10;

unknownValue = 'test';
unknownValue = 10;
anyValue.toUpperCase();

//This is how we can use unknown type to avoid the error.
//we can user this type over the any
//don't use any type in your code
if (typeof unknownValue === 'string') {
  unknownValue.toUpperCase();
}

//real life example

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
interface Product {
  id: number;
  title: string;
}

interface RefundActivity {
  id: number;
  productId: number;
  reason: string;
}

interface DiliveryActivity {
  deliveredById: number;
}

function isDeliveryActivity(activity: any): activity is DiliveryActivity {
  return (activity as DiliveryActivity).deliveredById !== undefined;
}

const data = fetchData<unknown>(
  'https://jsonplaceholder.typicode.com/posts'
).then((data) => {
  console.log(data);
  if (isDeliveryActivity(data)) {
    console.log(data.deliveredById);
  }
});
