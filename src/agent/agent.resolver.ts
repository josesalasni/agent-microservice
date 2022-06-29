import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AddAgentDto } from 'src/agent/dto/add-agent.dto';
import { Agent } from './types/agent.schema';
import { AgentService } from './agent.service';

@Resolver()
export class AgentResolver {
  constructor(private agentService: AgentService) {}

  @Query(() => [Agent])
  async getAgents() {
    return this.agentService.getAll();
  }

  @Mutation(() => Agent)
  async addAgent(@Args('agent') addAgentData: AddAgentDto) {
    return this.agentService.add(addAgentData);
  }
}
