import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;

  header {
    height: 200px;
    background: ${(props) => props.theme.colors['gray-900']};
  }

  .header-box,
  main {
    max-width: 1144px;
  }

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: auto;
    padding: 3.5rem 1.5rem;

    img {
      object-fit: contain;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${(props) => props.theme.colors['green-500']};
      color: ${(props) => props.theme.colors.white};

      padding: 0.75rem 1.25rem;
      border-radius: 6px;

      font-weight: 700;
      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors['green-300']};
      }
    }
  }

  main {
    padding: 0rem 1.5rem;
    margin: -2.5rem 0;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    overflow: hidden;

    // Lista dos Cards de transações //
    .card-list {
      display: flex;
      gap: 2rem;
    }
  }

  // Breakpoint //
  @media (min-width: 1144px) {
    .header-box {
      padding: 2.5rem 0;
    }
  }
`
