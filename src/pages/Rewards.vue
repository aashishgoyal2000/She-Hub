<template>
  <div>
    <div class="ibm-sans-plex rewards row">
      <div class="sample-section col">
        <div>
          <img src="../assets/Tampons.jpg" />
        </div>
        Congratulations! You are now eligible to get a FREE Sample of Tampons.
        <br />
        Click here to order now!
      </div>
      <div class="col teal-pastel-background your-points">
        Congratulations! You have earned
        <div class="points">100</div>
        Reward Points
      </div>
    </div>
    <div class="col reedem-points">
      <h2>Reedeem Points</h2>
      <div class="row">
        <q-card class="col reedemable-product">
          <h4>50</h4>
          <p>Discount of 30% on Full Body Checkup</p>
        </q-card>
        <q-card class="col reedemable-product">
          <h4>80</h4>
          <p>Free Wet Wipes</p>
        </q-card>
        <q-card class="col reedemable-product">
          <h4>100</h4>
          <p>Free 1 cosmetic product</p>
        </q-card>
        <q-card class="col reedemable-product">
          <h4>200</h4>
          <p>Free Menstural Cup</p>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.rewards {
  margin: 24px;
  margin-bottom: 0px;
  text-align: center;
}
.points {
  font-size: 40px;
  font-weight: 700;
}
.your-points {
  max-width: 200px !important;
  border-radius: 20px;
  margin: 40px;
  padding: 30px;
  border: 3px solid rgb(247, 97, 97);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 0px;
}
.sample-section {
  border-radius: 20px;
  padding: 16px;
  /* background: rgba(248, 175, 175, 0.961); */
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin: 40px;
  margin-bottom: 0px;
}
.sample-section img {
  width: 200px;
}
.rewards h2 {
  text-align: center;
}
.reedem-points {
  width: 100%;
  justify-content: center;
}
.reedemable-product {
  margin: 24px;
  padding: 24px;
  text-align: center;
  border-radius: 20px;
  font-size: 13px;
}
h2 {
  text-align: center;
}
</style>
