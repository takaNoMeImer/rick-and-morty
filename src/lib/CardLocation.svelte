<script lang="ts">
    import type { ICharacter } from "../types";
    import Status from "./Status.svelte";
    export let item: ICharacter;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-img-redundant-alt -->

<div class="card">
    <div class="card-image">
        <figure class="image is-square">
            <img src={`${item.image}`} />
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                    <img src={`${item.image}`} />
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{item.name}</p>
                <p class="subtitle is-6"> <Status status={item.status}/> </p>
            </div>
        </div>

        <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
    </div>
</div>
