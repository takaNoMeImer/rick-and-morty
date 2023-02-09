<script lang="ts">
    export let status : string
</script>

{#if status === "Alive"}
    <span class="tag is-success">{status}</span>
{:else if status === "Dead"}
    <span class="tag is-danger">{status}</span>
{:else}
    <span class="tag is-warning">{status}</span>
{/if}