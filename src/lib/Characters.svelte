<script lang="ts">
    import type { ICharacter } from "../types";
    import Card from "./Card.svelte";
    // import Search from "./Search.svelte";

    let character: Array<ICharacter> = [];
    let URL: string = "https://rickandmortyapi.com/api/character";
    let message: string;
    let error: boolean = false;

    async function loadCharacters(urlfetch: string) {
        const response = await fetch(urlfetch);
        if (response.status == 200) {
            const data = await response.json();
            character = data.results;
        } else {
            character = [];
        }
    }

    const changeUrlBase = (evt, next: String) => {
        evt.preventDefault();
        loadCharacters(`${URL}/?name=${next}`);
    };

    loadCharacters(URL);
    console.log(character);
</script>

<!-- <Search /> -->
<div class="search">
    <h1>Rick and Morty App</h1>
    <form on:submit={(e) => changeUrlBase(e, message)} action="">
        <div class="field">
            <p class="control has-icons-right">
                <input
                    bind:value={message}
                    class="input"
                    type="text"
                    placeholder="Search Character"
                />
                <span class="icon is-small is-right">
                    <i class="fa-solid fa-magnifying-glass" />
                </span>
            </p>
        </div>
    </form>
</div>

<div class="container-card">
    {#if character.length != 0}
        {#each character as c}
            <Card item={c} />
        {/each}
    {:else}
        <p>El personaje no existe</p>
    {/if}
</div>