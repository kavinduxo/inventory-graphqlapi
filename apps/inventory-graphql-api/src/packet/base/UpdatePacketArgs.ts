/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PacketWhereUniqueInput } from "./PacketWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PacketUpdateInput } from "./PacketUpdateInput";

@ArgsType()
class UpdatePacketArgs {
  @ApiProperty({
    required: true,
    type: () => PacketWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PacketWhereUniqueInput)
  @Field(() => PacketWhereUniqueInput, { nullable: false })
  where!: PacketWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PacketUpdateInput,
  })
  @ValidateNested()
  @Type(() => PacketUpdateInput)
  @Field(() => PacketUpdateInput, { nullable: false })
  data!: PacketUpdateInput;
}

export { UpdatePacketArgs as UpdatePacketArgs };