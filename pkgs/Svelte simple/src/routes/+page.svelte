<svelte:head>
  <title>IC: Discord</title>
</svelte:head>

<header>
  <img id="logo" src="icon.svg" alt="🧠"/>
  <h1>
    <span>The</span>
    <span>Inventors’</span>
    <span>Center</span>
  </h1>
</header>

<main>
  <p>Enjoy the fun of the Tri-Cities premiere makerspace — The Inventors' Center — virtually, by joining <a href="https://chat.inventors.center">our Discord <img src="Discord.svg" class="icon" alt="💬"/></a>.</p>



  <aside>This site is a misnomer. The actual name of the organization, for reasons I've not been able to discern, is <q><a href="https://theinventorcenter.org">The Inventor Center</a></q>. I think the possessive plural fosters more of a sense of community, but it was said & done long before I arrived.</aside>
</main>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-family: Allegrand;
  }
  h1 {
    font-size: clamp(18pt, 24vw, 75pt);
    -webkit-stroke: 2px solid #333;
    margin-block: 0;

    & span {
      display: block;
      margin-left: 0rem;

      &:nth-child(2) {
        margin-left: 2rem;
      }

      &:nth-child(3) {
        margin-left: 4rem;
      }
    }
  }
  #logo {
    max-height: 50vh;
  }
  main {
    max-width: 70ch;
    font-size: 21pt;
    margin-inline: auto;
    text-align: center;
  }
  .icon {
    max-height: 1em;
  }
  aside {
    font-style: italic;
  }
</style>