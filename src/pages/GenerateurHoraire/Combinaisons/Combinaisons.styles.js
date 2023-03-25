import styled from 'styled-components';

const CombinaisonsWrapper = styled.div`
    width: 100%;
    height: 100%;

    display:flex;
    flex-direction:column;
    align-items: center;

    .combinaisons-grid {
        width: 100%;
        padding: 0 ${({ theme }) => theme.sizes.size_24};

        ${({ theme }) => theme.breakpoints.down('md')} {
            padding: 0;
        }

        ${({ theme }) => theme.breakpoints.down('sm')} {
            width: 100%;
        }

        & > .MuiGrid-item {

            max-width: 1200px;
            margin: 0 auto;

            &:not(:first-child) {
                .numero-horaire {
                    margin-top: ${({ theme }) => theme.sizes.size_24};
                }
            }

            .credits {
                margin-bottom: ${({ theme }) => theme.sizes.size_16};
            }

           .numero-horaire {


                white-space: nowrap;
                width: 16rem;
                border-bottom: ${({ theme }) => theme.sizes.size_2} solid ${({ theme }) => theme.palette.grey[900]};
           }

            & > div {
                height: 75vh;
                min-height: 30rem;
                max-height: 40rem;

                ${({ theme }) => theme.breakpoints.down('md')} {
                    height: 50vh;
                }

            }
        }

    }

    .MuiTablePagination-root {
        min-height: 4rem;
        display:flex;

        .MuiToolbar-root {
            padding: 0;
        }
    }

`;

export default CombinaisonsWrapper;
