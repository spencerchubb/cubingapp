<script lang="ts">
    import type { CubingUser } from "../../scripts/auth";

    import ButtonCreateAccount from "./ButtonCreateAccount.svelte";
    import ButtonGoogleSignIn from "./ButtonGoogleSignIn.svelte";
    import ButtonSignIn from "./ButtonSignIn.svelte";
    import InputEmail from "./InputEmail.svelte";
    import InputPassword from "./InputPassword.svelte";

    export let onSignIn: (user: CubingUser) => void;

    let email = "";
    let password = "";
    let error: string | undefined;

    function _onSignIn(user: CubingUser, _error?: string) {
        error = _error;
        if (user) onSignIn(user);
    }
</script>

<div class="col">
    <ButtonGoogleSignIn callback={_onSignIn} />
    <div style="height: 16px;" />
    <div
        style="width: 100%; height: 2px; background-color: var(--gray-600);"
    />
    <div style="height: 16px;" />
    <p>Or use email and password</p>
    <div style="height: 12px;" />
    <InputEmail bind:value={email} />
    <div style="height: 16px;" />
    <InputPassword bind:value={password} />
    <div style="height: 24px;" />
    <div class="row" style="gap: 16px;">
        <ButtonCreateAccount
            {email}
            {password}
            callback={_onSignIn}
        />
        <ButtonSignIn
            {email}
            {password}
            callback={_onSignIn}
        />
    </div>
    {#if error}
        <div style="height: 16px;" />
        <p style="color: var(--red-600); text-align: center;
        background: var(--gray-900);
        border-radius: 8px;
        padding: 4px;">{error}</p>
    {/if}
</div>