import { ILogger } from '@moonpay-test/libs/types';
import { Logger } from '@moonpay-test/libs/logger';
import { first } from '@moonpay-test/first';
import { second, render } from '@moonpay-test/second';

const logger: ILogger = new Logger('magic');

logger.log(first, second);
logger.log(render());
