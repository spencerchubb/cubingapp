<script lang="ts">
    import { type AuthCallback, _createUserWithEmailAndPassword } from "../../scripts/auth";

    export let email: string;
    export let password: string;
    export let callback: AuthCallback;
</script>

<button class="btn-primary" on:click={() => {
    if (!email || !password) {
        callback(undefined, "Please enter an email and password");
        return;
    }
    _createUserWithEmailAndPassword(email, password, callback);
}}>
    Create Account
</button>