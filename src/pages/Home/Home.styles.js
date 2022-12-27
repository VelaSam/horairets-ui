import styled from 'styled-components';

const HomeWrapper = styled.div`
    display:flex;
    flex-direction: row;
    height:100%;
    overflow: hidden;
    .left {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: ${({ theme }) => theme.sizes.size_64};
        flex:2;

        
        .body-bienvenue {
            color: ${({ theme }) => theme.palette.primary.main};
            text-shadow: ${({ theme }) => theme.shadows.main};
        }

        .body-horairets {
            margin-top: ${({ theme }) => theme.sizes.size_32};
            font-size: 12vw;
            height: auto;
            display:flex;
            flex-direction:column;
            align-items: center;
            text-align: center;

            .horairets-wrapper {
                width: fit-content;
            }

            .horairets-animated-text {
                font-family: "Fugaz One"
            }
            .ets {
                font-family: "Fugaz One";
                color: ${({ theme }) => theme.palette.primary.ets};
            }

            .text-shadow {
                position:absolute;
                font-family: "Fugaz One";
                text-shadow: black 0.5vw 1.5vw 1vw;
                color: transparent;
                z-index: -1;
            }

            .description {
                color: ${({ theme }) => theme.palette.primary.dark};
                margin-top: -4vw;
                font-size: 2vw;
                text-align: justify;
                width:100%;
                text-shadow: black 0.25vw 0.25vw 0.5vw;
            }

        }

        .btn-wrapper {
            width:100%;
            display:flex;
            flex-direction: row;
            align-items: flex-start;
            margin-top: ${({ theme }) => theme.sizes.size_16};

            .horairets-animated-background {
                font-family: "Fugaz One";
            }

            .btn-rejoins-discord {
                margin-left: ${({ theme }) => theme.sizes.size_16};
            }

        }

    }

    .right {
        flex:1;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:flex-start;
        .logo-horairets {
            margin-top: ${({ theme }) => theme.sizes.size_64}
        }

    }

`;

export default HomeWrapper;