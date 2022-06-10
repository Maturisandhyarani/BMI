import { IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";

const BMIControls: React.FC<{
  onCalculate: () => void;
  onReset: () => void;
}> = (props) => {
  return (
    <IonGrid className="ion-text-center">
      <IonRow>
        <IonCol>
          <IonButton
            class="ion-text-capitalize"
            color="dark"
            shape="round"
            onClick={props.onCalculate}
          >
            <IonIcon slot="start" icon={calculatorOutline}></IonIcon>Calculate
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            class="ion-text-capitalize"
            color="danger"
            shape="round"
            onClick={props.onReset}
          >
            <IonIcon slot="start" icon={refreshOutline}></IonIcon>Reset
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default BMIControls;
