/* eslint-disable class-methods-use-this */
class ThemeService {
  setTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  getTheme() {
    return JSON.parse(localStorage.getItem('theme'));
  }

  resetTheme() {
    localStorage.removeItem('theme');
  }
}

export default new ThemeService();
