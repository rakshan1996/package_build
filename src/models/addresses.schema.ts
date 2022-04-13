import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


export enum BusinessAddressStatuses {
    RENTED = 'Rented',
    OWNED = 'Owned',
    NOT_OPERATIONAL = 'Not Operational',
  }
  
  export enum ResidencAddressStatuses {
    SELF_OWNED = 'Rented',
    FAMILY_OWNED = 'Owned',
    ON_RENT = 'Rented',
  }
  
  export enum ResidencAddressTypes {
    CURRENT = 'Current',
    PERMANENT = 'Permanent'
  }
    
  export class OrganisationAddresses extends Document {
    @Prop()
    businessAddresses: [BusinessAddress];

  }
  
  export class BusinessAddress extends Document {
    @Prop()
    _id: mongoose.Types.ObjectId;
  
    @Prop({ required: true, enum: BusinessAddressStatuses })
    status: string;
  
    @Prop()
    line1: string;
  
    @Prop()
    line2: string;
  
    @Prop()
    landmark: string;
  
    @Prop()
    city: string;
  
    @Prop()
    state: string;
  
    @Prop()
    pinCode: string;
   
  }


  export class UserAddresses extends Document {
    @Prop()
    residentialAddresses: [ResidentialAddress]
    
  }
  export class ResidentialAddress extends Document {
    @Prop()
    _id: mongoose.Types.ObjectId;
  
    @Prop({ required: true, enum: ResidencAddressStatuses })
    status: string;
  
    @Prop({ required: true, enum: ResidencAddressTypes })
    type: string;
  
    @Prop()
    line1: string;
  
    @Prop()
    line2: string;
  
    @Prop()
    landmark: string;
  
    @Prop()
    city: string;
  
    @Prop()
    state: string;
  
    @Prop()
    pinCode: string;
   
  }
  