import { Test } from '@nestjs/testing';
import { Agent } from './types/agent.schema';
import { AgentResolver } from './agent.resolver';
import { AgentService } from './agent.service';
import { getModelToken } from '@nestjs/mongoose';
import { addAgentDto, agentData } from 'test/stub/agents.stub';

describe('CatsController', () => {
  let agentResolver: AgentResolver;
  let agentService: AgentService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AgentService,
        AgentResolver,
        { provide: getModelToken(Agent.name), useValue: jest.fn() },
      ],
    }).compile();

    agentService = moduleRef.get<AgentService>(AgentService);
    agentResolver = moduleRef.get<AgentResolver>(AgentResolver);
  });

  describe('getAll', () => {
    it('should return an array of agents', async () => {
      jest.spyOn(agentService, 'getAll').mockResolvedValue(agentData);
      expect(await agentResolver.getAgents()).toBe(agentData);
    });
  });

  describe('add', () => {
    it('sould add a new agent', async () => {
      jest.spyOn(agentService, 'add').mockResolvedValue(agentData[0]);
      expect(await agentResolver.addAgent(addAgentDto)).toBe(agentData);
    });
  });
});
