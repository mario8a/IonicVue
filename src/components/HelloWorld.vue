<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Hello Mario</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img style="width: 50%; height: 35%;" alt="Vue logo" src="../assets/logo.png">

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>This is a web app develop in vue js with ionic components</ion-card-subtitle>
          <ion-card-title>;)</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam esse recusandae fugiat </p>
        </ion-card-content>
        <ion-card-footer>

          <ion-row>
            <ion-col>
              <ion-button color="danger" href="/About">AboutPage</ion-button>
            </ion-col>
            <ion-col>
              <ion-button color="tertiary" href="/About">HomePage</ion-button>
            </ion-col>
          </ion-row>

          

        </ion-card-footer>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>