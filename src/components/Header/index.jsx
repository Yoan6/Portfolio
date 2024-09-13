import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { PageContext } from "../../utils/context";

const HeaderWrap = styled.header`
  border: 1px white solid;
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
`;

const StyledLink = styled(Link)`
    padding: 10px 0;
    width: 180px;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: black;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: blueviolet;
        color: white;
    }

    &.active {
        background-color: blueviolet;
        color: white;
    }

    &:first-child {
        border-radius: 20px 0 0 20px;
    }

    &:last-child {
        border-radius: 0 20px 20px 0;
    }
`;

function Header() {
    const { page, changePage } = useContext(PageContext);

    return (
        <HeaderWrap>
            <StyledLink
                to="/"
                className={page === 'home' ? 'active' : ''}
                onClick={() => changePage('home')}
            >
                Accueil
            </StyledLink>
            <StyledLink
                to="/skills"
                className={page === 'skills' ? 'active' : ''}
                onClick={() => changePage('skills')}
            >
                Compétences
            </StyledLink>
            <StyledLink
                to="/formations"
                className={page === 'formations' ? 'active' : ''}
                onClick={() => changePage('formations')}
            >
                Formation
            </StyledLink>
            <StyledLink
                to="/projets"
                className={page === 'projets' ? 'active' : ''}
                onClick={() => changePage('projets')}
            >
                Projets
            </StyledLink>
        </HeaderWrap>
    );
}

export default Header;
