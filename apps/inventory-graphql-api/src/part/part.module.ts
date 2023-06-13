import { Module } from "@nestjs/common";
import { PartModuleBase } from "./base/part.module.base";
import { PartService } from "./part.service";
import { PartResolver } from "./part.resolver";

@Module({
  imports: [PartModuleBase],
  providers: [PartService, PartResolver],
  exports: [PartService],
})
export class PartModule {}
