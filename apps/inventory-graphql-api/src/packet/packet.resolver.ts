import * as graphql from "@nestjs/graphql";
import { PacketResolverBase } from "./base/packet.resolver.base";
import { Packet } from "./base/Packet";
import { PacketService } from "./packet.service";

@graphql.Resolver(() => Packet)
export class PacketResolver extends PacketResolverBase {
  constructor(protected readonly service: PacketService) {
    super(service);
  }
}
