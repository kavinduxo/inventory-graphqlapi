import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PartServiceBase } from "./base/part.service.base";

@Injectable()
export class PartService extends PartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
