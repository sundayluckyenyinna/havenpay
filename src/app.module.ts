/* eslint-disable */

import { Module } from '@nestjs/common';
import ConfigurationModule from "./config/ConfigurationModule";
import CustomerModule from './modules/customer/CustomerModule';
import ValidationModule from './modules/validation/ValidationModule';

@Module({
  imports: [ ConfigurationModule, CustomerModule ],
})
export class AppModule {}
