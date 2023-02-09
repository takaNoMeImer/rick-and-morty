<script lang="ts">
    let message : string;

    const showMessage = (evt) => {
        evt.preventDefault()
        alert(message)
    }
</script>

<div class="search">
    <h1>Rick and Morty App</h1>
    <form on:submit={(e) => showMessage(e)} action="">
        <div class="field">
            <p class="control has-icons-right">
                <input bind:value={message} class="input" type="text" placeholder="Buscar" />
                <span class="icon is-small is-right">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </p>
        </div>
    </form>
</div>

<style>
    .search {
        width: 70%;
        margin: 0 auto;
        margin-bottom: 2rem;
    }
    .search h1 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
</style>
