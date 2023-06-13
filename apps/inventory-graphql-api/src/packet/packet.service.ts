import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PacketServiceBase } from "./base/packet.service.base";

@Injectable()
export class PacketService extends PacketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
