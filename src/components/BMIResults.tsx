import { IonRow, IonCol, IonCard, IonCardContent, IonLabel } from "@ionic/react";
import React from "react";

const BMIResult: React.FC <{
    result: number
  }> = (props) => {
  return (
    <IonRow className="ion-no-margin">
      <IonCol>
        <IonCard color="secondary">
          <IonCardContent>
            <IonLabel color="dark">Body Mass Index(BMI) :- {props.result.toFixed(2)}</IonLabel>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResult;
