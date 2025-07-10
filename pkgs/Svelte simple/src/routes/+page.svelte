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
  <p>Discover the fun of the Tri-Cities’ <q class="parens">(of north-east Tennessee)</q> premiere makerspace — The Inventors' Center — virtually, by joining <a href="https://chat.inventors.center">our Discord <img src="Discord.svg" class="icon" alt="💬"/></a>.</p>

  <p>If you're interested in joining for the very affordable price of $35 / month, read through <a href="handbook/">the handbook</a> for all the details.</p>

  <aside>This site is a misnomer. The actual name of the organization, for reasons I've not been able to discern, is <q><a href="https://theinventorcenter.org">The Inventor Center</a></q>. I think the possessive plural fosters more of a sense of community, but it was said & done long before I arrived.</aside>
</main>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    font-family: Allegrand;
    margin-top: 5vh;
  }
  h1 {
    font-size: clamp(18pt, 24vw, 62pt);
    text-stroke: 2px #333;
    -webkit-text-stroke: 2px #CCC8;
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
    margin-top: 15vh;
  }
  .icon {
    max-height: 1em;
  }
  aside {
    font-style: italic;
  }
</style>