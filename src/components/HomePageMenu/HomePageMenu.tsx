import "./scss/index.scss";

import * as React from "react";

import { TypedMainMenuQuery } from "./queries";
import { maybe } from "@temp/core/utils";
import { mediumScreen } from "@temp/globalStyles/scss/variables.scss";
import NavDropdown from "@temp/components/MainMenu/NavDropdown";
import Media from "react-media";

import {
  MenuDropdown,
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "..";

const HomePageMenu: React.FC = () => {

  return (
    <OverlayContext.Consumer>
      {overlayContext => (
        <TypedMainMenuQuery renderOnError displayLoader={false}>
      {({ data }) => {
        const items = maybe(() => data.shop.navigation.main.items, []);
        return (
        <ul className="home-menu__ul">
        <Media
          query={{ minWidth: mediumScreen }}
          render={() =>
            items.map(item => (
              <li
                data-cy="main-menu__item"
                className="main-menu__item"
                key={item.id}
              >
              <NavDropdown overlay={overlayContext} {...item} />
              </li>
            ))
          }
        />
        </ul>
        );
      }}
    </TypedMainMenuQuery>
      )}
      </OverlayContext.Consumer>
  );
}

export default HomePageMenu;
