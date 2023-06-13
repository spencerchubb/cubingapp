<script lang="ts">
    import type { CubingAppUser } from "../../scripts/auth";

    import ButtonCreateAccount from "./ButtonCreateAccount.svelte";
    import ButtonGoogleSignIn from "./ButtonGoogleSignIn.svelte";
    import ButtonSignIn from "./ButtonSignIn.svelte";
    import InputEmail from "./InputEmail.svelte";
    import InputPassword from "./InputPassword.svelte";

    export let onSignIn: (user: CubingAppUser) => void;
    
    let email = "";
    let password = "";
</script>

<div class="col">
    <ButtonGoogleSignIn callback={onSignIn} />
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
    <div style="height: 32px;" />
    <div class="row" style="gap: 16px;">
        <ButtonCreateAccount
            {email}
            {password}
            callback={onSignIn}
        />
        <ButtonSignIn
            {email}
            {password}
            callback={onSignIn}
        />
    </div>
</div>