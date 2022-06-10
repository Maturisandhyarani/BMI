import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControls : React.FC<{
    selectedValue:'mkg' | 'ftlbs';
    onSelectValue: (value: 'mkg' | 'ftlbs')=> void;
}> = (props) => {

    const inputChangeHandler = (event: CustomEvent)=> {
        props.onSelectValue(event.detail.value);
    }
    return(
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="mkg">
                <IonLabel className="ion-text-capitalize">m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel className="ion-text-capitalize">ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
}

export default InputControls