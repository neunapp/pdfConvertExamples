<template>
  <div class="page">
    <h1 class="page__title">Pagina Ejemplo para PDF</h1>
    <p class="page__resume">Aqui convertimos este HTML en un PDF</p>
    <div class="page__content">
      <div class="page__content__column">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, tempore maiores nesciunt ut delectus saepe tenetur sit animi! Aliquam, sunt tempora? Exercitationem tempora omnis quae itaque dolorum? Commodi, pariatur! Assumenda.</p>
      </div>
      <div class="page__content__column">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, tempore maiores nesciunt ut delectus saepe tenetur sit animi! Aliquam, sunt tempora? Exercitationem tempora omnis quae itaque dolorum? Commodi, pariatur! Assumenda.</p>
      </div>
    </div>
    <div class="page__details">
      <table border="1" class="page__table">
        <thead>
          <th>Name</th>
          <th>Details</th>
        </thead>
        <tbody>
          <tr v-for="item in 5">
            <td>Example name</td>
            <td>12.00 °</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="page__footer">

    </div>
  </div>
  <div class="actions">
    <button class="actions__btn">Descargar Html2Pdf</button>
    <button class="actions__btn green">Descargar jspdf</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.page {
  border: 1px solid;
  width: 100%;
  padding: 10px;
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1em;
    &__column {
      margin: 5px;
      border-top: 1px solid;
    } 
  }
  &__details {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__table {
    width: 100%;
  }
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  &__btn {
    margin: 1em;
    background: blue;
    &.green {
      background: green;
    }
  }
}
</style>