import * as React from 'react';
import {HeaderComponent, HeaderProtocol}  from './header';
import { MainComponent, MainProtocol } from "./main";
// import loadable from '@loadable/component' => SSR
// www.wemade.com/{ lang=en }
import { UserSettingsModal } from './section/userSettingsModal';
import { Div } from "./styles";
import { PostsProvider } from '../../context/post';
import { placeholderSelectedLanguage } from './header/script';
import ReactDOM from 'react-dom'
import { ExempleComponent } from './header/child/exemple';
import { VersionHistory } from '../../versioning/templateVersions';


interface HomeTemplateProtocol {
  homeProps?: HomeProtocol;
  homeNode?: HomeNodeProtocol
};

interface HomeProtocol {

};

interface HomeNodeProtocol {

};

/*
interface Pages {
  Home: TemplateClass
}

interface TemplateClass {
  Beta: Versions
  LTS: Versions
}

interface Versions {
 'v1.0.0': HomeTemplate
}

interface HomeTemplate {
  header: object;
  main: object;
  aside: object;
  section: object;
  footer: object
}
*/

export const HomeTemplate = (homeProps:HomeTemplateProtocol): JSX.Element => {

  console.table(VersionHistory.Home.templateVersions['v1.2.3'].Main)

  //-------- API ------------



  //-------------------------

  const MainProps: MainProtocol = {
    data: {
      hideShowChildElement: "flex"
    }
  };

  let HeaderProps:HeaderProtocol = {
    HeaderNode: {},
    data: {
      placeholderSelectedLanguage: placeholderSelectedLanguage,
      userPicture: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
    }
  };

  //const [ home, setHome ] = React.useState<HomeProtocol>(false);

  return  (

    <Div>
        <header>
         <HeaderComponent data={HeaderProps.data}/>
        </header>
        <div className="main-aside">
          <main>
            <MainComponent data={MainProps.data}/>
          </main>
          <aside className="aside" >
            <div className="modalGroup" id="modalGroup" >
              <UserSettingsModal/>
            </div>
          </aside>
        </div>
    </Div>
  )
};

const HomePage = (template:() => JSX.Element) => (template);

export { HomePage }