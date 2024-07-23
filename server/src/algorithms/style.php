<style>
    main {
        width: 100%;
        height: 100%;
        padding: 16px;
        display: flex;
        gap: 32px;
        overflow-y: auto;
    }

    .subsetsWideScreen {
        display: block;
        width: 250px;
        height: fit-content;
        max-height: 100%;
        position: sticky;
        top: 0;
        border: solid 1px var(--gray-500);
        padding: 8px;
        overflow-y: auto;
    }

    .subsetsNarrowScreen {
        display: none;
    }

    @media (max-width: 600px) {
        .alg-card .diagram {
            width: 60px;
            height: 60px;
        }
    }

    @media (max-width: 1000px) {
        .subsetsWideScreen {
            display: none;
        }

        .subsetsNarrowScreen {
            display: block;
            border: solid 1px var(--gray-600);
            margin: 16px 0;

            & .expandableChild {
                border-top: solid 1px var(--gray-600);
                padding: 0 1rem 12px 1rem;
            }
        }
    }

    .subsetsWideScreen, .subsetsNarrowScreen {
        a {
            display: block;
            padding-top: 12px;
            color: var(--gray-100);
            transition: all 0.15s ease-in-out;

            &:hover {
                color: var(--lightBlue-500);
            }
        }
    }

    .bodytext {
        line-height: 1.5rem;
        margin: 20px 0;
    }

    h2 {
        padding-top: 32px;
    }

    .alg-card {
        width: 100%;
        padding: 16px 0;
        border-bottom: solid 1px var(--gray-600);
        display: flex;
        justify-content: start;
        gap: 12px;

        & h3 {
            font-size: 16px;
            line-height: 22px;
        }

        & .info {
            /* flex: 1 1 500px; */
        }

        & p {
            display: flex;
            flex-wrap: wrap;
        }

        & .note {
            color: var(--gray-400);
            font-size: 14px;
            margin-left: 12px;
        }

        & .vid {
            color: var(--gray-400);
            font-size: 14px;
            background: transparent;
            padding: 0;
            margin-left: 12px;

            &:hover {
                color: var(--lightBlue-500);
            }
        }
    }

    .viz-2d-2x2, .viz-2d-3x3, .viz-2d-4x4 {
        min-width: 100px;
        width: 100px;
        height: 100px;
        display: grid;

        & > div {
            background: gray;
        }
        & > * {
            border: solid 1px black;
        }
    }

    .viz-2d-2x2 {
        grid-template-rows: 1fr 2fr 2fr 1fr;
        grid-template-columns: 1fr 2fr 2fr 1fr;
    }

    .viz-2d-3x3 {
        grid-template-rows: 2fr 3fr 3fr 3fr 2fr;
        grid-template-columns: 2fr 3fr 3fr 3fr 2fr;
    }

    .viz-2d-4x4 {
        grid-template-rows: 2fr 3fr 3fr 3fr 3fr 2fr;
        grid-template-columns: 2fr 3fr 3fr 3fr 3fr 2fr;
    }

    .viz-2x2, .viz-3x3, .viz-4x4 {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 100px;
        width: 100px;
        height: 100px;

        & > div {
            transform: rotateX(-30deg) rotateY(-30deg); transform-style: preserve-3d;
            width: 65%;
            height: 65%;

            & > div {
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;

                &:nth-child(1) {
                    transform: translateY(-50%) rotateX(90deg);
                }
                &:nth-child(2) {
                    transform: rotateX(90deg) translateY(50%) rotateX(-90deg);
                }
                &:nth-child(3) {
                    transform: translateX(50%) rotateY(90deg);
                }
            }
        }
    }

    .viz-2x2 > div > div > * {
        width: 50%;
        height: 50%;
        border: solid 1px black;
        box-sizing: border-box;
        background: gray;
    }
    .viz-3x3 > div > div > * {
        width: 33.33%;
        height: 33.33%;
        border: solid 1px black;
        box-sizing: border-box;
        background: gray;
    }

    .viz-sq1 {
        display: flex;

        & svg {
            width: 100px;
            height: 100px;
            stroke: black;
        }
    }

    video {
        max-width: 400px;
        max-height: 400px;
        width: 100%;
    }

    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
</style>