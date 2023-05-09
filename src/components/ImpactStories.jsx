import { React, useState } from "react";
import items from "./allData";
import ImpactStoriesMenu from "./ImpactStoriesMenu";

export default function ImpactStories() {
  const [menuItem, setMenuItem] = useState(items);

  return (
    <div className="ImpactStoriesSection">
      <h2 className="ImpactStoriesTitle">Impact Stories</h2>
      <br />
      {/* <ImpactStoriesMenu menuItem={menuItem} /> */}
      <br/>
      <p style={{textAlign: "center", color: "red"}}>Check back soon for Impact Stories!</p>
      <br/>   <br/>   <br/>
    </div>
  );
}
