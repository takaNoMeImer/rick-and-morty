<script lang="ts">
    import type { ILocation } from "../../types";
    import Card from "../location/Card.svelte";
    import { selectDropdown } from '../../store'

    let location : Array<ILocation> = []
    let URLLocation = "https://rickandmortyapi.com/api/location";

    const loadLocations = async (urlfetch : string) => {
        const response = await fetch(urlfetch)
        const data = await response.json();
        location = data.results;        
    }
    
    loadLocations(`${URLLocation}/?name=${$selectDropdown}`)
    console.log(location);
    
</script>
<div class="container-card">
    {#each location as l}
        <Card item={l}/>
    {/each}
</div>