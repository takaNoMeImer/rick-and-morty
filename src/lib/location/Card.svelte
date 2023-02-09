<script lang="ts">
    import type { ICharacter } from "../../types";


    // import type { ILocationResidence } from "../../types";
    export let item : string;
    let name : string = ""

    const resident = async () => {
        const response = await fetch(item)
        const data = await response.json()
        name = data.name
        
    }
    resident()
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-img-redundant-alt -->

<div class="card">
    <div class="card-content">
        <div class="content">
            {name} <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
    </div>
</div>
