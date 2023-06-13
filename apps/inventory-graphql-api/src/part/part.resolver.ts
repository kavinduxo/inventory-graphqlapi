import * as graphql from "@nestjs/graphql";
import { PartResolverBase } from "./base/part.resolver.base";
import { Part } from "./base/Part";
import { PartService } from "./part.service";

@graphql.Resolver(() => Part)
export class PartResolver extends PartResolverBase {
  constructor(protected readonly service: PartService) {
    super(service);
  }
}
