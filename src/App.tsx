import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heart, archive} from 'ionicons/icons';

import { personCircle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Draft from './pages/Draft';
import Team from './pages/Team';
import Drafted from './pages/Drafted';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact={true}>
          <Draft />
        </Route>
        <Route path="/team" exact={true}>
           <Team />
        </Route>
        <Route path="/drafted" exact={true}>
           <Drafted />
        </Route>
      </IonRouterOutlet>

        <IonTabBar slot="top">
          <IonTabButton tab="players" href='/home'>
            <IonIcon icon={personCircle} />
            <IonLabel>Players</IonLabel>
          </IonTabButton>

          <IonTabButton tab="heart" href='/team'>
            <IonIcon icon={heart} />
            <IonLabel>My Team</IonLabel>
          </IonTabButton>

          <IonTabButton tab="drafted" href='/drafted'>
            <IonIcon icon={archive} />
            <IonLabel>Drafted</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
