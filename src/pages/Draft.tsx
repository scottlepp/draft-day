import { useState } from 'react';
import {
  IonContent,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';

import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from '@ionic/react';


const Draft: React.FC = () => {

  const [players, setPlayers] = useState<any[]>([]);

  useIonViewWillEnter(() => {
    fetchAvailablePlayers(true).then((players) =>
      setPlayers(players)
    );
  });

  const fetchAvailablePlayers = async(cache: boolean) => {
    const players = await fetchPlayers(cache);
    const drafted = await fetchDrafted();
    return players.filter((p: any) => {
      return drafted.findIndex((d: any) => d.name === p.name) === -1;
    });
  }

  const fetchPlayers = async(cache: boolean) => {
    if (cache) {
      const data = localStorage.getItem('dd-all-players');
      if (data) {
        return JSON.parse(data);
      }
    }
    const res = await fetch('https://jayzheng-ff-api.herokuapp.com/rankings?format=standard');
    const players = await res.json();
    localStorage.setItem('dd-all-players', JSON.stringify(players.rankings));
    return players.rankings;
  }

  const fetchDrafted = async() => {
    let data = localStorage.getItem('dd-players') || '[]';
    const players = JSON.parse(data);
    data = localStorage.getItem('dd-drafted') || '[]';
    const drafted = JSON.parse(data);
    const all = [...players, ...drafted];
    return Promise.resolve(all);
  }

  const refresh = (e: CustomEvent) => {
    fetchAvailablePlayers(false).then((players) => {
      setPlayers(players);
      e.detail.complete();
    })
  };


  const add = (player: any) => {
    const data = localStorage.getItem('dd-players') || '[]';
    const myPlayers = JSON.parse(data);
    myPlayers.push(player);
    localStorage.setItem('dd-players', JSON.stringify(myPlayers));
    // const available = players.filter((p:any) => myPlayers.findIndex((m: any) => m.name === player.name))
    const available = players.filter((p:any) => p.name !== player.name);
    setPlayers(available);
  };

  const drafted = (player: any) => {
    const data = localStorage.getItem('dd-drafted') || '[]';
    const drafted = JSON.parse(data);
    drafted.push(player);
    localStorage.setItem('dd-drafted', JSON.stringify(drafted));
    // const available = players.filter((p:any) => myPlayers.findIndex((m: any) => m.name === player.name))
    const available = players.filter((p:any) => p.name !== player.name);
    setPlayers(available);
  };

  return (
    <IonPage id="home-page">
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Players</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>

        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

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
                <IonItemOption onClick={() => add(p)}>Draft</IonItemOption>
              </IonItemOptions>
          
              <IonItem>
                <IonLabel>{p.name}({p.rank})</IonLabel>
                <IonLabel slot="end">{p.position}</IonLabel>
                <IonLabel slot="end">{p.tier}</IonLabel>
              </IonItem>
          
              <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => drafted(p)}>Drafted</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Draft;
