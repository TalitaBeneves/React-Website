import React from 'react';
import Icon1 from '../../img/sage.jpg';
import Icon2 from '../../img/sova.jpg';
import Icon3 from '../../img/viper.jpg';
import Icon4 from '../../img/brimstone.jpg';
import { 
  AgentesContainer,
  AgentesH1,
  AgentesWrapper,
  AgentesCard,
  AgentesIcon

} from './AgentesElements';

const Agentes = () => {
  return (
    <AgentesContainer id='mais'>
      <AgentesH1>Mais Agentes</AgentesH1>
      <AgentesWrapper>
        <AgentesCard>
          <AgentesIcon src={Icon1} />
        </AgentesCard>
        <AgentesCard>
          <AgentesIcon src={Icon2} />
        </AgentesCard>
        <AgentesCard>
          <AgentesIcon src={Icon3} />
        </AgentesCard>
      </AgentesWrapper>
    </AgentesContainer>
  )
}

export default Agentes