if (process.env.NODE_ENV === 'production') {
  require('module-alias/register');
}

import { first } from '@moonpay-test/first';
import { second, render } from '@moonpay-test/second';

console.log(first, second);
console.log(render);
