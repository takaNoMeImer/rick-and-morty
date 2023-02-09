<script lang="ts">

    let episode;
    async function loadEpisodes() {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        episode = data.results;
    }
    loadEpisodes();
    console.log(episode);
</script>

<div class="container-card">
    {#each episode as c}
        <p>{c.name}</p>
    {/each}
</div>
