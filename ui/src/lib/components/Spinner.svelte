<div class="spinner">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
</div>

<style>
    .spinner {
        width: 80px;
        height: 80px;
    }
    .spinner div {
        transform-origin: 40px 40px;
        animation: spinner 0.9s linear infinite;
    }
    .spinner div:after {
        content: " ";
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: #fff;
    }
    .spinner div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -0.8s;
    }
    .spinner div:nth-child(2) {
        transform: rotate(40deg);
        animation-delay: -0.7s;
    }
    .spinner div:nth-child(3) {
        transform: rotate(80deg);
        animation-delay: -0.6s;
    }
    .spinner div:nth-child(4) {
        transform: rotate(120deg);
        animation-delay: -0.5s;
    }
    .spinner div:nth-child(5) {
        transform: rotate(160deg);
        animation-delay: -0.4s;
    }
    .spinner div:nth-child(6) {
        transform: rotate(200deg);
        animation-delay: -0.3s;
    }
    .spinner div:nth-child(7) {
        transform: rotate(240deg);
        animation-delay: -0.2s;
    }
    .spinner div:nth-child(8) {
        transform: rotate(280deg);
        animation-delay: -0.1s;
    }
    .spinner div:nth-child(9) {
        transform: rotate(320deg);
        animation-delay: 0s;
    }
    @keyframes spinner {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>
