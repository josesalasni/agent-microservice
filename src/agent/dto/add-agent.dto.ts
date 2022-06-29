import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class AddAgentDto {
  @Field()
  identification: string;

  @Field()
  name: string;
}
