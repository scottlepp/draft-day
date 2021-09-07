import { useState } from 'react';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import PlayerListItem from '../components/PlayerListItem';

import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

const Team: React.FC = () => {

  const [players, setPlayers] = useState<any[]>([]);

  useIonViewWillEnter(() => {
    fetchPlayers().then((players) =>
      setPlayers(players)
    );
  });

  const fetchPlayers = async() => {
    const data = localStorage.getItem('dd-players') || '[]';
    const players = JSON.parse(data);
    return Promise.resolve(players);
  }

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  const remove = (player: any) => {
    const data = localStorage.getItem('dd-players') || '[]';
    let players = JSON.parse(data);
    players = players.filter((p:any) => p.name !== player.name);
    localStorage.setItem('dd-players', JSON.stringify(players));
    setPlayers(players);
  };

  return (
    <IonPage id="home-page">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Players</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>

        {/* <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher> */}

        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonList>
          {/* {players.map(m => <PlayerListItem key={m.name} player={m} />)} */}
          {players.map(p => {
            return (
            <IonItemSliding key={p.name}>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => remove(p)}>Remove</IonItemOption>
              </IonItemOptions>
          
              <IonItem>
                <IonLabel>{p.name}({p.rank})</IonLabel>
                <IonLabel slot="end">{p.position}</IonLabel>
                <IonLabel slot="end">{p.tier}</IonLabel>
              </IonItem>
          
              <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => console.log('unread clicked')}>Drafted</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Team;
