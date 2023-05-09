function contentMenu() {
  const main = document.querySelector("main");
  main.innerHTML = `
  <h1>
  Starters
  </h1>
  <div class="menu-container">
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Brie and walnut tart</h2>
        <span class="price">£3.50</span>
      </div>
    <p>Warm, flaky pastry toped with deliciously sticky caramelised onions, and
    the classic combination of brie and walnuts.</p>
    </div>
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Pea and mint soup</h2>
        <span class="price">£3.50</span>
      </div>
    <p>Delicously warm yet light, served with rustic bread and butter.</p>
    </div>
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Burrata and balsamic strawberries</h2>
        <span class="price">£3.50</span>
      </div>
    <p>Creamy burrata cheese delightfully accompanied with sweet strawberries drizzled in balsamic vinegar.</p>
    </div>
  </div>
  <h2>Mains</h2>
  <div class="menu-container">
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Buddah's Delight</h2>
        <span class="price">£7.95</span>
      </div>
    <p>Seasonal vegetables and noodles in a rich broth, zinging with flavour, and just a hint of heat.</p>
    </div>
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Mushroom and spinach tagine</h2>
        <span class="price">£7.95</span>
      </div>
    <p>A warming curry, with intense flavours served with rice and nann bread</p>
    </div>
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Couscous patties with avocado cream and slaw.</h2>
        <span class="price">£7.95</span>
      </div>
    <p>A rich avocado cream is the perfect acompaniment to these couscous and cranberry patties. Served with a lemon slaw to cut through the richness of the avocado.</p>
    </div>
  </div>
  <h2>Deserts</h2>
  <div class="menu-container">
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Choclate encased caramelised sprouts</h2>
        <span class="price">£4.95</span>
      </div>
    <p>Our signature desert, served with a rasbperry coulis, give it a go you may be surprised.</p>
    </div>
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Sticky toffee pudding</h2>
        <span class="price">£4.95</span>
      </div>
    <p>A true classic, served with custard.</p>
    </div>
    <div class="menu-item">
      <div class="menu-item-heading"> 
        <h2>Key lime pie</h2>
        <span class="price">£4.95</span>
      </div>
    <p>Finish your evening with a bit of zing, served with a scoop of vanilla ice-cream.</p>
    </div>
  </div>
  `;
  return main;
}

export default contentMenu;
