<script>
    import Characters from "./lib/Characters.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import { Router, Route } from 'svelte-routing';
    import Episodes from "./lib/Episodes.svelte";
    import Locations from "./lib/Locations.svelte";
</script>

<Navbar />

<main>
    <Router>
        <Route path="episodes" component="{Episodes}"/>
        <Route path="locations" component="{Locations}"/>
        <Route path="/"> <Characters/> </Route>
    </Router>
</main>
<style></style>
