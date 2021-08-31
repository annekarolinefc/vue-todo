<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <div>TO DO</div>
      <form>
      <div class="input-group">
        <input type="text" class="form-input" placeholder="Novo todo">
        <button class="btn btn-primary input-group-btn">Adicionar</button>
      </div>
    </form>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App', 
  data(){ //ESTADO DOS COMPONENTES
    return { todos:[] }
  }
}
</script>

<style>

</style>
