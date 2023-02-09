<script lang="ts">
    import type { ILocation } from "../types";

    let location: Array<ILocation> = [];
    let locationCard : string[] = [];
    let activeDropdown = "";
    import { selectDropdown } from '../store'
    let URLLocation = "https://rickandmortyapi.com/api/location";

    import Card from "./location/Card.svelte"

    async function loadLocations() {
        const response = await fetch(
            "https://rickandmortyapi.com/api/location"
        );
        const data = await response.json();
        location = data.results;
        $selectDropdown = location[0].name
    }

    const loadLocationsCard = async (urlfetch : string) => {
        const response = await fetch(urlfetch)
        const data = await response.json();
        locationCard = data.results[0].residents;                
    }

    const changeStateDropdown = () => {
        activeDropdown === ""
            ? (activeDropdown = "is-active")
            : activeDropdown === "is-active"
            ? (activeDropdown = "")
            : (activeDropdown = "is-active");
    };

    const changeSelectLocation = (newSelect: string) => {
        $selectDropdown = newSelect;
        loadLocationsCard(`${URLLocation}/?name=${$selectDropdown}`)
    }

    loadLocations();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="container-dropdown">
    <div on:click={changeStateDropdown} class={`dropdown ${activeDropdown}`}>
        <div class="dropdown-trigger">
            <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
            >
                <span>{$selectDropdown}</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true" />
                </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                {#each location as l}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a
                        on:click={() => changeSelectLocation(l.name)}
                        class={`dropdown-item`}>{l.name}</a
                    >
                {/each}
            </div>
        </div>
    </div>
</div>

<!-- <LocationContainer /> -->
<div class="container-card">
    {#each locationCard as l}
        <Card item={l}/>
    {/each}
</div>

<style>
    .container-dropdown {
        width: 70%;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
    .dropdown {
        width: 100%;
        margin: 0 auto;
    }
    .dropdown-trigger, .button {
        width: 100%;
    }
</style>
