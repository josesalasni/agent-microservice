import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddAgentDto } from 'src/agent/dto/add-agent.dto';
import { Agent, CatDocument } from './types/agent.schema';

@Injectable()
export class AgentService {
  constructor(
    @InjectModel(Agent.name) private agentModel: Model<CatDocument>,
  ) {}

  async getAll(): Promise<Agent[]> {
    return this.agentModel.find();
  }

  async add(agent: AddAgentDto): Promise<Agent> {
    const createdCat = new this.agentModel(agent);
    return createdCat.save();
  }
}
