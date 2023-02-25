<script lang="ts">
    import { type AuthCallback, _signInWithEmailAndPassword } from "../../scripts/auth";

    export let email: string;
    export let password: string;
    export let callback: AuthCallback;
</script>

<button class="btn-primary" on:click={() => {
    _signInWithEmailAndPassword(email, password, callback);
}}>
    Sign In
</button>