import "./QuickLinks.css";
import React from "react";
import { IonChip } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css'

export default function QuickLinks() {
  return (
    <div className="quick-links">
      <h2 className="text-center quick-links-heading"> Quick Links</h2>
      <div className="d-flex justify-content-around align-items-around items">
      <IonChip color="dark">India</IonChip>
      <IonChip color="dark">Trending</IonChip>
      <IonChip color="dark">Latest</IonChip>
      <IonChip color="dark">Crime</IonChip>
      <IonChip color="dark">USA</IonChip> 
      </div>
    </div>
  );
}
