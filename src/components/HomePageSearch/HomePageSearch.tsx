import "./scss/index.scss";

import * as React from "react";

import searchImg from "../../images/search.svg";

import Media from "react-media";
import { mediumScreen } from "../../globalStyles/scss/variables.scss";
import ReactSVG from "react-svg";

import {
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "..";

const HomePageSearch: React.FC = () => (
  <OverlayContext.Consumer>
    {overlayContext => (
  <div className="section-search">
    <div className="container w-container">
      <div
        className="main-menu__search"
        onClick={() =>
          overlayContext.show(OverlayType.search, OverlayTheme.modal)
        }
      >
        <Media
          query={{ minWidth: mediumScreen }}
          render={() => <span>search planet caravan</span>}
        />
        <ReactSVG path={searchImg} />
      </div>
    </div>
  </div>
      )}
      </OverlayContext.Consumer>
);

export default HomePageSearch;
