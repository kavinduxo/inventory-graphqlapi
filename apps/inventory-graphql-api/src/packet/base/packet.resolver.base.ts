/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePacketArgs } from "./CreatePacketArgs";
import { UpdatePacketArgs } from "./UpdatePacketArgs";
import { DeletePacketArgs } from "./DeletePacketArgs";
import { PacketCountArgs } from "./PacketCountArgs";
import { PacketFindManyArgs } from "./PacketFindManyArgs";
import { PacketFindUniqueArgs } from "./PacketFindUniqueArgs";
import { Packet } from "./Packet";
import { PartFindManyArgs } from "../../part/base/PartFindManyArgs";
import { Part } from "../../part/base/Part";
import { PacketService } from "../packet.service";
@graphql.Resolver(() => Packet)
export class PacketResolverBase {
  constructor(protected readonly service: PacketService) {}

  async _packetsMeta(
    @graphql.Args() args: PacketCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Packet])
  async packets(@graphql.Args() args: PacketFindManyArgs): Promise<Packet[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Packet, { nullable: true })
  async packet(
    @graphql.Args() args: PacketFindUniqueArgs
  ): Promise<Packet | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Packet)
  async createPacket(@graphql.Args() args: CreatePacketArgs): Promise<Packet> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Packet)
  async updatePacket(
    @graphql.Args() args: UpdatePacketArgs
  ): Promise<Packet | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Packet)
  async deletePacket(
    @graphql.Args() args: DeletePacketArgs
  ): Promise<Packet | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Part], { name: "parts" })
  async resolveFieldParts(
    @graphql.Parent() parent: Packet,
    @graphql.Args() args: PartFindManyArgs
  ): Promise<Part[]> {
    const results = await this.service.findParts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
