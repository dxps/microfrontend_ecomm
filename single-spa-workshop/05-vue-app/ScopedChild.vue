<template>
    <div>
        <p class="with-border">
            The ScopedChild component uses global css that is susceptible to
            naming collisions.
        </p>
        <p class="with-green-bg">
            This paragraph, part of the ScopedChild component, has a distinct
            and scoped style.
        </p>
    </div>
</template>

<style scoped>
.with-border {
    border: 3px solid blue;
    font-size: 20px;
    font-family: sans-serif;
}
.with-green-bg {
    background-color: aquamarine;
    border-radius: 6px;
    font-family: sans-serif;
    padding: 10px;
}
</style>
