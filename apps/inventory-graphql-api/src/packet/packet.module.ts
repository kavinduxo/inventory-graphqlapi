import { Module } from "@nestjs/common";
import { PacketModuleBase } from "./base/packet.module.base";
import { PacketService } from "./packet.service";
import { PacketResolver } from "./packet.resolver";

@Module({
  imports: [PacketModuleBase],
  providers: [PacketService, PacketResolver],
  exports: [PacketService],
})
export class PacketModule {}
