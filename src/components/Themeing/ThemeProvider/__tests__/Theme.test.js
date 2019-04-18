import Theme, { darkTheme } from "../index.js";
import Page from "../../Page";
import Header from "../../Header";

const checkThemeStyles = (element, styles) =>
  styles.map(({ name, prop, mod }) =>
    expect(element).toHaveStyleRule(
      `${name}`,
      `${prop}`,
      mod ? { modifier: ":hover" } : {}
    )
  );

describe("Theme Provider", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Theme>
          <Header />
          <Page title="Home" />
        </Theme>
      </MemoryRouter>
    );
  });

  afterEach(() => wrapper.unmount());

  it("renders without errors", () => {
    expect(wrapper.find("ThemeProvider")).toHaveLength(1);
  });

  describe("Light Theme", () => {
    it("renders a Dark Theme button", () => {
      const ThemeButton = wrapper.find("button").at(0);

      const themeButtonStyles = [
        { name: "color", prop: "#03a9f3" },
        { name: "background-color", prop: "#fff" },
        { name: "border-color", prop: "#03a9f3" },
        { name: "color", prop: "#0f7ae5", mod: true },
        { name: "background-color", prop: "#fff", mod: true },
        { name: "border-color", prop: "#0f7ae5", mod: true }
      ];

      checkThemeStyles(ThemeButton, themeButtonStyles);
    });

    it("renders a primary blue button Link", () => {
      const PrimaryLink = wrapper.find("Link").at(0);

      const primaryLinkStyles = [
        { name: "color", prop: "#ffffff" },
        { name: "background-color", prop: "#03a9f3" },
        { name: "border", prop: "2px solid #03a9f3" },
        { name: "color", prop: "#ffffff", mod: true },
        { name: "background-color", prop: "#0f7ae5", mod: true },
        { name: "border", prop: "2px solid transparent", mod: true }
      ];

      checkThemeStyles(PrimaryLink, primaryLinkStyles);
    });

    it("renders a danger red button Link", () => {
      const DangerLink = wrapper.find("Link").at(1);

      const dangerLinkStyles = [
        { name: "color", prop: "#ffffff" },
        { name: "background-color", prop: "#f56342" },
        { name: "border", prop: "2px solid #f56342" },
        { name: "color", prop: "#ffffff", mod: true },
        { name: "background-color", prop: "#be391c", mod: true },
        { name: "border", prop: "2px solid transparent", mod: true }
      ];

      checkThemeStyles(DangerLink, dangerLinkStyles);
    });

    it("renders a default light blue outlined button Link", () => {
      const DefaultLink = wrapper.find("Link").at(2);

      const defaultLinkStyles = [
        { name: "color", prop: "#03a9f3" },
        { name: "background-color", prop: "transparent" },
        { name: "border", prop: "2px solid #03a9f3" },
        { name: "color", prop: "#0f7ae5", mod: true },
        { name: "background-color", prop: "transparent", mod: true },
        { name: "border", prop: "2px solid #0f7ae5", mod: true }
      ];

      checkThemeStyles(DefaultLink, defaultLinkStyles);
    });
  });

  describe("Dark Theme", () => {
    beforeEach(() => {
      wrapper
        .find(Theme)
        .instance()
        .setState({ selectedTheme: darkTheme });

      wrapper.update();
    });

    it("renders a Light Theme button ", () => {
      const ThemeButton = wrapper.find("button").at(0);

      const themeButtonStyles = [
        { name: "color", prop: "#eee" },
        { name: "background-color", prop: "#353535" },
        { name: "border-color", prop: "transparent" },
        { name: "color", prop: "#eee", mod: true },
        { name: "background-color", prop: "#5a5a5a", mod: true },
        { name: "border-color", prop: "transparent", mod: true }
      ];
      checkThemeStyles(ThemeButton, themeButtonStyles);
    });

    it("renders a primary dark button Link", () => {
      const PrimaryLink = wrapper.find("Link").at(0);

      const primaryLinkStyles = [
        { name: "color", prop: "#eee" },
        { name: "background-color", prop: "transparent" },
        { name: "border", prop: "2px solid transparent" },
        { name: "color", prop: "#eee", mod: true },
        { name: "background-color", prop: "#545454", mod: true },
        { name: "border", prop: "2px solid transparent", mod: true }
      ];

      checkThemeStyles(PrimaryLink, primaryLinkStyles);
    });

    it("renders a danger purple button Link", () => {
      const DangerLink = wrapper.find("Link").at(1);

      const dangerLinkStyles = [
        { name: "color", prop: "#eee" },
        { name: "background-color", prop: "#6441a4" },
        { name: "border", prop: "2px solid #6441a4" },
        { name: "color", prop: "#eee", mod: true },
        { name: "background-color", prop: "#7d5bbe", mod: true },
        { name: "border", prop: "2px solid transparent", mod: true }
      ];

      checkThemeStyles(DangerLink, dangerLinkStyles);
    });

    it("renders a default light grey outlined button Link", () => {
      const DefaultLink = wrapper.find("Link").at(2);

      const defaultLinkStyles = [
        { name: "color", prop: "#a5a5a5" },
        { name: "background-color", prop: "transparent" },
        { name: "border", prop: "2px solid #a5a5a5" },
        { name: "color", prop: "#e4e4e4", mod: true },
        { name: "background-color", prop: "transparent", mod: true },
        { name: "border", prop: "2px solid #e4e4e4", mod: true }
      ];

      checkThemeStyles(DefaultLink, defaultLinkStyles);
    });
  });
});
