<script>
export default {
  name: "EventCard",
};
</script>

<template>
  <div id="cards">
    <div
      class="card mt-5 shadow-lg p-3 mb-5 bg-body rounded"
      style="width: 24rem"
    >
      <img
        src="https://www.elitelearning.com/wp-content/uploads/2019/05/disability900x500.jpg"
        class="card-img-top"
        style="height: 250px; object-fit: cover"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-success">Give a hand!</a>
        <div class="hands">
          <h6>Hands Achieved: 150 / Hands Required: 300</h6>
        </div>
      </div>
    </div>
    <div
      class="card mt-5 shadow-lg p-3 mb-5 bg-body rounded"
      style="width: 24rem"
    >
      <img
        src="https://www.thediplomaticaffairs.com/wp-content/uploads/2020/11/PRI170644128.jpg?38e0cf&38e0cf"
        class="card-img-top"
        style="height: 250px; object-fit: cover"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-success">Give a hand!</a>
        <div class="hands">
          <h6>Hands Achieved: 150 / Hands Required: 300</h6>
        </div>
      </div>
    </div>
    <div
      class="card mt-5 shadow-lg p-3 mb-5 bg-body rounded"
      style="width: 24rem"
    >
      <img
        src="https://images.newscientist.com/wp-content/uploads/2018/08/08114243/rexfeatures_9778243j.jpg?width=800"
        class="card-img-top"
        style="height: 250px; object-fit: cover"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-success">Give a hand!</a>
        <div class="hands">
          <h6>Hands Achieved: 150 / Hands Required: 300</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#cards {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.hands {
  margin-top: 15px;
}
</style>
