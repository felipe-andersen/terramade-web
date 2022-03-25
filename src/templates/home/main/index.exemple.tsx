import * as React from 'react';
import { PostComponent } from './child/post';
import { Div } from "./styles";
import { ImageSearchIcon } from '../../../libs/icons/imageSearch';
import { HighlightedShortsProfessionals } from './child/highlighted-shorts-professionals-modal';
import { usePosts } from '../../../context/post';
import { VersionHistory } from '../../../versioning/templateVersions';

// Components que não podem ter seu estado alterado, precisam tomar cuidado com renderização dinamica

export interface MainProtocol {
  HomeNodes?: MainNodesProtocol
  props:MainPropsProtocol
};

interface MainPropsProtocol {
  hideShowChildElement: string;
}

interface MainNodesProtocol {};

export const MainComponent = (MainProps:MainProtocol):JSX.Element => {

  return (
    <Div>
      {/*VersionHistory.Home.templateVersions['v1.2.3'].Main['v11.5.6']*/}
    </Div>
    )
  }
;






