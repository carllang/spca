import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { lightBlue, blue } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ToggleTheme from '../../components/Toggle/ThemeToggle';
import ThemeService from '../../theme/themeService';
import Modal from '../../components/Modal/Modal';

const ColorBox = styled.span`
  display:inline-block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  cursor:pointer;
`;

const SettingsWrapper = styled.div`
  width: 100%
`;

const ColourSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 25%;
`;

const Container = styled.div`
 width: 100%;
 min-width: 30%;
`;

const StyledListItem = styled(ListItem)`
  width: 30%;
`;

const SettingsContainer = () => {
  const theme = ThemeService.getTheme();
  const [toggleDarkPrimary, setToggleDarkPrimary] = useState(false);
  const [toggleDarkSecondary, setToggleDarkSecondary] = useState(false);
  const [toggleLightPrimary, setToggleLightPrimary] = useState(false);
  const [toggleLightSecondary, setToggleLightSecondary] = useState(false);

  const [darkThemeState, setDarkThemeState] = useState({
    primary: theme && theme.dark ? theme.dark.primary : blue[500],
    secondary: theme && theme.dark ? theme.dark.secondary : lightBlue[500],
  });

  const [lightThemeState, setLightThemeState] = useState({
    primary: theme && theme.light ? theme.light.primary : blue[500],
    secondary: theme && theme.light ? theme.light.secondary : lightBlue[500],
  });

  useEffect(() => {
    if (!theme) {
      ThemeService.setTheme({ dark: { ...darkThemeState }, light: { ...lightThemeState } });
    }
  }, [theme]);

  const handleDarkPrimaryChange = (color) => {
    ThemeService.setTheme({ dark: { ...darkThemeState, primary: color.hex }, light: { ...lightThemeState } });
    setDarkThemeState({ ...darkThemeState, primary: color.hex });
  };

  const handleDarkSecondaryChange = (color) => {
    ThemeService.setTheme({ dark: { ...darkThemeState, secondary: color.hex }, light: { ...lightThemeState } });
    setDarkThemeState({ ...darkThemeState, secondary: color.hex });
  };

  const handleLightPrimaryChange = (color) => {
    ThemeService.setTheme({ light: { ...lightThemeState, primary: color.hex }, dark: { ...darkThemeState } });
    setLightThemeState({ ...lightThemeState, primary: color.hex });
  };

  const handleLightSecondaryChange = (color) => {
    ThemeService.setTheme({ light: { ...lightThemeState, secondary: color.hex }, dark: { ...darkThemeState } });
    setLightThemeState({ ...lightThemeState, secondary: color.hex });
  };

  return (
    <Container>
      <SettingsWrapper>
        <List component="settings">
          <ListItem button>
            <section>
              Dark mode:
              <ToggleTheme />
            </section>
          </ListItem>
          <ListItem>
            <strong>Dark theme colours</strong>
          </ListItem>
          <StyledListItem button onClick={() => setToggleDarkPrimary(!toggleDarkPrimary)}>
            <ColourSection>
              Primary colour
              <ColorBox color={darkThemeState.primary} />
            </ColourSection>
          </StyledListItem>
          <StyledListItem button onClick={() => setToggleDarkSecondary(!toggleDarkSecondary)}>
            <ColourSection>
              Secondary colour
              <ColorBox color={darkThemeState.secondary} />
            </ColourSection>
          </StyledListItem>
          <StyledListItem>
            <strong>Light theme colours</strong>
          </StyledListItem>
          <StyledListItem button onClick={() => setToggleLightPrimary(!toggleLightPrimary)}>
            <ColourSection>
              Primary colour
              <ColorBox color={lightThemeState.primary} />
            </ColourSection>
          </StyledListItem>
          <StyledListItem button onClick={() => setToggleLightSecondary(!toggleLightSecondary)}>
            <ColourSection>
              Secondary colour
              <ColorBox color={lightThemeState.secondary} />
            </ColourSection>
          </StyledListItem>
        </List>
      </SettingsWrapper>

      <section>
        <Modal
          title="Choose 'dark' theme primary colour"
          isOpen={toggleDarkPrimary}
          openModal={() => setToggleDarkPrimary(true)}
          closeModal={() => setToggleDarkPrimary(false)}
        >
          <SketchPicker
            color={darkThemeState.primary}
            onChangeComplete={handleDarkPrimaryChange}
          />
        </Modal>

        <Modal
          title="Choose 'dark' theme secondary colour"
          isOpen={toggleDarkSecondary}
          openModal={() => setToggleDarkSecondary(true)}
          closeModal={() => setToggleDarkSecondary(false)}
        >
          <SketchPicker
            color={darkThemeState.secondary}
            onChangeComplete={handleDarkSecondaryChange}
          />
        </Modal>
        <Modal
          title="Choose 'light' theme primary theme colour"
          isOpen={toggleLightPrimary}
          openModal={() => setToggleLightPrimary(true)}
          closeModal={() => setToggleLightPrimary(false)}
        >
          <SketchPicker
            color={lightThemeState.primary}
            onChangeComplete={handleLightPrimaryChange}
          />
        </Modal>

        <Modal
          title="Choose 'light' theme secondary colour"
          isOpen={toggleLightSecondary}
          openModal={() => setToggleLightSecondary(true)}
          closeModal={() => setToggleLightSecondary(false)}
        >
          <SketchPicker
            color={lightThemeState.secondary}
            onChangeComplete={handleLightSecondaryChange}
          />
        </Modal>

      </section>
    </Container>
  );
};
export default SettingsContainer;
