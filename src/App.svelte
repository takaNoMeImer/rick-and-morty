<script>
    import Character from "./lib/Character.svelte";
    import Navbar from "./lib/Navbar.svelte";

    const API = "https://rickandmortyapi.com/api";
    let characters = [];
    let control = 1;

    async function loadCharacters(show) {
        const response = await fetch(`${API}/${show}/?page=${control}`);
        const data = await response.json();
        characters = data.results;
    }
    function anterior() {
        control--;
        loadCharacters("character");
    }

    function siguiente() {
        control++;
        loadCharacters("character");
    }

    loadCharacters("character");
</script>

<div>
    <Navbar />
    <div class="container">
        <div class="grid">
            {#each characters as character}
                <Character {character} />
            {/each}
        </div>

        <div class="actions">
            <input
                on:click={anterior}
                type="button"
                disabled={control === 1}
                value="Anterior"
            />
            <input on:click={siguiente} type="button" value="Siguiente" />
        </div>
    </div>
</div>

<style>
</style>
