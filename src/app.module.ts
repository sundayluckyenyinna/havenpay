/* eslint-disable */

import { Module } from '@nestjs/common';
import ConfigurationModule from "./config/ConfigurationModule";
import CustomerModule from './modules/customer/CustomerModule';

@Module({
  imports: [ ConfigurationModule, CustomerModule ],
})
export class AppModule {}
