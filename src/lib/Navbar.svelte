<script lang="ts">
    let activeMenu : string = ""

    const changeStateNavbar = () => {
        activeMenu === "" ? activeMenu = "is-active" :
        activeMenu === "is-active" ? activeMenu = "" : activeMenu = "is-active"
    }
</script>
<!-- svelte-ignore a11y-no-redundant-roles -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img src="/icon.png" alt="Logo" />
        </a>

        <a on:click={ changeStateNavbar } role="button" class={`navbar-burger ${activeMenu}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbarBasicExample" class={`navbar-menu ${activeMenu}`}>
        <div class="navbar-end">
            <a href="/" class="navbar-item"> Characters </a>

            <!-- <a href="episodes" class="navbar-item"> Episodes </a>

            <a href="locations" class="navbar-item"> Locations </a> -->
        </div>
    </div>
</nav>

<style>
    .navbar-end .navbar-item:link{
        color: red;
    }
</style>