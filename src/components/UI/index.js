import styled from '@emotion/styled';
// ------------------------------------------------|
// Navigation Components ==========================|
// ================================================|
// Horizontal Top Navbar --------------------------|
export const TopNav = styled.div`
  position: fixed;
  width: 100%;
  min-width: 100vw;
  height: 3rem;
  box-shadow: 0 3px 6px #333;
  background: #ffffff;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  a {
    padding: 0 1.2rem;
    font-size: 18px;
    line-height: 28px;
    color: #555;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
      color: #2d3b4f;
    }
  }
`;
// ================================================|
// Nav Burger -------------------------------------|
export const NavBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 15;
  align-self: flex-end;
  margin-right: 1rem;
  &:focus {
    outline: none;
  }

  &:hover {
    div {
      background: #2d3b4f;
    }
  }

  div {
    width: 2rem;
    height: 0.25rem;
    margin: 0.2rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
// ================================================|
// Burger Menu ------------------------------------|
export const BurgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: absolute;
  z-index: 10;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100%)'};

  a {
    text-transform: uppercase;
    padding: 2rem 0;
    font-size: 2rem;
    letter-spacing: 0.5rem;
    font-weight: bold;
    line-height: 28px;
    color: #454a4d;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color 0.3s linear;
  }

  button {
    border: none;
    background: #ffffff;
  }
`;
