import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import './MessageListItem.css';

interface PlayerListItemProps {
  player: any;
}

const PlayerListItem: React.FC<PlayerListItemProps> = ({ player }) => {
  return (
    <IonItem detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {player.name}
          <span className="date">
            <IonNote>{player.tier}</IonNote>
          </span>
        </h2>
        <h3>{player.rank}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default PlayerListItem;
