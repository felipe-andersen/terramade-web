import * as React from 'react';
import {HeaderComponent, HeaderProtocol}  from './header';
import { MainComponent, MainProtocol } from "./main";
// import loadable from '@loadable/component' => SSR
// www.wemade.com/{ lang=en }
import { UserSettingsModal } from './section/userSettingsModal';
import { Div } from "./styles";
import { PostsProvider } from '../../context/post';
import { placeholderSelectedLanguage } from './header/script';



interface HomeTemplateProtocol {
  homeProps?: HomeProtocol;
};

interface HomeProtocol {

};


export const HomeTemplate = ({homeProps}:HomeTemplateProtocol): JSX.Element => {

  //-------- API ------------



  //-------------------------

  const mainProps: MainProtocol = {
    props: {
      hideShowChildElement: "flex"
    }
  };

  const HomeNode = {


  };

  //const [ home, setHome ] = React.useState<HomeProtocol>(false);

  return  (

    <Div>
        <header>
       
        </header>
        <div className="main-aside">
          <main>
            <PostsProvider>
              <MainComponent props={mainProps.props}/>
            </PostsProvider>
          </main>
          <aside className="aside" >
            <div className="modalGroup" id="modalGroup" >
              <UserSettingsModal/>
            </div>
          </aside>
        </div>
    </Div>
  )
  console.log("Welcome Wemade! \n ")
};


