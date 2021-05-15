import React from "react";
import "./attributesList.css";
import { HorizontalSingleStat } from "../HorizontalSingleStat/HorizontalSingleStat";
import classNames from "classnames";

type Props = {
  title: string
  attributes: string[]
}

export function AttributesList(props: Props) {
  const attributesList = props.attributes.map((value, index) => (
    <HorizontalSingleStat statDescription={value} key={index} />));
  return (
    <div className={classNames("attributes-list_solid-border", "attributes-list_margin")}>
      <ul className="attributes-list_none-marker">
        {attributesList}
      </ul>
      <div className="component_center-align">
        {props.title}
      </div>
    </div>
  );
}
