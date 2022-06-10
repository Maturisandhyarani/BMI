import {IonContent,IonHeader,IonInput,IonItem,IonLabel,IonPage,IonTitle,IonToolbar,IonAlert,IonGrid,IonCol,IonRow} from "@ionic/react";
import BmiControls from "../components/BMIControls";
import BmiResults from "../components/BMIResults";
import BmiInfo from "../components/BMIInfo";
import InputControls from "../components/InputControls";
import React, { useState, useRef } from "react";
import "./Home.css";

const Home: React.FC = () => {

  const [calculatedBmi, setcalculatedBmi] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setcalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBmi = () => {
    const weight = weightInputRef.current!.value;
    const height = heightInputRef.current!.value;

    if (!weight || 
        !height || 
        +weight<=0 || 
        +height<=0
        ){
          setError('Please enter a valid (non-negative) number');
      return;
    }
    const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1
    const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1
    const convertedWeight = +weight /weightConversionFactor
    const convertedHeight = +height /heightConversionFactor
    const bmi = convertedWeight / (convertedHeight * convertedHeight);
    setcalculatedBmi(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };
  const clearError = () => {
    setError('');
  }

  const selectCaclUnitHandler = (selectedValue:'mkg' | 'ftlbs') => {
    setcalcUnits(selectedValue);
  }

  return (
    <React.Fragment>
      <IonAlert isOpen={!!error} message={error} buttons={[{text: 'Okay', handler: clearError}]}></IonAlert>
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <InputControls selectedValue={calcUnits} onSelectValue={selectCaclUnitHandler} />
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonItem>
          <IonLabel position="floating">Height({calcUnits === 'mkg' ? 'Meters': 'Feet' })</IonLabel>
          <IonInput type="number" ref={heightInputRef}></IonInput>
        </IonItem>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
            <IonItem>
          <IonLabel position="floating">Weight({calcUnits === 'mkg' ? 'Kg': 'lbs'})</IonLabel>
          <IonInput type="number" ref={weightInputRef}></IonInput>
        </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <BmiControls onCalculate={calculateBmi} onReset={resetInputs}/>
          {calculatedBmi && 
            <BmiResults result={calculatedBmi} />
          }
        <BmiInfo />
      </IonContent>

    </IonPage>
    </React.Fragment>
  );
};

export default Home;
