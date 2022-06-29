import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AgentDocument = Agent & Document;

@Schema()
@ObjectType()
export class Agent {
  @Prop()
  @Field()
  id: string;

  @Prop()
  @Field()
  name: string;

  @Field(() => Int)
  numberOfShipments: number;

  @Field(() => Float)
  stars: number;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
