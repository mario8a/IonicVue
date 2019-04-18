<template>
   <div class="ion-page">
      <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button text="Regresar" defaultHref="/"></ion-back-button>
        </ion-buttons>

        <ion-title>About Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-card>
  <ion-item>
    <ion-icon name="pin" slot="start"></ion-icon>
    <ion-label>ion-item in a card, icon left, button right</ion-label>
    <ion-button fill="outline" slot="end">View</ion-button>
  </ion-item>

  <ion-card-content>
    This is content, without any paragraph or header tags,
    within an ion-card-content element.
  </ion-card-content>
</ion-card>
    </ion-content>
   </div>
</template>
