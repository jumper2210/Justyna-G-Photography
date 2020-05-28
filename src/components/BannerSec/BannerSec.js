import React from "react";
import "./BannerSec.scss";
import "../../sass/_typography.scss";
import { Parallax } from "react-parallax";
import picture from "../../assets/images/banner_small.jpg";
const BannerSec = (props) => {
  return (
    <section className="bannerSec" id="banner">
      <Parallax className="bannerSec__pic" bgImage={picture} strength={500} />
      <span className="bannerSec__overlay" />
    </section>
  );
};

export default React.memo(BannerSec);