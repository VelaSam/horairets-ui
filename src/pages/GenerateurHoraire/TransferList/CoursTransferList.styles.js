import styled from 'styled-components';

const CoursTransferListWrapper = styled.div`

    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    .selection-list {
        
        width: 40%;
        
        & > * {
            width: 100%;
        }

        .MuiList-root {
            height: ${({ theme }) => theme.sizes.size_160};
            overflow-y: auto;
        }

    }

    .swap-icon {
        align-self: center;
    }


`;

export default CoursTransferListWrapper;