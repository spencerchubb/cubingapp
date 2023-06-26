<script lang="ts">
    import { type AuthCallback, _signInWithEmailAndPassword, type OnError } from "../../scripts/auth";

    export let email: string;
    export let password: string;
    export let onError: OnError;
</script>

<button class="btn-primary" on:click={() => {
    if (!email || !password) {
        onError("Please enter an email and password");
        return;
    }
    _signInWithEmailAndPassword(email, password, onError);
}}>
    Login
</button>