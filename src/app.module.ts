import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormService } from "./form/form.service";
import { LocationService } from "./location/location.service";
import { AuthService } from './auth/auth.service';
import { Auth0Module } from './auth0/auth0.module';
import { ProductionUnitService } from './production-unit/production-unit.service';
import { CertificationService } from './certification/certification.service';
import { OrganizationService } from './organization/organization.service';
import { CommodityService } from './commodity/commodity.service';
import { PersonService } from './person/person.service';

@Module({
  imports: [Auth0Module],
  controllers: [AppController],
  providers: [AppService, FormService, LocationService, AuthService, ProductionUnitService, CertificationService, OrganizationService, CommodityService, PersonService],
})
export class AppModule {}
