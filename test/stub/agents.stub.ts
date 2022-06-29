import { Agent } from 'src/agent/types/agent.schema';
import { AddAgentDto } from 'src/agent/dto/add-agent.dto';

export const agentData: Agent[] = [
  {
    id: '2',
    name: 'test',
    numberOfShipments: 2,
    stars: 2,
  },
];

export const addAgentDto: AddAgentDto = {
  identification: '00-100-011-101',
  name: 'testname',
};
