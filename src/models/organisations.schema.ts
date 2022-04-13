import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { OrganisationAddresses } from './addresses.schema'

export type OrganisationDocument = Organisation & Document;

export enum OrganisationTypes {
  VENDOR = 'Vendor',
  CORPORATE = 'Corporate',
  DEALER = 'Dealer',
  RETAILER = 'Retailer',
}

export enum OrganisationEntityTypes {
  PROPRIETORSHIP = 'Proprietorship',
  PARTNERSHIP = 'Partnership',
  PVT_LTD = 'Private Limited Company',
  PUB_LTD = 'Public Limited Company',
}



export class BankDetails extends Document {
  @Prop({ required: true })
  accountNumber: string;

  @Prop({ required: true })
  IFSCCode: string;

  @Prop({ required: true })
  branch: string;
}



@Schema()
export class Organisation {
  @Prop({ required: true, enum: OrganisationTypes })
  organisationType: string;

  @Prop({ enum: OrganisationEntityTypes })
  organisationEntityType: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  mobileNumbers: [string];

  @Prop()
  addresses: OrganisationAddresses;

  @Prop()
  gstin: string;

  @Prop()
  pan: string;

  @Prop({ required: true, ref: 'User' })
  ownerId: mongoose.Types.ObjectId;

  @Prop({
    default: false,
  })
  basicOnboardingDone: boolean;

  @Prop({
    default: false,
  })
  advancedOnboardingDone: boolean;

  @Prop({ type: BankDetails })
  bankDetails: BankDetails;

  @Prop()
  logoUrl: string;

  @Prop()
  signatureUrl: string;
}

export const OrganisationSchema = SchemaFactory.createForClass(Organisation);
